// components/DashboardCard13.tsx
//@ts-nocheck

"use client";

import { useEffect, useState } from "react";
import LineChart02 from "@/components/charts/line-chart-02";
import {
  useLocationStore,
  useSectorStore,
  useDateStore,
} from "@/app/lib/store";

export default function DashboardCard13({ initialData }) {
  const { selectedLocations } = useLocationStore();
  const { selectedSectors } = useSectorStore();
  const { startDate, endDate } = useDateStore();

  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    if (!initialData) return;

    const filteredData = filterEmissionsData(initialData);
    const processedData = processEmissionsData(filteredData);
    setChartData(processedData);
  }, [selectedLocations, selectedSectors, startDate, endDate, initialData]);

  const filterEmissionsData = (data) => {
    return data.filter((record) => {
      if (
        !record.timestamp ||
        !record.co2e ||
        !record.co2e_unit ||
        record.co2e === null
      )
        return false;

      const date = new Date(record.timestamp);
      if (date < startDate || date > endDate) return false;

      if (
        selectedLocations.length > 0 &&
        !selectedLocations.includes(record.location)
      )
        return false;
      if (
        selectedSectors.length > 0 &&
        !selectedSectors.includes(record.sector)
      )
        return false;

      return true;
    });
  };

  const processEmissionsData = (data) => {
    const monthlyEmissions = {};

    data.forEach((record) => {
      const { timestamp, co2e, co2e_unit } = record;
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = date.getMonth();

      let co2eInKg = parseFloat(co2e);
      if (co2e_unit.toLowerCase() === "tonnes co2e") {
        co2eInKg *= 1000;
      }

      if (!monthlyEmissions[year]) {
        monthlyEmissions[year] = new Array(12).fill(0);
      }

      monthlyEmissions[year][month] += co2eInKg;
    });

    const labels = [
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
    ];

    const datasets = Object.keys(monthlyEmissions).map((year) => {
      return {
        label: year,
        data: monthlyEmissions[year],
        borderColor: getRandomColor(),
        fill: false,
        borderWidth: 2,
        tension: 0.1,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: getRandomColor(),
        pointHoverBackgroundColor: getRandomColor(),
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
      };
    });

    return { labels, datasets };
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="flex flex-col sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700 p-4 space-y-2">
      <header className="border-b border-slate-100 dark:border-slate-700 pb-1">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Emission Over Years
        </h2>
      </header>
      <div className="pt-1">
        <LineChart02 data={chartData} width={595} height={248} />
      </div>
    </div>
  );
}
