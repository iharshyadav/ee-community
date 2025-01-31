// "use client";

// import BarChart04 from "@/components/charts/bar-chart-04";
// import { useEffect, useState } from "react";
// import { fetchEmissionsData } from "@/app/lib/data";
// import { tailwindConfig, hexToRGB } from "@/components/utils/utils";

// export default function DashboardCard08() {
//   const [chartData, setChartData] = useState({ labels: [], datasets: [] });

//   useEffect(() => {
//     const fetchChartData = async () => {
//       try {
//         const data = await fetchEmissionsData();

//         const monthlyData: { [key: string]: number } = {};
//         const uniqueLocations = new Set<string>();

//         data.forEach((item) => {
//           if (!item.timestamp || !item.co2e_unit || item.co2e === null) {
//             return; // Ignore records with null values
//           }

//           const location = item.location;
//           let co2eValue = item.co2e;

//           if (typeof co2eValue === "string") {
//             co2eValue = parseFloat(co2eValue.replace(/[^0-9.]/g, ""));
//           }

//           if (item.co2e_unit === "tonnes CO2e") {
//             co2eValue *= 1000; // Convert to kg
//           }

//           if (isNaN(co2eValue)) {
//             console.error(`Invalid CO2e value for item:`, item);
//             return;
//           }

//           uniqueLocations.add(location);

//           if (!monthlyData[location]) {
//             monthlyData[location] = 0;
//           }
//           monthlyData[location] += co2eValue;
//         });

//         const labels = Array.from(uniqueLocations);
//         const colors = labels.map(
//           (_, index) => tailwindConfig.theme.colors.green[300 + index * 50]
//         );
//         const datasets = [
//           {
//             label: "Total Emissions",
//             data: labels.map((location) => monthlyData[location]),
//             backgroundColor: colors,
//             borderWidth: 0.3,
//           },
//         ];

//         setChartData({ labels, datasets });
//       } catch (error) {
//         console.error("Error fetching or processing data:", error);
//       }
//     };

//     fetchChartData();
//   }, []);

//   return (
//     <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700">
//       <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
//         <h2 className="font-semibold text-slate-800 dark:text-slate-100">
//           Regional Emissions
//         </h2>
//       </header>
//       <div className="grow">
//         {chartData && <BarChart04 data={chartData} width={595} height={300} />}
//       </div>
//     </div>
//   );
// }

//@ts-nocheck

"use client";

import BarChart04 from "@/components/charts/bar-chart-04";
import { useEffect, useState } from "react";
import { getCo2eEmissionsData } from "@/app/lib/data";
import { tailwindConfig } from "@/components/utils/utils";
import { useSectorStore } from "@/app/lib/store";
import { useDateStore } from "@/app/lib/store";

export default function DashboardCard08({ initialData = [] }) {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  // Get selected date range and sectors from the Zustand store
  const { startDate, endDate } = useDateStore();
  const { selectedSectors } = useSectorStore();

  useEffect(() => {
    const processData = (data) => {
      // Filter data based on selected start and end date
      const filteredData = data.filter((item) => {
        const timestamp = item.timestamp ? new Date(item.timestamp) : null;

        const isWithinDateRange =
          timestamp && timestamp >= startDate && timestamp <= endDate;

        const isSectorSelected =
          selectedSectors.length === 0 || selectedSectors.includes(item.sector);

        return (
          isWithinDateRange &&
          isSectorSelected &&
          item.co2e !== null &&
          item.timestamp !== null
        );
      });

      // Aggregate emissions by location
      const monthlyData: { [key: string]: number } = {};
      const uniqueLocations = new Set<string>();

      filteredData.forEach((item) => {
        const location = item.location;
        let co2eValue = item.co2e;

        if (typeof co2eValue === "string") {
          co2eValue = parseFloat(co2eValue.replace(/[^0-9.]/g, ""));
        }

        if (item.co2e_unit === "tonnes CO2e") {
          co2eValue *= 1000; // Convert to kg
        }

        if (isNaN(co2eValue)) {
          console.error(`Invalid CO2e value for item:`, item);
          return;
        }

        uniqueLocations.add(location);

        if (!monthlyData[location]) {
          monthlyData[location] = 0;
        }
        monthlyData[location] += co2eValue;
      });

      // Create the chart data
      const labels = Array.from(uniqueLocations);
      const colors = labels.map(
        (_, index) => tailwindConfig.theme.colors.green[300 + index * 50]
      );

      const datasets = [
        {
          label: "Total Emissions",
          data: labels.map((location) => monthlyData[location]),
          backgroundColor: colors,
          borderWidth: 0.3,
        },
      ];

      setChartData({ labels, datasets });
    };

    const fetchChartData = async () => {
      try {
        const data = await getCo2eEmissionsData();
        processData(data);
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    };

    if (initialData.length > 0) {
      processData(initialData);
    } else {
      fetchChartData();
    }
  }, [startDate, endDate, selectedSectors, initialData]);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Regional Emissions
        </h2>
      </header>
      <div className="grow">
        {chartData && chartData.datasets.length > 0 ? (
          <BarChart04 data={chartData} width={595} height={300} />
        ) : (
          <p className="text-center text-gray-500">
            No data available for the selected filters.
          </p>
        )}
      </div>
    </div>
  );
}
