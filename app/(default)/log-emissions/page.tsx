// @ts-nocheck

"use client";
import Head from "next/head";
import { SelectedItemsProvider } from "@/app/selected-items-context";
import DeleteButtonLogEmission from "@/components/delete-button-log-emission";
// import FilterButton from '@/components/dropdown-filter'
import Co2EmissionsTable from "./log-emissions-table";
import PaginationClassic from "@/components/pagination-classic";
import Addemissions from "./add/logemissions-root";
import Search from "@/components/search";
import { useContext, useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Toast02 from "../../../components/toast-02";
import { ScopeContext } from "@/app/(context)/ScopeContext";
import { useRouter } from "next/navigation";
import Skeleton from "./components/skeleton";
import { Co2eEmissions } from "@/app/lib/data";
import Template from "./components/template";
import { toast } from "sonner";

function Co2EmissionsContent({ searchParams }: any) {
  const [loading, setLoading] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [Logs, setLogs] = useState([]);
  const [toastOpen, setToastOpen] = useState(false);
  const [co2e_emissions, setCo2eEmissions] = useState([]);
  const [count, setCount] = useState(0);

  const [files, setFiles] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [triggerstate, settriggerstate] = useState(false);
  // const q = searchParams?.q || "";
  // const page = searchParams?.page || 1;

  const router = useRouter();

  const { setTrackAddNewEmission, toggleSkeloton } = useContext(ScopeContext);

  const [isEditModelOpen, setIsEditModelOpen] = useState(false);

  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsEditModelOpen(true);
  };

  const handleCloseEditModel = () => {
    setIsEditModelOpen(false);
  };

  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  console.log(q, page);

  // const { count, apikeys } = await fetchApikeys(q, page);

  // Fetching all scopes sum from server components(action.ts).
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        setLoading(true);
        const { count, co2e_emissions } = await Co2eEmissions(q, page);
        // console.log(co2e_emissions);
        const mappedData = co2e_emissions.map((item: any) => ({
          id: item.id,
          Name: item.Name,
          sector: item.sector,
          category: item.category,
          region: item.region,
          co2e_unit: item.co2e_unit,
          year: parseInt(item.year),
          co2e: item.co2e,
          Label: item.Label,
          responsebody: item.responsebody,
          requestbody: item.requestbody,
          created_at: new Date(item.created_at).toLocaleString(),
        }));
        setLogs(mappedData);
        setCount(count);
        // setArr(co2eSum.scopeSums)
        // setSaveCo2eSum(co2eSum.scopeSums);
      } catch (error) {
        console.error("Error fetching CO2e sums:", error);
      } finally {
        setLoading(false);
        settriggerstate(false);
        router.refresh();
      }
    };

    fetchLogs();
  }, [q, page, trigger, toggleSkeloton, triggerstate]);

  // useEffect(() => {
  //   const fetchLogs = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await fetch("/api/fetchlog");
  //       if (!res.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await res.json();
  //       console.log(data);

  //       // console.log(data)
  //       const mappedData = data.map((item: any) => ({
  //         id: item.id,
  //         Name: item.Name,
  //         sector: item.sector,
  //         category: item.category,
  //         region: item.region,
  //         co2e_unit: item.co2e_unit,
  //         year: parseInt(item.year),
  //         co2e: item.co2e,
  //         Label: item.Label,
  //         responsebody: item.responsebody,
  //         requestbody: item.requestbody,
  //       }));
  //       setLogs(mappedData);
  //     } catch (error) {
  //       console.error("Error fetching customer data:", error);
  //     } finally {
  //       setLoading(false);
  //       settriggerstate(false);
  //       router.refresh();
  //     }
  //   };

  //   fetchLogs();
  // }, [trigger, toggleSkeloton, triggerstate]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/getCo2eEmissions", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ q, page }),
  //       });

  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }

  //       const result = await response.json();
  //       console.log(result);
  //       setCo2eEmissions(result.co2e_emissions);
  //       setCount(result.count);
  //     } catch (err) {
  //       setError((err as Error).message);
  //     }
  //   };

  //   fetchData();
  // }, [q, page]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (
        file.type !== "text/csv" &&
        file.type !==
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        setError("Please upload a CSV or XLSX file.");
        setFiles(null);
        setToastOpen(true);
      } else {
        setError(null);
        setFiles(file);
      }
    }
  };

  const handleRemoveFile = () => {
    setFiles(null); // Remove the selected file
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!files) {
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      // console.log(formData)
      formData.set("file", files);

      setLoading(true);
      console.log(formData);
      const res = await fetch("/api/computeapi", {
        method: "POST",
        body: formData,
      });
      settriggerstate(true);
      setLoading(false);
      if (!res.ok) {
        toast("Failed to add. Emission name already exists!!!");
      }

      console.log(res);

      setTrigger((prev) => !prev);

      const data = await res.json();
      // console.log("jdhjw")
      // settriggerstate(false);

      //  console.log(data);
    } catch (error) {
      console.error("Error uploading files:", error);
    } finally {
      setUploading(false);
      setFiles(null);
      router.refresh();
    }
  };

  return (
    <>
      <Head>
        <title>Log Emissions - EarthEmission</title>
        <meta name="description" content="Your Page Description" />
        <meta name="keywords" content="Your, Page, Keywords" />
        {/* Add any other metadata you want */}
      </Head>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
        {/* Page header */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
          {/* Left: Title */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
              Log Emissions
            </h1>
          </div>

          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            <form
              onSubmit={handleUpload}
              className="flex items-center space-x-2"
            >
              <div className="flex items-center bg-green-500  rounded-md">
                <label
                  htmlFor="file-upload"
                  className="btn bg-gray-500 hover:bg-green-600 text-white cursor-pointer"
                >
                  <span>{uploading ? "Uploading..." : "Select File"}</span>
                  {/* <span>
                  {uploading
                    ? "Uploading..."
                    : files
                    ? "Remove"
                    : "Select File"}
                </span> */}
                  <input
                    id="file-upload"
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    disabled={uploading}
                    className="hidden"
                  />
                </label>
                {files && <span className="ml-2 text-white">{files.name}</span>}
              </div>
              {files && (
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="ml-2 text-white bg-red-500 hover:bg-red-600 btn"
                  //className="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                >
                  Remove
                  {/* <svg
                  className="w-3 h-4 fill-current text-rose-500 shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
                </svg> */}
                </button>
              )}
              <button
                type="submit"
                disabled={uploading || !files}
                className="btn bg-green-500 hover:bg-green-600 text-white"
              >
                {uploading ? "Uploading..." : "Bulk Import"}
              </button>
              <button
                // href="/random_data.csv"
                // download
                onClick={handleEditClick}
                className="btn bg-green-500 hover:bg-green-600 text-white p-2 rounded-md ml-2"
              >
                Download Template
              </button>
              {/* <a
                href="/random_data.csv"
                download
                className="btn bg-green-500 hover:bg-green-600 text-white p-2 rounded-md ml-2"
              >
                Download Template
              </a> */}
            </form>
            {/* Delete button */}
            <DeleteButtonLogEmission />

            {/* Search Option */}
            <Search placeholder="Filter by name" />

            {/* Add New API Keys button */}
            <Addemissions />
          </div>
        </div>

        {/* Table */}
        <Toast02 type="error" open={toastOpen} setOpen={setToastOpen}>
          {error}
        </Toast02>
        <Co2EmissionsTable
          co2emissions={Logs}
          count={count}
          loading={loading}
        />

        {/* Pagination */}
        <div className="mt-8">
          <PaginationClassic count={count} />
        </div>

        <Template
          isOpen={isEditModelOpen}
          co2emission={co2e_emissions}
          onClose={handleCloseEditModel}
        />
      </div>
    </>
  );
}

export default function Apikeys({ searchParams }: any) {
  return (
    <SelectedItemsProvider>
      <Co2EmissionsContent searchParams={searchParams} />
    </SelectedItemsProvider>
  );
}
