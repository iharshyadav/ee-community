// "use client";
// import { Check, CopyIcon } from "lucide-react";
// import { FC, useEffect, useRef, useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import { JsxElement } from "typescript";
// import { co2Emission } from "../page";
// interface codeExamplesProps {
//   datas: co2Emission | null;
// }
// const CodeExamples: FC<codeExamplesProps> = ({ datas }) => {
//   const [activeTab, setActiveTab] = useState(1);
//   const copy: any = useRef<string>("");
//   const [copied, setCopied] = useState(false);
//   useEffect(() => {
//     copy.current = `curl -X POST "http://beta.api.earthemission.com/compute/${datas?.requestbody.cloud_provider}/${metric}" \\
// -H "Content-Type: application/json" \\
// -H "Authorization: YOUR_BEARER_TOKEN_HERE" \\
//     "body": {
//       "Region": ${datas?.requestbody?.region},
//       "Year": ${datas?.requestbody?.year},
//       "cpu_count": ${datas?.requestbody?.cpu_count},
//       "cloud provider": ${datas?.requestbody?.cloud_provider},
//       "duration": ${datas?.requestbody?.duration},
//       "duration_unit": ${datas?.requestbody?.duration_unit},
//       "cpu_load": ${datas?.requestbody?.cpu_load},
//    }
//  }'`;
//   }, []);
//   const handleCopyTab1 = () => {
//     if (copy.current) {
//       navigator.clipboard.writeText(copy.current);
//       setCopied(!copied);
//     }
//   };
//   const categorySet_split = datas?.category?.split(" - ");
//   // Make sure category_set has at least two parts after splitting
//   console.log(categorySet_split && categorySet_split.length >= 2);
//   // Extract the second part and convert it to lowercase
//   const metric =
//     categorySet_split && categorySet_split.length >= 2
//       ? categorySet_split[1].toLowerCase()
//       : "";
//   const tab1: () => JSX.Element = () => {
//     return (
//       <>
//         {datas ? (
//           <div style={{ fontFamily: "monospace" }}>
//             <pre
//               className="
//            text-white
//            lg:p-4
//            rounded-md
//            whitespace-pre-wrap
//            break-all
//            overflow-x-auto
//            text-xs
//          "
//             >
//               {`curl -X POST "http://beta.api.earthemission.com/compute/${datas?.requestbody?.cloud_provider}/${metric}" \\
// -H "Content-Type: application/json" \\
// -H "Authorization: YOUR_BEARER_TOKEN_HERE" \\
//     "body": {
//       "region": ${datas?.requestbody?.region},
//       "year": ${datas?.requestbody?.year},
//       "cpu_count": ${datas?.requestbody?.cpu_count},
//       "duration": ${datas?.requestbody?.duration},
//       "duration_unit": ${datas?.requestbody?.duration_unit},
//       "cpu_load": ${datas?.requestbody?.cpu_load},
//     }
//   }'`}
//             </pre>
//           </div>
//         ) : (
//           <div style={{ fontFamily: "monospace" }} className="animate-pulse">
//             <pre
//               className="
//         text-gray-400
//         rounded-md
//         whitespace-pre-wrap
//         break-all
//         overflow-x-auto
//         text-xs
//         h-36
//         w-full
//         p-4
//         space-y-2
//       "
//             >
//               <div className="bg-gray-600 h-4 w-3/4 mb-2 rounded"></div>
//               <div className="bg-gray-600 h-4 w-5/6 mb-2 rounded"></div>
//               <div className="bg-gray-600 h-4 w-full rounded"></div>
//               <div className="bg-gray-600 h-4 w-5/6 rounded"></div>
//               <div className="bg-gray-600 h-4 w-3/4 rounded"></div>
//             </pre>
//           </div>
//         )}
//       </>
//     );
//   };

