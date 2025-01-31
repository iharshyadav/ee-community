// components/LocationDropdown.tsx
//@ts-nocheck

"use client";
import { useState, useEffect } from "react";
import { getCo2eEmissionsData } from "@/app/lib/data";
import { useLocationStore } from "@/app/lib/store";

interface EmissionData {
  timestamp: string;
  co2e: number;
  co2e_unit: string;
  Label: string;
  category: string;
  sector: string;
  location: string;
}

export default function LocationDropdown() {
  const { selectedLocations, toggleLocation, setSelectedLocations } =
    useLocationStore();
  const [locations, setLocations] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCo2eEmissionsData();
      const uniqueLocations = Array.from(
        new Set(data.map((item: EmissionData) => item.location))
      );
      setLocations(uniqueLocations);
      setSelectedLocations(uniqueLocations); // Select all locations initially
    };

    fetchData();
  }, [setSelectedLocations]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (location: string) => {
    toggleLocation(location);
  };

  return (
    <div className="relative w-auto">
      <button
        onClick={toggleDropdown}
        className="min-w-48 w-auto px-4 py-1.5 bg-white border border-gray-200 rounded-md flex items-center justify-between text-slate-500 hover:text-slate-600 dark:text-slate-800 shadow shadow-slate-200 font-medium"
      >
        <span className="">
          {selectedLocations.length
            ? `${selectedLocations.length} loc selected`
            : "Location"}
        </span>
        <svg
          className={`w-6 h-6 text-green-600 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-max bg-white border border-gray-300 rounded-md shadow-lg max-h-64 overflow-auto transition-all duration-300 transform origin-top">
          <ul className="py-2">
            {locations.map((location) => (
              <li
                key={location}
                className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(location)}
              >
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(location)}
                  onChange={() => handleSelect(location)}
                  className="mr-2 form-checkbox h-4 w-4 text-green-500 checked:bg-green-500 checked:border-transparent focus:ring-0"
                />
                <span>{location}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
