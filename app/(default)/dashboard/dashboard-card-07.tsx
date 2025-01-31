//@ts-nocheck

// import { filterTopCategories, getCo2eEmissionsData } from "@/app/lib/data";

// export default async function DashboardCard07() {
//   const topCategories: Map<string, number> = await filterTopCategories();
//   const emissionsData = await getCo2eEmissionsData();
//   const categoryEmissionsMap: Map<
//     string,
//     { totalCo2e: number; sector: string }
//   > = new Map();

//   // Aggregate emissions by category
//   emissionsData.forEach((entry) => {
//     if (entry.category && entry.co2e !== null) {
//       let co2eValue = entry.co2e;

//       // Convert tonnes to kg if the unit is 'tonnes CO2e'
//       if (entry.co2e_unit === "tonnes CO2e") {
//         co2eValue *= 1000; // Convert to kg
//       }

//       const currentData = categoryEmissionsMap.get(entry.category);

//       if (currentData) {
//         currentData.totalCo2e += co2eValue; // Aggregate CO2e values
//       } else {
//         // Use the sector from the first occurrence
//         categoryEmissionsMap.set(entry.category, {
//           totalCo2e: co2eValue,
//           sector: entry.sector,
//         });
//       }
//     }
//   });

//   // Convert Map to Array and sort by total emissions
//   const totalEmissionsArray = Array.from(categoryEmissionsMap.entries())
//     .map(([name, { totalCo2e, sector }]) => ({
//       name,
//       totalCo2e,
//       sector,
//     }))
//     .sort((a, b) => b.totalCo2e - a.totalCo2e) // Sort descending by emissions
//     .slice(0, 5); // Get top 5 categories

//   // Define colors for the squares based on position
//   const colorClasses = [
//     { backgroundColor: "#248c4b" }, // Corresponds to Tailwind green[300]
//     { backgroundColor: "#16a34a" }, // Corresponds to Tailwind green[400]
//     { backgroundColor: "#22c55e" }, // Corresponds to Tailwind green[500]
//     { backgroundColor: "#4ade80" }, // Corresponds to Tailwind green[600]
//     { backgroundColor: "#87ebac" }, // Corresponds to Tailwind green[700]
//   ];

//   return (
//     <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700">
//       <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
//         <h2 className="font-semibold text-slate-800 dark:text-slate-100">
//           Top Categories
//         </h2>
//       </header>
//       <div className="p-3">
//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="table-auto w-full dark:text-slate-300">
//             {/* Table header */}
//             <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
//               <tr>
//                 <th className="p-2">
//                   <div className="font-semibold text-center">Category</div>
//                 </th>
//                 <th className="p-2">
//                   <div className="font-semibold text-center">Sector</div>
//                 </th>
//                 <th className="p-2">
//                   <div className="font-semibold text-center">CO2e Value</div>
//                 </th>
//               </tr>
//             </thead>
//             {/* Table body */}
//             <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
//               {/* Rows */}
//               {totalEmissionsArray.map((item, index) => (
//                 <tr key={index} className="h-16">
//                   {" "}
//                   {/* Increase row height */}
//                   <td className="p-2">
//                     <div className="flex items-center justify-between">
//                       <div
//                         style={{
//                           ...colorClasses[index],
//                           height: "24px",
//                           width: "24px",
//                           borderRadius: "4px",
//                         }}
//                       />{" "}
//                       {/* Increased size and margin */}
//                       <div className="flex-1 text-center text-slate-800 dark:text-slate-100 mr-4">
//                         {item.name}
//                       </div>
//                     </div>
//                   </td>
//                   <td className="p-2">
//                     <div className="flex justify-center items-center h-full text-center">
//                       {item.sector}
//                     </div>
//                   </td>
//                   <td className="p-2">
//                     <div className="flex justify-center items-center h-full text-emerald-500">
//                       {item.totalCo2e} kg
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import {
  useLocationStore,
  useSectorStore,
  useDateStore,
} from "@/app/lib/store"; // Import the necessary filters

