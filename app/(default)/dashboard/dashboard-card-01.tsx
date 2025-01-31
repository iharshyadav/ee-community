//@ts-nocheck
"use client";
import { useMemo, useState } from "react";
import {
  useLocationStore,
  useSectorStore,
  useDateStore,
} from "@/app/lib/store";
import EditMenu from "@/components/edit-menu";
import LineChart01 from "@/components/charts/line-chart-01";
import { chartAreaGradient } from "@/components/charts/chartjs-config";
import { tailwindConfig, hexToRGB } from "@/components/utils/utils";

export default function ClientDashboardCard({ initialData }) {
  const { selectedLocations } = useLocationStore();
  const { selectedSectors } = useSectorStore();
  const { startDate, endDate } = useDateStore();

  // Memoize processed chart data
  const chartData = useMemo(() => {
    const filteredData = initialData.filter((entry) => {
      if (!entry.timestamp) return false;

      const entryDateObj = entry.timestamp instanceof Date 
        ? entry.timestamp 
        : new Date(entry.timestamp);

      const startDateObj = new Date(startDate);
      const endDateObj = new Date(endDate);

      return (
        entry.location !== null &&
        selectedLocations.includes(entry.location) &&
        entry.sector !== null &&
        (selectedSectors.includes(entry.sector) ||
          selectedSectors.includes("All")) &&
        entryDateObj >= startDateObj &&
        entryDateObj <= endDateObj
      );
    });

    const monthlyScope2Data = Array(12).fill(0);

    filteredData.forEach((entry) => {
      if (
        entry.Label !== null &&
        entry.Label.toLowerCase() === "scope-1" &&
        entry.timestamp
      ) {
        let co2eValue = entry.co2e;

        if (entry.co2e_unit === "tonnes CO2e") {
          co2eValue *= 1000;
        }

        const month = new Date(entry.timestamp).getMonth();
        monthlyScope2Data[month] += co2eValue;
      }
    });

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
      ],
    };
  }, [initialData, selectedLocations, selectedSectors, startDate, endDate]);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Scope 1
          </h2>
          <EditMenu align="right" />
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">
          Emissions
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">
            {chartData
              ? chartData.datasets[0].data.reduce((a, b) => a + b, 0).toFixed(2)
              : ""}
          </div>
        </div>
      </div>
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        {chartData && <LineChart01 data={chartData} width={400} height={200} />}
      </div>
    </div>
  );
}