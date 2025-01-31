//@ts-nocheck

// "use client";
// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";
// import { fetchCo2eEmissionsForBarGraph } from "@/app/lib/data";
// import { tailwindConfig } from "@/components/utils/utils";

// const BarChart02 = dynamic(() => import("@/components/charts/bar-chart-02"), {
//   ssr: false,
// });

// export default function DashboardCard09() {
//   const [chartData, setChartData] = useState({
//     labels: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//     datasets: [
//       {
//         label: "Stack 1",
//         data: Array(12).fill(0), // Activity CO2e
//         backgroundColor: tailwindConfig.theme.colors.green[600],
//         hoverBackgroundColor: tailwindConfig.theme.colors.green[400],
//         barPercentage: 0.66,
//         categoryPercentage: 0.66,
//       },
//       {
//         label: "Stack 2",
//         data: Array(12).fill(0), // Refunds CO2e
//         backgroundColor: tailwindConfig.theme.colors.green[300],
//         hoverBackgroundColor: tailwindConfig.theme.colors.green[200],
//         barPercentage: 0.66,
//         categoryPercentage: 0.66,
//       },
//     ],
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchCo2eEmissionsForBarGraph();

//         const positiveData = Array(12).fill(0);
//         const negativeData = Array(12).fill(0);

//         data.forEach((item) => {
//           if (
//             !item.timestamp ||
//             !item.co2e_unit ||
//             item.co2e == null ||
//             !item.type
//           ) {
//             return; // Ignore records with null or missing values
//           }

//           const date = new Date(item.timestamp);
//           const month = date.getMonth(); // 0-11 for January to December
//           let co2eValue = item.co2e;

//           if (typeof co2eValue === "string") {
//             co2eValue = parseFloat(co2eValue.replace(/[^0-9.]/g, ""));
//           }

//           if (item.co2e_unit === "tonnes CO2e") {
//             co2eValue *= 1000; // Convert to kg
//           }

//           if (isNaN(co2eValue)) {
//             console.error(`Invalid CO2e value for item:`, item);
//             return; // Ignore invalid numerical values
//           }

//           if (item.type === "activity") {
//             positiveData[month] += co2eValue;
//           } else {
//             negativeData[month] += co2eValue;
//           }
//         });

//         setChartData({
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
//               label: "Stack 1",
//               data: positiveData,
//               backgroundColor: tailwindConfig.theme.colors.green[500],
//               hoverBackgroundColor: tailwindConfig.theme.colors.green[600],
//               barPercentage: 0.66,
//               categoryPercentage: 0.66,
//             },
//             {
//               label: "Stack 2",
//               data: negativeData.map((value) => -value), // Invert for refunds
//               backgroundColor: tailwindConfig.theme.colors.green[200],
//               hoverBackgroundColor: tailwindConfig.theme.colors.green[300],
//               barPercentage: 0.66,
//               categoryPercentage: 0.66,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error("Error fetching or processing data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700">
//       <header className="px-5 py-1 border-b border-slate-100 dark:border-slate-700 flex items-center">
//         <h2 className="font-semibold text-slate-800 dark:text-slate-100">
//           Activity vs Expenses
//         </h2>
//       </header>
//       <div className="grow">
//         {chartData && <BarChart02 data={chartData} width={595} height={248} />}
//       </div>
//     </div>
//   );
// }

"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { tailwindConfig } from "@/components/utils/utils";
import {
  useLocationStore,
  useSectorStore,
  useDateStore,
} from "@/app/lib/store";

const BarChart02 = dynamic(() => import("@/components/charts/bar-chart-02"), {
  ssr: false,
});

export default function DashboardCard09({ initialData }) {
  const { selectedLocations } = useLocationStore();
  const { selectedSectors } = useSectorStore();
  const { startDate, endDate } = useDateStore();

  const [chartData, setChartData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Activity CO2e",
        data: Array(12).fill(0),
        backgroundColor: tailwindConfig.theme.colors.green[600],
        hoverBackgroundColor: tailwindConfig.theme.colors.green[400],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      {
        label: "Refunds CO2e",
        data: Array(12).fill(0),
        backgroundColor: tailwindConfig.theme.colors.green[300],
        hoverBackgroundColor: tailwindConfig.theme.colors.green[200],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  });

  useEffect(() => {
    if (!initialData) return;

    const positiveData = Array(12).fill(0);
    const negativeData = Array(12).fill(0);

    // Filter and process data
    const filteredData = initialData.filter((item) => {
      const date = item.timestamp ? new Date(item.timestamp) : null;

      return (
        date &&
        date >= startDate &&
        date <= endDate &&
        (!selectedLocations.length || selectedLocations.includes(item.location)) &&
        (!selectedSectors.length || selectedSectors.includes(item.sector)) &&
        item.co2e !== null &&
        item.type &&
        item.co2e_unit
      );
    });

    filteredData.forEach((item) => {
      const month = new Date(item.timestamp).getMonth();
      let co2eValue = parseFloat(
        typeof item.co2e === "string"
          ? item.co2e.replace(/[^0-9.]/g, "")
          : item.co2e
      );

      if (item.co2e_unit === "tonnes CO2e") co2eValue *= 1000;

      if (item.type === "activity") {
        positiveData[month] += co2eValue;
      } else {
        negativeData[month] += co2eValue;
      }
    });

    // Update chart data
    setChartData({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Activity CO2e",
          data: positiveData,
          backgroundColor: tailwindConfig.theme.colors.green[500],
          hoverBackgroundColor: tailwindConfig.theme.colors.green[600],
          barPercentage: 0.66,
          categoryPercentage: 0.66,
        },
        {
          label: "Refunds CO2e",
          data: negativeData.map((value) => -value),
          backgroundColor: tailwindConfig.theme.colors.green[200],
          hoverBackgroundColor: tailwindConfig.theme.colors.green[300],
          barPercentage: 0.66,
          categoryPercentage: 0.66,
        },
      ],
    });
  }, [selectedLocations, selectedSectors, startDate, endDate, initialData]);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-1 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Activity vs Expenses
        </h2>
      </header>
      <div className="grow">
        <BarChart02 data={chartData} width={595} height={248} />
      </div>
    </div>
  );
}
