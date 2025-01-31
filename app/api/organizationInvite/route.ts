import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import axios from "axios";

export async function POST(request: Request) {
  const { userId }: { userId: string | null } = auth();

  const data = await request.json();

  const { email, role, organization_id, memberName } = data;

  try {
    const response = await axios.post(
      `https://api.clerk.com/v1/organizations/${organization_id}/invitations`,
      {
        email_address: email,
        inviter_user_id: userId,
        role: `org:${role}`,
        public_metadata: { memberName },
        redirect_url: "https://app.earthemission.com/sign-up",
      },
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

export async function GET(request: Request) {
  const Url = new URL(request.url);
  const organization_id = Url.searchParams.get("organization_id");

  try {
    const response = await axios.get(
      `https://api.clerk.com/v1/organizations/${organization_id}/invitations?status=pending`,
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
