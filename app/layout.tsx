"use client";

import "./css/style.css";

import { Inter } from "next/font/google";
import Theme from "./theme-provider";
import AppProvider from "./app-provider";
import { Providers } from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import { UserProvider } from "./(context)/userContext";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// export const metadata = {
//   title: "Earthemission",
//   description: "On a mission to net zero emissions",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <UserProvider>
        <html
          lang="en"
          className={`${inter.variable}`}
          suppressHydrationWarning
        >
          {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
          <body className="font-inter antialiased bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400">
            <Theme>
              <AppProvider>
                <Providers>
                  <Toaster position="top-right" />
                  {children}
                </Providers>
              </AppProvider>
            </Theme>
          </body>
        </html>
      </UserProvider>
    </ClerkProvider>
  );
}