export default function DashboardCard07({ initialData = [] }) {
  const [topCategories, setTopCategories] = useState(initialData);

  // Accessing the filters from stores
  const { startDate, endDate } = useDateStore();
  const { selectedLocations } = useLocationStore();
  const { selectedSectors } = useSectorStore();

  // Fetch and filter data based on selected filters
  useEffect(() => {
    const fetchData = async () => {
      try {
        const emissionsData = initialData.length
          ? initialData
          : await getCo2eEmissionsData(); // Use initialData if provided, otherwise fetch from API
        const categoryEmissionsMap = new Map();

        // Filter the data based on selected date range, locations, and sectors
        const filteredData = emissionsData.filter((entry) => {
          const entryDate = new Date(entry.timestamp);
          const isValidDate = entryDate >= startDate && entryDate <= endDate; // Filter by date
          const isValidLocation = selectedLocations.includes(entry.location); // Filter by location
          const isValidSector =
            selectedSectors.includes(entry.sector) ||
            selectedSectors.includes("All"); // Filter by sector

          return (
            entry.category &&
            entry.co2e !== null &&
            entry.co2e_unit &&
            isValidDate &&
            isValidLocation &&
            isValidSector
          );
        });

        // Aggregate emissions by category
        filteredData.forEach((entry) => {
          let co2eValue = entry.co2e;

          // Convert tonnes to kg if necessary
          if (entry.co2e_unit === "tonnes CO2e") {
            co2eValue *= 1000; // Convert to kg
          }

          const currentData = categoryEmissionsMap.get(entry.category);

          if (currentData) {
            currentData.totalCo2e += co2eValue; // Aggregate CO2e values
          } else {
            // Use the sector from the first occurrence
            categoryEmissionsMap.set(entry.category, {
              totalCo2e: co2eValue,
              sector: entry.sector,
            });
          }
        });

        // Convert Map to Array and sort by total emissions
        const totalEmissionsArray = Array.from(categoryEmissionsMap.entries())
          .map(([name, { totalCo2e, sector }]) => ({
            name,
            totalCo2e,
            sector,
          }))
          .sort((a, b) => b.totalCo2e - a.totalCo2e) // Sort descending by emissions
          .slice(0, 5); // Get top 5 categories

        setTopCategories(totalEmissionsArray);
      } catch (error) {
        console.error("Error fetching emissions data:", error);
      }
    };

    fetchData();
  }, [startDate, endDate, selectedLocations, selectedSectors, initialData]); // Re-run when filters or initial data change

  // Define colors for the squares based on position
  const colorClasses = [
    { backgroundColor: "#248c4b" }, // Corresponds to Tailwind green[300]
    { backgroundColor: "#16a34a" }, // Corresponds to Tailwind green[400]
    { backgroundColor: "#22c55e" }, // Corresponds to Tailwind green[500]
    { backgroundColor: "#4ade80" }, // Corresponds to Tailwind green[600]
    { backgroundColor: "#87ebac" }, // Corresponds to Tailwind green[700]
  ];

  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Top Categories
        </h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-center">Category</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Sector</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">CO2e Value</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
              {/* Rows */}
              {topCategories.map((item, index) => (
                <tr key={index} className="h-16">
                  {" "}
                  {/* Increase row height */}
                  <td className="p-2">
                    <div className="flex items-center justify-between">
                      <div
                        style={{
                          ...colorClasses[index],
                          height: "24px",
                          width: "24px",
                          borderRadius: "4px",
                        }}
                      />{" "}
                      {/* Increased size and margin */}
                      <div className="flex-1 text-center text-slate-800 dark:text-slate-100 mr-4">
                        {item.name}
                      </div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex justify-center items-center h-full text-center">
                      {item.sector}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex justify-center items-center h-full text-emerald-500">
                      {item.totalCo2e} kg
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
