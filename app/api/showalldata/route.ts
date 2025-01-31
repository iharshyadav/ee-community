// @ts-nocheck

import prisma from "../../utils/prismaClient";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
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

    return NextResponse.json({ scopeSums, scopeQuery, showAllData });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
