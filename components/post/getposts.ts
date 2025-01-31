"use client"
import prisma from "@/app/utils/prisma";
import axios from "axios";

export async function fetchPosts() {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/fetchpost`);
  if (response.status !== 200) {
    throw new Error("Failed to fetch posts");
  }
//   console.log(response.data)
  return response.data;
}