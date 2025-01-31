import { co2Emission } from "./log-emissions-table";
import { deleteLogEmission } from "@/app/lib/actions";
import MultilevelDropdown from "./components/log-emission-table-dropdown";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { ScopeContext } from "../../(context)/ScopeContext";
import DateSelect from "./components/date-select";
import Skeleton from "./components/skeleton";
import { Co2eEmissions } from "@/app/lib/data";

interface Co2EmissionsTableItemProps {
  co2emission: co2Emission;
  count: number;
  onCheckboxChange: (id: number, checked: boolean) => void;
  isSelected: boolean;
}

export default function Co2EmissionsTableItem({
  co2emission,
  onCheckboxChange,
  isSelected,
}: Co2EmissionsTableItemProps) {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { toggleSkeloton } = useContext(ScopeContext);
  const { onOpen } = useDisclosure();
  // const [handleData, sethandleData] = useState({})
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckboxChange(co2emission.id, e.target.checked);
  };

  // const q = searchParams?.q || "";
  // const page = searchParams?.page || 1;

  // useEffect(() => {
  //   const fetch1 = async () => {
  //     const { count, co2e_emissions } = await Co2eEmissions(q, page);
  //     sethandleData(co2e_emissions);
  //     console.log(handleData)
  //     return co2e_emissions;
  //   }
  //   fetch1();
  // },[])

  // console.log(fetch1 )

  const handleDelete = async () => {
    if (co2emission.id === 0) return;

    try {
      await deleteLogEmission({ ids: co2emission.id });
      // Clear selected items after deletion
    } catch (error) {
      console.error("Error deleting Private Emission Factor:", error);
    }
  };

  return (
    <>
      {!toggleSkeloton ? (
        <tr>
          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
            <div className="flex items-center">
              <label className="inline-flex">
                <span className="sr-only">Select</span>
                <input
                  className="form-checkbox"
                  type="checkbox"
                  onChange={handleCheckboxChange}
                  checked={isSelected}
                />
              </label>
            </div>
          </td>
          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
            <div className="text-left">{co2emission.Name}</div>
          </td>
          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
            <div className="text-left">
              {co2emission.requestbody?.sector
                ? co2emission.requestbody.sector
                : co2emission.sector}
            </div>
          </td>
          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
            <div className="text-left">
              {co2emission.requestbody?.category
                ? co2emission.requestbody.category
                : co2emission.category}
            </div>
          </td>
          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
            <div className="text-left">
              {co2emission.requestbody?.region
                ? co2emission.requestbody.region
                : co2emission.region}
            </div>
          </td>
          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
            <div className="text-left">
              {co2emission.requestbody?.year
                ? co2emission.requestbody.year
                : co2emission.year}
            </div>
          </td>
          <td className="px-2 first:pl-5 last:pr-5 py-6 whitespace-nowrap flex gap-5">
            <div className={`text-left w-12 pt-2`}>
              {/* {co2emission.co2e} */}
              {`${co2emission.co2e} ${
                co2emission.requestbody?.co2e_unit
                  ? co2emission.requestbody.co2e_unit
                  : co2emission.co2e_unit
              }`}
            </div>
            {/* { scopeValue === co2emission.Name ? ( */}
            <DateSelect name={co2emission.Name} co2emission={co2emission} />
            {/* ) : null} */}
          </td>
          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
            <div className="text-left">
              {co2emission?.created_at?.toString() || "N/A"}
            </div>
          </td>
          <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
            <div
              onClick={onOpen}
              className="mb-3 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
            >
              <MultilevelDropdown
                co2emission={co2emission}
                onCheckboxChange={onCheckboxChange}
                isSelected={isSelected}
                className={""}
                count={0}
              />
            </div>
          </td>
        </tr>
      ) : (
        <Skeleton />
      )}
    </>
  );
}
