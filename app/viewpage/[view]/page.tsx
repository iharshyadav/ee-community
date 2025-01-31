"use client";
import { FC, useEffect, useState } from "react";
import CodeExamples from "./components/code-examples";
import ViewCodeSnippet from "./components/view-codeSnippet";
import ViewHeader from "./components/view-header";
import ViewSummary from "./components/view-summary";
import ViewBreadcrumb from "./components/view-breadcrumb";
import { usePathname } from "next/navigation";

export interface co2Emission {
  id: number;
  Name: string;
  sector: string;
  category: string;
  region: string;
  co2e_unit: string;
  year: number;
  co2e: number;
  userId: string;
  requestbody: any;
  responsebody: any;
}
const Page: FC = ({}) => {
  const [data, setData] = useState<co2Emission | null>(null);
  const path = usePathname();
  const params = path.split("%20").join(" ").split("/")[2];
  // console.log(params)
  // useEffect(() => {
  //   const d = async (params: string) => {
  //     const data = await showData(params);
  //     setData(data);
  //     return data;
  //   };
  //   d(params);
  // }, []);

  useEffect(() => {
    if (params) {
      fetch(`/api/showdata/${params}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [params]);

  console.log(data);

  return (
    <div className="bg-[#F1F5F8] min-h-screen w-full xl:px-32 lg:px-28 md:px-24 sm:px-6 px-5 overflow-x-hidden scroll-smooth">
      <ViewBreadcrumb />
      <ViewHeader params={params} datas={data} />
      <div className="md:flex md:flex-row lg: flex-col flex gap-20 sm:mt-20 mt-10">
        <div className="md:w-[60%] w-full">
          <ViewSummary datas={data} />
        </div>
        <div className="md:w-1/3 flex flex-col gap-3">
          <ViewCodeSnippet />
          <hr className="border-1" />
          <CodeExamples datas={data} />
        </div>
      </div>
      <div className="h-16"></div>
    </div>
  );
};
export default Page;
