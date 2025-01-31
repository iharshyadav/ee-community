import Link from "next/link";
import Image from "next/image";
import LogoIcon from "@/public/images/logo_ee.png";

export default function Logo_Small() {
  return (
    <>
      <Link className="block" href="/">
        <Image
          className="relative"
          src={LogoIcon}
          width={60}
          height={40}
          alt="earthemission"
        />
        {/* <img src={LogoIcon.src} style={{ width: '120px', height: '90px' }} alt="earthemission" /> */}
      </Link>
    </>
  );
}
