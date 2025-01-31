// @ts-nocheck

"use server";

// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient()

import { auth } from "@clerk/nextjs/server";

import {
  COORDINATES,
  CPU_PROVIDERS_REGION,
  MEMORY_PROVIDERS_REGION,
  NETWORK_PROVIDERS_REGION,
  STORAGE_PROVIDERS_REGION,
} from "./coordinates";

import prisma from "@/app/utils/prismaClient";

export const fetchApikeys = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;
  const { userId } = auth();

  try {
    const count = await prisma.api_keys.count({
      where: {
        AND: [
          {
            userId: userId, // Add condition to fetch only api_keys belonging to a specific userId
          },
          {
            name: {
              contains: q, // for case-insensitive search
            },
          },
        ],
      },
    });
    const apikeys = await prisma.api_keys.findMany({
      skip: ITEM_PER_PAGE * (page - 1),
      take: ITEM_PER_PAGE,
      where: {
        AND: [
          {
            userId: userId, // Add condition to fetch only api_keys belonging to a specific userId
          },
          {
            name: {
              contains: q, // for case-insensitive search
            },
          },
        ],
      },
      orderBy: [
        {
          id: "desc",
        },
      ],
    });
    return { count, apikeys };
  } catch (err) {
    console.log(err);

    // Return a default value when an error occurs
    return { count: 0, apikeys: [] };
  }
};

export const fetchPrivateEmissions = async (q, page) => {
  const regex = new RegExp(q, "i");
  const { userId } = auth();

  const ITEM_PER_PAGE = 10;

  try {
    const count = await prisma.private_emissions.count({
      where: {
        AND: [
          {
            userId: userId, // Add condition to fetch only api_keys belonging to a specific userId
          },
          {
            name: {
              contains: q, // for case-insensitive search
            },
          },
        ],
      },
    });
    const private_emissions = await prisma.private_emissions.findMany({
      skip: ITEM_PER_PAGE * (page - 1),
      take: ITEM_PER_PAGE,
      where: {
        AND: [
          {
            userId: userId, // Add condition to fetch only api_keys belonging to a specific userId
          },
          {
            name: {
              contains: q, // for case-insensitive search
            },
          },
        ],
      },
    });
    return { count, private_emissions };
  } catch (err) {
    console.log(err);
    // Return a default value when an error occurs
    return { count: 0, private_emissions: [] };
  }
};

export const fetchPublicEmissions = async (q, page) => {
  const regex = new RegExp(q, "i");
  const { userId } = auth();

  const ITEM_PER_PAGE = 10;

  try {
    const count = await prisma.emission_factors_wce.count({
      where: {
        AND: [
          {
            name: {
              contains: q, // for case-insensitive search
            },
          },
        ],
      },
    });
    const public_emissions = await prisma.emission_factors_wce.findMany({
      skip: ITEM_PER_PAGE * (page - 1),
      take: ITEM_PER_PAGE,
      where: {
        AND: [
          {
            name: {
              contains: q, // for case-insensitive search
            },
          },
        ],
      },
    });
    return { count, public_emissions };
  } catch (err) {
    console.log(err);
    // Return a default value when an error occurs
    return { count: 0, public_emissions: [] };
  }
};

export const Co2eEmissions = async (q, page) => {
  const regex = new RegExp(q, "i");
  const { userId } = auth();

  const ITEM_PER_PAGE = 10;

  try {
    const count = await prisma.co2e_emissions.count({
      where: {
        AND: [
          {
            userId: userId, // Add condition to fetch only api_keys belonging to a specific userId
          },
          {
            Name: {
              contains: q, // for case-insensitive search
            },
          },
        ],
      },
    });
    const co2e_emissions = await prisma.co2e_emissions.findMany({
      skip: ITEM_PER_PAGE * (page - 1),
      take: ITEM_PER_PAGE,
      where: {
        AND: [
          {
            userId: userId, // Add condition to fetch only api_keys belonging to a specific userId
          },
          {
            Name: {
              contains: q, // for case-insensitive search
            },
          },
        ],
      },
      orderBy: [
        {
          id: "desc",
        },
      ],
    });
    console.log(co2e_emissions);
    return { count, co2e_emissions };
  } catch (err) {
    console.log(err);
    // Return a default value when an error occurs
    return { count: 0, co2e_emissions: [] };
  }
};

