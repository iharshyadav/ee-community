// This below check is added to avoid type script warnings and errors, remove this in future and fix all the type erros
// @ts-nocheck

"use client";

// server action to calculate and add co2 emissions to the table
import { addCo2eEmissions } from "../../../lib/actions";
import { cloud_duration_unit } from "../../../utils/constants";
import { cloud_providers } from "../../../utils/constants";
import { IoIosInformationCircleOutline } from "react-icons/io";

import AddemissionsCloud from "./logemissions-cloud";
import AddemissionsFreight from "./logemissions-freight";
import AddemissionsHotel from "./logemissions-hotel";
// import Tooltip from "@/components/tooltip";

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
  Tooltip,
} from "@nextui-org/react";
import { useState, useEffect, useRef, useContext } from "react";
import React from "react";
import ReactSelect from "react-select";
import { ScopeContext } from "@/app/(context)/ScopeContext";

const Addemissions: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [Name, setName] = useState<string>("");
  const [sectors_get, setSectors_get] = useState<any[]>([]);
  const [sector_set, setSector_set] = useState<string | null>(null);
  const [category_get, setCategory_get] = useState<any[]>([]);
  const [category_set, setCategory_set] = useState<string | null>(null);
  const [isNameUnique, setIsNameUnique] = useState(true);

  const [isValid, setIsValid] = useState<boolean>(false);

  const { isFormValid } = useContext(ScopeContext);

  const handleChildSubmit = () => {
    console.log("Button clicked in Parent");
    if (childRef.current) {
      childRef.current.formSubmitHandler();
    }
    setName("");
    setSector_set(null);
    setCategory_set(null);
  };

  const childRef = useRef<any>(null);

  const checkNameUnique = async (Name: string) => {
    try {
      const response = await fetch("/api/namevalidator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Name }),
      });
      const data = await response.json();
      console.log(data);
      setIsNameUnique(data.success);
    } catch (error) {
      console.error("Error checking name uniqueness:", error);
    }
  };

  useEffect(() => {
    if (Name) {
      const delayDebounceFn = setTimeout(() => {
        checkNameUnique(Name);
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [Name]);

  // fetch sectors data from the emission_factors_wce table
  useEffect(() => {
    fetch("/api/fetch/sectors")
      .then((res) => res.json())
      .then((data) => setSectors_get(data));
  }, []);

  // sector = sectors_set

  console.log(sectors_get);

  useEffect(() => {
    if (sector_set) {
      fetch(`/api/fetch/category/${sector_set}`)
        .then((res) => res.json())
        .then((data) => setCategory_get(data));
    }
  }, [sector_set]);

  // Function to validate the form
  // const validateForm = () => {
  //   setIsValid(!!Name && !!sector_set && !!category_set && isFormValid);
  // };

  const validateForm = () => {
    setIsValid(!!Name && !!sector_set && !!category_set && isFormValid);
  };
  useEffect(() => {
    validateForm();
  }, [Name, sector_set, category_set, isFormValid]);

  // Update form validity when fields change
  useEffect(() => {
    validateForm();
  }, [Name, sector_set, category_set, isFormValid]);

  console.log(sectors_get);
  console.log(category_get);
  console.log(category_set);
  console.log(sector_set);

  console.log(sectors_get);
  console.log(category_get);
  return (
    <>
      <div>
        {/* <DatePickerWithRange /> */}
        {/* <Button onPress={onOpen} ><IoAddCircleOutline size={20}/>
          Log Emissions</Button>  */}
        <button
          onClick={onOpen}
          className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
        >
          <svg
            className="w-2.5 h-2.5 fill-current opacity-50 shrink-0"
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
                  Log Emissions
                </ModalHeader>
                {/* <form onSubmit={formSubmitHandler} className='flex flex-col gap-6'> */}
                <ModalBody>
                  {/* Company Mail Address */}
                  {/* <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="company-name">Emission Name <span className="text-rose-500">*</span></label>
                      <input required id="Name" value={Name} onChange={(event) => setName(event.target.value)} className="form-input w-full" type="text"/>
                    </div> */}
                  <div className="flex flex-row items-center text-center justify-center gap-2">
                    <Tooltip
                      placement={"top"}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">
                            Emission Name
                          </div>
                          <div className="text-tiny">
                            Enter a unique name for the emission
                          </div>
                        </div>
                      }
                    >
                      <svg
                        className="w-2.5 h-2.5 fill-current text-slate-400 dark:text-slate-500"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
                      </svg>
                      {/* <IoIosInformationCircleOutline /> */}
                    </Tooltip>
                    <Input
                      autoFocus
                      isRequired
                      size="lg"
                      name="Name"
                      label="Enter Emission Name"
                      labelPlacement="outside"
                      variant="bordered"
                      value={Name}
                      onChange={(event) => setName(event.target.value)}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    />
                  </div>

                  {!isNameUnique && (
                    <p className="text-red-500 ml-8">Name already exists!!!</p>
                  )}

                  <div className="flex flex-row gap-12">
                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">Sector</div>
                            <div className="text-tiny">
                              select a sector data
                            </div>
                          </div>
                        }
                      >
                        <svg
                          className="w-2.5 h-2.5 fill-current text-slate-400 dark:text-slate-500"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
                        </svg>
                      </Tooltip>

                      <div>
                        <Autocomplete
                          size="lg"
                          labelPlacement="outside"
                          label="Select a sector data"
                          className="w-96"
                          selectedKey={sector_set}
                          name="sectors"
                          variant="bordered"
                          value={sector_set}
                          onSelectionChange={setSector_set}
                          disabledKeys={[
                            "Energy",
                            "Materials and Manufacturing",
                            "Restaurants and Accommodation",
                            "Consumer Goods and Services",
                            "Health and Social Care",
                            "Refrigerants and Fugitive Gases",
                            "Waste",
                            "Education",
                            "Organizational Activities",
                            "Agriculture/Hunting/Forestry/Fishing",
                            "Equipment",
                            "Water",
                            "Buildings and Infrastructure",
                            "Insurance and Financial Services",
                          ]}
                          isRequired
                          allowsCustomValue={true}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {sectors_get.map((sector) => (
                            <AutocompleteItem
                              key={sector.sector}
                              value={sector.sector}
                            >
                              {sector.sector}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      </div>
                    </div>

                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">Category</div>
                            <div className="text-tiny">
                              select a category data
                            </div>
                          </div>
                        }
                      >
                        <svg
                          className="w-2.5 h-2.5 fill-current text-slate-400 dark:text-slate-500"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
                        </svg>
                      </Tooltip>
                      <div>
                        <Autocomplete
                          label="Select a category"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          selectedKey={category_set}
                          name="category"
                          value={category_set}
                          onSelectionChange={setCategory_set}
                          disabledKeys={[
                            "Information and Communication Services",
                          ]}
                          isRequired
                          variant="bordered"
                          allowsCustomValue={true}
                          isDisabled={!sector_set?.length}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {category_get &&
                            category_get.map((category) => (
                              <AutocompleteItem
                                key={category.category}
                                value={category.category}
                              >
                                {category.category}
                              </AutocompleteItem>
                            ))}
                        </Autocomplete>
                      </div>
                    </div>
                  </div>

                  {sector_set === "Information and Communication" && (
                    <AddemissionsCloud
                      ref={childRef}
                      sectorProp={sector_set}
                      categoryProp={category_set}
                      nameProp={Name}
                    />
                  )}

                  {sector_set === "Transport" && (
                    <AddemissionsFreight
                      ref={childRef}
                      sectorProp={sector_set}
                      categoryProp={category_set}
                      nameProp={Name}
                    />
                  )}

                  {sector_set === "Restaurants and Accommodation" && (
                    <AddemissionsHotel
                      ref={childRef}
                      sectorProp={sector_set}
                      categoryProp={category_set}
                      nameProp={Name}
                    />
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    onPress={onClose}
                    color="primary"
                    onClick={handleChildSubmit}
                    className={`${
                      isValid ? "bg-primary" : "bg-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!isValid} // Disable button based on form validity
                  >
                    Create
                  </Button>
                </ModalFooter>

                {/* </form> */}
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default Addemissions;
