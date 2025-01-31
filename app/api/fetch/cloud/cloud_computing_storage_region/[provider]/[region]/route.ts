// @ts-nocheck

import { NextResponse } from "next/server";
import prisma from "@/app/utils/prismaClient";

export async function GET(request: Request, { params }) {
  try {
    const provider = params.provider;
    const region = params.region;

    console.log(provider);
    console.log(region);
    const cloud_computing_storage_year =
      await prisma.cloud_computing_storage.findMany({
        where: {
          provider_id: provider, // Replace with the desired provider value
          region: region,
        },
        distinct: "year",
      });
    console.log(cloud_computing_storage_year);
    return NextResponse.json(cloud_computing_storage_year);
  } catch (error) {
    return NextResponse.json(error);
  } finally {
    prisma.$disconnect();
  }
}
