//@ts-nocheck

// "use client";

// import { filterTopCategories, getCo2eEmissionsData } from "@/app/lib/data";
// import DoughnutChart from "@/components/charts/doughnut-chart";
// import { tailwindConfig } from "@/components/utils/utils";
// import { useEffect, useState } from "react";

// const colorMapping = {
//   category1: "#248c4b",
//   category2: "#16a34a",
//   category3: "#22c55e",
//   category4: "#4ade80",
//   category5: "#87ebac",
// };

// // Export the color mapping for later use
// export const getColorMapping = () => colorMapping;

// export default function DashboardCard06() {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const emissionsData = await getCo2eEmissionsData();
//         const categoryEmissionsMap = new Map();

//         // Filter out entries with null category, co2e, or co2e_unit
//         const validEmissionsData = emissionsData.filter(
//           (entry) => entry.category && entry.co2e !== null && entry.co2e_unit
//         );

//         // Sum emissions for each category
//         validEmissionsData.forEach((entry) => {
//           let co2eValue = entry.co2e;

//           console.log(validEmissionsData);

//           // Convert tonnes to kg if necessary
//           if (entry.co2e_unit === "tonnes CO2e") {
//             co2eValue *= 1000; // Convert to kg
//           }

//           // Aggregate emissions by category
//           const currentTotal = categoryEmissionsMap.get(entry.category) || 0;
//           categoryEmissionsMap.set(entry.category, currentTotal + co2eValue);
//         });

//         // Convert Map to Array and sort by total emissions
//         const totalEmissionsArray = Array.from(categoryEmissionsMap.entries())
//           .map(([name, co2e]) => ({ name, co2e }))
//           .sort((a, b) => b.co2e - a.co2e) // Sort descending by emissions
//           .slice(0, 4); // Get top 5 categories

//         setChartData(totalEmissionsArray);
//       } catch (error) {
//         console.error("Error fetching emissions data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(chartData);

//   const chartConfig = {
//     labels: chartData.map((item) => item.name),
//     datasets: [
//       {
//         label: "Top Categories",
//         data: chartData.map((item) => item.co2e),
//         backgroundColor: [
//           colorMapping.category1,
//           colorMapping.category2,
//           colorMapping.category3,
//           colorMapping.category4,
//           colorMapping.category5,
//         ],
//         hoverBackgroundColor: [
//           colorMapping.category2,
//           colorMapping.category3,
//           colorMapping.category4,
//           colorMapping.category5,
//           colorMapping.category1,
//         ],
//         borderWidth: 0,
//       },
//     ],
//   };

//   console.log(chartConfig);

//   return (
//     <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700">
//       <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
//         <h2 className="font-semibold text-slate-800 dark:text-slate-100">
//           Top Categories
//         </h2>
//       </header>
//       {/* Chart built with Chart.js 3 */}
//       <DoughnutChart data={chartConfig} width={389} height={260} />
//     </div>
//   );
// }
"use client";

import React, { useMemo } from "react";
import DoughnutChart from "@/components/charts/doughnut-chart";
import { useLocationStore, useSectorStore, useDateStore } from "@/app/lib/store";

const colorMapping = {
  category1: "#248c4b",
  category2: "#16a34a",
  category3: "#22c55e",
  category4: "#4ade80",
  category5: "#87ebac",
};

// Export the color mapping for later use
export const getColorMapping = () => colorMapping;

interface EmissionData {
  timestamp: Date | string | null;
  co2e: number;
  co2e_unit: string | null;
  category: string | null;
  location: string | null;
  sector: string | null;
}

export default function DashboardCard06({
  initialData,
}: {
  initialData: EmissionData[];
}) {
  const { startDate, endDate } = useDateStore(); // Get date filters
  const { selectedLocations } = useLocationStore(); // Get selected locations
  const { selectedSectors } = useSectorStore(); // Get selected sectors

  // Memoize the chart data processing
  const chartConfig = useMemo(() => {
    const categoryEmissionsMap = new Map<string, number>();

    // Filter and process data
    const filteredData = initialData.filter((entry) => {
      if (!entry.timestamp || !entry.category || !entry.location || !entry.sector)
        return false;

      const entryDate = new Date(entry.timestamp);
      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      const isValidDate = entryDate >= startDateObj && entryDate <= endDateObj;
      const isValidLocation = selectedLocations.includes(entry.location);
      const isValidSector =
        selectedSectors.includes(entry.sector) ||
        selectedSectors.includes("All");

      return isValidDate && isValidLocation && isValidSector;
    });

    filteredData.forEach((entry) => {
      let co2eValue = entry.co2e;

      // Convert tonnes to kg if necessary
      if (entry.co2e_unit === "tonnes CO2e") {
        co2eValue *= 1000;
      }

      // Aggregate emissions by category
      const currentTotal = categoryEmissionsMap.get(entry.category!) || 0;
      categoryEmissionsMap.set(entry.category!, currentTotal + co2eValue);
    });

    // Prepare chart data: sort by total emissions and take top 5 categories
    const topCategories = Array.from(categoryEmissionsMap.entries())
      .map(([name, co2e]) => ({ name, co2e }))
      .sort((a, b) => b.co2e - a.co2e)
      .slice(0, 5);

    return {
      labels: topCategories.map((item) => item.name),
      datasets: [
        {
          label: "Top Categories",
          data: topCategories.map((item) => item.co2e),
          backgroundColor: [
            colorMapping.category1,
            colorMapping.category2,
            colorMapping.category3,
            colorMapping.category4,
            colorMapping.category5,
          ],
          hoverBackgroundColor: [
            colorMapping.category2,
            colorMapping.category3,
            colorMapping.category4,
            colorMapping.category5,
            colorMapping.category1,
          ],
          borderWidth: 0,
        },
      ],
    };
  }, [initialData, startDate, endDate, selectedLocations, selectedSectors]);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Top Categories
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      <DoughnutChart data={chartConfig} width={389} height={260} />
    </div>
  );
}
