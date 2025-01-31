// "use client";

// import EditMenu from "@/components/edit-menu";
// import LineChart01 from "@/components/charts/line-chart-01";
// import { chartAreaGradient } from "@/components/charts/chartjs-config";

// // Import utilities
// import { tailwindConfig, hexToRGB } from "@/components/utils/utils";

// export default function DashboardCard02() {
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
//           622, 622, 426, 471, 365, 365, 238, 324, 288, 206, 324, 324, 500, 409,
//           409, 273, 232, 273, 500, 570, 767, 808, 685, 767, 685, 685,
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
//           732, 610, 610, 504, 504, 504, 349, 349, 504, 342, 504, 610, 391, 192,
//           154, 273, 191, 191, 126, 263, 349, 252, 423, 622, 470, 532,
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
//             Scope 2
//           </h2>
//           {/* Menu button */}
//           <EditMenu align="right" />
//         </header>
//         <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
//           Emissions
//         </div>
//         <div className="flex items-start">
//           <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
//             250
//           </div>
//           <div className="text-sm font-medium text-red-700 px-1.5 bg-red-500/20 rounded-full">
//             -14%
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

// export default function DashboardCard02() {
//   const [chartData, setChartData] = useState<ChartData | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getCo2eEmissionsData();

//         const monthlyScope2Data = Array(12).fill(0); // Initialize an array for Scope 2 values

//         data.forEach((entry) => {
//           // Ignore records with null timestamp or where the label is not 'scope-2'
//           if (entry.Label.toLowerCase() === "scope-2" && entry.timestamp) {
//             let co2eValue = entry.co2e;

//             // Convert tonnes to kg if the unit is 'tonnes CO2e'
//             if (entry.co2e_unit === "tonnes CO2e") {
//               co2eValue *= 1000; // Convert to kg
//             }

//             const month = new Date(entry.timestamp).getMonth();
//             monthlyScope2Data[month] += co2eValue; // Aggregate values for the month
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
//               data: monthlyScope2Data,
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
//             Scope 2
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

// 'use client';
// import EditMenu from "@/components/edit-menu";
// import LineChart01 from "@/components/charts/line-chart-01";
// import { chartAreaGradient } from "@/components/charts/chartjs-config";
// import { tailwindConfig, hexToRGB } from "@/components/utils/utils";
// import { getCo2eEmissionsData } from "@/app/lib/data";
// import { useLocationStore, useSectorStore, useDateStore } from "@/app/lib/store"; // Add store imports
// import React, { useEffect, useState } from 'react';

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

// export default function DashboardCard02() {
//   const { selectedLocations } = useLocationStore();
//   const { selectedSectors } = useSectorStore();
//   const { startDate, endDate } = useDateStore(); // Add start and end date from Zustand store
//   const [chartData, setChartData] = useState<ChartData | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getCo2eEmissionsData();

//         const monthlyScope2Data = Array(12).fill(0); // Initialize an array for Scope 2 values

//         // Filter data based on the selected filters (location, sector, date range)
//         const filteredData = data.filter(entry => {
//           if (!entry.timestamp || entry.Label?.toLowerCase() !== 'scope-2') return false; // Skip if no timestamp or Label is not 'scope-2'

//           // Check if timestamp is valid before creating a Date object
//           const entryDateObj = entry.timestamp ? new Date(entry.timestamp) : null;
//           const startDateObj = new Date(startDate);
//           const endDateObj = new Date(endDate);

//           // Apply filters, handling null value for sector
//           const isLocationValid = entry.location && selectedLocations.includes(entry.location);
//           const isSectorValid = entry.sector ? selectedSectors.includes(entry.sector) : selectedSectors.includes('All');
//           const isDateValid = entryDateObj && entryDateObj >= startDateObj && entryDateObj <= endDateObj;

//           return isLocationValid && isSectorValid && isDateValid;
//         });

//         // Aggregate filtered data by month
//         filteredData.forEach(entry => {
//           let co2eValue = entry.co2e;

//           // Convert tonnes to kg if the unit is 'tonnes CO2e'
//           if (entry.co2e_unit === 'tonnes CO2e') {
//             co2eValue *= 1000; // Convert to kg
//           }

//           const month = new Date(entry.timestamp!).getMonth();
//           monthlyScope2Data[month] += co2eValue; // Aggregate values for the month
//         });

