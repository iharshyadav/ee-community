// @ts-nocheck

/* eslint no-use-before-define: 0 */

// import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// // import { useSession } from "next-auth/react";
// import { useEffect, useState } from "react";
// import { useCollection } from "react-firebase-hooks/firestore";
// import {
//   collection,
//   Query,
//   query,
//   orderBy,
//   deleteDoc,
//   doc,
// } from "firebase/firestore";
// import { db } from "@/firebase";
// import { useUser } from "@clerk/nextjs";

// type Props = {
//   id: string;
// };

// function ChatRow({ id }: Props) {
//   const pathname = usePathname();
//   const router = useRouter();

//   const { isSignedIn, user, isLoaded } = useUser();
//   console.log(isSignedIn, user, isLoaded);
//   console.log("User is signed in");
//   if (isLoaded) {
//     console.log("User is loaded");
//     console.log(user.primaryEmailAddress.emailAddress);
//   }

//   // const { data: session } = useSession();
//   const [active, setActive] = useState(false);
//   const [messages] = useCollection(
//     query(
//       collection(
//         db,
//         "users",
//         user.primaryEmailAddress.emailAddress!,
//         "chats",
//         id,
//         "messages"
//       ),
//       orderBy("createdAt", "asc")
//     )
//   );

//   // eslint-disable-next-line
//   useEffect(() => {
//     if (!pathname) return;

//     setActive(pathname.includes(id));
//   }, [id, pathname]);

//   // Log the message data
//   useEffect(() => {
//     if (messages) {
//       messages.docs.forEach((message, index) => {
//         //console.log(`Chatrow Message ${index + 1}:`, message.data());
//       });
//     }
//   }, [messages]);

//   const removeChat = async () => {
//     const shouldDelete = confirm("Are you sure you want to delete this chat?");
//     if (shouldDelete) {
//       await deleteDoc(
//         doc(db, "users", user.primaryEmailAddress.emailAddress!, "chats", id)
//       );
//       router.replace("/emissionsgpt");
//     }
//   };

//   const lastMessageData = messages?.docs?.[messages.docs.length - 1]?.data();
//   const firstMessageData = messages?.docs?.[0]?.data();

//   const firstMessageText =
//     typeof firstMessageData?.text === "string"
//       ? firstMessageData.text.substring(0, 40)
//       : "";

//   console.log("firstMessageText: " + firstMessageText);

//   return (
//     <Link
//       href={`/emissionsgpt/chat/${id}`}
//       className={`rounded-lg px-5 py-3 text-sm space-x-2 flex items-center hover:bg-gray-700/70 cursor-pointer text-gray-300 transition-all duration-200 ease-out justify-center mt-3 ${
//         active && "bg-gray-700/50"
//       }`}
//     >
//       <ChatBubbleLeftIcon className="h-5 w-5" />

//       <p className="flex-1 truncate">{firstMessageText}</p>

//       <TrashIcon
//         onClick={removeChat}
//         className="h-5 w-5 transition-all duration-200 text-gray-700 hover:text-red-700"
//       />
//     </Link>
//   );
// }

// export default ChatRow;

"use client";

import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";
import { useUser } from "@clerk/nextjs";

type Props = {
  id: string;
};

export default function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { isSignedIn, user, isLoaded } = useUser();
  const [active, setActive] = useState(false);

  const [messages] = useCollection(
    isLoaded && user
      ? query(
          collection(
            db,
            "users",
            user.primaryEmailAddress!.emailAddress!,
            "chats",
            id,
            "messages"
          ),
          orderBy("createdAt", "asc")
        )
      : null
  );

  useEffect(() => {
    if (!pathname) return;
    setActive(pathname.includes(id));
  }, [pathname, id]);

  const removeChat = async (e: React.MouseEvent) => {
    e.preventDefault();
    const shouldDelete = confirm("Are you sure you want to delete this chat?");
    if (shouldDelete && user) {
      await deleteDoc(
        doc(db, "users", user.primaryEmailAddress!.emailAddress!, "chats", id)
      );
      router.replace("/emissionsgpt");
    }
  };

  const firstMessageText = messages?.docs[0]?.data().text || "New Chat";
  const truncatedText =
    firstMessageText.length > 30
      ? `${firstMessageText.substring(0, 30)}...`
      : firstMessageText;

  return (
    <Link
      href={`/emissionsgpt/chat/${id}`}
      className={`
        rounded-lg px-5 py-3 text-sm flex items-center justify-between
        transition-colors duration-200 ease-out
        ${
          active
            ? "bg-green-500/10 text-green-600 dark:text-green-400"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
        }
      `}
    >
      <div className="flex items-center space-x-2 flex-1 min-w-0">
        <ChatBubbleLeftIcon className="h-5 w-5 flex-shrink-0" />
        <p className="truncate flex-1">{truncatedText}</p>
      </div>

      <TrashIcon
        onClick={removeChat}
        className="h-5 w-5 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-200"
      />
    </Link>
  );
}
