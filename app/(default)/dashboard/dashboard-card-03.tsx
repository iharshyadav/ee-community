// "use client";

// import EditMenu from "@/components/edit-menu";
// import LineChart01 from "@/components/charts/line-chart-01";
// import { chartAreaGradient } from "@/components/charts/chartjs-config";

// // Import utilities
// import { tailwindConfig, hexToRGB } from "@/components/utils/utils";

// export default function DashboardCard03() {
//   const chartData = {
//     labels: [
//       "12-01-2022",
//       "01-01-2023",
//       "02-01-2023",
//       "03-01-2023",
//       "04-01-2023",
//       "05-01-2023",
//       "06-01-2023",
//       "07-01-2023",
//       "08-01-2023",
//       "09-01-2023",
//       "10-01-2023",
//       "11-01-2023",
//       "12-01-2023",
//       "01-01-2024",
//       "02-01-2024",
//       "03-01-2024",
//       "04-01-2024",
//       "05-01-2024",
//       "06-01-2024",
//       "07-01-2024",
//       "08-01-2024",
//       "09-01-2024",
//       "10-01-2024",
//       "11-01-2024",
//       "12-01-2024",
//       "01-01-2025",
//     ],
//     datasets: [
//       // Indigo line
//       {
//         data: [
//           540, 466, 540, 466, 385, 432, 334, 334, 289, 289, 200, 289, 222, 289,
//           289, 403, 554, 304, 289, 270, 134, 270, 829, 344, 388, 364,
//         ],
//         fill: true,
//         backgroundColor: function (context: any) {
//           const chart = context.chart;
//           const { ctx, chartArea } = chart;
//           const gradientOrColor = chartAreaGradient(ctx, chartArea, [
//             {
//               stop: 0,
//               color: `rgba(${hexToRGB(
//                 tailwindConfig.theme.colors.green[500]
//               )}, 0)`,
//             },
//             {
//               stop: 1,
//               color: `rgba(${hexToRGB(
//                 tailwindConfig.theme.colors.green[500]
//               )}, 0.2)`,
//             },
//           ]);
//           return gradientOrColor || "transparent";
//         },
//         borderColor: tailwindConfig.theme.colors.green[500],
//         borderWidth: 2,
//         pointRadius: 0,
//         pointHoverRadius: 3,
//         pointBackgroundColor: tailwindConfig.theme.colors.green[500],
//         pointHoverBackgroundColor: tailwindConfig.theme.colors.green[500],
//         pointBorderWidth: 0,
//         pointHoverBorderWidth: 0,
//         clip: 20,
//         tension: 0.2,
//       },
//       // Gray line
//       {
//         data: [
//           689, 562, 477, 477, 477, 477, 458, 314, 430, 378, 430, 498, 642, 350,
//           145, 145, 354, 260, 188, 188, 300, 300, 282, 364, 660, 554,
//         ],
//         borderColor: `rgba(${hexToRGB(
//           tailwindConfig.theme.colors.gray[500]
//         )}, 0.25)`,
//         borderWidth: 2,
//         pointRadius: 0,
//         pointHoverRadius: 3,
//         pointBackgroundColor: `rgba(${hexToRGB(
//           tailwindConfig.theme.colors.gray[500]
//         )}, 0.25)`,
//         pointHoverBackgroundColor: `rgba(${hexToRGB(
//           tailwindConfig.theme.colors.gray[500]
//         )}, 0.25)`,
//         pointBorderWidth: 0,
//         pointHoverBorderWidth: 0,
//         clip: 20,
//         tension: 0.2,
//       },
//     ],
//   };

//   return (
//     <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
//       <div className="px-5 pt-5">
//         <header className="flex justify-between items-start mb-2">
//           <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
//             Scope 3
//           </h2>
//           {/* Menu button */}
//           <EditMenu align="right" />
//         </header>
//         <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
//           Emissions
//         </div>
//         <div className="flex items-start">
//           <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
//             4567
//           </div>
//           <div className="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">
//             +49%
//           </div>
//         </div>
//       </div>
//       {/* Chart built with Chart.js 3 */}
//       <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
//         {/* Change the height attribute to adjust the chart height */}
//         <LineChart01 data={chartData} width={389} height={128} />
//       </div>
//     </div>
//   );
// }

