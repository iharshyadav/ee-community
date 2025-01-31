// @ts-nocheck

import { NextResponse } from "next/server";
import prisma from "../../../../utils/prismaClient";

export async function GET(request: Request, { params }) {
  try {
    const sector = params.sector;
    const category = await prisma.emission_factors_wce.findMany({
      where: {
        sector: sector, // Replace with the desired sector value
      },
      select: {
        category: true,
      },
      distinct: ["category"],
    });
    console.log(category);
    return NextResponse.json(category);
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
}
