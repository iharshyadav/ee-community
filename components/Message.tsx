// @ts-nocheck

/* eslint no-use-before-define: 0 */

// import { DocumentData } from "firebase/firestore";
// import Image from "next/image";

// type Props = {
//   message: DocumentData;
// };

// function Message({ message }: Props) {
//   const isAiChatbot = message.user.name === "AIChatbot";

//   return (
//     <div
//       className={`py-5 text-black dark:text-white w-100 ${
//         isAiChatbot && "bg-white"
//       }`}
//     >
//       <div className="flex space-x-5 px-10 max-w-5xl">
//         <Image
//           src={`${isAiChatbot ? "/white_ee_favicon.png" : message.user.avatar}`}
//           alt="avatar"
//           className="h-8 w-8 rounded-full"
//           width={20}
//           height={10}
//         />
//         <p className="pt-1 text-[14]">{message.text}</p>
//       </div>
//     </div>
//   );
// }

// export default Message;

// @ts-nocheck

/* eslint no-use-before-define: 0 */

import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import { useTheme } from "next-themes";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const { theme } = useTheme();
  const isAiChatbot = message.user.name === "AIChatbot";

  return (
    <div
      className={`py-5 w-full transition-colors duration-200
      ${
        isAiChatbot
          ? "bg-white dark:bg-[#1E1E1E]"
          : "bg-gray-50 dark:bg-[#2D2D2D]"
      }`}
    >
      <div className="flex space-x-5 px-4 sm:px-6 md:px-10 max-w-5xl mx-auto">
        <div className="flex-shrink-0">
          <Image
            src={
              isAiChatbot ? "/images/user-avatar-32.png" : message.user.avatar
            }
            alt={`${isAiChatbot ? "AI" : "User"} avatar`}
            className="h-8 w-8 rounded-full"
            width={32}
            height={32}
          />
        </div>
        <div className="flex-grow">
          <p
            className={`pt-1 text-sm sm:text-base
            ${
              isAiChatbot
                ? "text-gray-900 dark:text-gray-100"
                : "text-gray-800 dark:text-gray-200"
            }`}
          >
            {message.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
