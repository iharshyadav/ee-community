// @ts-nocheck

/* eslint no-use-before-define: 0 */

"use client";

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

export function SessionProvider({ children, session }: Props) {
  return <Provider session={session}>{children}</Provider>;
}