export const showData = async (Name: string) => {
  try {
    console.log("first");
    const data = await prisma.co2e_emissions.findUnique({
      where: {
        Name: Name,
      },
    });
    // console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return { count: 0, co2e_emissions: [] };
  }
};

// export const showData = async (Name: string) => {
//   // const regex = new RegExp(q, "i");
//   // const { userId } = auth();

//   console.log("Name", Name);

//   const data = await prisma.co2e_emissions.findFirst({
//     where: {
//       Name: Name,
//     },
//   });
//   console.log(data);
//   return data;
// };

// Function to calculate the co2e on different scopes levels.
export const calculateCo2eSum = async () => {
  // Define an array to store sums for each scope
  const scopeSums = {
    scope1: 0,
    scope2: 0,
    scope3: 0,
  };

  const scopeQuery = {
    scope1Records: [],
    scope2Records: [],
    scope3Records: [],
  };

  // show all the data
  const showAllData = await prisma.co2e_emissions.findMany({});

  // Query and calculate for Scope 1
  scopeQuery.scope1Records = await prisma.co2e_emissions.findMany({
    where: {
      Label: "Scope-1",
    },
  });

  scopeSums.scope1 = scopeQuery.scope1Records.reduce((sum, record) => {
    if (
      record.responsebody &&
      record.responsebody.responsedata &&
      typeof record.responsebody.responsedata.co2e === "number"
    ) {
      return sum + record.responsebody.responsedata.co2e;
    }
    return sum;
  }, 0);

  // Query and calculate for Scope 2
  scopeQuery.scope2Records = await prisma.co2e_emissions.findMany({
    where: {
      Label: {
        endsWith: "2",
      },
    },
  });

  scopeSums.scope2 = scopeQuery.scope2Records.reduce((sum, record) => {
    if (
      record.responsebody &&
      record.responsebody.responsedata &&
      typeof record.responsebody.responsedata.co2e === "number"
    ) {
      return sum + record.responsebody.responsedata.co2e;
    }
    return sum;
  }, 0);

  // Query and calculate for Scope 3
  scopeQuery.scope3Records = await prisma.co2e_emissions.findMany({
    where: {
      Label: "Scope-3",
    },
  });

  scopeSums.scope3 = scopeQuery.scope3Records.reduce((sum, record) => {
    if (
      record.responsebody &&
      record.responsebody.responsedata &&
      typeof record.responsebody.responsedata.co2e === "number"
    ) {
      return sum + record.responsebody.responsedata.co2e;
    }
    return sum;
  }, 0);

  console.log("Scope-3 Total CO2e:", scopeSums.scope3);

  return { scopeSums, scopeQuery, showAllData };
};

export const makeChart = async () => {
  const scope1Records = await prisma.co2e_emissions.findMany({
    where: {
      Label: {
        endsWith: "1",
      },
    },
  });

  const scope2Records = await prisma.co2e_emissions.findMany({
    where: {
      Label: {
        endsWith: "2",
      },
    },
  });

  const scope3Records = await prisma.co2e_emissions.findMany({
    where: {
      Label: {
        endsWith: "3",
      },
    },
  });

  const fetchedArr1 = scope1Records?.map((record: any) =>
    parseFloat(record.co2e)
  );
  const fetchedArr2 = scope2Records?.map((record: any) =>
    parseFloat(record.co2e)
  );
  const fetchedArr3 = scope3Records?.map((record: any) =>
    parseFloat(record.co2e)
  );

  return { fetchedArr1, fetchedArr2, fetchedArr3 };
};

export const filterTopCategories = async () => {
  const categoryCounts = new Map<string, number>();
  const accessCategory = await prisma.co2e_emissions.findMany({});
  for (let i = 0; i < accessCategory.length; i++) {
    const category = accessCategory[i].category;
    if (categoryCounts.has(category)) {
      categoryCounts.set(category, categoryCounts.get(category)! + 1);
    } else {
      categoryCounts.set(category, 1);
    }
  }

  // console.log(categoryCounts);
  // console.log(accessCategory)
  return categoryCounts;
};

