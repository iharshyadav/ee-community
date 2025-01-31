import { FC } from "react";
import { co2Emission } from "../page";
interface viewSummaryProps {
  datas: co2Emission | null;
}
const ViewSummary: FC<viewSummaryProps> = ({ datas }) => {
  const data = [
    {
      name: "Name",
      value: datas?.Name,
      colorCheck: false,
    },
    {
      name: "Sector",
      value: datas?.sector,
      colorCheck: true,
    },
    {
      name: "Category",
      value: datas?.category,
      colorCheck: false,
    },
    {
      name: "Source",
      value: "ecoinvent",
      colorCheck: false,
    },
    {
      name: "Region",
      value: datas?.region,
      colorCheck: true,
    },
    {
      name: "Unit Type",
      value: datas?.co2e_unit,
      colorCheck: true,
    },
    {
      name: "Year",
      value: datas?.year,
      colorCheck: false,
    },
    {
      name: "Co2e",
      value: datas?.co2e,
      colorCheck: false,
    },
  ];
  const requestData = [
    {
      name: "Name",
      value: datas?.Name,
    },
    {
      name: "Sector",
      value: datas?.sector,
    },
    {
      name: "Category",
      value: datas?.category,
    },
    {
      name: "Region",
      value: datas?.requestbody?.region,
    },
    {
      name: "Unit Type",
      value: datas?.requestbody?.duration_unit,
    },
    {
      name: "Year",
      value: datas?.requestbody?.year,
    },
    {
      name: "cpu_count",
      value: datas?.requestbody?.cpu_count,
    },
    {
      name: "cloud provider",
      value: datas?.requestbody?.provider,
    },
    {
      name: "duration",
      value: datas?.requestbody?.duration,
    },
    {
      name: "cpu_load",
      value: datas?.requestbody?.cpu_load,
    },
    {
      name: "data",
      value: datas?.requestbody?.data,
    },
    {
      name: "data_unit",
      value: datas?.requestbody?.data_unit,
    },
    {
      name: "duration_unit",
      value: datas?.requestbody?.duration_unit,
    },
  ].filter((item) => {
    // Example conditions to show or hide data based on the category
    if (
      datas?.category === "Cloud Computing - Storage" &&
      (item.name === "cpu_count" || item.name === "cpu_load")
    )
      return false;
    if (
      datas?.category === "Cloud Computing - Memory" &&
      (item.name === "cpu_load" ||
        item.name === "cpu_count" ||
        item.name === "Unit Type")
    )
      return false;
    if (
      datas?.category === "Cloud Computing - Networking" &&
      (item.name === "cpu_load" ||
        item.name === "cpu_count" ||
        item.name === "Unit Type" ||
        item.name === "duration" ||
        item.name === "duration_unit")
    )
      return false;
    if (
      datas?.category === "Cloud Computing - CPU" &&
      (item.name === "data" || item.name === "data_unit")
    )
      return false;
    // Add more conditions as needed
    return true;
  });
  console.log(datas);
  return (
    <>
      {datas ? (
        <div className="">
          <h1 className="text-[#2b3f56] font-semibold mb-2">
            ACTIVITY SUMMARY
          </h1>
          <hr className="border-1" />
          <h1 className="underline font-bold mt-4">REQUEST</h1>
          <div className="mt-4">
            {requestData.map((item, index) => (
              <>
                <table className="mt-3 sm:w-full w-full text-sm font-medium">
                  <tbody>
                    <tr className="flex xl:gap-72 w-full gap-20">
                      <td className="w-12">{item.name}</td>
                      <td className={`w-92 text-start text-black`}>
                        {item.value}
                      </td>
                      {/* <td className={`w-92 text-start text-black`}>
                        {item.value}
                      </td> */}
                    </tr>
                  </tbody>
                </table>
                <hr className="mt-4 border-1" />
              </>
            ))}
          </div>
          <h1 className="underline font-bold mt-6">RESPONSE</h1>
          <div className="mt-4">
            {data.map((item, index) => (
              <>
                <table className="mt-3 sm:w-full w-full text-sm font-medium">
                  <tbody>
                    <tr className="flex xl:gap-72 w-full gap-20">
                      <td className="w-12">{item.name}</td>
                      <td className={`w-92 text-start text-black`}>
                        {item.value}
                      </td>
                      {/* <td className={`w-92 text-start text-black`}>
                        {item.value}
                      </td> */}
                    </tr>
                  </tbody>
                </table>
                <hr className="mt-4 border-1" />
              </>
            ))}
          </div>
        </div>
      ) : (
        <div className="animate-pulse">
          <h1 className="text-[#2b3f56] font-semibold mb-2 bg-gray-200 h-6 w-1/3 rounded"></h1>
          <hr className="border-1 bg-gray-200 h-1" />
          <h1 className="underline font-bold mt-4 bg-gray-200 h-6 w-1/3 rounded"></h1>
          <div className="mt-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="mt-3">
                <table className="w-full text-sm font-medium">
                  <tbody>
                    <tr className="flex w-full gap-20">
                      <td className="w-12">
                        <div className="bg-gray-200 h-4 rounded"></div>
                      </td>
                      <td className="w-92 text-start">
                        <div className="bg-gray-200 h-4 rounded"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr className="mt-4 border-1 bg-gray-200 h-1" />
              </div>
            ))}
          </div>
          <h1 className="underline font-bold mt-6 bg-gray-200 h-6 w-1/3 rounded"></h1>
          <div className="mt-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="mt-3">
                <table className="w-full text-sm font-medium">
                  <tbody>
                    <tr className="flex w-full gap-20">
                      <td className="w-12">
                        <div className="bg-gray-200 h-4 rounded"></div>
                      </td>
                      <td className="w-92 text-start">
                        <div className="bg-gray-200 h-4 rounded"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <hr className="mt-4 border-1 bg-gray-200 h-1" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default ViewSummary;
