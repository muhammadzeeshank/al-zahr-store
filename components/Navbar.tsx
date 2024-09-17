"use client";
import { assets } from "@/assets/assets";
import useCheckActiveNav from "@/hooks/use-check-active-nav";
import { Home, Menu, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Badge } from "./ui/badge";
import SideMenu from "./SideMenu";

const Navbar = () => {
  const { checkActiveNav } = useCheckActiveNav();

  return (
    <div className="flex justify-between items-center py-5 font-medium">
      <Image src={assets.logo} alt="Al-Zahr logo" width={60} />
      <div className="hidden sm:flex gap-5 text-sm text-gray-700">
        <Link
          className="flex flex-col items-center gap-1 text-foreground transition-colors hover:text-primary"
          href="/"
        >
          <p>HOME</p>
          <hr
            className={`w-2/4 border-none h-[1.5px] bg-primary ${
              checkActiveNav("/") ? "block" : "hidden"
            }`}
          />
        </Link>
        <Link
          className="flex flex-col items-center gap-1 text-foreground transition-colors hover:text-primary"
          href="/collection"
        >
          <p>COLLECTION</p>
          <hr
            className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
              checkActiveNav("/collection") ? "block" : "hidden"
            }`}
          />
        </Link>
        <Link
          className="flex flex-col items-center gap-1 text-foreground transition-colors hover:text-primary"
          href="/about"
        >
          <p>ABOUT</p>
          <hr
            className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
              checkActiveNav("/about") ? "block" : "hidden"
            }`}
          />
        </Link>
        <Link
          className="flex flex-col items-center gap-1 text-foreground transition-colors hover:text-primary"
          href="/contact"
        >
          <p>CONTACT</p>
          <hr
            className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
              checkActiveNav("/contact") ? "block" : "hidden"
            }`}
          />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:text-primary md:h-8 md:w-8"
              >
                <User className="h-6 w-6" />
                <span className="sr-only">User</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">User</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="relative text-foreground transition-colors hover:text-primary"
              >
                <ShoppingCart className="h-6 w-6" />
                <Badge className="absolute right-[-10px] bottom-[12px] flex h-5 w-5 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="bottom">Cart</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="sm:hidden">
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
