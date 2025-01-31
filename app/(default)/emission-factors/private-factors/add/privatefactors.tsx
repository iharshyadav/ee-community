// @ts-nocheck

"use client";

import { addPrivateEmissions } from "@/app/lib/actions";
import { IoAddCircleOutline } from "react-icons/io5";
import { animals } from "../../../utils/data";

import { sectors } from "@/app/utils/constants";
import { categories } from "@/app/utils/constants";
import { regions } from "@/app/utils/constants";
import { units } from "@/app/utils/constants";
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

import { useState } from "react";

import React from "react";

import { fetchEmissionMetadata } from "../../../lib/data";

const Addemissions = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = useState("");
  const [sector, setSector] = React.useState<React.Key>("");
  const [category, setCategory] = React.useState<React.Key>("");
  const [year, setYear] = React.useState<React.Key>("");
  const [region_name, setRegion] = React.useState<React.Key>("");
  const [source, setSource] = React.useState<React.Key>("");
  const [unit, setUnit] = React.useState<React.Key>("");
  const [emission_factor, setEmission] = React.useState<React.Key>("");
  // const emissionFactors =  fetchEmissionMetadata()
  // console.log(emissionFactors.sectors)

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const createEmission = await addPrivateEmissions({
        name,
        sector,
        category,
        year,
        region_name,
        source,
        unit,
        emission_factor,
      });

      // Clear the input value after successful private emission creation
      setName("");
      setSector("");
      setCategory("");
      setYear("");
      setRegion("");
      setUnit("");
      setEmission("");
      setSource("");

      setOpen(false);
    } catch (error) {
      console.error("Error creating Emission:", error);
      // Handle the error, e.g., show an error notification
      // toast.error('Error creating emisson');
    }
  };

  return (
    <div>
      <button
        onClick={onOpen}
        className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
      >
        <svg
          className="w-4 h-4 fill-current opacity-50 shrink-0"
          viewBox="0 0 16 16"
        >
          <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
        </svg>
        <span className="hidden xs:block ml-2">Add New</span>
      </button>
      <Modal
        size="4xl"
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
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
              <ModalHeader className="flex flex-col gap-1 w-96">
                Add Private Emissions
              </ModalHeader>
              <form
                onSubmit={formSubmitHandler}
                className="flex flex-col gap-6"
              >
                <ModalBody>
                  <Input
                    autoFocus
                    size="sm"
                    name="name"
                    placeholder="Enter Emission Name"
                    variant="bordered"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />

                  <div className="flex flex-row gap-20">
                    <div>
                      <Autocomplete
                        size="sm"
                        label="Select a sector"
                        className="w-96"
                        selectedKey={sector}
                        name="sector"
                        value={sector}
                        onSelectionChange={setSector}
                        isRequired
                        variant="bordered"
                        allowsCustomValue={true}
                      >
                        {sectors.map((sector) => (
                          <AutocompleteItem
                            key={sector.value}
                            value={sector.value}
                          >
                            {sector.label}
                          </AutocompleteItem>
                        ))}
                      </Autocomplete>
                    </div>

                    <div>
                      <Autocomplete
                        size="sm"
                        label="Select a category"
                        className="w-96"
                        selectedKey={category}
                        isRequired
                        name="category"
                        value={category}
                        onSelectionChange={setCategory}
                        variant="bordered"
                        allowsCustomValue={true}
                      >
                        {categories.map((category) => (
                          <AutocompleteItem
                            key={category.value}
                            value={category.value}
                          >
                            {category.label}
                          </AutocompleteItem>
                        ))}
                      </Autocomplete>
                    </div>
                  </div>

                  <div className="flex flex-row gap-20">
                    <div>
                      <Input
                        size="sm"
                        label="Year"
                        className="w-96"
                        variant="bordered"
                        isRequired
                        name="year"
                        value={year}
                        onChange={(event) => setYear(event.target.value)}
                      />
                    </div>

                    <div>
                      <Autocomplete
                        size="sm"
                        label="Select a Region"
                        className="w-96"
                        selectedKey={region_name}
                        name="region_name"
                        onSelectionChange={setRegion}
                        isRequired
                        variant="bordered"
                        allowsCustomValue={true}
                      >
                        {regions.map((region) => (
                          <AutocompleteItem
                            key={region.value}
                            value={region.value}
                          >
                            {region.label}
                          </AutocompleteItem>
                        ))}
                      </Autocomplete>
                    </div>
                  </div>

                  <div className="flex flex-row gap-20">
                    <div>
                      <Autocomplete
                        size="sm"
                        label="Select a Unit"
                        className="w-96"
                        name="unit"
                        selectedKey={unit}
                        isRequired
                        onSelectionChange={setUnit}
                        variant="bordered"
                        allowsCustomValue={true}
                      >
                        {units.map((unit) => (
                          <AutocompleteItem key={unit.value} value={unit.value}>
                            {unit.label}
                          </AutocompleteItem>
                        ))}
                      </Autocomplete>
                    </div>
                    <div>
                      <Input
                        size="sm"
                        label="Source"
                        className="w-96"
                        variant="bordered"
                        isRequired
                        name="source"
                        value={source}
                        onChange={(event) => setSource(event.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-20">
                    <Input
                      size="sm"
                      className="w-96"
                      label="Emission Value"
                      isRequired
                      variant="bordered"
                      name="emission_factor"
                      value={emission_factor}
                      onChange={(event) => setEmission(event.target.value)}
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-black hover:bg-black cursor-pointer text-white"
                    onPress={onClose}
                  >
                    Create
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Addemissions;
