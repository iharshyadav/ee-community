// components/SectorDropdown.tsx
//@ts-nocheck

"use client";

import { useState, useEffect } from "react";
import { getCo2eEmissionsData } from "@/app/lib/data";
import { useSectorStore } from "@/app/lib/store";

interface EmissionData {
  timestamp: string;
  co2e: number;
  co2e_unit: string;
  Label: string;
  category: string;
  sector: string;
  location: string;
}

export default function SectorDropdown() {
  const { selectedSectors, toggleSector, setSelectedSectors } =
    useSectorStore();
  const [sectors, setSectors] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCo2eEmissionsData();
      const uniqueSectors = Array.from(
        new Set(data.map((item: EmissionData) => item.sector))
      );
      setSectors(uniqueSectors);
      setSelectedSectors(uniqueSectors); // Select all sectors initially
    };

    fetchData();
  }, [setSelectedSectors]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSelect = (sector: string) => {
    toggleSector(sector);
  };

  return (
    <div className="relative w-auto">
      <button
        onClick={toggleDropdown}
        className="w-auto min-w-48 px-4 py-1.5 bg-white border border-gray-200 rounded-md flex items-center justify-between text-slate-500 hover:text-slate-600 dark:text-slate-300 shadow shadow-slate-200 font-medium"
      >
        <span className="pr-3">
          {selectedSectors.length
            ? `${selectedSectors.length} sec selected`
            : "Sector"}
        </span>
        <svg
          className={`w-6 h-6 text-green-600 transform transition-transform duration-300 ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06-.02L10 10.94l3.72-3.75a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.25 8.23a.75.75 0 01-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {sectors.map((sector, index) => (
            <label
              key={index}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer text-gray-700"
            >
              <input
                type="checkbox"
                checked={selectedSectors.includes(sector)}
                onChange={() => handleSelect(sector)}
                className="form-checkbox h-4 w-4 text-green-500 checked:bg-green-500 checked:border-transparent focus:ring-0"
              />
              <span className="ml-2">{sector}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