//@ts-nocheck
// "use client";
// import EditMenu from "@/components/edit-menu";
// import LineChart01 from "@/components/charts/line-chart-01";
// import { chartAreaGradient } from "@/components/charts/chartjs-config";
// // Import utilities
// import { tailwindConfig, hexToRGB } from "@/components/utils/utils";
// import { getCo2eEmissionsData } from "@/app/lib/data";
// import React, { useEffect, useState } from "react";

// // Define the structure for the chart dataset
// interface ChartDataset {
//   data: number[];
//   fill: boolean;
//   backgroundColor: (context: any) => string | CanvasGradient;
//   borderColor: string;
//   borderWidth: number;
//   pointRadius: number;
//   pointHoverRadius: number;
//   pointBackgroundColor: string;
//   pointHoverBackgroundColor: string;
//   pointBorderWidth: number;
//   pointHoverBorderWidth: number;
//   clip: number;
//   tension: number;
// }

// // Define the structure for the chart data
// interface ChartData {
//   labels: string[];
//   datasets: ChartDataset[];
// }

// export default function DashboardCard03() {
//   const [chartData, setChartData] = useState<ChartData | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getCo2eEmissionsData();

//         const monthlyScope3Data = Array(12).fill(0); // Initialize an array for Scope 3 values

//         data.forEach((entry) => {
//           // Ignore records with null timestamp or where the label is not 'scope-3'
//           if (entry.Label.toLowerCase() === "scope-3" && entry.timestamp) {
//             let co2eValue = entry.co2e;

//             // Convert tonnes to kg if the unit is 'tonnes CO2e'
//             if (entry.co2e_unit === "tonnes CO2e") {
//               co2eValue *= 1000; // Convert to kg
//             }

//             const month = new Date(entry.timestamp).getMonth();
//             monthlyScope3Data[month] += co2eValue; // Aggregate values for the month
//           }
//         });

//         const preparedChartData: ChartData = {
//           labels: [
//             "Jan",
//             "Feb",
//             "Mar",
//             "Apr",
//             "May",
//             "Jun",
//             "Jul",
//             "Aug",
//             "Sep",
//             "Oct",
//             "Nov",
//             "Dec",
//           ],
//           datasets: [
//             {
//               data: monthlyScope3Data,
//               fill: true,
//               backgroundColor: function (context) {
//                 const chart = context.chart;
//                 const { ctx, chartArea } = chart;
//                 const gradientOrColor = chartAreaGradient(ctx, chartArea, [
//                   {
//                     stop: 0,
//                     color: `rgba(${hexToRGB(
//                       tailwindConfig.theme.colors.green[500]
//                     )}, 0)`,
//                   },
//                   {
//                     stop: 1,
//                     color: `rgba(${hexToRGB(
//                       tailwindConfig.theme.colors.green[500]
//                     )}, 0.2)`,
//                   },
//                 ]);
//                 return gradientOrColor || "transparent";
//               },
//               borderColor: tailwindConfig.theme.colors.green[500],
//               borderWidth: 2,
//               pointRadius: 0,
//               pointHoverRadius: 3,
//               pointBackgroundColor: tailwindConfig.theme.colors.green[500],
//               pointHoverBackgroundColor: tailwindConfig.theme.colors.green[500],
//               pointBorderWidth: 0,
//               pointHoverBorderWidth: 0,
//               clip: 20,
//               tension: 0.2,
//             },
//           ],
//         };

//         setChartData(preparedChartData);
//       } catch (error) {
//         setError(`Error fetching CO2e data: ${(error as Error).message}`);
//       }
//     }

//     fetchData();
//   }, []);

//   if (error) return <div>{error}</div>; // Render error if present

