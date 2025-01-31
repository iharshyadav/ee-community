//@ts-nocheck

// "use client";
// import React, { useEffect, useState } from "react";
// import BarChart01 from "@/components/charts/bar-chart-01";
// import { getCo2eEmissionsData } from "@/app/lib/data";

// interface EmissionData {
//   timestamp: Date | null; // Keep as Date
//   co2e: number;
//   co2e_unit: string;
//   Label: string;
// }

// interface ChartData {
//   labels: string[];
//   datasets: {
//     label: string;
//     data: number[];
//     backgroundColor: string;
//     hoverBackgroundColor: string;
//     barPercentage: number;
//     categoryPercentage: number;
//   }[];
// }

// export default function DashboardCard04() {
//   const [chartData, setChartData] = useState<ChartData | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data: EmissionData[] = await getCo2eEmissionsData();

//         const monthlyData = Array.from({ length: 12 }, () => ({
//           scope1: 0,
//           scope2: 0,
//           scope3: 0,
//         }));

//         data.forEach((entry) => {
//           let co2eValue = entry.co2e;

//           if (entry.co2e_unit === "tonnes CO2e") {
//             co2eValue *= 1000;
//           }

//           if (entry.timestamp) {
//             const month = new Date(entry.timestamp).getMonth();

//             if (month >= 0 && month < 12) {
//               if (entry.Label.toLowerCase() === "scope-1")
//                 monthlyData[month].scope1 += co2eValue;
//               if (entry.Label.toLowerCase() === "scope-2")
//                 monthlyData[month].scope2 += co2eValue;
//               if (entry.Label.toLowerCase() === "scope-3")
//                 monthlyData[month].scope3 += co2eValue;
//             }
//           } else {
//             console.error("Missing `created_at` value for entry:", entry);
//           }
//         });

//         setChartData({
//           labels: [
//             "Jan",
//             "Feb",
//             "Mar",
//             "Apr",
//             "May",
//             "June",
//             "July",
//             "Aug",
//             "Sept",
//             "Oct",
//             "Nov",
//             "Dec",
//           ],
//           datasets: [
//             {
//               label: "Scope 1",
//               data: monthlyData.map((month) => month.scope1),
//               backgroundColor: "#90EE90",
//               hoverBackgroundColor: "#0FFF50",
//               barPercentage: 0.5,
//               categoryPercentage: 0.33,
//             },
//             {
//               label: "Scope 2",
//               data: monthlyData.map((month) => month.scope2),
//               backgroundColor: "#3CB371",
//               hoverBackgroundColor: "#0FFF50",
//               barPercentage: 0.66,
//               categoryPercentage: 0.33,
//             },
//             {
//               label: "Scope 3",
//               data: monthlyData.map((month) => month.scope3),
//               backgroundColor: "#00A550",
//               hoverBackgroundColor: "#0FFF50",
//               barPercentage: 0.66,
//               categoryPercentage: 0.33,
//             },
//           ],
//         });
//       } catch (error) {
//         setError(`Error fetching CO2e data: ${error.message}`);
//         console.error(error);
//       }
//     }

//     fetchData();
//   }, []);

//   if (error) return <div>{error}</div>;

//   return (
//     <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
//       <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
//         <h2 className="font-semibold text-slate-800 dark:text-slate-100">
//           CO2 Emissions MOM (Kg)
//         </h2>
//       </header>
//       {chartData && (
//         <div className="px-5 py-4">
//           <BarChart01
//             data={chartData}
//             width={595}
//             height={248}
//             options={{
//               animation: {
//                 duration: 1000, // 1 second
//                 easing: "easeInOutQuad",
//               },
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// }
"use client";
import React, { useMemo } from "react";
import {
  useLocationStore,
  useSectorStore,
  useDateStore,
} from "@/app/lib/store";
import BarChart01 from "@/components/charts/bar-chart-01";

interface EmissionData {
  timestamp: Date | string | null;
  co2e: number;
  co2e_unit: string | null;
  Label: string | null;
  location: string | null;
  sector: string | null;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    hoverBackgroundColor: string;
    barPercentage: number;
    categoryPercentage: number;
  }[];
}

export default function DashboardCard04({ initialData }: { initialData: EmissionData[] }) {
  const { startDate, endDate } = useDateStore();
  const { selectedLocations } = useLocationStore();
  const { selectedSectors } = useSectorStore();

  // Memoize the chart data processing
  const chartData = useMemo(() => {
    // Function to process the data based on selected filters
    const processData = (data: EmissionData[]) => {
      const filteredData = data.filter((entry) => {
        if (!entry.timestamp || !entry.Label || !entry.location || !entry.sector)
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

      const monthlyData = Array.from({ length: 12 }, () => ({
        scope1: 0,
        scope2: 0,
        scope3: 0,
      }));

      filteredData.forEach((entry) => {
        let co2eValue = entry.co2e;
        if (entry.co2e_unit === "tonnes CO2e") {
          co2eValue *= 1000;
        }

        const month = new Date(entry.timestamp).getMonth();
        if (month >= 0 && month < 12) {
          if (entry.Label?.toLowerCase() === "scope-1")
            monthlyData[month].scope1 += co2eValue;
          if (entry.Label?.toLowerCase() === "scope-2")
            monthlyData[month].scope2 += co2eValue;
          if (entry.Label?.toLowerCase() === "scope-3")
            monthlyData[month].scope3 += co2eValue;
        }
      });

      return {
        labels: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        datasets: [
          {
            label: "Scope 1",
            data: monthlyData.map((month) => month.scope1),
            backgroundColor: "#90EE90",
            hoverBackgroundColor: "#0FFF50",
            barPercentage: 0.5,
            categoryPercentage: 0.33,
          },
          {
            label: "Scope 2",
            data: monthlyData.map((month) => month.scope2),
            backgroundColor: "#3CB371",
            hoverBackgroundColor: "#0FFF50",
            barPercentage: 0.66,
            categoryPercentage: 0.33,
          },
          {
            label: "Scope 3",
            data: monthlyData.map((month) => month.scope3),
            backgroundColor: "#00A550",
            hoverBackgroundColor: "#0FFF50",
            barPercentage: 0.66,
            categoryPercentage: 0.33,
          },
        ],
      };
    };

    return processData(initialData);
  }, [initialData, startDate, endDate, selectedLocations, selectedSectors]);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          CO2 Emissions MOM (Kg)
        </h2>
      </header>
      <div className="px-5 py-4">
        <BarChart01
          data={chartData}
          width={595}
          height={248}
          options={{
            animation: {
              duration: 1000, // 1 second
              easing: "easeInOutQuad",
            },
          }}
        />
      </div>
    </div>
  );
}