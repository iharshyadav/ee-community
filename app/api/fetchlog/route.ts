import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request, res: NextApiResponse) {
  try {
    const LogEmissions = await prisma.co2e_emissions.findMany({
      orderBy: {
        id: "desc", // This will sort the results by `id` in descending order
      },
    });
    return NextResponse.json(LogEmissions);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching log data" },
      { status: 500 }
    );
  }
}