//   const tab2: () => JSX.Element = () => {
//     return (
//       <div style={{ fontFamily: "monospace" }}>
//         <pre
//           className="
//            text-white
//            lg:p-4
//            rounded-md
//            whitespace-pre-wrap
//            break-all
//            overflow-x-auto
//            text-xs
//          "
//         >
//           {`{   "co2e": ${datas?.responsebody?.responsedata?.co2e},
//     "co2e_unit": ${datas?.responsebody?.responsedata?.co2e_unit},
//     "co2e_calculation_method": ${datas?.responsebody?.responsedata?.co2e_calculation_method},
//     "co2e_calculation_origin": ${datas?.responsebody?.responsedata?.co2e_calculation_origin},
//     "activity_data": {
//         "activity_value": ${datas?.responsebody?.responsedata?.co2e},
//         "activity_unit": ${datas?.responsebody?.responsedata?.co2e}
//     },
//     "audit_trail":${datas?.responsebody?.responsedata?.audit_trail}
// }

//          `}
//         </pre>
//       </div>
//     );
//   };
//   return (
//     <div>
//       <p className="font-medium mb-2 text-sm">Code Snippets</p>
//       <div className="md:w-[27vw] mx-auto bg-[#212936] shadow-md rounded-lg ">
//         <div className="flex justify-between text-white gap-3 h-10 bg-[#374151]">
//           <div className="flex gap-4">
//             <button
//               onClick={() => setActiveTab(1)}
//               className={`w-1/2 py-2 px-2 text-center text-sm text-white border-b-2 border-transparent hover:border-blue-500 focus:outline-none ${
//                 activeTab === 1 ? "border-b-4 border-blue-500" : ""
//               }`}
//             >
//               REQUEST
//             </button>
//             <button
//               onClick={() => setActiveTab(2)}
//               className={`w-1/2 py-2 text-center text-sm text-white border-b-2 border-transparent hover:border-blue-500 focus:outline-none ${
//                 activeTab === 2 ? "border-b-4 border-blue-500" : ""
//               }`}
//             >
//               RESPONSE
//             </button>
//           </div>
//           {copied ? (
//             <button className="p-2" onClick={handleCopyTab1}>
//               <Check />
//             </button>
//           ) : (
//             <button className="p-2" onClick={handleCopyTab1}>
//               <CopyIcon size={20} />
//             </button>
//           )}
//         </div>
//         <div className="bg-[#212936]">
//           <div
//             className={`tab-content ${
//               activeTab === 1 ? "block bg-[#212936]" : "hidden"
//             } p-4`}
//           >
//             {tab1()}
//           </div>
//           <div
//             className={`tab-content ${
//               activeTab === 2 ? "block bg-[#212936]" : "hidden"
//             } p-4`}
//           >
//             {tab2()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CodeExamples;

