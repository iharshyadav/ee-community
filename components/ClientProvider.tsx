"use client";

import { Toaster } from "react-hot-toast";

export default function ClientProvider() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            marginTop: "50px",
          },
        }}
      />
    </>
  );
}
