"use client";
import { assets } from "@/assets/assets";
import useCheckActiveNav from "@/hooks/use-check-active-nav";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { checkActiveNav } = useCheckActiveNav();

  return (
    <div className="flex justify-between items-center py-5 font-medium">
      <Image src={assets.logo} alt="Al-Zahr logo" width={60} />
      <div className="hidden sm:flex gap-5 text-sm text-gray-700">
        <Link className="flex flex-col items-center gap-1" href="/">
          <p>HOME</p>
          <hr
            className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
              checkActiveNav("/") ? "block" : "hidden"
            }`}
          />
        </Link>
        <Link className="flex flex-col items-center gap-1" href="/collection">
          <p>COLLECTION</p>
          <hr
            className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
              checkActiveNav("/collection") ? "block" : "hidden"
            }`}
          />
        </Link>
        <Link className="flex flex-col items-center gap-1" href="/about">
          <p>ABOUT</p>
          <hr
            className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
              checkActiveNav("/about") ? "block" : "hidden"
            }`}
          />
        </Link>
        <Link className="flex flex-col items-center gap-1" href="/contact">
          <p>CONTACT</p>
          <hr
            className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
              checkActiveNav("/contact") ? "block" : "hidden"
            }`}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
