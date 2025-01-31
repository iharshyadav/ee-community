"use client";
import { useRef, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
// import { useSession } from "next-auth/react";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
import { toast } from "react-hot-toast";
import ModelSelection from "./ModelSelection";
import useSWR from "swr";
import { useUser } from "@clerk/nextjs";

type Props = {
  chatId: string;
};

// const session = {
//   user: {
//     email: "randomuser@example.com"
//   }
// };

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  // const { data: session } = useSession();
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(isSignedIn, user, isLoaded);
  console.log("User is signed in");
  if (isLoaded) {
    console.log("User is loaded");
    console.log(user);
  }
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { data: model } = useSWR("model", {
    fallbackData: "gpt-3.5",
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const resizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.rows = 1;
      const numRows = Math.min(textareaRef.current.scrollHeight / 20, 8);
      textareaRef.current.rows = numRows;
    }
  };
  const imageurl = user?.imageUrl ?? "/images/user-avatar-80.png";
  const sendMessage = async () => {
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    console.log("ChatId: " + chatId);
    console.log(user?.fullName);
    console.log(imageurl);

    const message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: user?.primaryEmailAddress?.emailAddress!,
        name: user?.fullName!,
        avatar:
          imageurl || `https://ui-avatars.com/api/?name=${user?.fullName}`,
      },
    };

    try {
      await addDoc(
        collection(
          db,
          "users",
          user?.primaryEmailAddress?.emailAddress!,
          "chats",
          chatId,
          "messages"
        ),
        message
      );

      const notification = toast.loading("Please wait...");

      await fetch("/api/askQuestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: input,
          chatId,
          model,
          email: user?.primaryEmailAddress?.emailAddress!,
        }),
      });

      console.log(input);
      toast.success("EmissionsGPT has responded!", {
        id: notification,
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }

    textareaRef.current?.focus();
    resizeTextarea();
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
    const target = e.target as HTMLTextAreaElement;
    target.rows = 1;
    const numRows = Math.min(target.scrollHeight / 20, 8);
    target.rows = numRows;
  };

  return (
    <div className="bg-white dark:bg-gray-700/50  rounded-lg text-[16px]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="p-5 space-x-5 flex"
      >
        <textarea
          ref={textareaRef}
          rows={1}
          placeholder="Type your message here ..."
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300 resize-none"
          disabled={!isSignedIn}
          value={prompt}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />

        <button
          title="Send Message"
          type="button"
          onClick={sendMessage}
          disabled={!prompt || !isSignedIn}
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded cursor-pointer text-[16px] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-[#11A37F]"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>

      <div className="md:hidden">
        <ModelSelection />
      </div>
    </div>
  );
}

export default ChatInput;
