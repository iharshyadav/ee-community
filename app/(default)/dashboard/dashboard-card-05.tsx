//@ts-nocheck

// "use client";

// import { useState, useEffect } from "react";
// import RealtimeChart from "@/components/charts/realtime-chart";
// import { tailwindConfig, hexToRGB } from "@/components/utils/utils";
// import { Co2eEmissionsreal } from "@/app/lib/data";

// export default function DashboardCard05() {
//   const [chartData, setChartData] = useState<any>(null);

//   const convertToKg = (co2e: string, unit: string): number => {
//     const value = parseFloat(co2e);
//     return unit === "tonnes CO2e" ? value * 1000 : value;
//   };

//   const fetchData = async () => {
//     try {
//       const { co2e_emissions } = await Co2eEmissionsreal();
//       return co2e_emissions;
//     } catch (error) {
//       console.error("Error fetching real-time emissions data:", error);
//       return [];
//     }
//   };

//   useEffect(() => {
//     const processData = async () => {
//       const data = await fetchData();
//       const monthlyData = Array.from({ length: 12 }, () => 0);

//       data.forEach((entry: any) => {
//         if (
//           entry.timestamp &&
//           new Date(entry.timestamp).getFullYear() === 2024
//         ) {
//           const month = new Date(entry.timestamp).getMonth();
//           const co2eValue = convertToKg(entry.co2e, entry.co2e_unit);
//           monthlyData[month] += co2eValue;
//         }
//       });

//       const labels = [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "June",
//         "July",
//         "Aug",
//         "Sept",
//         "Oct",
//         "Nov",
//         "Dec",
//       ];

//       setChartData({
//         labels,
//         datasets: [
//           {
//             data: monthlyData,
//             fill: true,
//             backgroundColor: `rgba(${hexToRGB(
//               tailwindConfig.theme.colors.green[500]
//             )}, 0.3)`,
//             borderColor: tailwindConfig.theme.colors.green[500],
//             borderWidth: 2,
//             tension: 0.3, // Smooth curves
//             pointRadius: 0, // No dots
//             pointHoverRadius: 4, // Dots on hover
//             pointBackgroundColor: tailwindConfig.theme.colors.green[500],
//             pointHoverBackgroundColor: tailwindConfig.theme.colors.green[600],
//             pointBorderWidth: 0,
//             pointHoverBorderWidth: 2,
//             clip: 20,
//           },
//         ],
//       });
//     };

//     processData();
//   }, []);

//   return (
//     <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 rounded-lg">
//       <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
//         <h2 className="font-semibold text-slate-800 dark:text-slate-100">
//           Monthly CO2 Emissions (Kg) - 2024
//         </h2>
//       </header>
//       {chartData ? (
//         <div className="flex-grow p-4">
//           <div className="relative h-[300px] w-full">
//             <RealtimeChart
//               data={chartData}
//               options={{
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 animation: {
//                   duration: 1000, // 1 second
//                   easing: "easeInOutQuad",
//                 },
//                 scales: {
//                   x: {
//                     type: "category",
//                     labels: chartData.labels,
//                   },
//                   y: {
//                     beginAtZero: true,
//                   },
//                 },
//               }}
//             />
//           </div>
//         </div>
//       ) : (
//         <div className="w-full h-[300px]"></div> // Empty div to maintain the size
//       )}
//     </div>
//   );
// }

"use client";

import React, { useMemo } from "react";
import RealtimeChart from "@/components/charts/realtime-chart";
import { tailwindConfig, hexToRGB } from "@/components/utils/utils";
import {
  useLocationStore,
  useSectorStore,
  useDateStore,
} from "@/app/lib/store";

interface EmissionsEntry {
  timestamp: Date | string;
  co2e: number | string;
  co2e_unit: string;
  location: string;
  sector: string;
}

export default function DashboardCard05({ initialData }: { initialData: EmissionsEntry[] }) {
  const { startDate, endDate } = useDateStore();
  const { selectedLocations } = useLocationStore();
  const { selectedSectors } = useSectorStore();

  // Convert CO2e values from string with unit to kg
  const convertToKg = (co2e: number | string, unit: string): number => {
    const value = typeof co2e === 'string' ? parseFloat(co2e) : co2e;
    return unit === "tonnes CO2e" ? value * 1000 : value;
  };

  // Memoize the chart data processing
  const chartData = useMemo(() => {
    // Filter and process the data based on the selected filters
    const monthlyData = Array.from({ length: 12 }, () => 0);

    // Filter data based on selected filters
    const filteredData = initialData.filter((entry) => {
      if (!entry.timestamp || !entry.location || !entry.sector) return false;

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

    // Process the filtered data to aggregate CO2e emissions by month
    filteredData.forEach((entry) => {
      const month = new Date(entry.timestamp).getMonth();
      const co2eValue = convertToKg(entry.co2e, entry.co2e_unit);
      monthlyData[month] += co2eValue;
    });

    // Prepare the chart data
    const labels = [
      "Jan", "Feb", "Mar", "Apr", "May", "June", 
      "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    return {
      labels,
      datasets: [
        {
          data: monthlyData,
          fill: true,
          backgroundColor: `rgba(${hexToRGB(
            tailwindConfig.theme.colors.green[500]
          )}, 0.3)`,
          borderColor: tailwindConfig.theme.colors.green[500],
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 0,
          pointHoverRadius: 4,
          pointBackgroundColor: tailwindConfig.theme.colors.green[500],
          pointHoverBackgroundColor: tailwindConfig.theme.colors.green[600],
          pointBorderWidth: 0,
          pointHoverBorderWidth: 2,
          clip: 20,
        },
      ],
    };
  }, [initialData, startDate, endDate, selectedLocations, selectedSectors]);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 rounded-lg">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Monthly CO2 Emissions (Kg) - 2024
        </h2>
      </header>
      <div className="flex-grow p-4">
        <div className="relative h-[300px] w-full">
          <RealtimeChart
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              animation: {
                duration: 1000,
                easing: "easeInOutQuad",
              },
              scales: {
                x: {
                  type: "category",
                  labels: chartData.labels,
                },
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}