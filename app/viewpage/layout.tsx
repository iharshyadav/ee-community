"use client";
import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { UserProvider } from "@/app/(context)/userContext";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
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
    </UserProvider>
  );
}
