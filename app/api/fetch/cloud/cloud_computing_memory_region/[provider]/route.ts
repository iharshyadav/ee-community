// @ts-nocheck

import { NextResponse } from "next/server";
import prisma from "@/app/utils/prismaClient";

export async function GET(request: Request, { params }) {
  try {
    const provider = params.provider;

    console.log(provider);
    const cloud_computing_memory_region =
      await prisma.cloud_computing_memory.findMany({
        where: {
          provider_id: provider, // Replace with the desired provider value
        },
        distinct: "region",
      });
    console.log(cloud_computing_memory_region);
    return NextResponse.json(cloud_computing_memory_region);
  } catch (error) {
    return NextResponse.json(error);
  } finally {
    prisma.$disconnect();
  }
}
