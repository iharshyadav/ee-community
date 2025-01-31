"use client";

import { StaticImageData } from "next/image";
import { useItemSelection } from "@/components/utils/use-item-selection";
import PrivateFactorsTableItem from "./private-factors-table-item";

export interface Privatefactor {
  id: number;
  activity_id: string;
  name: string;
  sector: string;
  category: string;
  region_name: string;
  unit: string;
  year: number;
  source: string;
  emission_factor: number;
  userId: string;
}

export default function PrivateFactorsTable({
  privatefactors,
  count,
}: {
  count: 0;
  privatefactors: Privatefactor[];
}) {
  const {
    selectedItems,
    isAllSelected,
    handleCheckboxChange,
    handleSelectAllChange,
  } = useItemSelection(privatefactors);
  console.log(privatefactors);

  return (
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
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Source</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Emission Factor</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Unit</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <span className="sr-only">Menu</span>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
              {privatefactors.map((privatefactor) => (
                <PrivateFactorsTableItem
                  count={count}
                  key={privatefactor.id}
                  privatefactor={privatefactor}
                  onCheckboxChange={handleCheckboxChange}
                  isSelected={selectedItems.includes(privatefactor.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
