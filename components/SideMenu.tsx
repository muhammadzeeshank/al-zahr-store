"use client";

import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

import {
  Contact,
  Handshake,
  Home,
  Info,
  Menu,
  ShoppingBag,
} from "lucide-react";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

const SideMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link
            href="/"
            className="mx-[-0.65rem] flex items-center gap-4  px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link
            href="/collection"
            className="mx-[-0.65rem] flex items-center gap-4  bg-muted px-3 py-2 text-foreground hover:text-foreground"
          >
            <ShoppingBag className="h-5 w-5" />
            Collection
          </Link>
          <Link
            href="/about"
            className="mx-[-0.65rem] flex items-center gap-4  px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <Info className="h-5 w-5" />
            About
          </Link>
          <Link
            href="/contact"
            className="mx-[-0.65rem] flex items-center gap-4  px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <Contact className="h-5 w-5" />
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default SideMenu;
