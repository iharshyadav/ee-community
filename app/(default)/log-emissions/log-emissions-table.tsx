"use client";
import { StaticImageData } from "next/image";
import { useItemSelection } from "@/components/utils/use-item-selection";
import Co2EmissionsTableItem from "./log-emissions-table-item";
import Skeleton from "./components/skeleton";

export interface co2Emission {
  id: number;
  Name: string;
  sector: string;
  category: string;
  region: string;
  co2e_unit: string;
  year: number;
  co2e: number;
  userId: string;
  requestbody: any;
  responsebody: any;
  Label: string;
  created_at: Date;
}
export default function Co2EmissionsTable({
  co2emissions,
  count,
  loading,
}: {
  count: number;
  co2emissions: co2Emission[];
  loading: boolean;
}) {
  const {
    selectedItems,
    isAllSelected,
    handleCheckboxChange,
    handleSelectAllChange,
  } = useItemSelection(co2emissions);
  // console.log(co2emissions)
  return (
    <>
      {!loading ? (
        <div className="bg-white dark:bg-slate-800 shadow-sm rounded-xl border border-slate-200 dark:border-slate-700 relative">
          <header className="px-5 py-4">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              Total{" "}
              <span className="text-slate-600 dark:text-slate-500 font-bold">
                {count}
              </span>
            </h2>
          </header>
          <div>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full dark:text-slate-300">
                {/* Table header */}
                <thead className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/20 border-t border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                      <div className="flex items-center">
                        <label className="inline-flex">
                          <span className="sr-only">Select all</span>
                          <input
                            className="form-checkbox"
                            type="checkbox"
                            onChange={handleSelectAllChange}
                            checked={isAllSelected}
                          />
                        </label>
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Sector</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Category</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Region</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">year</div>
                    </th>
                    {/* <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">C02e</div>
                </th> */}
                    <th className="px-2 first:pl-5 last:pr-5 py-6 whitespace-nowrap flex gap-5">
                      <div
                        className={`text-left w-12
                    } `}
                      >
                        cO2e
                      </div>
                      <div className="pl-4">Scope</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">Created At</div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <span className="sr-only">Menu</span>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
                  {!loading ? (
                    <>
                      {co2emissions.map((co2emission) => (
                        <Co2EmissionsTableItem
                          count={count}
                          key={co2emission.id}
                          co2emission={co2emission}
                          onCheckboxChange={handleCheckboxChange}
                          isSelected={selectedItems.includes(co2emission.id)}
                        />
                      ))}
                    </>
                  ) : (
                    <>
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                      <Skeleton />
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 relative">
          <header className="px-5 py-4">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100">
              Total{" "}
              <span className="text-slate-600 dark:text-slate-500 font-bold">
                {/* Placeholder for count */}
                <span className="animate-pulse bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
              </span>
            </h2>
          </header>
          <div>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full dark:text-slate-300">
                {/* Table header */}
                <thead className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/20 border-t border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                      <div className="flex items-center">
                        <label className="inline-flex">
                          <span className="sr-only">Select all</span>
                          <input
                            className="form-checkbox"
                            type="checkbox"
                            disabled
                          />
                        </label>
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        <span className="animate-pulse bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        <span className="animate-pulse bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        <span className="animate-pulse bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        <span className="animate-pulse bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        <span className="animate-pulse bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-6 whitespace-nowrap flex gap-5">
                      <div className="w-12">
                        <span className="animate-pulse bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                      </div>
                      <div className="pl-4">
                        <span className="animate-pulse bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        <span className="animate-pulse bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                      </div>
                    </th>
                    <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <span className="sr-only">Menu</span>
                    </th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <tr key={index} className="animate-pulse">
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="w-4 h-4 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                        </div>
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <span className="bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <span className="bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <span className="bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <span className="bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <span className="bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-6 whitespace-nowrap flex gap-5">
                        <div className="w-12">
                          <span className="bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                        </div>
                        <div className="pl-4">
                          <span className="bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                        </div>
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <span className="bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                      </td>
                      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                        <span className="bg-slate-300 dark:bg-slate-700 inline-block w-24 h-4 rounded"></span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
