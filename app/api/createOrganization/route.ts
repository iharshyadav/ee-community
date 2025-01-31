import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Extract values from the body
    const { userId, companyName } = data;
    try {
      try {
        const response = await axios.post(
          "https://api.clerk.com/v1/organizations",
          {
            name: companyName,
            created_by: userId,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
            },
          }
        );

        return NextResponse.json(response.data);
      } catch (error: any) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
        return NextResponse.json(
          { message: "Internal Server Error" },
          { status: 500 }
        );
      }
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
