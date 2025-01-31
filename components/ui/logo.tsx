"use client";

import Link from "next/link";
import Image from "next/image";
import LogoIcon from "@/public/images/ee-logo-green.png";
import DarkLogoIcon from "@/public/images/logo.png";
import React, { useContext } from "react";
import { useTheme } from "next-themes"; // import useTheme
import { useState, useEffect } from "react";

export default function Logo() {
  const { theme, resolvedTheme } = useTheme(); // access the current theme
  const [loading, setLoading] = useState(true);
  const [logoSrc, setLogoSrc] = useState(LogoIcon); // default to light logo

  useEffect(() => {
    if (resolvedTheme) {
      setLoading(false);
      setLogoSrc(resolvedTheme === "light" ? LogoIcon : DarkLogoIcon);
    }
  }, [resolvedTheme]);

  if (loading) {
    return <div>Loading...</div>; // or return a loading spinner
  }

  console.log(theme); // log the current theme
  console.log(resolvedTheme);

  return (
    <>
      <Link className="block" href="/">
        <Image
          className="relative"
          src={logoSrc}
          width={160}
          height={140}
          alt="earthemission"
        />
      </Link>
    </>
  );
}
