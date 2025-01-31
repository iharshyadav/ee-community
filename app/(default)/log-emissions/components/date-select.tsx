"use client";

import { useContext, useEffect, useState } from "react";
import { Menu, Transition, MenuButton } from "@headlessui/react";
import { ScopeContext } from "@/app/(context)/ScopeContext";
import { fetchData, saveData } from "@/app/lib/actions";
import { co2Emission } from "../log-emissions-table";
import { useRouter } from "next/navigation";
import axios from "axios";

interface DataSelectProp {
  name: string;
  co2emission: co2Emission;
}

export default function DateSelect({ name, co2emission }: DataSelectProp) {
  interface Co2Emission {
    Label: string;
  }
  const [Co2emission, setCo2Emission] = useState<Co2Emission>({ Label: "" });
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const { id } = useContext(ScopeContext);

  useEffect(() => {
    const fetchLabel = async () => {
      let data;
      if (isFirstLoad) {
        data = co2emission;
        setIsFirstLoad(false);
      } else {
        data = await fetchData(name);
      }
      setCo2Emission(data);
    };
    fetchLabel();
  }, [id, isFirstLoad, name]);
  // const [selected, setSelected] = useState<number>(id);

  // const router = useRouter();

  return (
    <>
      {co2emission.Label && (
        <Menu as="div" className="relative inline-flex">
          {({ open }) => (
            <>
              <MenuButton
                className="btn justify-between min-w-[5rem] bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-500 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-200"
                aria-label="Select date range"
              >
                <span className="flex items-center">
                  <span className="text-xs">{Co2emission.Label}</span>
                </span>
              </MenuButton>
            </>
          )}
        </Menu>
      )}
    </>
  );
}
