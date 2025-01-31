// @ts-nocheck

import { NextResponse } from "next/server";
import prisma from "../../../utils/prismaClient";

export async function GET(request: Request) {
  try {
    const sector = await prisma.emission_factors_wce.findMany({
      select: {
        sector: true,
        //   category: true,
      },
      distinct: ["sector"],
    });
    console.log(sector);
    return NextResponse.json(sector);
  } catch (error) {
    console.log(error);
    return NextResponse.error(new Error("An error occurred"));
  } finally {
    prisma.$disconnect();
  }
}
