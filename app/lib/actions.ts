// @ts-nocheck

"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { AuthError } from "next-auth";
import generateApiKey from "generate-api-key";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/app/utils/prismaClient";

// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient()

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await prisma.users.create({
      data: {
        username,
        email,
        password: hashedPassword,
        phone,
        address,
        isAdmin: Boolean(),
        isActive: Boolean(),
      },
    });
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/dashboard/records");
  redirect("/dashboard/records");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await prisma.products.delete({
      where: {
        id: parseInt(id),
      },
    });
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await prisma.users.delete({
      where: {
        id: parseInt(id),
      },
    });
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/dashboard/products");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin: Boolean(),
      isActive: Boolean(),
    };

    // Remove undefined or empty fields
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === undefined || updateFields[key] === "") &&
        delete updateFields[key]
    );

    await prisma.users.update({
      where: { id: Number(id) },
      data: updateFields,
    });
  } catch (err) {
    console.error(err);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const deleteApikey = async (formData) => {
  // const {ids} = Object.fromEntries(formData);
  const ids = Array.isArray(formData.ids) ? formData.ids : [formData.ids];
  console.log(ids);

  try {
    for (const id of ids) {
      await prisma.api_keys.delete({
        where: {
          id: parseInt(id),
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/apikeys");
};

export const deletePrivateEmission = async (formData) => {
  // const {ids} = Object.fromEntries(formData);
  const ids = Array.isArray(formData.ids) ? formData.ids : [formData.ids];
  console.log(ids);

  try {
    for (const id of ids) {
      await prisma.private_emissions.delete({
        where: {
          id: parseInt(id),
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/emission-factors/private-factors");
};

export const deleteLogEmission = async (formData) => {
  // const {ids} = Object.fromEntries(formData);
  const ids = Array.isArray(formData.ids) ? formData.ids : [formData.ids];
  console.log(ids);

  try {
    for (const id of ids) {
      await prisma.co2e_emissions.delete({
        where: {
          id: parseInt(id),
        },
      });
    }
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/log-emissions");
};

// export const deletePrivateEmission = async (formData) => {
//   const {id} = Object.fromEntries(formData);

//   try {
//       await prisma.private_emissions.delete({
//           where:{
//               id: parseInt(id)
//           }
//       });
//   } catch (err) {
//       console.log(err);
//   }
//   revalidatePath("/dashboard/private_emissions");
//   };

export const deleteCo2eEmission = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await prisma.co2e_emissions.delete({
      where: {
        id: parseInt(id),
      },
    });
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/dashboard/log_emissions");
};

export const addApikey = async (formData) => {
  const { name } = Object.fromEntries(Object.entries(formData));
  const { userId } = auth();
  // const { name } = Object.fromEntries(formData);
  const currentDate = new Date();
  const expiryDate = new Date(currentDate.getTime() + 30 * 24 * 60 * 60 * 1000);

  console.log(name);
  console.log(userId);
  console.log(expiryDate);
  console.log(currentDate);

  try {
    const apiKey = generateApiKey({
      method: "base32",
      prefix: "EE",
    });

    await prisma.api_keys.create({
      data: {
        name,
        api_key: apiKey,
        userId: userId,
        expiry_date: expiryDate,
      },
    });
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/apikeys?");
  // redirect("/dashboard/apikeys?");
};
// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData,
// ) {
//   try {
//     await signIn('credentials', formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case 'CredentialsSignin':
//           return 'Invalid credentials.';
//         default:
//           return 'Something went wrong.';
//       }
//     }
//     throw error;
//   }
// }

export const addMessages = async (formData) => {
  const { firstname, lastname, email, message } = Object.fromEntries(formData);

  try {
    await prisma.contact_messages.create({
      data: {
        firstname,
        lastname,
        email,
        message,
      },
    });
  } catch (err) {
    console.log(err);
  }
  revalidatePath("http://localhost:3000/");
  redirect("http://localhost:3000/");
};

export const addPrivateEmissions = async (formData) => {
  const {
    name,
    sector,
    category,
    year,
    region_name,
    source,
    unit,
    emission_factor,
  } = Object.fromEntries(Object.entries(formData));

  const activity_id = `${name}_${sector}_${category}`.replace(/ /g, "_");
  const { userId } = auth();

  console.log(activity_id);

  try {
    await prisma.private_emissions.create({
      data: {
        activity_id,
        name,
        sector,
        category,
        year: parseInt(year),
        region_name,
        source,
        unit,
        emission_factor: parseFloat(emission_factor),
        userId: userId,
      },
    });
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/emission-factors/private-factors?");
  // redirect('http://localhost:3000/');
};

// export const addCo2eEmissions = async (formData) => {
//   const { Name, sector, category, methodology, year, region, co2e_unit, co2e } =
//     Object.fromEntries(Object.entries(formData));

//   // const activity_id = `${name}_${sector}_${category}`.replace(/ /g, '_');
//   const { userId } = auth();

//   // console.log(activity_id)
//   console.log(Name);
//   console.log(co2e_unit);
//   console.log(co2e);
//   console.log(category);
//   console.log(sector);

//   try {
//     await prisma.co2e_emissions.create({
//       data: {
//         Name,
//         sector,
//         category,
//         methodology,
//         year: parseInt(year),
//         region,
//         co2e_unit,
//         co2e: parseFloat(co2e),
//         userId: userId,
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }
//   revalidatePath("/log-emissions?");
//   // redirect('http://localhost:3000/');
// };

export const addCo2eEmissions = async (formData: any) => {
  const {
    Name,
    sector,
    category,
    year,
    region,
    co2e_unit,
    co2e,
    Scope,
    requestbody,
    responsebody,
  } = Object.fromEntries(Object.entries(formData));
  // const activity_id = `${name}_${sector}_${category}`.replace(/ /g, '_');
  const { userId } = auth();
  // console.log(activity_id)
  console.log(Name);
  console.log(co2e_unit);
  console.log(co2e);
  console.log(category);
  console.log(sector);
  console.log(requestbody);
  console.log(responsebody);
  console.log(Scope);

  const uniqueName = await prisma.co2e_emissions.findUnique({
    where: {
      Name,
    },
  });

  if (uniqueName) {
    return {
      error: "Failed to add. Emission name already exists!!!",
    };
  }
  try {
    console.log("first");
    // @ts-ignore
    await prisma.co2e_emissions.create({
      data: {
        Name,
        sector,
        category,
        // @ts-ignore
        year: parseInt(year),
        region,
        co2e_unit,
        // @ts-ignore
        co2e: parseFloat(co2e),
        userId: userId,
        Label: Scope,
        requestbody: JSON.parse(JSON.stringify(requestbody)),
        responsebody: JSON.parse(JSON.stringify(responsebody)),
      },
    });
  } catch (err) {
    console.log(err);
    return {
      error: "Failed to add. Emission name already exists!!!",
    };
  }
  revalidatePath("log-emissions?");
  // redirect("/log-emissions?");
};

export const upadateCo2eEmissions = async (formData: any) => {
  const {
    Name,
    sector,
    category,
    year,
    region,
    co2e_unit,
    co2e,
    requestbody,
    responsebody,
  } = Object.fromEntries(Object.entries(formData));
  const { userId } = auth();

  try {
    console.log("first");
    // @ts-ignore
    await prisma.co2e_emissions.update({
      where: {
        Name: Name,
        sector: sector,
        category: category,
      },
      data: {
        // @ts-ignore
        year: parseInt(year),
        region: region,
        co2e_unit: co2e_unit,
        // @ts-ignore
        co2e: parseFloat(co2e),
        userId: userId,
        requestbody: JSON.parse(JSON.stringify(requestbody)),
        responsebody: JSON.parse(JSON.stringify(responsebody)),
      },
    });
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/log-emissions?");
  // redirect('http://localhost:3000/');
};

export const saveData = async (data: string, name: string) => {
  if (!data) {
    throw new Error("can't find scope");
  }
  // Attempt to find an existing record with the given label
  const existingRecord = await prisma.co2e_emissions.findUnique({
    where: {
      Name: name,
    },
  });
  let response;
  if (existingRecord) {
    // If the record exists, update it
    response = await prisma.co2e_emissions.update({
      where: {
        Name: name,
      },
      data: {
        Label: data,
      },
    });
  } else {
    // If the record does not exist, create a new one
    response = await prisma.co2e_emissions.create({
      data: {
        Label: data,
      },
    });
  }
  return response;
};

export const fetchData = async (Name: string) => {
  const fetch = await prisma.co2e_emissions.findUnique({
    where: {
      Name: Name,
    },
  });

  // const label = fetch.Label;
  // console.log(label);
  return fetch;
};

export const feedbackForm = async (rating: number | null, feedback: string) => {
  try {
    const newFeedback = await prisma.feedback.create({
      data: {
        rating: rating,
        comment: feedback,
      },
    });
    // console.log('Feedback saved:', newFeedback);
    return {
      msg: "Feedback Submitted",
    };
  } catch (error) {
    console.error("Error saving feedback:", error);
    return;
  }
};


export const getCommentsByQuestionId = async (questionId: string) => {
  const comments = await prisma.comment.findMany({
    where: {
      questionId: questionId,
    },
    orderBy: {
      createdAt: 'asc', 
    },
  });

  return comments;
};
