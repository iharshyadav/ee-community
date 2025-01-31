// @ts-nocheck
"use client";

import { FC, useEffect, useState, useContext, useMemo } from "react";
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
  Autocomplete,
  AutocompleteItem,
  Tooltip,
} from "@nextui-org/react";
import { co2Emission } from "../log-emissions-table";
import { upadateCo2eEmissions } from "@/app/lib/actions";
import { cloud_providers } from "../../../utils/constants";
import { cloud_cpu_year } from "../../../utils/constants";
import { cloud_cpu_load } from "../../../utils/constants";
import { cloud_cpu_duration_unit } from "../../../utils/constants";
import { ScopeContext } from "@/app/(context)/ScopeContext";
import React from "react";

interface editModelProps {
  isOpen: boolean;
  co2emission: co2Emission;
  onClose: () => void;
}

const Label = [
  {
    value: "Scope-1",
  },
  {
    value: "Scope-2",
  },
  {
    value: "Scope-3",
  },
];

const EditModel: FC<editModelProps> = ({ isOpen, co2emission, onClose }) => {
  const [data, setData] = useState<co2Emission | null>(null);
  const [sectors_get, setSectors_get] = useState([]);
  const [category_get, setCategory_get] = useState([]);

  // console.log(co2emission.Name);
  const editdata = co2emission;
  // console.log(editdata);
  // console.log(editdata.requestbody);

  const [Name, setName] = useState("");
  const [cloudProvider, setCloudProvider] = React.useState<React.Key>("");
  const [cpuLoad, setCpuLoad] = useState("");
  const [region, setRegion] = useState("");
  const [duration, setDuration] = useState("");
  const [cpuCount, setCpuCount] = useState("");
  const [sectors, setSectors] = useState("");
  const [category, setCategory] = useState("");
  const [durationUnit, setDurationUnit] = useState("");
  const [year, setYear] = useState("");
  const [cloud_get, setCloud_get] = useState([]);
  const [metric, setMetric] = useState("");
  const { setToggleSkeloton } = useContext(ScopeContext);
  const [responseData, setResponseData] = useState("");
  const [cloudData, setcloudData] = useState("");
  const [dataUnit, setdataUnit] = useState("");
  const [storageType, setstorageType] = useState("");
  const [Scope, setScope] = useState("");

  const { isFormValid, setIsFormValid } = useContext(ScopeContext);

  // setSector(sectorProp);
  // setCategory(categoryProp);

  useEffect(() => {
    let isValid = false;

    if (category === "Cloud Computing - CPU") {
      isValid =
        !!cloudProvider &&
        !!year &&
        !!cpuLoad &&
        !!cpuCount &&
        !!region &&
        !!durationUnit &&
        !!duration &&
        !!Scope;
    } else if (category === "Cloud Computing - Storage") {
      isValid =
        !!cloudProvider &&
        !!year &&
        !!cloudData &&
        !!dataUnit &&
        !!region &&
        !!durationUnit &&
        !!duration &&
        !!storageType &&
        !!Scope;
    } else if (category === "Cloud Computing - Networking") {
      isValid =
        !!cloudProvider &&
        !!year &&
        !!region &&
        !!cloudData &&
        !!dataUnit &&
        !!Scope;
    } else if (category === "Cloud Computing - Memory") {
      isValid =
        !!cloudProvider &&
        !!year &&
        !!region &&
        !!durationUnit &&
        !!duration &&
        !!cloudData &&
        !!dataUnit &&
        !!Scope;
    }

    setIsFormValid(isValid);
  }, [
    cloudProvider,
    year,
    cpuLoad,
    cpuCount,
    region,
    durationUnit,
    duration,
    storageType,
    dataUnit,
    category,
    cloudData,
  ]);

  // console.log(cloudProvider);

  // console.log(cloud_get);

  const capitalizeFirstLetter = (string: string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
  };

  useEffect(() => {
    if (editdata && editdata.requestbody) {
      setName(editdata.Name);
      setCloudProvider(editdata.requestbody.provider);
      setCpuLoad(editdata.requestbody.cpu_load);
      setRegion(editdata.requestbody.region);
      setDuration(editdata.requestbody.duration);
      setCpuCount(editdata.requestbody.cpu_count);
      setSectors(editdata.sector);
      setCategory(editdata.category);
      setDurationUnit(editdata.requestbody.duration_unit);
      setYear(editdata.requestbody.year);
      setcloudData(editdata.requestbody.data);
      setdataUnit(editdata.requestbody.data_unit);
      setstorageType(editdata.requestbody.storage_type);
      setScope(editdata.Label);
    }
  }, [editdata]);

  let newProviders: any;

  useEffect(() => {
    if (cloudProvider) {
      newProviders = editdata.requestbody.provider;
    }
    if (
      cloudProvider != newProviders &&
      cloudProvider != undefined &&
      cloudProvider != ""
    ) {
      console.log(newProviders);
      console.log(cloudProvider);
      fetch(`/api/fetch/cloud/cloud_computing_cpu_region/${cloudProvider}`)
        .then((res) => res.json())
        .then((cloud_get) => {
          setCloud_get(cloud_get);
          console.log(cloud_get);
        });
    }
  }, [cloudProvider]);
  // console.log('cloudProvider:', cloudProvider);
  // console.log('bulkCloudProvider:', bulkCloudProvider);

  console.log(region);
  console.log(Scope);

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentName = co2emission.Name;
    // const updatedData = await upadateData(
    //   currentName,
    //   cloudProvider,
    //   cpuLoad,
    //   region,
    //   duration,
    //   cpuCount,
    //   category,
    //   durationUnit,
    //   year
    // );

    try {
      let postData = null;

      if (
        sectors === "Information and Communication" &&
        category === "Cloud Computing - CPU"
      ) {
        // adding body params to send to the compute end point
        postData = JSON.stringify({
          cpu_count: cpuCount,
          region: region,
          cpu_load: cpuLoad,
          duration: duration,
          duration_unit: durationUnit,
          year: year,
        });
      } else if (
        sectors === "Information and Communication" &&
        category === "Cloud Computing - Memory"
      ) {
        // adding body params to send to the compute end point
        postData = JSON.stringify({
          data: cloudData,
          region: region,
          data_unit: dataUnit,
          duration: duration,
          duration_unit: durationUnit,
          year: year,
        });
      } else if (
        sectors === "Information and Communication" &&
        category === "Cloud Computing - Storage"
      ) {
        // adding body params to send to the compute end point
        postData = JSON.stringify({
          data: cloudData,
          region: region,
          storage_type: storageType,
          data_unit: dataUnit,
          duration: duration,
          duration_unit: durationUnit,
          year: year,
        });
      } else if (
        sectors === "Information and Communication" &&
        category === "Cloud Computing - Networking"
      ) {
        // adding body params to send to the compute end point
        postData = JSON.stringify({
          data: cloudData,
          region: region,
          data_unit: dataUnit,
          year: year,
        });
      }
      // console.log(cpuCount);
      // console.log(region);
      // console.log(cpuLoad);
      // console.log(duration);
      // console.log(durationUnit);
      // console.log(year);

      // Assuming category_set is a string like 'Cloud Computing - CPU'

      const categorySet_split = category.split(" - ");
      // Make sure category_set has at least two parts after splitting

      // console.log(categorySet_split.length >= 2);
      // Extract the second part and convert it to lowercase
      const metricValue = categorySet_split[1].toLowerCase();
      // console.log(metricValue);

      // Update the metric state
      setMetric(metricValue);
      // console.log(metric);

      setToggleSkeloton(true);

      // compute api is called here
      const response = await fetch(
        `/api/compute/cloud/${cloudProvider}/${metricValue}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: postData,
        }
      );

      const responsedata = await response.json(); // Parse JSON response
      setResponseData(responsedata);

      // console.log(responsedata); // Log the fetched data
      const co2e = responsedata.responsedata.co2e;
      const co2e_unit = responsedata.responsedata.co2e_unit;
      // console.log(co2e);
      // Assuming responseData.co2e holds the CO2e value
      // const co2eEmission = await addCo2eEmissions({
      //   Name: nameProp,
      //   sector: sectorProp,
      //   category: categoryProp,
      //   methodology,
      //   year,
      //   region,
      //   co2e_unit: co2e_unit,
      //   co2e: co2e, // Pass CO2e value to addCo2eEmissions
      // });

      // console.log(postData);
      let obj = JSON.parse(postData!);
      obj.provider = cloudProvider;
      console.log(obj, "efwd");

      const co2eEmission = await upadateCo2eEmissions({
        Name: currentName,
        sector: sectors,
        category: category,
        year: year,
        region: region,
        co2e_unit: co2e_unit,
        co2e: co2e, // Pass CO2e value to addCo2eEmissions
        requestbody: obj,
        responsebody: responsedata,
        Scope,
      });

      // console.log(co2e);

      setToggleSkeloton(false);

      // resetting all the values to empty
      setName("");
      setCloudProvider("");
      setYear("");
      setRegion("");
      setDurationUnit("");
      setMetric("");

      return co2eEmission;
    } catch (error) {
      console.error("Error creating Emission:", error);
    }
  };

  return (
    <div>
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
              <ModalHeader className="flex flex-col gap-1 w-96 mb-3">
                Edit Your Information
              </ModalHeader>
              <form
                onSubmit={formSubmitHandler}
                className="flex flex-col gap-6"
              >
                <ModalBody>
                  <div className="flex flex-row text-center justify-center gap-1 mb-3">
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
                      size="lg"
                      name="requestName"
                      disabled
                      placeholder="Enter Emission Name"
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
                  <div className="flex md:flex-row flex-col gap-4 md:gap-10">
                    <div className="flex flex-row items-center text-center justify-center gap-1 mb-4">
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
                      <Autocomplete
                        size="lg"
                        labelPlacement="outside"
                        disabled
                        label="Select a sector data"
                        className="w-96"
                        selectedKey={sectors}
                        name="sectors"
                        variant="bordered"
                        value={sectors}
                        isDisabled={true}
                        // @ts-ignore
                        onSelectionChange={setSectors}
                        isRequired
                        allowsCustomValue={true}
                        style={{
                          outline: "none",
                          boxShadow: "none",
                          border: "none",
                        }}
                      >
                        <AutocompleteItem
                          // @ts-ignore
                          key={sectors}
                          // @ts-ignore
                          value={sectors}
                        >
                          {sectors}
                        </AutocompleteItem>
                      </Autocomplete>
                    </div>

                    <div className="flex flex-row items-center text-center justify-center gap-1 mb-4">
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
                      <Autocomplete
                        label="Select a category"
                        labelPlacement="outside"
                        size="lg"
                        className="w-96"
                        selectedKey={category}
                        name="category"
                        value={category}
                        // @ts-ignore
                        onSelectionChange={setCategory}
                        disabledKeys={[
                          "Information and Communication Services",
                        ]}
                        isRequired
                        variant="bordered"
                        allowsCustomValue={true}
                        isDisabled={true}
                        style={{
                          outline: "none",
                          boxShadow: "none",
                          border: "none",
                        }}
                      >
                        <AutocompleteItem
                          // @ts-ignore
                          key={category}
                          // @ts-ignore
                          value={category}
                        >
                          {category}
                        </AutocompleteItem>
                      </Autocomplete>
                    </div>
                  </div>

                  <div className="flex flex-row gap-10">
                    <div className="flex flex-row items-center text-center justify-center gap-1 mb-4">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">
                              Select a cloud provider
                            </div>
                            <div className="text-tiny">
                              Currently supported Azure, AWS, GCP
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
                          label="Select a cloud provider"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          selectedKey={cloudProvider}
                          name="cloud provider"
                          value={cloudProvider}
                          onSelectionChange={setCloudProvider}
                          isRequired
                          isDisabled={true}
                          variant="bordered"
                          allowsCustomValue={true}
                          // isDisabled={!sectorProp?.length}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {cloud_providers.map((provider) => (
                            <AutocompleteItem
                              key={provider.value}
                              value={provider.value}
                            >
                              {provider.label}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      </div>
                    </div>
                    {/* <div></div> */}
                    <div className="flex flex-row items-center text-center justify-center gap-1 mb-4">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">Year</div>
                            <div className="text-tiny">
                              The year that the computing resources were used.
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
                          label="Year"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          selectedKey={year}
                          name="Year"
                          value={year}
                          isDisabled={true}
                          onSelectionChange={setYear}
                          isRequired
                          variant="bordered"
                          allowsCustomValue={true}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {cloud_cpu_year.map((year) => (
                            <AutocompleteItem
                              key={year.value}
                              value={year.value}
                            >
                              {year.label}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      </div>
                    </div>
                    {/* <div>
                      <Autocomplete
                        label="Year"
                        labelPlacement="outside"
                        size="lg"
                        className="w-96"
                        selectedKey={year}
                        name="Year"
                        value={year}
                        onSelectionChange={setYear}
                        isRequired
                        variant="bordered"
                        allowsCustomValue={true}
                        style={{
                          outline: "none",
                          boxShadow: "none",
                          border: "none",
                        }}
                      >
                        {cloud_cpu_year.map((year) => (
                          <AutocompleteItem key={year.value} value={year.value}>
                            {year.label}
                          </AutocompleteItem>
                        ))}
                      </Autocomplete>
                    </div> */}
                  </div>
                  <div className="flex flex-row items-center gap-10">
                    <div className="flex flex-row items-center text-center justify-center gap-1 mb-4">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">
                              CPU Count
                            </div>
                            <div className="text-tiny">
                              The number of virtual cores you are calculating
                              for. Note that vCPU load is fixed at 50%.
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
                      <Autocomplete
                        label="Select a Scope"
                        labelPlacement="outside"
                        size="lg"
                        className="w-96"
                        selectedKey={Scope}
                        name="Labels"
                        value={Scope}
                        onSelectionChange={setScope}
                        isDisabled={true}
                        isRequired
                        variant="bordered"
                        allowsCustomValue={true}
                        style={{
                          outline: "none",
                          boxShadow: "none",
                          border: "none",
                        }}
                      >
                        {Label.map((scopes, index) => (
                          <AutocompleteItem
                            key={scopes.value}
                            value={scopes.value}
                          >
                            {scopes.value}
                          </AutocompleteItem>
                        ))}
                      </Autocomplete>
                    </div>
                    <div className="flex flex-row items-center text-center justify-center gap-1 mb-4">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">Region</div>
                            <div className="text-tiny">
                              The region that is relevant for the calculation,
                              as specified by the cloud provider.
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
                        <Input
                          label="Region"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          variant="bordered"
                          isRequired
                          name="region"
                          isDisabled={true}
                          value={region}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                          onChange={(event) => setRegion(event.target.value)}
                        />
                        {/* <Autocomplete
                          label="Region"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          selectedKey={region}
                          name="Region"
                          value={region}
                          onSelectionChange={setRegion}
                          isRequired
                          variant="bordered"
                          allowsCustomValue={true}
                          isDisabled={true}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {cloud_get.map((cloud) => (
                            <AutocompleteItem
                              key={cloud.region}
                              value={cloud.region}
                            >
                              {cloud.region}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete> */}
                      </div>
                    </div>
                    <div></div>
                  </div>
                  {(category === "Cloud Computing - CPU" ||
                    category === "Cloud Computing - Storage" ||
                    category !== "Cloud Computing - Networking") && (
                    <div className="flex flex-row gap-10">
                      <div className="flex flex-row items-center text-center justify-center gap-1 mb-4">
                        <Tooltip
                          placement={"top"}
                          content={
                            <div className="px-1 py-2">
                              <div className="text-small font-bold">
                                Duration
                              </div>
                              <div className="text-tiny">
                                Amount of time or period for which vCPUs are
                                running for.
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
                        <Input
                          label="Duration"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          variant="bordered"
                          isRequired
                          name="duration"
                          value={duration}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                          onChange={(event) => setDuration(event.target.value)}
                        />
                      </div>

                      <div className="flex flex-row items-center text-center justify-center gap-1 mb-4">
                        <Tooltip
                          placement={"top"}
                          content={
                            <div className="px-1 py-2">
                              <div className="text-small font-bold">
                                Duration Unit
                              </div>
                              <div className="text-tiny">
                                Unit of duration/time. Accepted values are hour,
                                <br />
                                min and sec. default unit as hour.
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
                        <Autocomplete
                          label="Duration unit"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          selectedKey={durationUnit}
                          name="cloud provider"
                          value={durationUnit}
                          onSelectionChange={setDurationUnit}
                          isRequired
                          variant="bordered"
                          allowsCustomValue={true}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {cloud_cpu_duration_unit.map((duration_unit) => (
                            <AutocompleteItem
                              key={duration_unit.value}
                              value={duration_unit.value}
                            >
                              {duration_unit.label}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      </div>
                    </div>
                  )}

                  {(category === "Cloud Computing - Storage" ||
                    category === "Cloud Computing - Networking" ||
                    category !== "Cloud Computing - CPU") && (
                    <div className="flex flex-row gap-10">
                      <div className="flex flex-row items-center text-center justify-center gap-1 mb-4">
                        <Tooltip
                          placement={"top"}
                          content={
                            <div className="px-1 py-2">
                              <div className="text-small font-bold">
                                Custom Content
                              </div>
                              <div className="text-tiny">
                                How much memory you have allocated. As memory
                                <br />
                                requires power to be available even if unused,
                                <br />
                                you should put in the amount of memory that you
                                <br />
                                have available - not only the amount you're
                                <br />
                                using
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
                        <Input
                          label="data"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          variant="bordered"
                          isRequired
                          name="data"
                          value={cloudData}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                          onChange={(event) => setcloudData(event.target.value)}
                        />
                      </div>

                      <div className="flex flex-row items-center text-center justify-center gap-1 mb-4">
                        <Tooltip
                          placement={"top"}
                          content={
                            <div className="px-1 py-2">
                              <div className="text-small font-bold">
                                Data Unit
                              </div>
                              <div className="text-tiny">
                                Unit of Data. Accepted values are GB, KB, MB, PB
                                and TB.
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
                        <Input
                          label="data_unit"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          variant="bordered"
                          isRequired
                          name="data_unit"
                          value={dataUnit}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                          onChange={(event) => setdataUnit(event.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-row gap-10">
                    {category === "Cloud Computing - CPU" && (
                      <div className="flex flex-row items-center text-center justify-center gap-1 mb-4">
                        <Tooltip
                          placement={"top"}
                          content={
                            <div className="px-1 py-2">
                              <div className="text-small font-bold">
                                CPU Count
                              </div>
                              <div className="text-tiny">
                                The number of virtual cores you are calculating
                                for. Note that vCPU load is fixed at 50%.
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
                        <Input
                          label="CPU Count"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          variant="bordered"
                          isRequired
                          name="cpu_count"
                          value={cpuCount}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                          onChange={(event) => setCpuCount(event.target.value)}
                        />
                      </div>
                    )}

                    {category === "Cloud Computing - Storage" && (
                      <div className="flex flex-row items-center text-center justify-center gap-1 mb-4">
                        <Tooltip
                          placement={"top"}
                          content={
                            <div className="px-1 py-2">
                              <div className="text-small font-bold">
                                Storage Type
                              </div>
                              <div className="text-tiny">
                                Which type of hard drive the data is stored on.
                                <br />
                                Valid values are ssd (solid-state drive) and hdd
                                <br />
                                (hard disk drive). The cloud provider does not
                                <br />
                                always specify this for managed services, so you
                                <br />
                                might have to make an informed guess.
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
                        <Input
                          label="Storage_type"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          variant="bordered"
                          isRequired
                          name="Storage_type"
                          value={storageType}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                          onChange={(event) =>
                            setstorageType(event.target.value)
                          }
                        />
                      </div>
                    )}
                    {category === "Cloud Computing - CPU" && (
                      <div className="flex flex-row items-center text-center justify-center gap-1 mb-4">
                        <Tooltip
                          placement={"top"}
                          content={
                            <div className="px-1 py-2">
                              <div className="text-small font-bold">
                                Average_vcpu_utilization
                              </div>
                              <div className="text-tiny">
                                The average load across all of your vCPU's
                                <br />
                                specified as a float between 0 and 1. If you
                                have
                                <br />
                                two vCPU's that are both working at 100%
                                <br />
                                efficiency across the calculation duration, you
                                <br />
                                would put in 1. If you have four vCPU's where
                                two
                                <br />
                                are working at 100%, and two are working at 50%,
                                <br />
                                you would put in 0.75 here. Default value as 0.5
                                <br />
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
                            label="CPU Load"
                            labelPlacement="outside"
                            size="lg"
                            className="w-96"
                            selectedKey={cpuLoad}
                            name="CPU Load"
                            value={cpuLoad}
                            onSelectionChange={setCpuLoad}
                            isRequired
                            variant="bordered"
                            allowsCustomValue={true}
                            style={{
                              outline: "none",
                              boxShadow: "none",
                              border: "none",
                            }}
                          >
                            {cloud_cpu_load.map((cpu_load) => (
                              <AutocompleteItem
                                key={cpu_load.value}
                                value={cpu_load.value}
                              >
                                {cpu_load.label}
                              </AutocompleteItem>
                            ))}
                          </Autocomplete>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* <div className="flex flex-row gap-12">
                    <Autocomplete
                      label="Select a Scope"
                      labelPlacement="outside"
                      size="lg"
                      className="w-96"
                      selectedKey={Scope}
                      name="Labels"
                      value={Scope}
                      onSelectionChange={setScope}
                      isRequired
                      variant="bordered"
                      allowsCustomValue={true}
                      style={{
                        outline: "none",
                        boxShadow: "none",
                        border: "none",
                      }}
                    >
                      {Label.map((scopes, index) => (
                        <AutocompleteItem
                          key={scopes.value}
                          value={scopes.value}
                        >
                          {scopes.value}
                        </AutocompleteItem>
                      ))}
                    </Autocomplete>
                  </div> */}
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
    </div>
  );
};

export default EditModel;
