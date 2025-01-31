// This below check is added to avoid type script warnings and errors, remove this in future and fix all the type erros

"use client";

// server action to calculate and add co2 emissions to the table
import { addCo2eEmissions } from "../../../lib/actions";
// @ts-ignore
import { cloud_duration_unit } from "../../../utils/constants";
import { cloud_providers } from "../../../utils/constants";

import { Autocomplete, AutocompleteItem, Tooltip } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useContext,
} from "react";
import React from "react";

import Addemissions from "./logemissions-root";
import { ScopeContext } from "@/app/(context)/ScopeContext";

const Scope = ["Scope-1", "Scope-2", "Scope-3"];

const AddemissionsFreight = forwardRef(
  // @ts-ignore
  ({ nameProp, sectorProp, categoryProp }, ref) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [Name, setName] = useState("");
    const [sector, setSector] = useState([]);
    const [category, setCategory] = useState([]);
    const [year, setYear] = React.useState<string>("");
    const [region, setRegion] = React.useState<string>("");
    const [source_city, setSource_city] = React.useState<string>("");
    const [destination_city, setDestination_city] = React.useState<string>("");
    const [source_country, setSource_country] = React.useState<string>("");
    const [destination_country, setDestination_country] =
      React.useState<string>("");
    const [transport_mode, setTransport_mode] = React.useState<string>("");
    const [vehicle_type, setVehicle_type] = React.useState<string>("");
    const [weight, setWeight] = React.useState<string>("");
    const [weight_unit, setWeight_unit] = React.useState<string>("");
    const [co2e_unit, setCo2eUnit] = React.useState<string>("");
    const [metric, setMetric] = useState("");
    const [methodology, setMethodology] = React.useState<string>("");
    const [scope, setScope] = useState<string | undefined>(undefined);
    const [intermediateLocation, setintermediateLocation] = useState<
      { intermediate_city: string; intermediate_country: string }[]
    >([]);
    const [intermediateLocode, setintermediateLocode] = useState<
      { intermediate_locode: string }[]
    >([]);
    const [intermediateIata, setintermediateIata] = useState<
      { intermediate_iata: string }[]
    >([]);
    const { setIsFormValid } = useContext(ScopeContext);
    const { setToggleSkeloton } = useContext(ScopeContext);
    const [aircraftType, setAircraftType] = useState("");
    const [distance, setDistance] = useState<number | null>(null);

    // console.log(categoryProp,"harsh")
    useEffect(() => {
      let isValid = false;
      if (categoryProp === "Road Freight") {
        isValid =
          !!source_city &&
          !!destination_city &&
          !!vehicle_type &&
          !!source_country &&
          !!destination_country &&
          !!scope &&
          !!weight &&
          !!weight_unit &&
          !!transport_mode;
      }

      // if(categoryProp === "Sea Freight"){
      //   setIsFormValid(true);
      // }

      setIsFormValid(isValid);
    }, [
      source_city,
      destination_city,
      destination_country,
      vehicle_type,
      source_country,
      scope,
      weight,
      weight_unit,
      transport_mode,
      setIsFormValid,
    ]);

    const addIntermediateLocation = () => {
      setintermediateLocation([
        ...intermediateLocation,
        { intermediate_city: "", intermediate_country: "" },
      ]);
    };

    const updateIntermediateLocation = (
      index: number,
      field: string,
      value: string
    ) => {
      console.log(value);
      const updatedLocations = [...intermediateLocation];
      console.log(updatedLocations);
      updatedLocations[index] = {
        ...updatedLocations[index],
        [field]: value,
      };
      console.log(updatedLocations);
      setintermediateLocation(updatedLocations);
    };

    const addIntermediateLocode = () => {
      setintermediateLocode([
        ...intermediateLocode,
        { intermediate_locode: "" },
      ]);
    };

    const updateIntermediateLocode = (
      index: number,
      field: string,
      value: string
    ) => {
      console.log(value);
      const updatedLocodes = [...intermediateLocode];
      console.log(updatedLocodes);
      updatedLocodes[index] = {
        ...updatedLocodes[index],
        [field]: value,
      };
      console.log(updatedLocodes);
      setintermediateLocode(updatedLocodes);
    };

    const addIntermediateIata = () => {
      setintermediateIata([...intermediateIata, { intermediate_iata: "" }]);
    };

    const updateIntermediateIata = (
      index: number,
      field: string,
      value: string
    ) => {
      console.log(value);
      const updatedIata = [...intermediateIata];
      console.log(updatedIata);
      updatedIata[index] = {
        ...updatedIata[index],
        [field]: value,
      };
      console.log(updatedIata);
      setintermediateIata(updatedIata);
    };

    const formSubmitHandler = async (
      event: React.FormEvent<HTMLFormElement>
    ) => {
      // event.preventDefault();
      try {
        let postData = null;

        if (sectorProp === "Transport" && categoryProp === "Road Freight") {
          // adding body params to send to the compute end point
          const route = [
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
                vehicle_weight: "gt_20t_lt_26t",
                fuel_source: "lng",
                load_type: "na",
              },
            },

            ...intermediateLocation?.flatMap((item) => [
              {
                location: {
                  query: item.intermediate_city,
                  country: item.intermediate_country,
                },
              },
              {
                transport_mode: transport_mode,
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
                query: destination_city,
                country: destination_country,
              },
            },
          ];

          postData = JSON.stringify({
            route: route,
            cargo: {
              weight: weight,
              weight_unit: weight_unit,
            },
            audit_trail: "enabled",
          });
        }

        console.log(postData);

        if (sectorProp === "Transport" && categoryProp === "Sea Freight") {
          postData = JSON.stringify({
            route: [
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
              ...intermediateLocode?.flatMap((item) => [
                {
                  location: {
                    locode: item.intermediate_locode,
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
              ]),
              {
                location: {
                  locode: destination_city,
                },
              },
            ],
            cargo: {
              weight: weight,
              weight_unit: weight_unit,
            },
            audit_trail: "enabled",
          });
        }

        if (sectorProp === "Transport" && categoryProp === "Air Freight") {
          postData = JSON.stringify({
            route: [
              {
                location: {
                  iata: source_city,
                },
              },
              {
                transport_mode: transport_mode,
                leg_details: {
                  aircraft_type: aircraftType,
                  methodology: "en16258",
                },
              },
              ...intermediateIata.flatMap((item) => [
                {
                  location: {
                    iata: item.intermediate_iata,
                  },
                },
                {
                  transport_mode: transport_mode,
                  leg_details: {
                    aircraft_type: aircraftType,
                    methodology: "en16258",
                  },
                },
              ]),
              {
                location: {
                  iata: destination_city,
                },
              },
            ],
            cargo: {
              weight: weight,
              weight_unit: weight_unit,
            },
            audit_trail: "enabled",
          });
        }

        if (sectorProp === "Transport" && categoryProp === "Rail Freight") {
          postData = JSON.stringify({
            route: [
              {
                location: {
                  query: source_city,
                  country: source_country,
                },
              },
              {
                transport_mode: transport_mode,
                leg_details: {
                  fuel_type: "diesel",
                  load_type: "manufactured_products",
                },
              },
              ...intermediateLocation?.flatMap((item) => [
                {
                  location: {
                    query: item.intermediate_city,
                    country: item.intermediate_country,
                  },
                },
                {
                  transport_mode: transport_mode,
                  leg_details: {
                    fuel_type: "electricity",
                    load_type: "trailer_only_on_train",
                  },
                },
              ]),
              {
                location: {
                  query: destination_city,
                  country: destination_country,
                },
              },
            ],
            cargo: {
              weight: weight,
              weight_unit: weight_unit,
            },
            distance_km: distance,
            audit_trail: "enabled",
          });
        }

        console.log({
          source_city,
          source_country,
          destination_city,
          destination_country,
          transport_mode,
          vehicle_type,
          weight,
          weight_unit,
        });

        // Assuming category_set is a string like 'Cloud Computing - CPU'

        const categorySet_split = categoryProp.split(" ");
        // Make sure category_set has at least two parts after splitting

        console.log(categorySet_split.length >= 2);
        // Extract the second part and convert it to lowercase
        const metricValue = categorySet_split[1].toLowerCase();
        console.log(metricValue);

        // Update the metric state
        setMetric(metricValue);
        console.log(metric);

        if (!postData || typeof postData !== "string") {
          console.error("postData is not valid JSON:", postData);
          return;
        }

        console.log(postData);

        setToggleSkeloton(true);

        try {
          const response = await fetch("/api/compute/freight/intermodal", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: postData,
          });

          const responsedata = await response.json(); // Parse JSON response

          if (!response.ok) {
            setToggleSkeloton(false);
            throw new Error("Network response was not ok");
          }

          console.log(responsedata); // Log the fetched data
          const co2e = responsedata.responsedata.co2e;
          const co2e_unit = responsedata.responsedata.co2e_unit;
          const year =
            responsedata.responsedata.route[1].estimates.emission_factor.year;
          const region =
            responsedata.responsedata.route[1].estimates.emission_factor.region;
          console.log(year);
          console.log(region);
          console.log(co2e);

          console.log(nameProp, sectorProp, categoryProp, co2e_unit, scope);
          let requestData = JSON.parse(postData);

          // Assuming responseData.co2e holds the CO2e value
          const co2eEmission = await addCo2eEmissions({
            Name: nameProp,
            sector: sectorProp,
            category: categoryProp,
            // methodology,
            year: year,
            region: region,
            co2e_unit: co2e_unit,
            co2e,
            requestbody: requestData,
            responsebody: responsedata,
            Scope: scope,
          });

          setToggleSkeloton(false);
          console.log(co2eEmission);
        } catch (error) {
          console.error("Error during fetch:", error);
        }
        // console.log(co2e);

        // resetting all the values to empty
        setName("");
        setSource_city("");
        setDestination_city("");
        setSource_country("");
        setDestination_country("");
        setTransport_mode("");
        setVehicle_type("");
        setWeight("");
        setWeight_unit("");
        // @ts-ignore
        // return co2eEmission;
      } catch (error) {
        console.error("Error creating Emission:", error);
      }
    };

    useImperativeHandle(ref, () => ({
      formSubmitHandler,
    }));

    return (
      <div>
        <>
          <form onSubmit={formSubmitHandler} className="flex flex-col gap-6">
            {sectorProp === "Transport" && categoryProp === "Road Freight" && (
              <>
                <div className="flex flex-row gap-12">
                  <div className="flex flex-row items-center text-center justify-center gap-1">
                    <Tooltip
                      placement={"top"}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            Custom Content
                          </div>
                          <div className="text-tiny">
                            This is a custom tooltip content
                          </div>
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
                    <div>
                      <Input
                        label="source city"
                        labelPlacement="outside"
                        size="lg"
                        className="w-96"
                        variant="bordered"
                        isRequired
                        name="source_city"
                        value={source_city}
                        onChange={(event) => setSource_city(event.target.value)}
                        style={{
                          outline: "none",
                          boxShadow: "none",
                          border: "none",
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row items-center text-center justify-center gap-1">
                    <Tooltip
                      placement={"top"}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            Custom Content
                          </div>
                          <div className="text-tiny">
                            This is a custom tooltip content
                          </div>
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
                      label="source country"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="source_country"
                      value={source_country}
                      onChange={(event) =>
                        setSource_country(event.target.value)
                      }
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Transport Mode and Vehicle Type */}
                <div className="flex flex-row gap-12">
                  <div className="flex flex-row items-center text-center justify-center gap-1">
                    <Tooltip
                      placement={"top"}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            Custom Content
                          </div>
                          <div className="text-tiny">
                            This is a custom tooltip content
                          </div>
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
                      size="lg"
                      isRequired
                      label="transport mode"
                      labelPlacement="outside"
                      className="w-96"
                      variant="bordered"
                      name="transport_mode"
                      value={transport_mode}
                      onChange={(event) =>
                        setTransport_mode(event.target.value)
                      }
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                  <div className="flex flex-row items-center text-center justify-center gap-1">
                    <Tooltip
                      placement={"top"}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            Custom Content
                          </div>
                          <div className="text-tiny">
                            This is a custom tooltip content
                          </div>
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
                      label="vehicle type"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="vehicle_type"
                      value={vehicle_type}
                      onChange={(event) => setVehicle_type(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Dynamic Inputs for Intermediate Locations */}
                {intermediateLocation.map((location, index) => (
                  <div className="flex flex-row gap-12" key={index}>
                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">
                              Custom Content
                            </div>
                            <div className="text-tiny">
                              This is a custom tooltip content
                            </div>
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
                        label={`intermediate city-${index + 1}`}
                        labelPlacement="outside"
                        size="lg"
                        className="w-96"
                        name={`intermediate_city_${index}`}
                        value={location.intermediate_city}
                        variant="bordered"
                        onChange={(event) =>
                          updateIntermediateLocation(
                            index,
                            "intermediate_city",
                            event.target.value
                          )
                        }
                        style={{
                          outline: "none",
                          boxShadow: "none",
                          border: "none",
                        }}
                      />
                    </div>
                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">
                              Custom Content
                            </div>
                            <div className="text-tiny">
                              This is a custom tooltip content
                            </div>
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
                        label={`intermediate country-${index + 1}`}
                        labelPlacement="outside"
                        size="lg"
                        className="w-96"
                        name={`intermediate_country_${index}`}
                        value={location.intermediate_country}
                        variant="bordered"
                        onChange={(event) =>
                          updateIntermediateLocation(
                            index,
                            "intermediate_country",
                            event.target.value
                          )
                        }
                        style={{
                          outline: "none",
                          boxShadow: "none",
                          border: "none",
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* Button to Add More Locations */}
                <button
                  type="button"
                  className="mt-4 px-1 py-2 w-2/5 bg-blue-600 text-white rounded"
                  onClick={addIntermediateLocation}
                >
                  Add Intermediate Location
                </button>

                {/* Destination City and Country */}
                <div className="flex flex-row gap-12">
                  <div className="flex flex-row items-center text-center justify-center gap-1">
                    <Tooltip
                      placement={"top"}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            Custom Content
                          </div>
                          <div className="text-tiny">
                            This is a custom tooltip content
                          </div>
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
                      label="destination city"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      name="destination_city"
                      value={destination_city}
                      isRequired
                      variant="bordered"
                      onChange={(event) =>
                        setDestination_city(event.target.value)
                      }
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                  <div className="flex flex-row items-center text-center justify-center gap-1">
                    <Tooltip
                      placement={"top"}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            Custom Content
                          </div>
                          <div className="text-tiny">
                            This is a custom tooltip content
                          </div>
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
                      label="destination country"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="destination_country"
                      value={destination_country}
                      onChange={(event) =>
                        setDestination_country(event.target.value)
                      }
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                </div>
                {/* Cargo Weight and Weight Unit */}
                <div className="flex flex-row gap-12">
                  <div className="flex flex-row items-center text-center justify-center gap-1">
                    <Tooltip
                      placement={"top"}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            Custom Content
                          </div>
                          <div className="text-tiny">
                            This is a custom tooltip content
                          </div>
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
                      label="Weight"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="weight"
                      value={weight}
                      onChange={(event) =>
                        // @ts-ignore
                        setWeight(Number(event.target.value))
                      }
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                  <div className="flex flex-row items-center text-center justify-center gap-1">
                    <Tooltip
                      placement={"top"}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            Custom Content
                          </div>
                          <div className="text-tiny">
                            This is a custom tooltip content
                          </div>
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
                      label="weight unit"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      name="weight_unit"
                      value={weight_unit}
                      isRequired
                      variant="bordered"
                      onChange={(event) => setWeight_unit(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-12">
                  <div className="flex flex-row items-center text-center justify-center gap-1">
                    <Tooltip
                      placement={"top"}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            Custom Content
                          </div>
                          <div className="text-tiny">
                            This is a custom tooltip content
                          </div>
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
                    <Autocomplete
                      size="lg"
                      labelPlacement="outside"
                      label="Select Scope"
                      className="w-96"
                      selectedKey={scope}
                      name="sectors"
                      variant="bordered"
                      value={scope}
                      // @ts-ignore
                      onSelectionChange={setScope}
                      // disabledKeys={[

                      // ]}
                      isRequired
                      allowsCustomValue={true}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    >
                      {Scope.map((scope) => (
                        <AutocompleteItem key={scope} value={scope}>
                          {scope}
                        </AutocompleteItem>
                      ))}
                    </Autocomplete>
                  </div>
                </div>
              </>
            )}

            {sectorProp === "Transport" && categoryProp === "Sea Freight" && (
              <>
                <div className="flex flex-row gap-20">
                  <div>
                    <Input
                      label="source locode"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="source_locode"
                      value={source_city}
                      onChange={(event) => setSource_city(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>

                  {/* <div>
                    <Input
                      label="source country"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="source_country"
                      value={source_country}
                      onChange={(event) =>
                        setSource_country(event.target.value)
                      }
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div> */}
                  <Input
                    label="destination locode"
                    labelPlacement="outside"
                    size="lg"
                    className="w-96"
                    name="destination_locode"
                    value={destination_city}
                    isRequired
                    variant="bordered"
                    onChange={(event) =>
                      setDestination_city(event.target.value)
                    }
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      border: "none",
                    }}
                  />
                </div>
                {intermediateLocode.map((location, index) => (
                  <div className="flex flex-row gap-12" key={index}>
                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">
                              Custom Content
                            </div>
                            <div className="text-tiny">
                              This is a custom tooltip content
                            </div>
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
                        label={`intermediate locode-${index + 1}`}
                        labelPlacement="outside"
                        size="lg"
                        className="w-96"
                        name={`intermediate_locode_${index}`}
                        value={location.intermediate_locode}
                        variant="bordered"
                        onChange={(event) =>
                          updateIntermediateLocode(
                            index,
                            "intermediate_locode",
                            event.target.value
                          )
                        }
                        style={{
                          outline: "none",
                          boxShadow: "none",
                          border: "none",
                        }}
                      />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="mt-4 px-1 py-2 w-2/5 bg-blue-600 text-white rounded"
                  onClick={addIntermediateLocode}
                >
                  Add Intermediate Locode
                </button>
                <div className="flex flex-row gap-20">
                  <Input
                    size="lg"
                    isRequired
                    label="transport mode"
                    labelPlacement="outside"
                    className="w-96"
                    variant="bordered"
                    name="transport_mode"
                    value={transport_mode}
                    onChange={(event) => setTransport_mode(event.target.value)}
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      border: "none",
                    }}
                  />

                  <div>
                    <Input
                      label="Vessel type"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="vessel_type"
                      value={vehicle_type}
                      onChange={(event) => setVehicle_type(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-20">
                  {/* <Input
                    label="destination city"
                    labelPlacement="outside"
                    size="lg"
                    className="w-96"
                    name="destination_city"
                    value={destination_city}
                    isRequired
                    variant="bordered"
                    onChange={(event) =>
                      setDestination_city(event.target.value)
                    }
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      border: "none",
                    }}
                  /> */}
                  {/* <div>
                    <Input
                      label="destination country"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="destination_country"
                      value={destination_country}
                      onChange={(event) =>
                        setDestination_country(event.target.value)
                      }
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div> */}
                </div>
                <div className="flex flex-row gap-20">
                  <div>
                    <Input
                      label="Weight"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="weight"
                      value={weight}
                      onChange={(event) => setWeight(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      label="weight unit"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      name="weight_unit"
                      value={weight_unit}
                      isRequired
                      variant="bordered"
                      onChange={(event) => setWeight_unit(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-12">
                  <div className="flex flex-row items-center text-center justify-center gap-1">
                    <Tooltip
                      placement={"top"}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            Custom Content
                          </div>
                          <div className="text-tiny">
                            This is a custom tooltip content
                          </div>
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
                    <Autocomplete
                      size="lg"
                      labelPlacement="outside"
                      label="Select Scope"
                      className="w-96"
                      selectedKey={scope}
                      name="sectors"
                      variant="bordered"
                      value={scope}
                      // @ts-ignore
                      onSelectionChange={setScope}
                      // disabledKeys={[

                      // ]}
                      isRequired
                      allowsCustomValue={true}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    >
                      {Scope.map((scope) => (
                        <AutocompleteItem key={scope} value={scope}>
                          {scope}
                        </AutocompleteItem>
                      ))}
                    </Autocomplete>
                  </div>
                </div>
              </>
            )}

            {sectorProp === "Transport" && categoryProp === "Rail Freight" && (
              <>
                <div className="flex flex-row gap-20">
                  <div>
                    <Input
                      label="source city"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="source_city"
                      value={source_city}
                      onChange={(event) => setSource_city(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>

                  <div>
                    <Input
                      label="source country"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="source_country"
                      value={source_country}
                      onChange={(event) =>
                        setSource_country(event.target.value)
                      }
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                </div>
                {intermediateLocation.map((location, index) => (
                  <div className="flex flex-row gap-12" key={index}>
                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">
                              Custom Content
                            </div>
                            <div className="text-tiny">
                              This is a custom tooltip content
                            </div>
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
                        label={`intermediate city-${index + 1}`}
                        labelPlacement="outside"
                        size="lg"
                        className="w-96"
                        name={`intermediate_city_${index}`}
                        value={location.intermediate_city}
                        variant="bordered"
                        onChange={(event) =>
                          updateIntermediateLocation(
                            index,
                            "intermediate_city",
                            event.target.value
                          )
                        }
                        style={{
                          outline: "none",
                          boxShadow: "none",
                          border: "none",
                        }}
                      />
                    </div>
                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">
                              Custom Content
                            </div>
                            <div className="text-tiny">
                              This is a custom tooltip content
                            </div>
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
                        label={`intermediate country-${index + 1}`}
                        labelPlacement="outside"
                        size="lg"
                        className="w-96"
                        name={`intermediate_country_${index}`}
                        value={location.intermediate_country}
                        variant="bordered"
                        onChange={(event) =>
                          updateIntermediateLocation(
                            index,
                            "intermediate_country",
                            event.target.value
                          )
                        }
                        style={{
                          outline: "none",
                          boxShadow: "none",
                          border: "none",
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* Button to Add More Locations */}
                <button
                  type="button"
                  className="mt-4 px-1 py-2 w-2/5 bg-blue-600 text-white rounded"
                  onClick={addIntermediateLocation}
                >
                  Add Intermediate Location
                </button>
                <div className="flex flex-row gap-20">
                  <Input
                    label="destination city"
                    labelPlacement="outside"
                    size="lg"
                    className="w-96"
                    name="destination_city"
                    value={destination_city}
                    isRequired
                    variant="bordered"
                    onChange={(event) =>
                      setDestination_city(event.target.value)
                    }
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      border: "none",
                    }}
                  />
                  <div>
                    <Input
                      label="destination country"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="destination_country"
                      value={destination_country}
                      onChange={(event) =>
                        setDestination_country(event.target.value)
                      }
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-20">
                  <Input
                    size="lg"
                    isRequired
                    label="transport mode"
                    labelPlacement="outside"
                    className="w-96"
                    variant="bordered"
                    name="transport_mode"
                    value={transport_mode}
                    onChange={(event) => setTransport_mode(event.target.value)}
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      border: "none",
                    }}
                  />

                  <div>
                    <Input
                      label="vehicle type"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="vehicle_type"
                      value={vehicle_type}
                      onChange={(event) => setVehicle_type(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-20">
                  <div>
                    <Input
                      label="Weight"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="weight"
                      value={weight}
                      onChange={(event) => setWeight(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      label="weight unit"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      name="weight_unit"
                      value={weight_unit}
                      isRequired
                      variant="bordered"
                      onChange={(event) => setWeight_unit(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-12">
                  <div>
                    <Input
                      label="distance"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="distance"
                      value={distance !== null ? distance.toString() : ""}
                      onChange={(event) =>
                        setDistance(Number(event.target.value))
                      }
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                  <div className="flex flex-row items-center text-center justify-center gap-1">
                    <Tooltip
                      placement={"top"}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            Custom Content
                          </div>
                          <div className="text-tiny">
                            This is a custom tooltip content
                          </div>
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
                    <Autocomplete
                      size="lg"
                      labelPlacement="outside"
                      label="Select Scope"
                      className="w-96"
                      selectedKey={scope}
                      name="sectors"
                      variant="bordered"
                      value={scope}
                      // @ts-ignore
                      onSelectionChange={setScope}
                      // disabledKeys={[

                      // ]}
                      isRequired
                      allowsCustomValue={true}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    >
                      {Scope.map((scope) => (
                        <AutocompleteItem key={scope} value={scope}>
                          {scope}
                        </AutocompleteItem>
                      ))}
                    </Autocomplete>
                  </div>
                </div>
              </>
            )}
            {sectorProp === "Transport" && categoryProp === "Air Freight" && (
              <>
                <div className="flex flex-row gap-20">
                  <div>
                    <Input
                      label="source city"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="source_city"
                      value={source_city}
                      onChange={(event) => setSource_city(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>

                  {/* <div>
                    <Input
                      label="source country"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="source_country"
                      value={source_country}
                      onChange={(event) =>
                        setSource_country(event.target.value)
                      }
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div> */}
                  <Input
                    label="destination city"
                    labelPlacement="outside"
                    size="lg"
                    className="w-96"
                    name="destination_city"
                    value={destination_city}
                    isRequired
                    variant="bordered"
                    onChange={(event) =>
                      setDestination_city(event.target.value)
                    }
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      border: "none",
                    }}
                  />
                </div>
                {intermediateIata.map((location, index) => (
                  <div className="flex flex-row gap-12" key={index}>
                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">
                              Custom Content
                            </div>
                            <div className="text-tiny">
                              This is a custom tooltip content
                            </div>
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
                        label={`intermediate iata-${index + 1}`}
                        labelPlacement="outside"
                        size="lg"
                        className="w-96"
                        name={`intermediate_iata_${index}`}
                        value={location.intermediate_iata}
                        variant="bordered"
                        onChange={(event) =>
                          updateIntermediateIata(
                            index,
                            "intermediate_iata",
                            event.target.value
                          )
                        }
                        style={{
                          outline: "none",
                          boxShadow: "none",
                          border: "none",
                        }}
                      />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="mt-4 px-1 py-2 w-2/5 bg-blue-600 text-white rounded"
                  onClick={addIntermediateIata}
                >
                  Add Intermediate Iata
                </button>
                <div className="flex flex-row gap-20">
                  <Input
                    size="lg"
                    isRequired
                    label="transport mode"
                    labelPlacement="outside"
                    className="w-96"
                    variant="bordered"
                    name="transport_mode"
                    value={transport_mode}
                    onChange={(event) => setTransport_mode(event.target.value)}
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      border: "none",
                    }}
                  />

                  <div>
                    <Input
                      label="aircraft type"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="aircraft_type"
                      value={aircraftType}
                      onChange={(event) => setAircraftType(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-row gap-20">
                  {/* <Input
                    label="destination city"
                    labelPlacement="outside"
                    size="lg"
                    className="w-96"
                    name="destination_city"
                    value={destination_city}
                    isRequired
                    variant="bordered"
                    onChange={(event) =>
                      setDestination_city(event.target.value)
                    }
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      border: "none",
                    }}
                  /> */}
                  {/* <div>
                    <Input
                      label="destination country"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="destination_country"
                      value={destination_country}
                      onChange={(event) =>
                        setDestination_country(event.target.value)
                      }
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div> */}
                </div>
                <div className="flex flex-row gap-20">
                  <div>
                    <Input
                      label="Weight"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      variant="bordered"
                      isRequired
                      name="weight"
                      value={weight}
                      onChange={(event) => setWeight(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                  <div>
                    <Input
                      label="weight unit"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      name="weight_unit"
                      value={weight_unit}
                      isRequired
                      variant="bordered"
                      onChange={(event) => setWeight_unit(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-12">
                  <div className="flex flex-row items-center text-center justify-center gap-1">
                    <Tooltip
                      placement={"top"}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            Custom Content
                          </div>
                          <div className="text-tiny">
                            This is a custom tooltip content
                          </div>
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
                    <Autocomplete
                      size="lg"
                      labelPlacement="outside"
                      label="Select Scope"
                      className="w-96"
                      selectedKey={scope}
                      name="sectors"
                      variant="bordered"
                      value={scope}
                      // @ts-ignore
                      onSelectionChange={setScope}
                      // disabledKeys={[

                      // ]}
                      isRequired
                      allowsCustomValue={true}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    >
                      {Scope.map((scope) => (
                        <AutocompleteItem key={scope} value={scope}>
                          {scope}
                        </AutocompleteItem>
                      ))}
                    </Autocomplete>
                  </div>
                </div>
              </>
            )}
          </form>
        </>
      </div>
    );
  }
);

export default AddemissionsFreight;
