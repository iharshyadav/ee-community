//@ts-nocheck

"use client";
import { FC, useEffect, useState } from "react";
import AsiaMap from "../components/suggestionMap";
import ViewBreadcrumb from "./view-breadcrumb";
interface pageProps {
  params: {
    suggestions: string;
  };
}
const page: FC<pageProps> = ({ params }) => {
  const { suggestions } = params;
  const [totalEmissions, settotalEmissions] = useState<number | null>(null);
  const [greenLocation, setGreenLocation] = useState<number | null>(null);
  const [redLocation, setRedLocation] = useState<number | null>(null);
  const [differentValueMap, setDifferentValueMap] = useState<
    { start: null | number; end: null | number; icon: any }[]
  >([
    {
      start: null,
      end: null,
      icon: "",
    },
  ]);
  const calculateIntensity = (
    value: number,
    greenLocations: number,
    redLocation: number
  ) => {
    //  console.log(value , greenLocations , redLocation)
    settotalEmissions(value);
    setGreenLocation(greenLocations);
    setRedLocation(redLocation);
  };
  const SkeletonText = () => (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-4 h-4 bg-gray-500 rounded-full animate-pulse delay-0"></div>
      <div className="w-4 h-4 bg-gray-500 rounded-full animate-pulse delay-200"></div>
      <div className="w-4 h-4 bg-gray-500 rounded-full animate-pulse delay-400"></div>
    </div>
  );
  const differentCo2eValue = (data: any) => {
    console.log(data);
    setDifferentValueMap(data);
  };
  useEffect(() => {
    console.log(differentValueMap);
  }, [differentValueMap]);
  return (
    <div className="">
      <div className="xl:px-24 lg:px-20 md:px-16 sm:px-11 px-7">
        <ViewBreadcrumb />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center p-6 md:space-x-24 space-y-6 md:space-y-0 mt-8 text-white">
        <div className="bg-[#1E293C] w-full md:w-1/4 p-6 rounded-lg text-center">
          <p className="text-lg font-semibold">Total Regions </p>
          {totalEmissions ? `${totalEmissions}` : <SkeletonText />}
        </div>
        <div className="bg-[#1E293C] w-full md:w-1/4 p-6 rounded-lg text-center">
          <p className="text-lg font-semibold">Low Intensity Regions</p>
          {greenLocation || greenLocation === 0 ? (
            `${greenLocation}`
          ) : (
            <SkeletonText />
          )}
        </div>
        <div className="bg-[#1E293C] w-full md:w-1/4 p-6 rounded-lg text-center">
          <p className="text-lg font-semibold">High Intensity Regions</p>
          {redLocation || redLocation === 0 ? (
            `${redLocation}`
          ) : (
            <SkeletonText />
          )}
        </div>
      </div>
      <div className="w-full mt-4 md:flex md:justify-center md:items-center">
        <hr className="border-1 md:w-10/12" />
      </div>
      <div className="mt-8 px-7 sm:px-24">
        <h2 className="text-xl font-semibold">Carbon Intensity Map</h2>
        <p className="mt-4">
          A Carbon Intensity Map shows real-time regional variations in CO₂
          emissions from electricity use, with lower emissions in regions using
          more renewable energy and higher emissions in regions relying on
          fossil fuels, helping optimize datacenter locations and operations to
          reduce carbon footprints.
        </p>
      </div>
      <div className="mt-8 md:px-24 px-7 rounded-xl overflow-hidden">
        <AsiaMap
          suggestions={suggestions}
          calculateIntensity={calculateIntensity}
          differentCo2eValue={differentCo2eValue}
        />
      </div>
      <div className="flex justify-center mt-4 space-x-4 items-center">
        <div className="flex flex-col items-center p-4">
          <div className="flex space-x-8">
            <div className="text-center">
              <div className="w-8 h-8 bg-green-400"></div>
              {differentValueMap && differentValueMap[0] && (
                <p className="text-xs font-bold mt-1 -ml-1">
                  {differentValueMap[0].start?.toFixed(2)} -{" "}
                  {differentValueMap[0].end?.toFixed(2)}
                </p>
              )}
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-green-600 ml-4"></div>
              {differentValueMap && differentValueMap[1] && (
                <p className="text-xs font-bold mt-1">
                  {differentValueMap[1].start?.toFixed(2)} -{" "}
                  {differentValueMap[1].end?.toFixed(2)}
                </p>
              )}
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-orange-600 ml-4"></div>
              {differentValueMap && differentValueMap[2] && (
                <p className="text-xs font-bold mt-1">
                  {differentValueMap[2].start?.toFixed(2)} -{" "}
                  {differentValueMap[2].end?.toFixed(2)}
                </p>
              )}
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-red-600 ml-4"></div>
              {differentValueMap && differentValueMap[3] && (
                <p className="text-xs font-bold mt-1">
                  {differentValueMap[3].start?.toFixed(2)} -{" "}
                  {differentValueMap[3].end?.toFixed(2)}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-between w-full mt-4 text-sm font-semibold">
            <span className="text-green-600">LOW INTENSITY</span>
            <span className="text-gray-500">metric tons/kWh</span>
            <span className="text-red-800">HIGH INTENSITY</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