"use client";
import { Check, CopyIcon } from "lucide-react";
import { FC, useEffect, useRef, useState } from "react";
import "react-tabs/style/react-tabs.css";
import { co2Emission } from "../page";
interface codeExamplesProps {
  datas: co2Emission | null;
}
const CodeExamples: FC<codeExamplesProps> = ({ datas }) => {
  const [activeTab, setActiveTab] = useState(1);
  const copy: any = useRef<string>("");
  const [copied, setCopied] = useState(false);
  const categorySet_split = datas?.category?.split(" - ");
  const metric =
    categorySet_split && categorySet_split.length >= 2
      ? categorySet_split[1].toLowerCase()
      : "";
  // Custom request body structure for each category
  const getRequestBody = () => {
    switch (datas?.category) {
      case "Cloud Computing - CPU":
        return `{
      "region": ${datas?.requestbody?.region},
      "year": ${datas?.requestbody?.year},
      "cpu_count": ${datas?.requestbody?.cpu_count},
      "duration": ${datas?.requestbody?.duration},
      "duration_unit": ${datas?.requestbody?.duration_unit},
      "cpu_load": ${datas?.requestbody?.cpu_load},
}`;
      case "Cloud Computing - Storage":
        return `{
      "data": ${datas?.requestbody?.data},
      "region": ${datas?.requestbody?.region},
      "year": ${datas?.requestbody?.year},
      "data_unit": ${datas?.requestbody?.data_unit},
      "duration": ${datas?.requestbody?.duration},
      "duration_unit": ${datas?.requestbody?.duration_unit},
      "storage_type": ${datas?.requestbody?.storage_type},
}`;
      case "Cloud Computing - Networking":
        return `{
      "data": ${datas?.requestbody?.data},
      "region": ${datas?.requestbody?.region},
      "year": ${datas?.requestbody?.year},
      "data_unit": ${datas?.requestbody?.data_unit},
}`;
      case "Cloud Computing - Memory":
        return `{
      "data": ${datas?.requestbody?.data},
      "region": ${datas?.requestbody?.region},
      "year": ${datas?.requestbody?.year},
      "data_unit": ${datas?.requestbody?.data_unit},
      "duration": ${datas?.requestbody?.duration},
      "duration_unit": ${datas?.requestbody?.duration_unit},
}`;
      default:
        return "{}";
    }
  };
  // Custom response body structure for each category
  const getResponseBody = () => {
    if (datas?.category === "Cloud Computing - CPU") {
      return `{
        "co2e": ${datas?.responsebody?.responsedata?.co2e},
        "co2e_unit": "${datas?.responsebody?.responsedata?.co2e_unit}",
        "co2e_calculation_method": "${datas?.responsebody?.responsedata?.co2e_calculation_method}",
        "co2e_calculation_origin": "${datas?.responsebody?.responsedata?.co2e_calculation_origin}",
        "activity_data": {
          "activity_value": ${datas?.responsebody?.responsedata?.co2e},
          "activity_unit": "${datas?.responsebody?.responsedata?.co2e_unit}"
        },
        "audit_trail": ${datas?.responsebody?.responsedata?.audit_trail}
      }`;
    } else {
      return `{
      "co2e": ${datas?.responsebody?.responsebody?.co2e},
      "co2e_unit": ${datas?.responsebody?.responsebody?.co2e_unit},
}`;
    }
  };
  useEffect(() => {
    copy.current = `curl -X POST "http://beta.api.earthemission.com/compute/${
      datas?.requestbody?.provider
    }/${metric}" \\
-H "Content-Type: application/json" \\
-H "Authorization: YOUR_BEARER_TOKEN_HERE" \\
    "body": ${getRequestBody()}`;
  }, [datas, metric]);
  const handleCopyTab1 = () => {
    if (copy.current) {
      navigator.clipboard.writeText(copy.current);
      setCopied(!copied);
    }
  };
  const tab1: () => JSX.Element = () => (
    <div style={{ fontFamily: "monospace" }}>
      <pre className="text-white lg:p-4 rounded-md whitespace-pre-wrap break-all overflow-x-auto text-xs">
        {`curl -X POST "http://beta.api.earthemission.com/compute/${
          datas?.requestbody?.provider
        }/${metric}" \\
-H "Content-Type: application/json" \\
-H "Authorization: YOUR_BEARER_TOKEN_HERE" \\
    "body": ${getRequestBody()}`}
      </pre>
    </div>
  );
  const tab2: () => JSX.Element = () => (
    <div style={{ fontFamily: "monospace" }}>
      <pre className="text-white lg:p-4 rounded-md whitespace-pre-wrap break-all overflow-x-auto text-xs">
        {getResponseBody()}
      </pre>
    </div>
  );
  return (
    <div>
      <p className="font-medium mb-2 text-sm">Code Snippets</p>
      <div className="md:w-[27vw] mx-auto bg-[#212936] shadow-md rounded-lg ">
        <div className="flex justify-between text-white gap-3 h-10 bg-[#374151]">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab(1)}
              className={`w-1/2 py-2 px-2 text-center text-sm text-white border-b-2 border-transparent hover:border-blue-500 focus:outline-none ${
                activeTab === 1 ? "border-b-4 border-blue-500" : ""
              }`}
            >
              REQUEST
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`w-1/2 py-2 text-center text-sm text-white border-b-2 border-transparent hover:border-blue-500 focus:outline-none ${
                activeTab === 2 ? "border-b-4 border-blue-500" : ""
              }`}
            >
              RESPONSE
            </button>
          </div>
          {copied ? (
            <button className="p-2" onClick={handleCopyTab1}>
              <Check />
            </button>
          ) : (
            <button className="p-2" onClick={handleCopyTab1}>
              <CopyIcon size={20} />
            </button>
          )}
        </div>
        <div className="bg-[#212936]">
          <div
            className={`tab-content ${
              activeTab === 1 ? "block bg-[#212936]" : "hidden"
            } p-4`}
          >
            {tab1()}
          </div>
          <div
            className={`tab-content ${
              activeTab === 2 ? "block bg-[#212936]" : "hidden"
            } p-4`}
          >
            {tab2()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CodeExamples;
