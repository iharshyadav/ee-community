"use client";
import { useState, useEffect } from "react";
import { getTotalCo2eEmissions } from "@/components/total_emissions";

export default function DashboardAvatars() {
  const [totalEmissions, setTotalEmissions] = useState<number | null>(null);

  useEffect(() => {
    const fetchTotalEmissions = async () => {
      try {
        const emissions = await getTotalCo2eEmissions();
        setTotalEmissions(emissions);
      } catch (error) {
        console.error("Failed to fetch total emissions:", error);
      }
    };

    fetchTotalEmissions();
  }, []);

  return (
      <div className="relative w-auto">
      <button
        className="w-auto min-w-48 px-4 py-1.5 bg-white border border-gray-200 rounded-md flex items-center justify-between text-slate-500 hover:text-slate-600 dark:text-slate-300 shadow shadow-slate-200 font-medium">
      <span className="hidden xs:block text-xl font-semibold">
        Total Emissions: <span className="text-green-500">{totalEmissions}</span> kg
      </span>
      </button>
    </div>
  );
}
