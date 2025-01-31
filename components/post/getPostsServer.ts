"use server"
import prisma from "@/app/utils/prisma";

export async function getByIdPost (id:number) {

    try {
 
     if(!id) return {
         msg : "Post not found"
     }
     
     const getPost = await prisma.post.findUnique({
         where : {
             id : id,
         }
     })
 
     return getPost;
    } catch (error) {
     return {
         msg : "Failed to get Post"
     }
    }
 }