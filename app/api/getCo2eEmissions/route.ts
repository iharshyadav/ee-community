import { NextResponse } from "next/server";
import { Co2eEmissions } from "@/app/lib/data";

export async function POST(request: Request) {
  try {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const page = url.searchParams.get("page");

    if (!q || !page) {
      return NextResponse.json(
        { error: "Missing query or page parameter" },
        { status: 400 }
      );
    }

    const { count, co2e_emissions } = await Co2eEmissions(q, page);

    return NextResponse.json({ count, co2e_emissions });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
