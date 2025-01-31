"use client"
import { useSession, useUser } from "@clerk/nextjs";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";


interface ISocketContext {
  sendMessage: (msg: string) => any;
  messages: MessageProps[];
  setQuestionId: React.Dispatch<React.SetStateAction<string | undefined>>
  questionId:string | undefined
  socket ? : Socket
  switchRoom : (newQuestionId : string) => void
}

interface SocketProviderProps {
  children?: React.ReactNode;
}

interface MessageProps {
  msg : string;
  userID : string
  fullName:string
  avatar:string
  questionId:string
}

export const useSocket = () => {
  const state = useContext(SocketContext);
  if (!state) throw new Error(`state is undefined`);

  return state;
};

const SocketContext = React.createContext<ISocketContext | null>(null)

export const SocketProvider : React.FC <SocketProviderProps> = ({children}) => {


  const usersSession = useSession();
  const { user } = useUser();
  const [questionId, setQuestionId] = useState<string | undefined>("")
  const [currentQuestionId, setCurrentQuestionId] = useState<string | null>(null);


  // console.log(usersSession.session)

  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<MessageProps[]>([]);
     
  const sendMessage : ISocketContext['sendMessage'] = useCallback((msg) => {
       if(socket && usersSession.session?.status === 'active'){
         socket.emit("event:message", {
        message: {
          msg,
          userID: user?.id,
          fullName:user?.fullName,
          avatar : user?.imageUrl,
          questionId:questionId
        },
      });
       }else{
        console.log("Socket is not defined");
       }
  },[socket,usersSession.session,questionId])

  const switchRoom = (newQuestionId: string) => {
    if (socket && currentQuestionId) {
      console.log(`Leaving room: ${currentQuestionId}`);
      socket.emit("leave-room", currentQuestionId);
    }

    if (socket) {
      console.log(`Joining room: ${newQuestionId}`);
      socket.emit("join-room", newQuestionId);
      setCurrentQuestionId(newQuestionId);
    }
  };

  const onMessageRec = useCallback((msg : string) => {
    // console.log("From Server Msg Rec", msg);
    const { message } = JSON.parse(msg) as { message: MessageProps };
    setMessages((prev) => [...prev, message]);
  },[])

  useEffect(() => {
    
    const socket = io("http://localhost:8080");

    socket.on("message" , onMessageRec) 

    setSocket(socket);

    return () => {
      socket.off("message" , onMessageRec);
      socket.disconnect();
      setSocket(undefined)
    }
  },[])

  return (
    <SocketContext.Provider value={{sendMessage , messages , questionId , setQuestionId , socket ,switchRoom}}>
      {children}
    </SocketContext.Provider>
  )
}

