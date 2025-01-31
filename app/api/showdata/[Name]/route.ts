// export const showData = async (Name: string) => {
//   // const regex = new RegExp(q, "i");
//   // const { userId } = auth();

//   console.log("Name", Name);

//   const data = await prisma.co2e_emissions.findFirst({
//     where: {
//       Name: Name,
//     },
//   });
//   console.log(data);
//   return data;
// };

// @ts-nocheck

import { NextResponse } from "next/server";
import prisma from "../../../utils/prismaClient";

export async function GET(request: Request, { params }) {
  try {
    const Name = params.Name;
    const showdata = await prisma.co2e_emissions.findFirst({
      where: {
        Name: Name,
      },
    });
    console.log(showdata);
    return NextResponse.json(showdata);
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
}
