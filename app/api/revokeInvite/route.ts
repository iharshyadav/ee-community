import axios from "axios";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const { userId }: { userId: string | null } = auth();

  const data = await req.json();

  const { invitation_id, organization_id } = data;

  try {
    const response = await axios.post(
      `https://api.clerk.com/v1/organizations/${organization_id}/invitations/${invitation_id}/revoke`,
      {
        requesting_user_id: userId,
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
