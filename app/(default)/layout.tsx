"use client";

import Sidebar from "@/components/ui/sidebar";
import Header from "@/components/ui/header";
import { useEffect, useState } from "react";
import { ScopeContext } from "@/app/(context)/ScopeContext";
import { calculateCo2eSum } from "../lib/data";
import axios from "axios";
import { SocketProvider } from "@/config/socketProvider";

interface scope {
  scope1: number;
  scope2: number;
  scope3: number;
}

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [id, setId] = useState<number | null>(null);
  // const [scopeCheck, setScopeCheck] = useState<boolean>(false);
  // const [names, setNames] = useState("");
  // const [triggerUpdate, setTriggerUpdate] = useState(false);
  // const [scopeValue, setScopeValue] = useState("");
  const [toggleSkeloton, setToggleSkeloton] = useState<boolean>(false);
  // const [saveScopeData, setSaveScopeData] = useState("");
  const [saveCo2eSum, setSaveCo2eSum] = useState<scope>({
    scope1: 0,
    scope2: 0,
    scope3: 0,
  });
  const [arr, setArr] = useState<number[]>([]);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  // Fetching all scopes sum from server components(action.ts).
  // useEffect(() => {
  //   const fetchScopes = async () => {
  //     try {
  //       const co2eSum = await calculateCo2eSum();
  //       // setArr(co2eSum.scopeSums)
  //       setSaveCo2eSum(co2eSum.scopeSums);
  //     } catch (error) {
  //       console.error("Error fetching CO2e sums:", error);
  //     }
  //   };

  return (
    <ScopeContext.Provider
      value={{
        id,
        setId,
        // value,
        // scopeCheck,
        // scopeValue,
        toggleSkeloton,
        setToggleSkeloton,
        saveCo2eSum,
        setSaveCo2eSum,
        arr,
        setIsFormValid,
        isFormValid,
      }}
    >
      <SocketProvider>
      <div className="flex h-[100dvh] overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header />

          <main className="grow [&>*:first-child]:scroll-mt-16">
            {children}
          </main>
        </div>
      </div>
      </SocketProvider>
    </ScopeContext.Provider>
  );
}
