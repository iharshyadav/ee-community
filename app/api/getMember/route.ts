import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const Url = new URL(request.url);
  const organization_id = Url.searchParams.get("organization_id");
  try {
    const response = await axios.get(
      `https://api.clerk.com/v1/organizations/${organization_id}/memberships`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        },
      }
    );
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(error);
    // return NextResponse.json({error: 'Failed to sent Invite'}, {status: 500});
  }
}

export async function DELETE(request: Request) {
  console.log(request);
  const Url = new URL(request.url);
  console.log(Url);
  const organization_id = Url.searchParams.get("organization_id");
  const member_id = Url.searchParams.get("member_id");
  console.log(organization_id, member_id);
  try {
    const response = await axios.delete(
      `https://api.clerk.com/v1/organizations/${organization_id}/memberships/${member_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        },
      }
    );
    console.log(response);
    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(error);
    // return NextResponse.json({error: 'Failed to sent Invite'}, {status: 500});
  }
}
