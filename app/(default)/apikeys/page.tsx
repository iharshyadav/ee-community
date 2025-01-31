// @ts-nocheck

export const metadata = {
  title: "API Keys - Earthemission",
  description: "Page description",
};

import { SelectedItemsProvider } from "@/app/selected-items-context";
import DeleteButton from "@/components/delete-button";
import DateSelect from "@/components/date-select";
// import FilterButton from '@/components/dropdown-filter'
import ApikeysTable from "./apikeys-table";
import PaginationClassic from "@/components/pagination-classic";
import { fetchApikeys } from "@/app/lib/data";
import Addapikeys from "./add/apikey";
import Search from "@/components/search";

async function ApikeysContent({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, apikeys } = await fetchApikeys(q, page);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
            API Keys
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Delete button */}
          <DeleteButton />

          {/* Dropdown */}
          {/* <DateSelect /> */}

          {/* Filter button */}
          {/* <FilterButton align="right" /> */}

          {/* Search Option */}
          <Search placeholder="Filter by name" />

          {/* Add New API Keys button */}
          <Addapikeys />
        </div>
      </div>

      {/* Table */}
      <ApikeysTable apikeys={apikeys} count={count} />

      {/* Pagination */}
      <div className="mt-8">
        <PaginationClassic count={count} />
      </div>
    </div>
  );
}

export default function Apikeys({ searchParams }) {
  return (
    <SelectedItemsProvider>
      <ApikeysContent searchParams={searchParams} />
    </SelectedItemsProvider>
  );
}
