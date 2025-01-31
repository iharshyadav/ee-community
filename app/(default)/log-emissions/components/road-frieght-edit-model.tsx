"use client";

import { FC, useState, useEffect, useContext } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Autocomplete,
  AutocompleteItem,
  Tooltip,
} from "@nextui-org/react";
import { upadateCo2eEmissions } from "@/app/lib/actions";
import { ScopeContext } from "@/app/(context)/ScopeContext";

interface EditModelProps {
  isOpen: boolean;
  co2emission: any;
  onClose: () => void;
}

const RoadFrieghtEditModel: FC<EditModelProps> = ({
  isOpen,
  co2emission,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [sourceCity, setSourceCity] = useState("");
  const [sourceIata, setSourceIata] = useState("");
  const [sourceCountry, setSourceCountry] = useState("");
  const [intermediateCity, setIntermediateCity] = useState<string[]>([]);
  const [intermediateCountry, setIntermediateCountry] = useState<string[]>([]);
  const [destinationCity, setDestinationCity] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [transportMode, setTransportMode] = useState("");
  const [transportVehicle, setTransportVehicle] = useState("");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("");
  const [scope, setScope] = useState("");
  const [sector, setSector] = useState("");
  const [category, setCategory] = useState("");
  const [vessel_type, setVesselType] = useState("");
  const [fuel_type, setFuelType] = useState("");
  const [destination_iata, setDestination_iata] = useState("");
  const [intermediateLocode, setIntermediateLocode] = useState<
    { locode: string }[]
  >([
    {
      locode: "",
    },
  ]);
  const [intermediateIata, setIntermediateIata] = useState<{ iata: string }[]>([
    {
      iata: "",
    },
  ]);
  const [aircraft_type, setAircraftType] = useState("");

  const editdata = co2emission;

  const { isFormValid, setIsFormValid, setToggleSkeloton } =
    useContext(ScopeContext);

  useEffect(() => {
    let isValid = true;

    if (category === "Road Freight") {
      if (
        !sourceCity ||
        !sourceCountry ||
        intermediateCity.some((item) => !item) ||
        intermediateCountry.some((item) => !item) ||
        !destinationCity ||
        !destinationCountry ||
        !transportMode ||
        !transportVehicle ||
        !weight ||
        !weightUnit
      ) {
        isValid = false;
      }
    }
    setIsFormValid(isValid);
  }, [
    category,
    sourceCity,
    intermediateCity,
    intermediateCountry,
    destinationCity,
    destinationCountry,
    transportMode,
    transportVehicle,
    weight,
    weightUnit,
    sourceCountry,
  ]);

  useEffect(() => {
    if (editdata && editdata.requestbody) {
      console.log(editdata.requestbody, "harsh");
      console.log(editdata);
      const routeData = editdata.requestbody.route;
      console.log(editdata.Name, routeData);
      console.log(category);
      if (routeData != undefined) {
        //  console.log(editdata.requestbody)
        if (editdata.category === "Road Freight") {
          const locationDetails = routeData
            .filter((item: any) => item.location)
            .map((item: any) => ({
              query: item.location.query,
              country: item.location.country,
            }));

          const intermediateLocation = locationDetails.filter(
            (item: any, index: number) =>
              index !== 0 && index !== locationDetails.length - 1
          );

          // console.log(intermediateLocation);
          // console.log(editdata)
          setName(editdata.Name);
          setSourceCity(locationDetails[0].query);
          setCategory(editdata.category);
          setSourceCountry(locationDetails[0].country);
          if (intermediateLocation.length >= 1) {
            setIntermediateCity((prev) => [
              ...intermediateLocation.map((item: any) => item.query),
            ]);
            setIntermediateCountry((prev) => [
              ...intermediateLocation.map((item: any) => item.country),
            ]);

            // console.log(intermediateCity , intermediateCountry)
          }
          setDestinationCity(locationDetails[locationDetails.length - 1].query);
          setDestinationCountry(
            locationDetails[locationDetails.length - 1].country
          );
          setTransportMode(editdata.requestbody.route[1].transport_mode);
          setTransportVehicle(
            editdata.requestbody.route[1].leg_details.vehicle_type
          );
          setWeight(editdata.requestbody.cargo.weight);
          setWeightUnit(editdata.requestbody.cargo.weight_unit);
          setScope(editdata.Label);
          setSector(editdata.sector);
        } else if (editdata.category === "Sea Freight") {
          // console.log("first")
          console.log(editdata);
          setName(editdata.Name);
          setCategory(editdata.category);
          setWeight(editdata.requestbody.cargo.weight);
          setWeightUnit(editdata.requestbody.cargo.weight_unit);
          setScope(editdata.Label);
          setSector(editdata.sector);
          setTransportMode(editdata.requestbody.route[1].transport_mode);

          const locationDetails = routeData
            .filter((item: any, index: number) => item.location)
            .map((item: any) => ({
              locode: item.location.locode,
              // country: item.location.country
            }));

          const intermediateLocation = locationDetails.filter(
            (item: any, index: number) =>
              index !== 0 && index !== locationDetails.length - 1
          );

          setIntermediateLocode(intermediateLocation);

          console.log(intermediateLocation.map((item: any) => item.locode));

          setSourceCity(locationDetails[0].locode);
          setVesselType(editdata.requestbody.route[1].leg_details.vessel_type);
          setDestinationCity(
            locationDetails[locationDetails.length - 1].locode
          );
        } else if (editdata.category === "Air Freight") {
          console.log(editdata);
          setName(editdata.Name);
          setCategory(editdata.category);
          setWeight(editdata.requestbody.cargo.weight);
          setWeightUnit(editdata.requestbody.cargo.weight_unit);
          setScope(editdata.Label);
          setSector(editdata.sector);
          setTransportMode(editdata.requestbody.route[1].transport_mode);

          const locationDetails = routeData
            .filter((item: any) => item.location)
            .map((item: any) => ({
              iata: item.location.iata,
            }));

          console.log(locationDetails);

          const intermediateLocation = locationDetails.filter(
            (item: any, index: number) =>
              index !== 0 && index !== locationDetails.length - 1
          );

          console.log(intermediateLocation);

          setIntermediateIata(intermediateLocation);

          // console.log(intermediateLocation.map((item: any) => item.iata))

          setSourceIata(locationDetails[0].iata);
          setAircraftType(
            editdata.requestbody.route[1].leg_details.aircraft_type
          );
          setDestination_iata(locationDetails[locationDetails.length - 1].iata);
        } else if (editdata.category === "Rail Freight") {
          const locationDetails = routeData
            .filter((item: any) => item.location)
            .map((item: any) => ({
              query: item.location.query,
              country: item.location.country,
            }));

          const intermediateLocation = locationDetails.filter(
            (item: any, index: number) =>
              index !== 0 && index !== locationDetails.length - 1
          );

          // console.log(intermediateLocation);
          // console.log(editdata)
          setName(editdata.Name);
          setSourceCity(locationDetails[0].query);
          setCategory(editdata.category);
          setSourceCountry(locationDetails[0].country);
          if (intermediateLocation.length >= 1) {
            setIntermediateCity((prev) => [
              ...intermediateLocation.map((item: any) => item.query),
            ]);
            setIntermediateCountry((prev) => [
              ...intermediateLocation.map((item: any) => item.country),
            ]);

            // console.log(intermediateCity , intermediateCountry)
          }
          setDestinationCity(locationDetails[locationDetails.length - 1].query);
          setDestinationCountry(
            locationDetails[locationDetails.length - 1].country
          );
          setTransportMode(editdata.requestbody.route[1].transport_mode);
          setTransportVehicle(
            editdata.requestbody.route[1].leg_details.vehicle_type
          );
          setWeight(editdata.requestbody.cargo.weight);
          setWeightUnit(editdata.requestbody.cargo.weight_unit);
          setScope(editdata.Label);
          setFuelType(editdata.requestbody.route[1].leg_details.fuel_type);
          setSector(editdata.sector);
        }
      } else {
        console.log(editdata);
        setName(editdata.requestbody.Name);
        setSourceCity(editdata.requestbody.source_city);
        setSourceIata(editdata.requestbody.source_iata);
        setDestination_iata(editdata.requestbody.destination_iata);
        setCategory(editdata.requestbody.category);
        setSourceCountry(editdata.requestbody.source_country);
        setDestinationCity(editdata.requestbody.destination_city);
        setDestinationCountry(editdata.requestbody.destination_country);
        setTransportMode(editdata.requestbody.transport_mode);
        setTransportVehicle(editdata.requestbody.vehicle_type);
        setWeight(editdata.requestbody.weight);
        setWeightUnit(editdata.requestbody.weight_unit);
        setScope(editdata.requestbody.scope);
        setSector(editdata.requestbody.sector);
        setVesselType(editdata.requestbody.vessel_type);
        setFuelType(editdata.requestbody.fuel_type);

        const intermediateCities = [];
        const intermediateCountries = [];
        if (category === "Road Freight") {
          for (
            let i = 1;
            i <=
            Object.keys(editdata.requestbody).filter((key) =>
              key.startsWith("intermediate_city_")
            ).length;
            i++
          ) {
            intermediateCities.push(
              editdata.requestbody[`intermediate_city_${i}`]
            );
            intermediateCountries.push(
              editdata.requestbody[`intermediate_country_${i}`]
            );
          }
          setIntermediateCity(intermediateCities);
          setIntermediateCountry(intermediateCountries);
        } else if (category === "Sea Freight") {
          for (
            let i = 1;
            i <=
            Object.keys(editdata.requestbody).filter((key) =>
              key.startsWith("intermediate_locode_")
            ).length;
            i++
          ) {
            intermediateCities.push(
              editdata.requestbody[`intermediate_locode_${i}`]
            );
          }
          const addLocode = intermediateCities.map((item) => {
            return { locode: item };
          });
          setIntermediateLocode(addLocode);
        } else if (category === "Air Freight") {
          for (
            let i = 1;
            i <=
            Object.keys(editdata.requestbody).filter((key) =>
              key.startsWith("intermediate_iata_")
            ).length;
            i++
          ) {
            intermediateCities.push(
              editdata.requestbody[`intermediate_iata_${i}`]
            );
          }

          const addIata = intermediateCities.map((item) => {
            return { iata: item };
          });
          // console.log(addIata)
          setIntermediateIata(addIata);
        }
      }
    }
  }, [editdata]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let postData = null;

      // console.log(intermediateCity,"harshh")

      if (sector === "Transport" && category === "Road Freight") {
        const route = [
          {
            location: {
              query: sourceCity,
              country: sourceCountry,
            },
          },
          {
            transport_mode: transportMode,
            leg_details: {
              vehicle_type: transportVehicle,
              vehicle_weight: "gt_20t_lt_26t",
              fuel_source: "lng",
              load_type: "na",
            },
          },

          ...intermediateCity?.flatMap((item, index) => [
            {
              location: {
                query: item,
                country: intermediateCountry[index],
              },
            },
            {
              transport_mode: transportMode,
              leg_details: {
                vehicle_type: "hgv_articulated_refrigerated",
                vehicle_weight: "gt_40t_lt_44t",
                fuel_source: "diesel_5_percent_biodiesel_blend",
                load_type: "na",
              },
            },
          ]),

          {
            location: {
              query: destinationCity,
              country: destinationCountry,
            },
          },
        ];

        postData = JSON.stringify({
          route: route,
          cargo: {
            weight: weight,
            weight_unit: weightUnit,
          },
          audit_trail: "enabled",
        });
      }

      // console.log(intermediateCity)
      // console.log(postData)

      setToggleSkeloton(true);

      const response = await fetch("/api/compute/freight/intermodal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: postData,
      });

      const responsedata = await response.json();

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // console.log(responsedata,"ddurhvuef");
      const year =
        responsedata.responsedata.route[1].estimates.emission_factor.year;
      const region =
        responsedata.responsedata.route[1].estimates.emission_factor.region;
      const co2e = responsedata.responsedata.co2e;
      const co2e_unit = responsedata.responsedata.co2e_unit;
      let requestData = postData && JSON.parse(postData);
      await upadateCo2eEmissions({
        Name: name,
        sector: sector,
        category: category,
        year: year,
        region: region,
        co2e_unit: co2e_unit,
        co2e: co2e, // Pass CO2e value to addCo2eEmissions
        requestbody: requestData,
        responsebody: responsedata,
        scope,
      });
      setToggleSkeloton(false);
      onClose();
    } catch (error) {
      // console.error("Error updating emission:", error)
      return error;
    }
  };

  const renderInputField = (
    label: string,
    value: string,
    setter: (value: string) => void,
    tooltip: string
  ) => (
    <div
      className={`flex flex-row items-center text-center justify-center gap-1 mb-2`}
    >
      <Tooltip
        placement={"top"}
        content={
          <div className="px-1 py-2">
            <div className="text-small font-bold">{label}</div>
            <div className="text-tiny">{tooltip}</div>
          </div>
        }
      >
        <svg
          className="w-3.5 h-3.5 fill-current text-slate-400 dark:text-slate-500"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
        </svg>
      </Tooltip>
      <Input
        label={label}
        labelPlacement="outside"
        size="lg"
        className="w-full"
        variant="bordered"
        isRequired
        name={label.toLowerCase().replace(" ", "_")}
        value={value}
        style={{
          outline: "none",
          boxShadow: "none",
          border: "none",
        }}
        disabled={label === "Name" || label === "Scope" || label === "Sector"}
        onChange={(event) => setter(event.target.value)}
      />
    </div>
  );

  const renderAutocompleteField = (
    label: string,
    value: string,
    setter: (value: string) => void,
    options: string[],
    tooltip: string
  ) => (
    <div className="flex flex-row items-center text-center justify-center gap-1 mb-4">
      <Tooltip
        placement={"top"}
        content={
          <div className="px-1 py-2">
            <div className="text-small font-bold">{label}</div>
            <div className="text-tiny">{tooltip}</div>
          </div>
        }
      >
        <svg
          className="w-3.5 h-3.5 fill-current text-slate-400 dark:text-slate-500"
          viewBox="0 0 16 16"
        >
          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
        </svg>
      </Tooltip>
      <div className="w-full">
        <Autocomplete
          label={label}
          labelPlacement="outside"
          size="lg"
          className="w-full"
          selectedKey={value}
          name={label.toLowerCase().replace(" ", "_")}
          value={value}
          isDisabled={label === "Sector" || label === "Category"}
          // @ts-ignore
          onSelectionChange={setter}
          isRequired
          variant="bordered"
          allowsCustomValue={true}
          style={{
            outline: "none",
            boxShadow: "none",
            border: "none",
          }}
        >
          <AutocompleteItem
            // @ts-ignore
            key={value}
            // @ts-ignore
            value={value}
          >
            {value}
          </AutocompleteItem>
        </Autocomplete>
      </div>
    </div>
  );

  return (
    <Modal
      size="4xl"
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onClose}
      placement="top-center"
      classNames={{
        backdrop:
          "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Edit Emission Information</ModalHeader>
            <form onSubmit={handleSubmit}>
              <ModalBody>
                {renderInputField(
                  "Name",
                  name,
                  setName,
                  "Enter the emission name"
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {renderAutocompleteField(
                    "Sector",
                    sector,
                    setSector,
                    ["Transportation", "Energy", "Manufacturing"],
                    "Select the sector"
                  )}
                  {renderAutocompleteField(
                    "Category",
                    category,
                    setCategory,
                    ["Road", "Air", "Sea"],
                    "Select the category"
                  )}
                  {category && category === "Road Freight" && (
                    <>
                      {renderInputField(
                        "Source City",
                        sourceCity,
                        setSourceCity,
                        "Enter the source city"
                      )}
                      {renderInputField(
                        "Source Country",
                        sourceCountry,
                        setSourceCountry,
                        "Enter the source country"
                      )}
                      {intermediateCity.map((item: string, index: number) =>
                        renderInputField(
                          `Intermediate City ${index + 1}`,
                          item,
                          (value) => {
                            const newIntermediateCity = [...intermediateCity];
                            newIntermediateCity[index] = value;
                            setIntermediateCity(newIntermediateCity);
                          },
                          "Enter the intermediate city"
                        )
                      )}
                      {intermediateCountry.map((item: string, index: number) =>
                        renderInputField(
                          `Intermediate Country ${index + 1}`,
                          item,
                          (value) => {
                            const newIntermediateCountry = [
                              ...intermediateCountry,
                            ];
                            newIntermediateCountry[index] = value;
                            setIntermediateCountry(newIntermediateCountry);
                          },
                          "Enter the intermediate country"
                        )
                      )}
                      {renderInputField(
                        "Destination City",
                        destinationCity,
                        setDestinationCity,
                        "Enter the destination city"
                      )}
                      {renderInputField(
                        "Destination Country",
                        destinationCountry,
                        setDestinationCountry,
                        "Enter the destination country"
                      )}
                      {renderInputField(
                        "Vehicle Type",
                        transportVehicle,
                        setTransportVehicle,
                        "Enter the transport vehicle"
                      )}
                    </>
                  )}
                  {category && category === "Sea Freight" && (
                    <>
                      {renderInputField(
                        "Source Locode",
                        sourceCity,
                        setSourceCity,
                        "Enter the source locode"
                      )}
                      {intermediateLocode.map(
                        (item: { locode: string }, index: number) =>
                          renderInputField(
                            `Intermediate Locode ${index + 1}`,
                            item.locode,
                            (value) => {
                              const newIntermediateLocode = [
                                ...intermediateLocode,
                              ];
                              newIntermediateLocode[index] = { locode: value };
                              setIntermediateLocode(newIntermediateLocode);
                            },
                            "Enter the Locode"
                          )
                      )}
                      {renderInputField(
                        "Destination Locode",
                        destinationCity,
                        setDestinationCity,
                        "Enter the destination locode"
                      )}
                      {renderInputField(
                        "Vessel Type",
                        vessel_type,
                        setVesselType,
                        "Enter the transport vehicle"
                      )}
                    </>
                  )}
                  {category && category === "Air Freight" && (
                    <>
                      {renderInputField(
                        "Source iata",
                        sourceIata,
                        setSourceIata,
                        "Enter the source iata"
                      )}
                      {intermediateIata.map(
                        (item: { iata: string }, index: number) =>
                          renderInputField(
                            `Intermediate iata ${index + 1}`,
                            item.iata,
                            (value) => {
                              const newIntermediateIata = [...intermediateIata];
                              newIntermediateIata[index] = { iata: value };
                              setIntermediateIata(newIntermediateIata);
                            },
                            "Enter the Iata"
                          )
                      )}
                      {renderInputField(
                        "Destination iata",
                        destination_iata,
                        setDestination_iata,
                        "Enter the destination locode"
                      )}
                      {renderInputField(
                        "Aircraft Type",
                        aircraft_type,
                        setAircraftType,
                        "Enter the transport vehicle"
                      )}
                    </>
                  )}
                  {category && category === "Rail Freight" && (
                    <>
                      {renderInputField(
                        "Source City",
                        sourceCity,
                        setSourceCity,
                        "Enter the source city"
                      )}
                      {renderInputField(
                        "Source Country",
                        sourceCountry,
                        setSourceCountry,
                        "Enter the source country"
                      )}
                      {intermediateCity.map((item: string, index: number) =>
                        renderInputField(
                          `Intermediate City ${index + 1}`,
                          item,
                          (value) => {
                            const newIntermediateCity = [...intermediateCity];
                            newIntermediateCity[index] = value;
                            setIntermediateCity(newIntermediateCity);
                          },
                          "Enter the intermediate city"
                        )
                      )}
                      {intermediateCountry.map((item: string, index: number) =>
                        renderInputField(
                          `Intermediate Country ${index + 1}`,
                          item,
                          (value) => {
                            const newIntermediateCountry = [
                              ...intermediateCountry,
                            ];
                            newIntermediateCountry[index] = value;
                            setIntermediateCountry(newIntermediateCountry);
                          },
                          "Enter the intermediate country"
                        )
                      )}
                      {renderInputField(
                        "Destination City",
                        destinationCity,
                        setDestinationCity,
                        "Enter the destination city"
                      )}
                      {renderInputField(
                        "Destination Country",
                        destinationCountry,
                        setDestinationCountry,
                        "Enter the transport vehicle"
                      )}
                      {renderInputField(
                        "Fuel Type",
                        fuel_type,
                        setFuelType,
                        "Enter the transport vehicle"
                      )}
                    </>
                  )}
                  {renderInputField(
                    "Transport Mode",
                    transportMode,
                    setTransportMode,
                    "Enter the transport mode"
                  )}
                  {renderInputField(
                    "Weight",
                    weight,
                    setWeight,
                    "Enter the weight"
                  )}
                  {renderInputField(
                    "Weight Unit",
                    weightUnit,
                    setWeightUnit,
                    "Enter the weight unit"
                  )}
                  {renderInputField(
                    "Scope",
                    scope,
                    setScope,
                    "Enter the scope"
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  onPress={onClose}
                  className={`${
                    isFormValid
                      ? "bg-primary"
                      : "bg-gray-500 cursor-not-allowed"
                  }`}
                  disabled={!isFormValid}
                  //   onClick={handleChildSubmit}
                >
                  Edit
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default RoadFrieghtEditModel;