export const filterTopEmissions = async () => {
  const fetchCo2e = await prisma.co2e_emissions.findMany({});
  const topEmissionsData = new Map<string, number>();
  for (let i = 0; i < fetchCo2e.length; i++) {
    const Co2e = fetchCo2e[i].co2e;
    const Name = fetchCo2e[i].Name;
    if (topEmissionsData.has(Co2e)) {
      topEmissionsData.set(Name, topEmissionsData.get(Co2e) + Co2e);
    } else {
      topEmissionsData.set(Name, Co2e);
    }
  }

  console.log(topEmissionsData);
  return topEmissionsData;
};

// for MOM chart

// import { PrismaClient } from "@prisma/client";

// const prismagr = new PrismaClient();

export async function getCo2eEmissionsData() {
  const { userId } = auth();
  console.log("userId", userId);

  try {
    console.log("Fetching CO2e emissions data...");
    const data = await prisma.co2e_emissions.findMany({
      select: {
        timestamp: true,
        co2e: true,
        co2e_unit: true,
        Label: true,
        category: true,
        sector: true,
        location: true,
        type: true,
      },
      where: {
        AND: [
          {
            userId: userId, // Add condition to fetch only api_keys belonging to a specific userId
          },
        ],
      },
    });

    console.log("Data fetched successfully:", data);

    // Convert Decimal to number
    const convertedData = data.map((entry) => ({
      ...entry,
      co2e: entry.co2e ? entry.co2e.toNumber() : 0, // Convert Decimal to number if exists
    }));

    console.log("Data fetched and converted successfully:", convertedData);
    return convertedData;
  } catch (error) {
    console.error("Error fetching data:", error.message); 
    throw new Error("Error fetching data");
  }
}

// for real time chart

// const prismareal = new PrismaClient();

export const Co2eEmissionsreal = async (q, page) => {
  const { userId } = auth();
  try {
    const data = await prisma.co2e_emissions.findMany({
      select: {
        timestamp: true,
        co2e: true,
        co2e_unit: true,
        Label: true,
      },
      where: {
        AND: [
          {
            userId: userId, // Add condition to fetch only api_keys belonging to a specific userId
          },
        ],
      },
    });

    return { count: data.length, co2e_emissions: data };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { count: 0, co2e_emissions: [] };
  }
};

// for table dashboard
// lib/prisma.ts

// const prismatable = new PrismaClient();

export async function getCo2eEmissionsDatatable() {
  const { userId } = auth();
  try {
    const data = await prisma.co2e_emissions.findMany({
      select: {
        co2e: true, // Required for CO2e values
        co2e_unit: true, // Required for unit conversion
        Label: true, // Scope (e.g., Scope 1, Scope 2)
        category: true, // Drill down into categories
        location: true,
      },
      where: {
        AND: [
          {
            userId: userId, // Add condition to fetch only api_keys belonging to a specific userId
          },
        ],
      },
    });
    console.log("Data fetched successfully:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data during import itself");
  }
}

