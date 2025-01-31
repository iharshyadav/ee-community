"use client";
import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";

type Props = {
  params: {
    id: string;
  };
};

function ChatPage({ params: { id } }: Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden pb-0 p-5 pt-16 md:pt-0">
      <Chat chatId={id} />

      <ChatInput chatId={id} />
    </div>
  );
}

export default ChatPage;
