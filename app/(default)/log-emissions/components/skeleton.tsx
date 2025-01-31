import { FC } from "react";
interface skeletonProps {}
const Skeleton: FC<skeletonProps> = ({}) => {
  return (
    <tr className="animate-pulse">
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="w-24 h-4 bg-gray-300 rounded"></div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="w-24 h-4 bg-gray-300 rounded"></div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="w-24 h-4 bg-gray-300 rounded"></div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="w-24 h-4 bg-gray-300 rounded"></div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="w-24 h-4 bg-gray-300 rounded"></div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-6 whitespace-nowrap flex gap-5">
        <div className="w-12 h-4 bg-gray-300 rounded"></div>
        <div className="w-12 h-4 bg-gray-300 rounded"></div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="w-24 h-4 bg-gray-300 rounded"></div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="w-8 h-8 bg-gray-300 rounded"></div>
      </td>
    </tr>
  );
};
export default Skeleton;
