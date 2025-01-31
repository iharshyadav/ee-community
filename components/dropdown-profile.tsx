//@ts-nocheck

"use client";

import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from "@headlessui/react";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import { useUserContext } from "@/app/(context)/userContext";
import { Skeleton } from "@nextui-org/skeleton";

export default function DropdownProfile({
  align,
}: {
  align?: "left" | "right";
}) {
  const { signOut } = useClerk();
  const handleSignOut = () => {
    console.log("Sign out clicked");
    signOut({ redirectUrl: "/sign-in" })
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };
  const { currentUser } = useUserContext() || {};
  const imageurl = currentUser?.imageUrl ?? "/images/user-avatar-80.png";
  const firstName = currentUser?.firstName ?? " Name";
  const lastName = currentUser?.lastName ?? " ";
  const fullname = `${firstName} ${lastName}`;

  if (!currentUser) {
    return (
      <div className="max-w-[600px] w-full flex items-center gap-2">
        <div>
          <Skeleton className="flex rounded-full w-12 h-12" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-4 w-24  rounded-lg" />
          {/* <Skeleton className="h-3 w-24 rounded-lg"/> */}
        </div>
      </div>
    );
  }

  return (
    <Menu as="div" className="relative inline-flex">
      <MenuButton className="inline-flex justify-center items-center group">
        <img className="w-12 h-12 rounded-full" src={imageurl} alt="" />
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200">
            {fullname}
          </span>
          <svg
            className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </MenuButton>
      <Transition
        as="div"
        className={`origin-top-right z-10 absolute top-full min-w-[11rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
          align === "right" ? "right-0" : "left-0"
        }`}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200 dark:border-slate-700">
          <div className="font-medium text-slate-800 dark:text-slate-100">
            {fullname}
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 italic">
            Administrator
          </div>
        </div>
        <MenuItems as="ul" className="focus:outline-none">
          <MenuItems as="li">
            {({ active }) => (
              <Link
                className={`font-medium text-sm flex items-center py-1 px-3 ${
                  active
                    ? "text-green-600 dark:text-green-400"
                    : "text-green-500"
                }`}
                href="/settings/account"
              >
                Settings
              </Link>
            )}
          </MenuItems>
          <SignedIn>
            {/* <SignOutButton> */}
            <MenuItems as="li">
              {({ active }) => (
                <button
                  onClick={handleSignOut}
                  className={`font-medium text-sm flex items-center py-1 px-3 ${
                    active
                      ? "text-green-600 dark:text-green-400"
                      : "text-green-500"
                  }`}
                >
                  Sign Out
                </button>
              )}
            </MenuItems>
            {/* </SignOutButton> */}
          </SignedIn>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
