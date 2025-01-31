// import type { NextApiRequest, NextApiResponse } from "next";
// import openaiQuery from "../../lib/queryApi";
// import admin from "firebase-admin";
// import { adminDB } from "@/firebaseAdmin";
// import { query, collection, getDocs, orderBy } from "firebase/firestore";
// import { db } from "@/firebase";
// import { NextRequest, NextResponse } from "next/server";

// type Data = {
//   answer: string;
//   error?: string;
// };

// interface Message {
//   text: string;
//   createdAt: admin.firestore.Timestamp;
//   user: {
//     _id: string;
//     name: string;
//     avatar: string;
//   };
// }

// async function fetchChatMessages(chatId: string, userEmail: string) {
//   const messagesRef = collection(
//     db,
//     "users",
//     userEmail,
//     "chats",
//     chatId,
//     "messages"
//   );
//   const messagesQuery = query(messagesRef, orderBy("createdAt", "asc"));
//   const messagesSnapshot = await getDocs(messagesQuery);

//   const allMessages: { role: string; content: string }[] = [];

//   messagesSnapshot.forEach((doc) => {
//     const messageData = doc.data() as {
//       text: string;
//       createdAt: any;
//       user: { _id: string; avatar: string };
//     };
//     const role = messageData.user._id === userEmail ? "user" : "assistant";
//     allMessages.push({ role, content: messageData.text });
//   });

//   const lastMessages: { role: string; content: string }[] = [];
//   let userCount = 0;
//   let assistantCount = 0;

//   for (let i = allMessages.length - 1; i >= 0; i--) {
//     if (userCount < 5 && allMessages[i].role === "user") {
//       lastMessages.unshift(allMessages[i]);
//       userCount++;
//     } else if (assistantCount < 5 && allMessages[i].role === "assistant") {
//       lastMessages.unshift(allMessages[i]);
//       assistantCount++;
//     }

//     if (userCount >= 5 && assistantCount >= 5) {
//       break;
//     }
//   }

//   return lastMessages;
// }

// export async function POST(req: NextRequest) {
//   try {
//     const { prompt, chatId, model, email } = await req.json();

//     console.log("Prompt: " + prompt);
//     console.log("ChatId: " + chatId);
//     console.log("Model: " + model);
//     console.log("Email: " + email);

//     if (!prompt) {
//       throw new Error("Please provide a prompt!");
//     }

//     if (!chatId) {
//       throw new Error("Please provide a valid chat ID");
//     }

//     const defaultPrompt =
//       "AI Chatbot able to emulate whatever personality is appropriate for the situation. For example, 'I am a doctor' or 'I am a lawyer'";
//     const chatMessages = await fetchChatMessages(chatId, email!);
//     const messages = [
//       { role: "system", content: defaultPrompt },
//       ...chatMessages,
//     ];

//     const response = await openaiQuery(model, messages);

//     console.log(response);

//     const message: Message = {
//       text:
//         (response as string) ||
//         "AI Chatbot was unable to find the answer to that",
//       createdAt: admin.firestore.Timestamp.now(),
//       user: {
//         _id: "AIChatbot",
//         name: "AIChatbot",
//         avatar: "/public/logo.svg",
//       },
//     };

//     await adminDB
//       .collection("users")
//       .doc(email!)
//       .collection("chats")
//       .doc(chatId)
//       .collection("messages")
//       .add(message);

//     return NextResponse.json({ answer: message.text }, { status: 200 });
//   } catch (err: any) {
//     console.error("Error:", err);
//     return NextResponse.json(
//       {
//         answer: "An error occurred while processing your request.",
//         error: err.message,
//       },
//       { status: 500 }
//     );
//   }
// }
import type { NextApiRequest, NextApiResponse } from "next";
import openaiQuery from "../../lib/queryApi";
import admin from "firebase-admin";
import { adminDB } from "@/firebaseAdmin";
import { query, collection, getDocs, orderBy } from "firebase/firestore";
import { db } from "@/firebase";
import { NextRequest, NextResponse } from "next/server";

type Data = {
  answer: string;
  error?: string;
};

interface Message {
  text: string;
  createdAt: admin.firestore.Timestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}

async function fetchChatMessages(chatId: string, userEmail: string) {
  const messagesRef = collection(
    db,
    "users",
    userEmail,
    "chats",
    chatId,
    "messages"
  );
  const messagesQuery = query(messagesRef, orderBy("createdAt", "asc"));
  const messagesSnapshot = await getDocs(messagesQuery);

  const allMessages: { role: string; content: string }[] = [];

  messagesSnapshot.forEach((doc) => {
    const messageData = doc.data() as {
      text: string;
      createdAt: any;
      user: { _id: string; avatar: string };
    };
    const role = messageData.user._id === userEmail ? "user" : "assistant";
    allMessages.push({ role, content: messageData.text });
  });

  const lastMessages: { role: string; content: string }[] = [];
  let userCount = 0;
  let assistantCount = 0;

  for (let i = allMessages.length - 1; i >= 0; i--) {
    if (userCount < 5 && allMessages[i].role === "user") {
      lastMessages.unshift(allMessages[i]);
      userCount++;
    } else if (assistantCount < 5 && allMessages[i].role === "assistant") {
      lastMessages.unshift(allMessages[i]);
      assistantCount++;
    }

    if (userCount >= 5 && assistantCount >= 5) {
      break;
    }
  }

  return lastMessages;
}

export async function POST(req: NextRequest) {
  try {
    const { prompt, chatId, model, email } = await req.json();

    console.log("Prompt: " + prompt);
    console.log("ChatId: " + chatId);
    console.log("Model: " + model);
    console.log("Email: " + email);

    if (!prompt) {
      throw new Error("Please provide a prompt!");
    }

    if (!chatId) {
      throw new Error("Please provide a valid chat ID");
    }

    const defaultPrompt =
      "AI Chatbot able to emulate whatever personality is appropriate for the situation. For example, 'I am a doctor' or 'I am a lawyer'";
    const chatMessages = await fetchChatMessages(chatId, email!);
    const messages = [
      { role: "system", content: defaultPrompt },
      ...chatMessages,
    ];

    const response = await openaiQuery(model, messages, prompt);

    console.log(response);

    const message: Message = {
      text:
        (response as string) ||
        "AI Chatbot was unable to find the answer to that",
      createdAt: admin.firestore.Timestamp.now(),
      user: {
        _id: "AIChatbot",
        name: "AIChatbot",
        avatar: "/public/logo.svg",
      },
    };

    await adminDB
      .collection("users")
      .doc(email!)
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .add(message);

    return NextResponse.json({ answer: message.text }, { status: 200 });
  } catch (err: any) {
    console.error("Error:", err);
    return NextResponse.json(
      {
        answer: "An error occurred while processing your request.",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
