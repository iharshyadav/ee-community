// @ts-nocheck

/* eslint no-use-before-define: 0 */

"use client";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import NewChat from "../components/Newchat";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import Image from "next/image";
import { useState } from "react";
import { useUserContext } from "@/app/(context)/userContext";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { SignedIn } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { Skeleton } from "@nextui-org/skeleton";
import { useRouter } from "next/navigation";

function Sidebar() {
  const { isSignedIn, user, isLoaded } = useUser();
  // console.log(isSignedIn, user, isLoaded)
  // console.log("User is signed in")
  if (!isSignedIn) {
    useRouter().push("/sign-in");
  }
  if (isLoaded) {
    console.log("User is loaded");
    console.log(user.primaryEmailAddress.emailAddress);
  }
  const imageurl = user?.imageUrl ?? "/images/user-avatar-80.png";

  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState<string>("");

  console.log(email);

  const [chats, loading, error] = useCollection(
    isLoaded &&
      isSignedIn &&
      query(
        collection(
          db,
          "users",
          user.primaryEmailAddress.emailAddress!,
          "chats"
        ),
        orderBy("createdAt", "asc")
      )
  );

  console.log("Chats: " + chats);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger icon for mobile */}
      <div
        className="md:hidden fixed top-0 right-0 z-50 mr-3 mt-3"
        onClick={toggleSidebar}
      >
        <div className="w-6 h-6 relative">
          <span className="bg-white absolute left-0 top-0 w-full h-0.5"></span>
          <span className="bg-white absolute left-0 top-1/2 w-full h-0.5"></span>
          <span className="bg-white absolute left-0 bottom-0 w-full h-0.5"></span>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed inset-y-0 left-0 z-40 transition duration-300 ease-in-out bg-white dark:bg-[#202123] w-72 overflow-y-auto md:static md:h-full md:w-64`}
      >
        <div className="p-2 flex pt-20 flex-col h-screen">
          <div className="flex-1">
            {isLoaded ? (
              <>
                <NewChat />

                <div className="hidden sm:inline">
                  <ModelSelection />
                </div>

                <div className="flex flex-col space-y-2 my-2">
                  {loading && (
                    <div className="animate-pulse text-center text-black">
                      <p>Loading Chats...</p>
                    </div>
                  )}

                  {chats?.docs.map((chat) => (
                    <ChatRow key={chat.id} id={chat.id} />
                  ))}
                </div>
              </>
            ) : (
              <div className="space-y-4">
                {/* Skeleton for user profile picture */}
                <Skeleton className="h-12 mt-2 w-full px-5 rounded-lg" />

                {/* Skeleton for NewChat button */}
                <Skeleton className="h-10 w-full rounded-lg" />

                {/* Skeleton for ModelSelection */}
                <Skeleton className="h-9 pt-12 w-full rounded-lg" />

                {/* Skeleton for chat list */}
                <Skeleton className="h-9 w-full rounded-lg" />
                <Skeleton className="h-9 w-full rounded-lg" />
                <Skeleton className="h-9 w-full rounded-lg" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
