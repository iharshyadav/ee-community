import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const { userId: clerkUserId }: { userId: string | null } = auth();
    const { searchParams } = new URL(request.url ?? "");
    const userId = searchParams.get("userId");
    const body = await request.json();
    if (!userId) {
      return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
    }
    if (clerkUserId !== userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }
    try {
      console.log("here");
      console.log("Updating metadata with:", body);
      const requestBody = {
        unsafe_metadata: body.unsafeMetadata, // Use body.unsafeMetadata directly
      };

      console.log(requestBody);

      // Convert the request body to JSON string format
      const clerkbody = JSON.stringify(requestBody);
      const response = await axios.patch(
        `https://api.clerk.com/v1/users/${userId}/metadata`,
        clerkbody,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`, // Include the bearer token here
          },
        }
      );
      console.log(response);
      return NextResponse.json(response.data);
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