//         // Prepare chart data
//         const preparedChartData: ChartData = {
//           labels: [
//             "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//             "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
//           ],
//           datasets: [
//             {
//               data: monthlyScope2Data,
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
//             }
//           ],
//         };

//         setChartData(preparedChartData);
//       } catch (error) {
//         setError(`Error fetching CO2e data: ${(error as Error).message}`);
//       }
//     }

//     fetchData();
//   }, [selectedLocations, selectedSectors, startDate, endDate]); // Add filter state as dependencies

//   if (error) return <div>{error}</div>; // Render error if present

//   return (
//     <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
//       <div className="px-5 pt-5">
//         <header className="flex justify-between items-start mb-2">
//           <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
//             Scope 2
//           </h2>
//           {/* Menu button */}
//           <EditMenu align="right" />
//         </header>
//         <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
//           Emissions
//         </div>
//         <div className="flex items-start">
//           <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
//             {chartData ? chartData.datasets[0].data.reduce((a, b) => a + b, 0).toFixed(2) : ''}
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
import React, { useMemo, useState, useEffect } from "react";
import EditMenu from "@/components/edit-menu";
import LineChart01 from "@/components/charts/line-chart-01";
import { chartAreaGradient } from "@/components/charts/chartjs-config";
import { tailwindConfig, hexToRGB } from "@/components/utils/utils";
import { getCo2eEmissionsData } from "@/app/lib/data";
import {
  useLocationStore,
  useSectorStore,
  useDateStore,
} from "@/app/lib/store";

// Type definitions
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

interface EmissionsData {
  timestamp?: string;
  Label?: string;
  location?: string;
  sector?: string;
  co2e: number;
  co2e_unit?: string;
}

interface DashboardCard02Props {
  initialData?: EmissionsData[];
}

export default function DashboardCard02({ initialData = [] }: DashboardCard02Props) {
  const { selectedLocations } = useLocationStore();
  const { selectedSectors } = useSectorStore();
  const { startDate, endDate } = useDateStore();
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<EmissionsData[]>(initialData);

  // Memoized data processing
  const processedData = useMemo(() => {
    try {
      const monthlyScope2Data = Array(12).fill(0);

      // Filter data based on selected filters
      const filteredData = data.filter((entry) => {
        if (!entry.timestamp || entry.Label?.toLowerCase() !== "scope-2")
          return false;

        const entryDateObj = entry.timestamp
          ? new Date(entry.timestamp)
          : null;
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);

        const isLocationValid =
          entry.location && selectedLocations.includes(entry.location);
        const isSectorValid = entry.sector
          ? selectedSectors.includes(entry.sector)
          : selectedSectors.includes("All");
        const isDateValid =
          entryDateObj &&
          entryDateObj >= startDateObj &&
          entryDateObj <= endDateObj;

        return isLocationValid && isSectorValid && isDateValid;
      });

      // Aggregate filtered data by month
      filteredData.forEach((entry) => {
        let co2eValue = entry.co2e;

        // Convert tonnes to kg if the unit is 'tonnes CO2e'
        if (entry.co2e_unit === "tonnes CO2e") {
          co2eValue *= 1000;
        }

        const month = new Date(entry.timestamp!).getMonth();
        monthlyScope2Data[month] += co2eValue;
      });

      // Prepare chart data
      return {
        labels: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        datasets: [
          {
            data: monthlyScope2Data,
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
        ]
      };
    } catch (err) {
      setError(`Data processing error: ${err instanceof Error ? err.message : String(err)}`);
      return null;
    }
  }, [data, selectedLocations, selectedSectors, startDate, endDate]);

  // Fetch data if initial data is empty
  useEffect(() => {
    async function fetchData() {
      if (initialData.length === 0) {
        try {
          const fetchedData = await getCo2eEmissionsData();
          setData(fetchedData);
        } catch (err) {
          setError(`Error fetching data: ${err instanceof Error ? err.message : String(err)}`);
        }
      }
    }

    fetchData();
  }, [initialData]);

  // Update chart data when processed data changes
  useEffect(() => {
    if (processedData) {
      setChartData(processedData);
    }
  }, [processedData]);

  // Memoize total emissions calculation
  const totalEmissions = useMemo(() => {
    return chartData 
      ? chartData.datasets[0].data.reduce((a, b) => a + b, 0).toFixed(2)
      : "";
  }, [chartData]);

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Scope 2
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
        {chartData && <LineChart01 data={chartData} width={389} height={128} />}
      </div>
    </div>
  );
}