// This below check is added to avoid type script warnings and errors, remove this in future and fix all the type erros
//@ts-nocheck
"use client";

// server action to calculate and add co2 emissions to the table
import { addCo2eEmissions } from "../../../lib/actions";
import { cloud_cpu_duration_unit } from "../../../utils/constants";
import { cloud_providers } from "../../../utils/constants";
import { cloud_cpu_year } from "../../../utils/constants";
import { cloud_memory_year } from "../../../utils/constants";
import { Scopes } from "../../../utils/constants";
import { cloud_cpu_load } from "../../../utils/constants";
import { data_units } from "../../../utils/constants";
import { cloud_storage_type } from "../../../utils/constants";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { ScopeContext } from "@/app/(context)/ScopeContext";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
import {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useContext,
} from "react";
import React from "react";

import Addemissions from "./logemissions-root";

// const Label = [
//   {
//     value: "Scope-1",
//   },
//   {
//     value: "Scope-2",
//   },
//   {
//     value: "Scope-3",
//   },
// ];

const AddemissionsCloud = forwardRef(
  ({ nameProp, sectorProp, categoryProp }, ref) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [Name, setName] = useState("");
    const [sector, setSector] = useState([]);
    const [category, setCategory] = useState([]);
    const [cloud_get_cpu_region, setCloud_get_cpu_region] = useState([]);
    const [cloud_get_cpu_year, setCloud_get_cpu_year] = useState([]);

    const [cloud_get_memory_region, setCloud_get_memory_region] = useState([]);
    const [cloud_get_memory_year, setCloud_get_memory_year] = useState([]);

    const [cloud_get_network_region, setCloud_get_network_region] = useState(
      []
    );
    const [cloud_get_network_year, setCloud_get_network_year] = useState([]);

    const [cloud_get_storage_region, setCloud_get_storage_region] = useState(
      []
    );
    const [cloud_get_storage_year, setCloud_get_storage_year] = useState([]);

    const [year, setYear] = React.useState<React.Key>("");
    const [region, setRegion] = React.useState<React.Key>("");
    const [cpu_count, setCpu_count] = React.useState<React.Key>("");
    const [cpu_load, setCpu_load] = React.useState<React.Key>("");
    const [data, setData] = React.useState<React.Key>("");
    const [data_unit, setData_unit] = React.useState<React.Key>("");
    const [storage_type, setStorage_type] = React.useState<React.Key>("");
    const [duration_unit, setDuration_unit] = React.useState<React.Key>("");
    const [duration, setDuration] = React.useState<React.Key>("");
    const [co2e_unit, setCo2eUnit] = React.useState<React.Key>("");
    const [metric, setMetric] = useState("");
    const [provider, setProvider] = React.useState<React.Key>("");
    const [responseData, setResponseData] = useState("");
    const { setToggleSkeloton } = useContext(ScopeContext);
    const router = useRouter();
    const [Scope, setScope] = useState("");

    const { isFormValid, setIsFormValid } = useContext(ScopeContext);

    // setSector(sectorProp);
    // setCategory(categoryProp);

    // useEffect(() => {
    //   setIsFormValid(
    //     provider &&
    //       year &&
    //       cpu_load &&
    //       cpu_count &&
    //       region &&
    //       duration_unit &&
    //       duration
    //   );
    // }, [provider, year, cpu_load, cpu_count, region, duration_unit, duration]);

    // useEffect(() => {
    //   setIsFormValid(
    //     provider &&
    //       year &&
    //       cpu_load &&
    //       cpu_count &&
    //       region &&
    //       duration_unit &&
    //       duration &&
    //       Scope
    //   );
    // }, [
    //   provider,
    //   year,
    //   cpu_load,
    //   cpu_count,
    //   region,
    //   duration_unit,
    //   duration,
    //   Scope,
    // ]);

    useEffect(() => {
      let isValid = false;
      if (categoryProp === "Cloud Computing - CPU") {
        isValid =
          provider.length > 0 &&
          !!year &&
          !!cpu_load &&
          !!cpu_count &&
          !!region &&
          !!duration_unit &&
          !!duration &&
          !!Scope;
      } else if (categoryProp === "Cloud Computing - Storage") {
        isValid =
          provider.length > 0 &&
          !!year &&
          !!data &&
          !!data_unit &&
          !!region &&
          !!duration_unit &&
          !!duration &&
          !!storage_type &&
          !!Scope;
      } else if (categoryProp === "Cloud Computing - Networking") {
        isValid =
          provider.length > 0 &&
          !!year &&
          !!region &&
          !!data &&
          !!data_unit &&
          !!Scope;
      } else if (categoryProp === "Cloud Computing - Memory") {
        isValid =
          provider.length > 0 &&
          !!year &&
          !!region &&
          !!duration_unit &&
          !!duration &&
          !!data &&
          !!data_unit &&
          !!Scope;
      }
      setIsFormValid(isValid);
    }, [
      provider,
      year,
      cpu_load,
      cpu_count,
      region,
      duration_unit,
      duration,
      storage_type,
      data_unit,
      categoryProp,
      data,
      Scope,
      setIsFormValid,
    ]);

    useImperativeHandle(ref, () => ({
      formSubmitHandler,
    }));

    console.log(sectorProp);

    console.log(categoryProp);

    console.log(nameProp);

    console.log(provider);
    console.log(region);

    useEffect(() => {
      if (provider) {
        fetch(`/api/fetch/cloud/cloud_computing_memory_region/${provider}`)
          .then((res) => res.json())
          .then((cloud_get_memory_region) => {
            setCloud_get_memory_region(cloud_get_memory_region);
          });
      }
    }, [provider]);

    useEffect(() => {
      if (region) {
        fetch(
          `/api/fetch/cloud/cloud_computing_memory_region/${provider}/${region}`
        )
          .then((res) => res.json())
          .then((cloud_get_memory_year) => {
            setCloud_get_memory_year(cloud_get_memory_year);
          });
      }
    }, [region]);

    useEffect(() => {
      if (provider) {
        fetch(`/api/fetch/cloud/cloud_computing_cpu_region/${provider}`)
          .then((res) => res.json())
          .then((cloud_get_cpu_region) => {
            setCloud_get_cpu_region(cloud_get_cpu_region);
          });
      }
    }, [provider]);

    useEffect(() => {
      if (region) {
        fetch(
          `/api/fetch/cloud/cloud_computing_cpu_region/${provider}/${region}`
        )
          .then((res) => res.json())
          .then((cloud_get_cpu_year) => {
            setCloud_get_cpu_year(cloud_get_cpu_year);
          });
      }
    }, [region]);

    useEffect(() => {
      if (provider) {
        fetch(`/api/fetch/cloud/cloud_computing_storage_region/${provider}`)
          .then((res) => res.json())
          .then((cloud_get_storage_region) => {
            setCloud_get_storage_region(cloud_get_storage_region);
          });
      }
    }, [provider]);

    useEffect(() => {
      if (region) {
        fetch(
          `/api/fetch/cloud/cloud_computing_storage_region/${provider}/${region}`
        )
          .then((res) => res.json())
          .then((cloud_get_storage_year) => {
            setCloud_get_storage_year(cloud_get_storage_year);
          });
      }
    }, [region]);

    useEffect(() => {
      if (provider) {
        fetch(`/api/fetch/cloud/cloud_computing_network_region/${provider}`)
          .then((res) => res.json())
          .then((cloud_get_network_region) => {
            setCloud_get_network_region(cloud_get_network_region);
          });
      }
    }, [provider]);

    useEffect(() => {
      if (region) {
        fetch(
          `/api/fetch/cloud/cloud_computing_network_region/${provider}/${region}`
        )
          .then((res) => res.json())
          .then((cloud_get_network_year) => {
            setCloud_get_network_year(cloud_get_network_year);
          });
      }
    }, [region]);

    console.log(cloud_get_cpu_region);
    console.log(cloud_get_cpu_year);
    console.log(cloud_get_memory_region);

    const formSubmitHandler = async (event) => {
      // event.preventDefault();
      try {
        let postData = null;

        if (
          sectorProp === "Information and Communication" &&
          categoryProp === "Cloud Computing - CPU"
        ) {
          // adding body params to send to the compute end point
          postData = JSON.stringify({
            cpu_count: cpu_count,
            region: region,
            cpu_load: cpu_load,
            duration: duration,
            duration_unit: duration_unit,
            year: year,
          });
        } else if (
          sectorProp === "Information and Communication" &&
          categoryProp === "Cloud Computing - Memory"
        ) {
          // adding body params to send to the compute end point
          postData = JSON.stringify({
            data: data,
            region: region,
            data_unit: data_unit,
            duration: duration,
            duration_unit: duration_unit,
            year: year,
          });
        } else if (
          sectorProp === "Information and Communication" &&
          categoryProp === "Cloud Computing - Storage"
        ) {
          // adding body params to send to the compute end point
          postData = JSON.stringify({
            data: data,
            region: region,
            storage_type: storage_type,
            data_unit: data_unit,
            duration: duration,
            duration_unit: duration_unit,
            year: year,
          });
        } else if (
          sectorProp === "Information and Communication" &&
          categoryProp === "Cloud Computing - Networking"
        ) {
          // adding body params to send to the compute end point
          postData = JSON.stringify({
            data: data,
            region: region,
            data_unit: data_unit,
            year: year,
          });
        }

        // Log the form data for cpu
        console.log(cpu_count);
        console.log(region);
        console.log(cpu_load);
        console.log(duration);
        console.log(duration_unit);
        console.log(year);

        // Log the form data for memory
        console.log(duration);
        console.log(data);
        console.log(region);
        console.log(data_unit);
        console.log(year);
        console.log(duration_unit);

        // Assuming category_set is a string like 'Cloud Computing - CPU'

        const categorySet_split = categoryProp.split(" - ");
        // Make sure category_set has at least two parts after splitting

        console.log(categorySet_split.length >= 2);
        // Extract the second part and convert it to lowercase
        const metricValue = categorySet_split[1].toLowerCase();
        console.log(metricValue);

        // Update the metric state
        setMetric(metricValue);
        console.log(metric);

        setToggleSkeloton(true);

        console.log(postData);

        // compute api is called here
        const response = await fetch(
          `/api/compute/cloud/${provider}/${metricValue}`,
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

        console.log(responsedata); // Log the fetched data
        const co2e = responsedata.responsedata.co2e;
        const co2e_unit = responsedata.responsedata.co2e_unit;
        console.log(co2e);
        console.log(postData);
        let obj = JSON.parse(postData);
        obj.provider = provider;
        console.log(obj);

        const co2eEmission = await addCo2eEmissions({
          Name: nameProp,
          sector: sectorProp,
          category: categoryProp,
          year,
          region,
          co2e_unit: co2e_unit,
          co2e: co2e, // Pass CO2e value to addCo2eEmissions
          requestbody: obj,
          responsebody: responsedata,
          Scope,
        });

        console.log(co2e);

        setToggleSkeloton(false);

        // if (co2eEmission?.error) {
        //   toast.error(co2eEmission.error);
        // }

        // resetting all the values to empty
        setName("");
        setProvider("");
        setYear("");
        setRegion("");
        setDuration_unit("");
        setMetric("");

        return co2eEmission;
      } catch (error) {
        console.error("Error creating Emission:", error);
      }
    };

    // useEffect(() => {
    //   router.refresh();
    // }, []);

    useImperativeHandle(ref, () => ({
      formSubmitHandler,
    }));

    return (
      <div>
        <>
          <form onSubmit={formSubmitHandler} className="flex flex-col gap-6">
            {sectorProp === "Information and Communication" &&
              categoryProp === "Cloud Computing - CPU" && (
                <>
                  <div className="flex flex-row gap-12">
                    <div className="flex flex-row items-center text-center justify-center gap-1">
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
                          selectedKey={provider}
                          name="cloud provider"
                          value={provider}
                          onSelectionChange={setProvider}
                          isRequired
                          variant="bordered"
                          allowsCustomValue={true}
                          isDisabled={!sectorProp?.length}
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

                    <div className="flex flex-row items-center text-center justify-center gap-1">
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
                        <Autocomplete
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
                          isDisabled={!provider?.length}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {cloud_get_cpu_region.map((cloud) => (
                            <AutocompleteItem
                              key={cloud.region}
                              value={cloud.region}
                            >
                              {cloud.region}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-12">
                    <div className="flex flex-row items-center text-center justify-center gap-1">
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
                              specified as a float between 0 and 1. If you have
                              <br />
                              two vCPU's that are both working at 100%
                              <br />
                              efficiency across the calculation duration, you
                              <br />
                              would put in 1. If you have four vCPU's where two
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
                          selectedKey={cpu_load}
                          name="CPU Load"
                          value={cpu_load}
                          onSelectionChange={setCpu_load}
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
                    <div className="flex flex-row items-center text-center justify-center gap-1">
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
                          onSelectionChange={setYear}
                          isRequired
                          variant="bordered"
                          allowsCustomValue={true}
                          isDisabled={!region?.length}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {cloud_get_cpu_year.map((year) => (
                            <AutocompleteItem key={year.year} value={year.year}>
                              {year.year}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-12">
                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">Duration</div>
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
                      <div>
                        <Input
                          label="Duration"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          variant="bordered"
                          isRequired
                          name="duration"
                          value={duration}
                          allowsCustomValue={true}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                          onChange={(event) => setDuration(event.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">
                              Duration unit
                            </div>
                            <div className="text-tiny">
                              Unit of duration/time. Accepted values are hour,
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
                      <div>
                        <Autocomplete
                          label="Duration unit"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          selectedKey={duration_unit}
                          name="cloud provider"
                          value={duration_unit}
                          onSelectionChange={setDuration_unit}
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
                  </div>

                  <div className="flex flex-row items-center text-center justify-center gap-1">
                    <Tooltip
                      placement={"top"}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">CPU Count</div>
                          <div className="text-tiny">
                            The number of virtual cores you are calculating for.
                            Note that vCPU load is fixed at 50%.
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
                    <div className="flex flex-row gap-12">
                      <div>
                        <Input
                          label="CPU Count"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          variant="bordered"
                          isRequired
                          name="cpu_count"
                          value={cpu_count}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                          onChange={(event) => setCpu_count(event.target.value)}
                        />
                      </div>
                      <div className="flex flex-row items-center text-center justify-center gap-1">
                        <Tooltip
                          placement={"top"}
                          content={
                            <div className="px-1 py-2">
                              <div className="text-small font-bold">Scopes</div>
                              <div className="text-tiny">
                                Select the Scopes - 1, 2 or 3
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
                            isDisabled={!sectorProp?.length}
                          >
                            {Scopes.map((scopes, index) => (
                              <AutocompleteItem
                                key={scopes.value}
                                value={scopes.value}
                              >
                                {scopes.value}
                              </AutocompleteItem>
                            ))}
                          </Autocomplete>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </>
              )}

            {sectorProp === "Information and Communication" &&
              categoryProp === "Cloud Computing - Memory" && (
                <>
                  <div className="flex flex-row gap-12">
                    <div>
                      <div className="flex flex-row items-center text-center justify-center gap-1">
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
                        <Autocomplete
                          label="Select a cloud provider"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          selectedKey={provider}
                          name="cloud provider"
                          value={provider}
                          onSelectionChange={setProvider}
                          isRequired
                          variant="bordered"
                          allowsCustomValue={true}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                          isDisabled={!sectorProp?.length}
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
                    <div className="flex flex-row items-center text-center justify-center gap-1">
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
                        <Autocomplete
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
                          isDisabled={!provider?.length}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {cloud_get_memory_region.map((cloud) => (
                            <AutocompleteItem
                              key={cloud.region}
                              value={cloud.region}
                            >
                              {cloud.region}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-12">
                    <div>
                      <div className="flex flex-row items-center text-center justify-center gap-1">
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
                          label="Data"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          variant="bordered"
                          isRequired
                          name="data"
                          value={data}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                          onChange={(event) => setData(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center text-center justify-center gap-1">
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
                          onSelectionChange={setYear}
                          isRequired
                          variant="bordered"
                          allowsCustomValue={true}
                          isDisabled={!region?.length}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {cloud_get_memory_year.map((year) => (
                            <AutocompleteItem key={year.year} value={year.year}>
                              {year.year}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-12">
                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">Duration</div>
                            <div className="text-tiny">
                              How long the memory is available.
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
                    </div>
                    <div className="flex flex-row items-center text-center justify-center gap-1">
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
                      <div>
                        <Autocomplete
                          label="Duration unit"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          selectedKey={duration_unit}
                          name="cloud provider"
                          value={duration_unit}
                          onSelectionChange={setDuration_unit}
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
                  </div>

                  <div className="flex flex-row items-center text-center justify-center gap-1">
                    <Tooltip
                      placement={"top"}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-small font-bold">Data Unit</div>
                          <div className="text-tiny">
                            Unit of Data. Accepted values are GB, KB, MB, PB and
                            TB.
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
                    <div className="flex flex-row gap-12">
                      <div>
                        <Autocomplete
                          label="Data unit"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          selectedKey={data_unit}
                          name="Data unit"
                          value={data_unit}
                          onSelectionChange={setData_unit}
                          isRequired
                          variant="bordered"
                          allowsCustomValue={true}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {data_units.map((data_unit) => (
                            <AutocompleteItem
                              key={data_unit.value}
                              value={data_unit.value}
                            >
                              {data_unit.label}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      </div>

                      <div className="flex flex-row items-center text-center justify-center gap-1">
                        <Tooltip
                          placement={"top"}
                          content={
                            <div className="px-1 py-2">
                              <div className="text-small font-bold">Scopes</div>
                              <div className="text-tiny">
                                Select the Scopes - 1, 2 or 3
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
                            isDisabled={!sectorProp?.length}
                          >
                            {Scopes.map((scopes, index) => (
                              <AutocompleteItem
                                key={scopes.value}
                                value={scopes.value}
                              >
                                {scopes.value}
                              </AutocompleteItem>
                            ))}
                          </Autocomplete>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

            {sectorProp === "Information and Communication" &&
              categoryProp === "Cloud Computing - Storage" && (
                <>
                  <div className="flex flex-row gap-12">
                    <div className="flex flex-row items-center text-center justify-center gap-1">
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
                          selectedKey={provider}
                          name="cloud provider"
                          value={provider}
                          onSelectionChange={setProvider}
                          isRequired
                          variant="bordered"
                          allowsCustomValue={true}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                          isDisabled={!sectorProp?.length}
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
                    <div className="flex flex-row items-center text-center justify-center gap-1">
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
                        <Autocomplete
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
                          isDisabled={!provider?.length}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {cloud_get_storage_region.map((cloud) => (
                            <AutocompleteItem
                              key={cloud.region}
                              value={cloud.region}
                            >
                              {cloud.region}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-12">
                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">Data</div>
                            <div className="text-tiny">
                              How much data is stored. If you use managed
                              <br />
                              services for storage that replicate data across
                              <br />
                              multiple datacenters or hard drives, you might
                              <br />
                              need to take your data amount and multiply it by a
                              <br />
                              replication factor.
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
                          label="Data"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          variant="bordered"
                          isRequired
                          name="data"
                          value={data}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                          onChange={(event) => setData(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center text-center justify-center gap-1">
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
                          onSelectionChange={setYear}
                          isRequired
                          variant="bordered"
                          allowsCustomValue={true}
                          isDisabled={!region?.length}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {cloud_get_storage_year.map((year) => (
                            <AutocompleteItem key={year.year} value={year.year}>
                              {year.year}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-12">
                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">Duration</div>
                            <div className="text-tiny">
                              Amount of time or period for which storage process
                              are running for.
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
                    </div>
                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">
                              Duration Unit
                            </div>
                            <div className="text-tiny">
                              How long the data is stored for. Accepted values
                              <br />
                              are hour, min and sec. default unit as hour.
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
                          label="Duration unit"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          selectedKey={duration_unit}
                          name="cloud provider"
                          value={duration_unit}
                          onSelectionChange={setDuration_unit}
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
                  </div>
                  <div className="flex flex-row gap-12">
                    <div className="flex flex-row items-center text-center justify-center gap-1">
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

                      <div>
                        <Autocomplete
                          label="Data unit"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          selectedKey={data_unit}
                          name="Data unit"
                          value={data_unit}
                          onSelectionChange={setData_unit}
                          isRequired
                          variant="bordered"
                          allowsCustomValue={true}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {data_units.map((data_unit) => (
                            <AutocompleteItem
                              key={data_unit.value}
                              value={data_unit.value}
                            >
                              {data_unit.label}
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
                      <div>
                        <Autocomplete
                          label="Storage type"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          selectedKey={storage_type}
                          name="cloud provider"
                          value={storage_type}
                          onSelectionChange={setStorage_type}
                          isRequired
                          variant="bordered"
                          allowsCustomValue={true}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {cloud_storage_type.map((storage_type) => (
                            <AutocompleteItem
                              key={storage_type.value}
                              value={storage_type.value}
                            >
                              {storage_type.label}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-12">
                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">Scopes</div>
                            <div className="text-tiny">
                              Select the Scopes - 1, 2 or 3
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
                          isDisabled={!sectorProp?.length}
                        >
                          {Scopes.map((scopes, index) => (
                            <AutocompleteItem
                              key={scopes.value}
                              value={scopes.value}
                            >
                              {scopes.value}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      </div>
                    </div>
                  </div>
                </>
              )}

            {sectorProp === "Information and Communication" &&
              categoryProp === "Cloud Computing - Networking" && (
                <>
                  <div className="flex flex-row gap-12">
                    <div className="flex flex-row items-center text-center justify-center gap-1">
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
                          selectedKey={provider}
                          name="cloud provider"
                          value={provider}
                          onSelectionChange={setProvider}
                          isRequired
                          variant="bordered"
                          allowsCustomValue={true}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                          isDisabled={!sectorProp?.length}
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
                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">Region</div>
                            <div className="text-tiny">
                              Data center region name as specified by provider.
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
                          isDisabled={!provider?.length}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {cloud_get_network_region.map((cloud) => (
                            <AutocompleteItem
                              key={cloud.region}
                              value={cloud.region}
                            >
                              {cloud.region}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-12">
                    <div className="flex flex-row items-center text-center justify-center gap-1">
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
                      <div>
                        <Autocomplete
                          label="Data unit"
                          labelPlacement="outside"
                          size="lg"
                          className="w-96"
                          selectedKey={data_unit}
                          name="Data unit"
                          value={data_unit}
                          onSelectionChange={setData_unit}
                          isRequired
                          variant="bordered"
                          allowsCustomValue={true}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {data_units.map((data_unit) => (
                            <AutocompleteItem
                              key={data_unit.value}
                              value={data_unit.value}
                            >
                              {data_unit.label}
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
                            <div className="text-small font-bold">Year</div>
                            <div className="text-tiny">
                              The year, the networking usage occurred.
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
                          onSelectionChange={setYear}
                          isRequired
                          variant="bordered"
                          allowsCustomValue={true}
                          isDisabled={!region?.length}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                        >
                          {cloud_get_network_year.map((year) => (
                            <AutocompleteItem key={year.year} value={year.year}>
                              {year.year}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-12">
                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">Data</div>
                            <div className="text-tiny">
                              Data size for networking process.
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
                          size="lg"
                          isRequired
                          label="Data"
                          labelPlacement="outside"
                          className="w-96"
                          variant="bordered"
                          name="data"
                          value={data}
                          style={{
                            outline: "none",
                            boxShadow: "none",
                            border: "none",
                          }}
                          onChange={(event) => setData(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center text-center justify-center gap-1">
                      <Tooltip
                        placement={"top"}
                        content={
                          <div className="px-1 py-2">
                            <div className="text-small font-bold">Scopes</div>
                            <div className="text-tiny">
                              Select the Scopes - 1, 2 or 3
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
                          isDisabled={!sectorProp?.length}
                        >
                          {Scopes.map((scopes, index) => (
                            <AutocompleteItem
                              key={scopes.value}
                              value={scopes.value}
                            >
                              {scopes.value}
                            </AutocompleteItem>
                          ))}
                        </Autocomplete>
                      </div>
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

export default AddemissionsCloud;
