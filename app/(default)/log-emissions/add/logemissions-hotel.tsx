// This below check is added to avoid type script warnings and errors, remove this in future and fix all the type erros
// @ts-nocheck

"use client";

// server action to calculate and add co2 emissions to the table
import { addCo2eEmissions } from "../../../lib/actions";
import { cloud_duration_unit } from "../../../utils/constants";
import { cloud_providers } from "../../../utils/constants";

import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
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
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import React from "react";

import Addemissions from "./logemissions-root";

const AddemissionsHotel = forwardRef(
  ({ nameProp, sectorProp, categoryProp }, ref) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [Name, setName] = useState("");
    const [sector, setSector] = useState([]);
    const [category, setCategory] = useState([]);
    const [year, setYear] = React.useState<React.Key>("");
    const [region, setRegion] = React.useState<React.Key>("");
    const [source_city, setSource_city] = React.useState<React.Key>("");
    const [destination_city, setDestination_city] =
      React.useState<React.Key>("");
    const [source_country, setSource_country] = React.useState<React.Key>("");
    const [destination_country, setDestination_country] =
      React.useState<React.Key>("");
    const [transport_mode, setTransport_mode] = React.useState<React.Key>("");
    const [vehicle_type, setVehicle_type] = React.useState<React.Key>("");
    const [weight, setWeight] = React.useState<React.Key>("");
    const [weight_unit, setWeight_unit] = React.useState<React.Key>("");
    const [co2e_unit, setCo2eUnit] = React.useState<React.Key>("");
    const [metric, setMetric] = useState("");
    const [methodology, setMethodology] = React.useState<React.Key>("");

    console.log(sectorProp);

    console.log(categoryProp);

    console.log(nameProp);

    const formSubmitHandler = async (event) => {
      // event.preventDefault();
      try {
        let postData = null;

        if (sectorProp === "Transport" && categoryProp === "Road Freight") {
          // adding body params to send to the compute end point
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
                  vehicle_type: vehicle_type,
                },
              },
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
            audit_trail: "enabled",
          });
        }

        console.log(source_city);
        console.log(source_country);
        console.log(transport_mode);
        console.log(vehicle_type);
        console.log(destination_city);
        console.log(destination_country);
        console.log(weight);
        console.log(weight_unit);

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

        console.log(postData);

        // compute api is called here
        const response = await fetch("/api/freight/intermodal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: postData,
        });
        const responsedata = await response.json(); // Parse JSON response

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
        // Assuming responseData.co2e holds the CO2e value
        const co2eEmission = await addCo2eEmissions({
          Name: nameProp,
          sector: sectorProp,
          category: categoryProp,
          methodology,
          year: year,
          region: region,
          co2e_unit: co2e_unit,
          co2e: co2e, // Pass CO2e value to addCo2eEmissions
        });

        console.log(co2e);

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

        return co2eEmission;
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
            {sectorProp === "Restaurants and Accommodation" &&
              categoryProp === "Accommodation" && (
                <>
                  <div className="flex flex-row gap-20">
                    <div>
                      <Input
                        label="hotel nights"
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
                        label="location"
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
                  <div className="flex flex-row gap-20">
                    <Input
                      size="lg"
                      isRequired
                      label="year"
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
                </>
              )}

            {sectorProp === "Transport" && categoryProp === "Sea Freight" && (
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
              </>
            )}
          </form>
        </>
      </div>
    );
  }
);

export default AddemissionsHotel;
