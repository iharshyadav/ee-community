import { FC } from "react";
import { co2Emission } from "../page";
interface viewHeaderProps {
  params: string;
  datas: co2Emission | null;
}

const ViewHeader: FC<viewHeaderProps> = ({ params, datas }) => {
  return (
    <>
      {datas ? (
        <div className="mx-auto md:pt-10">
          <h3 className="text-[#1E293C] md:text-sm sm:text-[2vw] text-[2.6vw]">
            {params}
          </h3>
          <h1 className="text-xl sm:text-3xl md:text-3xl font-semibold text-gray-900 break-words">
            {datas?.Name} {datas?.category} {datas?.sector}
          </h1>
          {/* <div className="flex flex-wrap gap-4 mt-6 w-full">
        {data.map((item, index) => (
          <div key={index} className="">
            <div className="md:text-[0.7vw] sm:text-[1.8vw]  text-[2.5vw] font-semibold p-1 pr-2 pl-2 bg-[#F3F4F6] rounded-xl text-black">
              {item.name}
            </div>
          </div>
        ))}
      </div> */}
          {/* <div className='xl:mt-8 md:mt-5 sm:mt-6 mt-5 w-full text-end'>
        <button className="bg-[#0600F7] xl:w-[25%] font-medium lg:w-[32%] md:w-[35%] sm:w-[46%] text-[2vw] w-[45%] sm:text-[1.4vw] md:text-[1.4vw] lg:text-sm lg-w p-2 text-white hover:bg-[#0400f7e7]">
              Explore All Factors for this Activity
        </button>
      </div> */}
        </div>
      ) : (
        <div className="mx-auto md:pt-10 animate-pulse">
          <div className="bg-gray-200 h-6 rounded mb-2 w-1/2 md:w-1/3 sm:w-1/2"></div>
          <div className="bg-gray-200 h-8 rounded w-3/4 md:w-1/2 sm:w-2/3"></div>
        </div>
      )}
    </>
  );
};
export default ViewHeader;