//   return (
//     <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
//       <div className="px-5 pt-5">
//         <header className="flex justify-between items-start mb-2">
//           <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
//             Scope 3
//           </h2>
//           {/* Menu button */}
//           <EditMenu align="right" />
//         </header>
//         <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
//           Emissions
//         </div>
//         <div className="flex items-start">
//           <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
//             {chartData
//               ? chartData.datasets[0].data.reduce((a, b) => a + b, 0).toFixed(2)
//               : ""}
//           </div>
//         </div>
//       </div>
//       {/* Chart built with Chart.js 3 */}
//       <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
//         {/* Change the height attribute to adjust the chart height */}
//         {chartData && <LineChart01 data={chartData} width={389} height={128} />}
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useMemo, useCallback } from "react";
import EditMenu from "@/components/edit-menu";
import LineChart01 from "@/components/charts/line-chart-01";
import { chartAreaGradient } from "@/components/charts/chartjs-config";
import { tailwindConfig, hexToRGB } from "@/components/utils/utils";
import {
  useLocationStore,
  useSectorStore,
  useDateStore,
} from "@/app/lib/store";

// Define the structure for the chart dataset
interface ChartDataset {
  data: number[];
  fill: boolean;
  backgroundColor: (context: any) => string | CanvasGradient;
  borderColor: string;
  borderWidth: number;
  pointRadius: number;
  pointHoverRadius: number;
  pointBackgroundColor: string;
  pointHoverBackgroundColor: string;
  pointBorderWidth: number;
  pointHoverBorderWidth: number;
  clip: number;
  tension: number;
}

interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

interface EmissionsEntry {
  timestamp: Date | string;
  location: string | null;
  sector: string | null;
  Label: string | null;
  co2e: number;
  co2e_unit: string;
}

export default function DashboardCard03({ initialData }: { initialData: EmissionsEntry[] }) {
  const { selectedLocations } = useLocationStore();
  const { selectedSectors } = useSectorStore();
  const { startDate, endDate } = useDateStore();

  const processedChartData = useMemo(() => {
    // Filter out entries with null timestamps and date out of the range
    const filteredData = initialData.filter((entry) => {
      if (!entry.timestamp) return false;

      // Handle timestamp as Date object or string
      const entryDateObj = entry.timestamp instanceof Date 
        ? entry.timestamp 
        : new Date(entry.timestamp);

      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      return (
        entry.location !== null &&
        selectedLocations.includes(entry.location) &&
        entry.sector !== null &&
        (selectedSectors.includes(entry.sector) || selectedSectors.includes("All")) &&
        entryDateObj >= startDateObj &&
        entryDateObj <= endDateObj
      );
    });

    const monthlyScope3Data = Array(12).fill(0);

    filteredData.forEach((entry) => {
      if (
        entry.Label &&
        entry.Label.toLowerCase() === "scope-3" &&
        entry.timestamp
      ) {
        let co2eValue = entry.co2e;

        // Convert tonnes to kg if the unit is 'tonnes CO2e'
        if (entry.co2e_unit === "tonnes CO2e") {
          co2eValue *= 1000;
        }

        const month = new Date(entry.timestamp).getMonth();
        monthlyScope3Data[month] += co2eValue;
      }
    });

    return {
      labels: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
      datasets: [
        {
          data: monthlyScope3Data,
          fill: true,
          backgroundColor: function (context) {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            const gradientOrColor = chartAreaGradient(ctx, chartArea, [
              {
                stop: 0,
                color: `rgba(${hexToRGB(
                  tailwindConfig.theme.colors.green[500]
                )}, 0)`,
              },
              {
                stop: 1,
                color: `rgba(${hexToRGB(
                  tailwindConfig.theme.colors.green[500]
                )}, 0.2)`,
              },
            ]);
            return gradientOrColor || "transparent";
          },
          borderColor: tailwindConfig.theme.colors.green[500],
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 3,
          pointBackgroundColor: tailwindConfig.theme.colors.green[500],
          pointHoverBackgroundColor: tailwindConfig.theme.colors.green[500],
          pointBorderWidth: 0,
          pointHoverBorderWidth: 0,
          clip: 20,
          tension: 0.2,
        },
      ],
    };
  }, [initialData, selectedLocations, selectedSectors, startDate, endDate]);

  // Calculate total emissions with useMemo
  const totalEmissions = useMemo(() => {
    return processedChartData.datasets[0].data.reduce((a, b) => a + b, 0).toFixed(2);
  }, [processedChartData]);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Scope 3
          </h2>
          <EditMenu align="right" />
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
          Emissions
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
            {totalEmissions}
          </div>
        </div>
      </div>
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        <LineChart01 data={processedChartData} width={389} height={128} />
      </div>
    </div>
  );
}