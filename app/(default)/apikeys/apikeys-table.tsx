"use client";

import { StaticImageData } from "next/image";
import { useItemSelection } from "@/components/utils/use-item-selection";
import ApikeysTableItem from "./apikey-table-item";

export interface Apikey {
  id: number;
  name: string;
  api_key: string;
  created_at: Date;
  userId: string;
  expiry_date: Date;
  usage_count: number;
}

export default function ApikeysTable({
  apikeys,
  count,
}: {
  count: 0;
  apikeys: Apikey[];
}) {
  const {
    selectedItems,
    isAllSelected,
    handleCheckboxChange,
    handleSelectAllChange,
  } = useItemSelection(apikeys);
  console.log();

  return (
    <div className="bg-white dark:bg-gray-900 shadow-sm rounded-xl">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          All API Keys{" "}
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
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <span className="sr-only">Favourite</span>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">API Key</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Date</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold">Expiry Date</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold">Usage Count</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <span className="sr-only">Menu</span>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-700">
              {apikeys.map((apikey) => (
                <ApikeysTableItem
                  count={count}
                  key={apikey.id}
                  apikey={apikey}
                  onCheckboxChange={handleCheckboxChange}
                  isSelected={selectedItems.includes(apikey.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
