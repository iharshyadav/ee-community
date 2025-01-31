"use client";
import { useEffect, useRef } from "react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
// import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
import Message from "./Message";
import { useUser } from "@clerk/nextjs";

type Props = {
  chatId: string;
};

// const session = {
//   user: {
//     email: "randomuser@example.com"
//   }
// };

function Chat({ chatId }: Props) {
  // const { data: session } = useSession();
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(isSignedIn, user, isLoaded);
  console.log("User is signed in");
  if (isLoaded && user && user.primaryEmailAddress) {
    console.log("User is loaded");
    console.log(user.primaryEmailAddress.emailAddress);
  }
  const [messages] = useCollection(
    user &&
      isLoaded &&
      query(
        collection(
          db,
          "users",
          user?.primaryEmailAddress?.emailAddress!,
          "chats",
          chatId,
          "messages"
        ),
        orderBy("createdAt", "asc")
      )
  );

  console.log("Messages: " + messages);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  function scrollToBottom() {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {messages?.empty && (
        <>
          <p className="mt-24 text-center text-black">
            Type a message below to get started!
          </p>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-black animate-bounce" />
        </>
      )}

      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default Chat;
