//@ts-nocheck

"use client";
import React, { useState, useEffect } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { getCo2eEmissionsDatatable } from "@/app/lib/data";


type Co2eEmissions = {
  co2e: string | number;
  co2e_unit: string;
  Label: string;
  category: string;
  location: string;
};

export default function DashboardCard10() {
  const [data, setData] = useState<Co2eEmissions[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [openScope, setOpenScope] = useState<string | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCo2eEmissionsDatatable();
        setData(data);
      } catch (error) {
        setError(`Error fetching CO2e data: ${error.message}`);
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleScopeToggle = (scope: string) => {
    setOpenScope(openScope === scope ? null : scope);
    setOpenCategory(null);
  };

  const handleCategoryToggle = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const convertToKg = (value: number, unit: string) => {
    return unit === "tonnes CO2e" ? value * 1000 : value;
  };

  const calculateSum = (
    entries: Co2eEmissions[],
    key: string,
    value: string
  ) => {
    return entries
      .filter((entry) => entry[key] === value)
      .reduce(
        (acc, entry) => acc + convertToKg(Number(entry.co2e), entry.co2e_unit),
        0
      );
  };

  if (error) return <div>{error}</div>;
  if (!data.length) return <div>Loading...</div>;

  const scopes = Array.from(new Set(data.map((entry) => entry.Label)));
  const categories = openScope
    ? Array.from(
        new Set(
          data
            .filter((entry) => entry.Label === openScope)
            .map((entry) => entry.category)
        )
      )
    : [];
  const regions = openCategory
    ? Array.from(
        new Set(
          data
            .filter((entry) => entry.category === openCategory)
            .map((entry) => entry.location)
        )
      )
    : [];

  const sumOrZero = (sum: number) => (isNaN(sum) ? 0 : sum);

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-md rounded-lg overflow-hidden min-w-full">
      <div className="bg-white dark:bg-gray-800 p-4 min-w-full">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Emissions Inventory
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-separate border-spacing-0 ">
            <thead className="text-xs  uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
              <tr>
                <th className="px-4 py-2 text-s border-b text-center whitespace-nowrap min-w-[120px]">
                  Scope
                </th>
                <th className="px-4 py-2 border-b text-center hidden sm:table-cell whitespace-nowrap min-w-[120px]">
                  Category
                </th>
                <th className="px-4 py-2 border-b text-center hidden md:table-cell whitespace-nowrap min-w-[120px]">
                  Location
                </th>
                <th className="px-4 py-2 border-b text-center whitespace-nowrap min-w-[120px]">
                  CO2e (kg)
                </th>
              </tr>
            </thead>
            <tbody>
              {scopes.map((scope) => (
                <React.Fragment key={scope}>
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer text-slate-800 dark:text-slate-100">
                    <td
                      className="border px-4 py-2 text-center text-slate-800 dark:text-slate-100 font-medium text-sm"
                      onClick={() => handleScopeToggle(scope)}
                    >
                      <div className="flex items-center justify-center text-slate-800 dark:text-slate-100 font-medium text-sm">
                        <span>{scope}</span>
                        {openScope === scope ? (
                          <ChevronUpIcon className="ml-2 w-5 h-5 text-green-600" />
                        ) : (
                          <ChevronDownIcon className="ml-2 w-5 h-5 text-green-600" />
                        )}
                      </div>
                    </td>
                    <td className="text-sm font-medium border px-4 py-2 text-center hidden sm:table-cell text-slate-800 dark:text-slate-100"></td>
                    <td className="text-sm font-medium border px-4 py-2 text-center hidden md:table-cell text-slate-800 dark:text-slate-100"></td>
                    <td className="text-sm font-medium border px-4 py-2 text-center text-slate-800 dark:text-slate-100">
                      {sumOrZero(calculateSum(data, "Label", scope)).toFixed(2)}{" "}
                      kg CO2e
                    </td>
                  </tr>
                  {openScope === scope &&
                    categories.map((category) => (
                      <React.Fragment key={category}>
                        <tr className="text-sm font-medium text-slate-800 dark:text-slate-100 bg-gray-50 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-500 cursor-pointer">
                          <td className="font-medium border px-4 py-2 text-center text-slate-800 dark:text-slate-100 text-sm"></td>
                          <td
                            className="font-medium border px-4 py-2 text-center text-slate-800 dark:text-slate-100 text-sm"
                            onClick={() => handleCategoryToggle(category)}
                          >
                            <div className="flex justify-center items-center gap-x-2 text-slate-800 dark:text-slate-100 font-medium text-sm">
                              <span>{category}</span>
                              {openCategory === category ? (
                               <ChevronUpIcon className="ml-2 w-5 h-5 text-green-600" />
                              ) : (
                               <ChevronDownIcon className="ml-2 w-5 h-5 text-green-600" />
                              )}
                            </div>
                          </td>
                          <td className="border px-4 py-2 text-center hidden md:table-cell text-slate-800 dark:text-slate-100 font-medium text-sm"></td>
                          <td className="border px-4 py-2 text-center text-slate-800 dark:text-slate-100">
                            {sumOrZero(
                              calculateSum(
                                data.filter((entry) => entry.Label === scope),
                                "category",
                                category
                              )
                            ).toFixed(2)}{" "}
                            kg CO2e
                          </td>
                        </tr>
                        {openCategory === category &&
                          regions.map((location) => (
                            <tr
                              key={location}
                              className="bg-gray-100 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-400 cursor-pointer"
                            >
                              <td className="border px-4 py-2 text-center text-slate-800 dark:text-slate-100 font-medium text-sm"></td>
                              <td className="border px-4 py-2 text-center text-slate-800 dark:text-slate-100 font-medium text-sm"></td>
                              <td className="border px-4 py-2 text-center text-slate-800 dark:text-slate-100 font-medium text-sm">
                                {location}
                              </td>
                              <td className="border px-4 py-2 text-center text-slate-800 dark:text-slate-100 font-medium text-sm">
                                {sumOrZero(
                                  calculateSum(
                                    data.filter(
                                      (entry) =>
                                        entry.Label === scope &&
                                        entry.category === category
                                    ),
                                    "location",
                                    location
                                  )
                                ).toFixed(2)}{" "}
                                kg CO2e
                              </td>
                            </tr>
                          ))}
                      </React.Fragment>
                    ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
