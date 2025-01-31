"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useUserContext } from "@/app/(context)/userContext";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { useUser } from "@clerk/nextjs";
// import { useEffect, useState } from "react";

function NewChat() {
  const router = useRouter();
  // const { data: session } = useSession()
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(isSignedIn, user, isLoaded);
  console.log("User is signed in");
  if (isLoaded && user && user.primaryEmailAddress) {
    console.log("User is loaded");
    console.log(user.primaryEmailAddress.emailAddress);
  }

  // console.log("NewChat: Current User: " + currentUser.primaryEmailAddress);

  const createChat = async () => {
    try {
      const doc = await addDoc(
        collection(
          db,
          "users",
          user?.primaryEmailAddress?.emailAddress!,
          "chats"
        ),
        {
          messages: [],
          userId: user?.primaryEmailAddress?.emailAddress!,
          createdAt: serverTimestamp(),
        }
      );

      console.log("Doc: " + doc);

      router.push(`/emissionsgpt/chat/${doc.id}`);
    } catch (error) {
      console.error("Error connecting to Firebase:", error);
    }
  };

  return (
    <div
      onClick={createChat}
      className="border border-green-500 dark:border-gray-700 rounded-lg px-5 py-3 text-sm flex items-center justify-center cursor-pointer transition-all duration-200 ease-out
      text-green-600 hover:text-white
      hover:bg-green-600 hover:border-green-600
      dark:text-gray-300 dark:hover:text-green-400
      dark:hover:bg-gray-700/70 dark:hover:border-green-400"
    >
      <PlusIcon className="h-4 w-4 mr-2" />
      <p>New Chat</p>
    </div>
  );
}

export default NewChat;
