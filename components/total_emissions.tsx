//@ts-nocheck

import { getCo2eEmissionsData } from "@/app/lib/data";

async function calculateTotalCo2eEmissions() {
  try {
    const data = await getCo2eEmissionsData();

    // Filter out records with null timestamp and convert CO2e units if necessary
    const filteredData = data.filter((entry) => entry.timestamp !== null);

    const totalCo2eInKg = filteredData.reduce((sum, entry) => {
      let co2eValue = entry.co2e;
      if (entry.co2e_unit === "tonnes CO2e") {
        co2eValue *= 1000; // Convert tonnes to kilograms
      }
      return sum + co2eValue;
    }, 0);

    return totalCo2eInKg;
  } catch (error) {
    console.error(
      "Error calculating total CO2e emissions:",
      (error as Error).message
    );
    throw new Error("Error calculating total CO2e emissions");
  }
}

// Export a function to get the total CO2e emissions
export async function getTotalCo2eEmissions() {
  return await calculateTotalCo2eEmissions();
}