export async function fetchEmissionsData() {
  const { userId } = auth();
  try {
    const data = await prisma.co2e_emissions.findMany({
      select: {
        co2e: true, // Required for CO2e values
        co2e_unit: true, // Required for unit conversion
        Label: true, // Scope (e.g., Scope 1, Scope 2)
        location: true,
        timestamp: true, // Required for date extraction
      },
      where: {
        AND: [
          {
            userId: userId, // Add condition to fetch only api_keys belonging to a specific userId
          },
        ],
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data during import itself");
  }
}

//activity vs others

export async function fetchCo2eEmissionsForBarGraph() {
  const { userId } = auth();
  try {
    const emissionsData = await prisma.co2e_emissions.findMany({
      select: {
        co2e: true, // CO2e values for calculations
        co2e_unit: true, // Unit for conversion
        timestamp: true, // For extracting the month
        type: true, // To distinguish between activity and other types
      },
      where: {
        AND: [
          {
            userId: userId, // Add condition to fetch only api_keys belonging to a specific userId
          },
        ],
      },
    });
    return emissionsData;
  } catch (error) {
    console.error("Error fetching emissions data for bar graph:", error);
    throw new Error("Error fetching data for bar graph");
  }
}

export const exportAllRegionData = async (Name: string) => {
  try {
    const allRegions = await prisma.co2e_emissions.findUnique({
      where: {
        Name: Name,
      },
    });

    console.log(allRegions);

    const requestRegions = COORDINATES.map((i: any) => {
      return i.region;
    });

    console.log(requestRegions);

    const categorySet_split = allRegions.category.split(" - ");

    console.log(categorySet_split.length >= 2);
    const metricValue = categorySet_split[1].toLowerCase();

    console.log(metricValue);

    let co2eValue: { region: string; co2e: number }[] = [];
    let postData = [];
    for (const regions of requestRegions) {
      console.log(regions);
      if (allRegions.category === "Cloud Computing - CPU") {
        const {
          cpu_count,
          // regions,
          cpu_load,
          duration,
          duration_unit,
          year,
        } = allRegions.requestbody;

        postData.push({
          year: year,
          region: regions,
          cpu_load: cpu_load,
          duration: duration,
          provider: allRegions.requestbody.provider,
          cpu_count: cpu_count,
          metricValue,
          duration_unit: duration_unit,
        });
        console.log(postData);
      } else if (allRegions.category === "Cloud Computing - Memory") {
        const {
          data,
          // region: regions,
          data_unit,
          duration,
          duration_unit,
          year,
        } = allRegions.requestbody;

        postData.push({
          data: data,
          region: regions,
          data_unit: data_unit,
          duration: duration,
          provider: allRegions.requestbody.provider,
          year: year,
          metricValue,
          duration_unit: duration_unit,
        });
      } else if (allRegions.category === "Cloud Computing - Storage") {
        const {
          data,
          // region: regions,
          data_unit,
          duration,
          duration_unit,
          year,
          storage_type,
        } = allRegions.requestbody;

        postData.push({
          data: data,
          region: regions,
          data_unit: data_unit,
          duration: duration,
          provider: allRegions.requestbody.provider,
          year: year,
          metricValue,
          storage_type: storage_type,
          duration_unit: duration_unit,
        });
      } else if (allRegions.category === "Cloud Computing - Networking") {
        const {
          data,
          // region: regions,
          data_unit,
          year,
        } = allRegions.requestbody;

        postData.push({
          data: data,
          region: regions,
          data_unit: data_unit,
          provider: allRegions.requestbody.provider,
          year: year,
          metricValue,
        });
      }
    }

    console.log(postData);
    // console.log(CPU_PROVIDERS_REGION.map(item => item.provider_region))

    const filterRegion = postData.filter((coordinates) => {
      if (allRegions.category === "Cloud Computing - CPU") {
        return CPU_PROVIDERS_REGION.some(
          (i) =>
            coordinates.region.toLowerCase() ===
              i.provider_region.toLowerCase() &&
            i.providers.toLowerCase() === coordinates.provider.toLowerCase() &&
            i.provider_year == coordinates.year
        );
      } else if (allRegions.category === "Cloud Computing - Memory") {
        return MEMORY_PROVIDERS_REGION.some(
          (i) =>
            coordinates.region.toLowerCase() ===
              i.provider_region.toLowerCase() &&
            i.providers.toLowerCase() === coordinates.provider.toLowerCase()
        );
      } else if (allRegions.category === "Cloud Computing - Storage") {
        return STORAGE_PROVIDERS_REGION.some(
          (i) =>
            coordinates.region.toLowerCase() ===
              i.provider_region.toLowerCase() &&
            i.providers.toLowerCase() === coordinates.provider.toLowerCase()
        );
      } else if (allRegions.category === "Cloud Computing - Networking") {
        return NETWORK_PROVIDERS_REGION.some(
          (i) =>
            coordinates.region.toLowerCase() ===
              i.provider_region.toLowerCase() &&
            i.providers.toLowerCase() === coordinates.provider.toLowerCase()
        );
      }
    });

    // console.log(filterRegion)

    const filterMetricvalue = filterRegion.filter(
      (i) => metricValue === i.metricValue
    );

    console.log(filterMetricvalue);

    const postDataWithoutMetricValue = filterMetricvalue.map(
      ({ metricValue, ...rest }) => rest
    );

    console.log(postDataWithoutMetricValue);
    // console.log(filterRegion);
    // const updatedPostData = postDataWithoutMetricValue.map(item => {
    //   let matchingRegion;
    //   console.log(item.provider)

    //   if (allRegions.category === "Cloud Computing - CPU") {
    //     matchingRegion = CPU_PROVIDERS_REGION.find(region => region.provider_region.toLowerCase() === item.region.toLowerCase());
    //   } else if (allRegions.category === "Cloud Computing - Memory") {
    //     matchingRegion = MEMORY_PROVIDERS_REGION.find(region => region.provider_region.toLowerCase() === item.region.toLowerCase());
    //   } else if (allRegions.category === "Cloud Computing - Storage") {
    //     matchingRegion = STORAGE_PROVIDERS_REGION.find(region => region.provider_region.toLowerCase() === item.region.toLowerCase());
    //   } else if (allRegions.category === "Cloud Computing - Networking") {
    //     matchingRegion = NETWORK_PROVIDERS_REGION.find(region => region.provider_region.toLowerCase() === item.region.toLowerCase());
    //   }

    //   console.log(matchingRegion);

    //   if (matchingRegion) {
    //     return { ...item, year: matchingRegion.provider_year };
    //   }
    //   return item;
    // });

    // console.log(updatedPostData);

    let url = "";

    // @ts-ignore
    function generateUrl(
      category: string,
      metricValue: string,
      provider: string
    ): string {
      const baseUrl = "http://beta.api.earthemission.com/compute";
      console.log(metricValue, provider);
      return `${baseUrl}/${provider}/${metricValue}/batch`;
    }

    console.log(allRegions.category);

    if (
      allRegions.category === "Cloud Computing - CPU" &&
      metricValue === "cpu"
    ) {
      if (
        allRegions.requestbody.provider === "azure" ||
        allRegions.requestbody.provider === "aws" ||
        allRegions.requestbody.provider === "gcp"
      ) {
        url = generateUrl(
          "Cloud Computing - CPU",
          "cpu",
          allRegions.requestbody.provider
        );
      }
    } else if (
      allRegions.category === "Cloud Computing - Memory" &&
      metricValue === "memory"
    ) {
      if (
        allRegions.requestbody.provider === "azure" ||
        allRegions.requestbody.provider === "aws" ||
        allRegions.requestbody.provider === "gcp"
      ) {
        url = generateUrl(
          "Cloud Computing - Memory",
          "memory",
          allRegions.requestbody.provider
        );
      }
    } else if (
      allRegions.category === "Cloud Computing - Networking" &&
      metricValue === "networking"
    ) {
      if (
        allRegions.requestbody.provider === "azure" ||
        allRegions.requestbody.provider === "aws" ||
        allRegions.requestbody.provider === "gcp"
      ) {
        url = generateUrl(
          "Cloud Computing - Networking",
          "networking",
          allRegions.requestbody.provider
        );
      }
    } else if (
      allRegions.category === "Cloud Computing - Storage" &&
      metricValue === "storage"
    ) {
      if (
        allRegions.requestbody.provider === "azure" ||
        allRegions.requestbody.provider === "aws" ||
        allRegions.requestbody.provider === "gcp"
      ) {
        url = generateUrl(
          "Cloud Computing - Storage",
          "storage",
          allRegions.requestbody.provider
        );
      }
    } else {
      console.log("invalid category or metricvalue");
    }

    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer EE.O45AYXQ-AJFENCA-WS4CRSY-GZRRZRA",
      },
      body: JSON.stringify(postDataWithoutMetricValue),
    });

    const jsonData = await response.json();
    // console.log(jsonData.map((item) => item.co2e));
    console.log(jsonData);

    if (Array.isArray(jsonData)) {
      jsonData.forEach((data: any, index: number) => {
        if (data && data.co2e) {
          co2eValue.push({
            region: postDataWithoutMetricValue[index].region,
            co2e: data.co2e,
          });
        }
      });
      co2eValue.push({
        region: allRegions.requestbody.region,
        co2e: allRegions.responsebody.responsedata.co2e,
      });
    }

    console.log(co2eValue);
    return co2eValue;
  } catch (error) {
    console.error("Error:", error);
    // throw new Error('Internal Server Error');
  }
};
