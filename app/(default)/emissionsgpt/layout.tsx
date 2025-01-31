"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/ui/header"; // Optional, if you need a header for this route
import { useEffect, useState } from "react";
import { ScopeContext } from "@/app/(context)/ScopeContext";
import { UserProvider } from "@/app/(context)/userContext";
import ClientProvider from "@/components/ClientProvider";

export default function EmissionsGPTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [id, setId] = useState<number>(0);
  const [scopeCheck, setScopeCheck] = useState<boolean>(false);
  const [names, setNames] = useState("");
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  const [scopeValue, setScopeValue] = useState("");
  const [toggleSkeloton, setToggleSkeloton] = useState<boolean>(false);
  const [saveScopeData, setSaveScopeData] = useState("");

  useEffect(() => {
    if (triggerUpdate) {
      setScopeValue(names);
      setTriggerUpdate(false);
    }
  }, [names, triggerUpdate]);

  const value = async (index: number, name: string, scopeData: any) => {
    setScopeCheck(true);
    setId(index);
    setNames(name);
    setTriggerUpdate(true);
    setSaveScopeData(scopeData);
  };

  return (
    <UserProvider>
      <ScopeContext.Provider
        value={{
          id,
          setId,
          value,
          scopeCheck,
          scopeValue,
          toggleSkeloton,
          setToggleSkeloton,
        }}
      >
        <div className="flex h-screen overflow-hidden">
          {/* Custom Sidebar for /emissionsgpt route */}

          <Sidebar />
          {/* Content area with additional layout */}
          <div className="flex-1 flex flex-col overflow-y-hidden">
            {/* <Header /> Optional Header */}
            <div className="pt-2">
              <ClientProvider />
            </div>
            <main className="flex-grow">
              {children} {/* Page content */}
            </main>
          </div>
        </div>
      </ScopeContext.Provider>
    </UserProvider>
  );
}
