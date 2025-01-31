// @ts-nocheck

import { NextRequest, NextResponse } from "next/server";
export async function POST(request, { params }) {
  try {
    const body = await request.json();
    const jsonString = JSON.stringify(body);
    console.log(body);
    console.log(jsonString);
    const apiKey = "Bearer EE.O45AYXQ-AJFENCA-WS4CRSY-GZRRZRA"; // Your API key
    const headers = {
      Authorization: apiKey,
      "Content-Type": "application/json",
    };

    const res = await fetch(
      "http://beta.api.earthemission.com/freight/intermodal",
      {
        method: "POST",
        body: jsonString,
        headers: headers,
      }
    );

    console.log(res);

    if (!res.ok) {
      const errorText = await res.text(); // Read the response body text
      console.error("Error Response:", errorText);
      throw new Error("Failed to fetch data");
    }

    const responsedata = await res.json();
    console.log(responsedata);

    return NextResponse.json({ responsedata });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error });
  }
}
