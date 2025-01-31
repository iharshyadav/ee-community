// @ts-nocheck

export const metadata = {
  title: "Private Emission Factors - Earthemission",
  description: "Page description",
};

import { SelectedItemsProvider } from "@/app/selected-items-context";
import DeleteButtonPrivateFactor from "@/components/delete-button-private-factor";
// import FilterButton from '@/components/dropdown-filter'
import PrivateFactorsTable from "./private-factors-table";
import PaginationClassic from "@/components/pagination-classic";
import { fetchPrivateEmissions } from "@/app/lib/data";
import Addprivatefactors from "./add/privatefactors";
import Search from "@/components/search";

async function PrivateFactorsContent({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, private_emissions } = await fetchPrivateEmissions(q, page);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      {/* Page header */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">
            Private Emission Factors
          </h1>
        </div>

        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Delete button */}
          <DeleteButtonPrivateFactor />

          {/* Search Option */}
          <Search placeholder="Filter by name" />

          {/* Add New API Keys button */}
          <Addprivatefactors />
        </div>
      </div>

      {/* Table */}
      <PrivateFactorsTable privatefactors={private_emissions} count={count} />

      {/* Pagination */}
      <div className="mt-8">
        <PaginationClassic count={count} />
      </div>
    </div>
  );
}

export default function PrivateFactors({ searchParams }) {
  return (
    <SelectedItemsProvider>
      <PrivateFactorsContent searchParams={searchParams} />
    </SelectedItemsProvider>
  );
}
