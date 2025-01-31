// @ts-nocheck
import prisma from "../../utils/prismaClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { Name } = body;

    const existingRecord = await prisma.co2e_emissions.findUnique({
      where: { Name },
    });

    if (existingRecord) {
      return NextResponse.json({ error: "Name already exists!!!" });
    }

    return NextResponse.json({
      success: "Name does not exist",
    });
  } catch (error) {
    return NextResponse.json({ error: "Name already exists!!!" });
  }
}
