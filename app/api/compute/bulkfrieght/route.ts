import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, { params }: any) {
  try {
    const body = await request.json();
    console.log("Received body:", body);

    const apiKey = "Bearer EE.O45AYXQ-AJFENCA-WS4CRSY-GZRRZRA"; // Your API key
    const headers = {
      Authorization: apiKey,
      "Content-Type": "application/json",
    };

    const results: any = [];

    for (const item of body) {
      const {
        source_city,
        source_country,
        transport_mode,
        vehicle_type,
        destination_city,
        destination_country,
        weight,
        weight_unit,
        category,
        fuel_source,
        load_type,
        vehicle_weight,
        aircraft_type,
        destination_iata,
        source_iata,
        methodology,
        distance_km,
        fuel_type,
        ...intermediateLocations
        // ...intermediate_locode
      } = item;

      console.log(intermediateLocations);

      // const intermediateLocation = [
      //   {
      //     intermediate_city,
      //     intermediate_country,
      //   },
      // ];

      // {
      //   Name: 'jjnasasc',
      //   sector: 'Transport',
      //   scope: 'Scope-1',
      //   intermediate_city_1: 'Driouch',
      //   intermediate_country_1: 'Morocco',
      //   intermediate_city_2: 'Dar Bouazza',
      //   intermediate_country_2: 'Morocco',
      //   vehicle_type_1: 'hgv_articulated_refrigerated',
      //   fuel_source_1: 'diesel_5_percent_biodiesel_blend',
      //   load_type_1: 'na',
      //   vehicle_weight_1: 'gt_40t_lt_44t'
      // }

      console.log(category);

      let route: any = [];
      if (category === "Road Freight") {
        route = [
          {
            location: {
              query: source_city,
              country: source_country,
            },
          },
          {
            transport_mode: transport_mode,
            leg_details: {
              vehicle_type: vehicle_type,
              vehicle_weight: vehicle_weight,
              fuel_source: fuel_source,
              load_type: load_type,
            },
          },
          ...Object.keys(intermediateLocations)
            .filter(
              (key) =>
                key.startsWith("intermediate_city") ||
                key.startsWith("vehicle_type") ||
                key.startsWith("fuel_source") ||
                key.startsWith("load_type") ||
                key.startsWith("vehicle_weight")
            )
            .map((key, index) => {
              console.log(index);
              if (index >= 1) {
                return;
              }
              const suffix = 0;

              // if (!suffix) return null;

              const city =
                intermediateLocations[`intermediate_city_${suffix + 1}`];
              const country =
                intermediateLocations[`intermediate_country_${suffix + 1}`];
              const vehicle_type =
                intermediateLocations[`vehicle_type_${suffix + 1}`];
              const fuel_source =
                intermediateLocations[`fuel_source_${suffix + 1}`];
              const load_type =
                intermediateLocations[`load_type_${suffix + 1}`];
              const vehicle_weight =
                intermediateLocations[`vehicle_weight_${suffix + 1}`];

              console.log({
                city,
                country,
                vehicle_type,
                fuel_source,
                load_type,
                vehicle_weight,
              });

              return [
                {
                  location: {
                    query: city,
                    country: country,
                  },
                },
                {
                  transport_mode: transport_mode,
                  leg_details: {
                    vehicle_type: vehicle_type,
                    vehicle_weight: vehicle_weight,
                    fuel_source: fuel_source,
                    load_type: load_type,
                  },
                },
              ];
            })
            .flat(),
          {
            location: {
              query: destination_city,
              country: destination_country,
            },
          },
        ].filter((item) => item != null);
      } else if (category === "Sea Freight") {
        route = [
          {
            location: {
              locode: source_city,
            },
          },
          {
            transport_mode: transport_mode,
            leg_details: {
              vessel_type: "oil_tanker",
              tonnage: "lt_5dwkt",
              fuel_source: "mgo",
              load_type: "heavy",
            },
          },
          ...Object.keys(intermediateLocations)
            .filter((key) => key.startsWith("intermediate_locode"))
            .map((key, index) => {
              const locode = intermediateLocations[key];
              console.log(locode);
              // const country = intermediateLocations[`intermediate_country_${index + 1}`];
              return [
                {
                  location: {
                    locode: locode,
                  },
                },
                {
                  transport_mode: transport_mode,
                  leg_details: {
                    vessel_type: "bulk_carrier_ignition_ship",
                    tonnage: "gt_100dwkt",
                    fuel_source: "lng",
                    load_type: "heavy",
                  },
                },
              ];
            })
            .flat(),
          {
            location: {
              locode: destination_city,
            },
          },
        ];
      } else if (category === "Air Freight") {
        route = [
          {
            location: {
              iata: source_iata,
            },
          },
          {
            transport_mode: transport_mode,
            leg_details: {
              aircraft_type: aircraft_type,
              methodology: methodology,
            },
          },
          ...Object.keys(intermediateLocations)
            .filter((key) => key.startsWith("intermediate_iata"))
            .map((key, index) => {
              if (index >= 1) {
                return;
              }
              console.log(index);
              const iata = intermediateLocations[key];
              // const country = intermediateLocations[`intermediate_country_${index + 1}`];
              return [
                {
                  location: {
                    iata: iata,
                  },
                },
                {
                  transport_mode: transport_mode,
                  leg_details: {
                    aircraft_type: aircraft_type,
                    methodology: methodology,
                  },
                },
              ];
            })
            .flat(),
          {
            location: {
              iata: destination_iata,
            },
          },
        ];
      } else if (category === "Rail Freight") {
        route = [
          {
            location: {
              query: source_city,
              country: source_country,
            },
          },
          {
            transport_mode: transport_mode,
            leg_details: {
              fuel_type: fuel_type,
              load_type: load_type,
            },
          },
          ...Object.keys(intermediateLocations)
            .filter(
              (key) =>
                key.startsWith("intermediate_city") ||
                key.startsWith("fuel_type") ||
                key.startsWith("transport_mode") ||
                key.startsWith("load_type")
            )
            .map((key, index) => {
              console.log(index);
              if (index >= 1) {
                return;
              }
              const suffix = 0;

              // if (!suffix) return null;

              const city =
                intermediateLocations[`intermediate_city_${suffix + 1}`];
              const country =
                intermediateLocations[`intermediate_country_${suffix + 1}`];
              const fuel_type =
                intermediateLocations[`fuel_type_${suffix + 1}`];
              console.log(fuel_type);
              const transport_mode =
                intermediateLocations[`transport_mode_${suffix + 1}`];
              const load_type =
                intermediateLocations[`load_type_${suffix + 1}`];
              // const vehicle_weight = intermediateLocations[`vehicle_weight_${suffix + 1}`];

              console.log({
                city,
                country,
                vehicle_type,
                fuel_source,
                load_type,
                vehicle_weight,
                fuel_type,
              });

              return [
                {
                  location: {
                    query: city,
                    country: country,
                  },
                },
                {
                  transport_mode: transport_mode,
                  leg_details: {
                    fuel_type: fuel_type,
                    load_type: load_type,
                  },
                },
              ];
            })
            .flat(),
          {
            location: {
              query: destination_city,
              country: destination_country,
            },
          },
        ].filter((item) => item != null);
      }

      // const postData = JSON.stringify({
      //   route: route,
      //   cargo: {
      //     weight: Number(weight),
      //     weight_unit: weight_unit,
      //   },
      //   audit_trail: "enabled",
      // });

      let postData;

      if (category === "Rail Freight") {
        postData = JSON.stringify({
          route: route,
          cargo: {
            weight: Number(weight),
            weight_unit: weight_unit,
          },
          distance_km: distance_km,
          audit_trail: "enabled",
        });
      } else {
        postData = JSON.stringify({
          route: route,
          cargo: {
            weight: Number(weight),
            weight_unit: weight_unit,
          },
          audit_trail: "enabled",
        });
      }

      console.log("Sending data:", postData);

      const res = await fetch(
        "http://beta.api.earthemission.com/freight/intermodal",
        {
          method: "POST",
          body: postData,
          headers: headers,
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error Response:", errorText);
        throw new Error(`Failed to fetch data: ${res.status} ${errorText}`);
      }

      const responseData = await res.json();
      console.log(responseData);
      const region = responseData.route[1].estimates.emission_factor.region;
      console.log(region);
      const year = responseData.route
        .filter(
          (item: any) =>
            item.type === "leg" &&
            item.estimates &&
            item.estimates.emission_factor
        )
        .map((item: any) => item.estimates.emission_factor.year)[0];

      const result = {
        ...item,
        co2e: responseData.co2e,
        co2e_unit: responseData.co2e_unit,
        co2e_calculation_method: responseData.co2e_calculation_method,
        co2e_calculation_origin: responseData.co2e_calculation_origin,
        activity_data: responseData.activity_data,
        audit_trail: responseData.audit_trail,
        year: year,
        region: region,
      };

      console.log(result);

      results.push(result);
    }

    return NextResponse.json(results);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.error();
  }
}
