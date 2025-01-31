"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useSocket } from "@/config/socketProvider";
import { useUser } from "@clerk/nextjs";
import { ArrowRightIcon } from "lucide-react";
import { getCommentsByQuestionId } from "@/app/lib/actions";

export default function DynamicComments() {
  const { sendMessage, messages, questionId } = useSocket();
  const { user } = useUser();
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [databaseMessages, setDatabaseMessages] = useState<any[]>([]);

  console.log(messages)
 
  const fetchComments = useCallback(async () => {
    if (questionId) {
      try {  
        const comments = await getCommentsByQuestionId(questionId);
        setDatabaseMessages(comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }
  }, [questionId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, databaseMessages]);

  const uniqueMessages = [
    ...databaseMessages,
    ...messages,
  ].filter((message, index, self) =>
    index === self.findIndex((m) => m.msg === message.msg && m.userID === message.userID)
  );

  return (
    <div className="relative w-full max-w-xs p-3 border rounded-lg shadow bg-white flex flex-col min-h-[72vh]">
      <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-300 pb-16">
      {uniqueMessages
          .filter((e) => e.questionId === questionId)
          .map((e, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 ${
              e.userID === user?.id ? "justify-end" : "justify-start"
            }`}
          >
            {e.userID !== user?.id && (
              <img
                src={e.avatar || "/default-avatar.png"}
                alt="User Avatar"
                className="w-8 h-8 rounded-full border"
              />
            )}
            <div className="flex flex-col max-w-[75%] break-words">
              {e.userID !== user?.id && (
                <span className="text-xs text-gray-600 font-semibold">
                  {e.fullName || "Anonymous"}
                </span>
              )}
              <div
                className={`p-2 text-sm rounded-lg ${
                  e.userID === user?.id
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-900 rounded-bl-none"
                }`}
              >
                <p>{e.msg}</p>
              </div>
            </div>
            {e.userID === user?.id && (
              <img
                src={e.avatar || "/default-avatar.png"}
                alt="User Avatar"
                className="w-8 h-8 rounded-full border"
              />
            )}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white p-2 border-t shadow-md flex items-center gap-2">
        <input
          className="flex-1 p-2 text-sm border rounded-lg outline-none"
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && message.trim()) {
              sendMessage(message);
              setMessage("");
            }
          }}
          placeholder="Type a comment..."
          value={message}
        />
        <button
          onClick={() => {
            if (message.trim()) {
              sendMessage(message);
              setMessage("");
            }
          }}
          className="bg-blue-500 text-white text-xs p-2 rounded-lg hover:bg-blue-600 transition"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
