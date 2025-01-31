"use client";
import { Check, Clipboard } from "lucide-react";
import { FC, useEffect, useRef, useState } from "react";
interface viewCodeSnippetProps {}
const ViewCodeSnippet: FC<viewCodeSnippetProps> = ({}) => {
  const copy: any = useRef<string>("");
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    copy.current = "";
  }, []);
  const handleCopy = () => {
    if (copy.current) {
      navigator.clipboard.writeText(copy.current);
      setCopied(!copied);
    }
  };
  return (
    <div className="">
      <h1 className="text-[#2B3F56] font-semibold mb-2">API REFERENCE</h1>
      <hr className="border-1 w-full" />
      <div className="mt-10">
        <p className=" font-medium mb-2 text-sm">Activity ID</p>
        <div className="flex text-[0.9rem]">
          <p></p>
          {/* {
            copied ? <button onClick={handleCopy} ><Check className='text-sm'/></button> :<button onClick={handleCopy}><Clipboard /></button>
          }
           */}
        </div>
      </div>
    </div>
  );
};
export default ViewCodeSnippet;
