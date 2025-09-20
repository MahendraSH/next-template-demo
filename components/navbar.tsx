import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "./ui/button";

interface NavbarProps {
  navLinks: Array<{ label: string; href: string }>;
}

const Navbar: FC<NavbarProps> = ({ navLinks }) => {
  return (
    <nav className="w-full  shadow-md p-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        Demo Next App
      </Link>
      <div className="space-x-6 mr-5">
        {navLinks?.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(buttonVariants({ variant: "link" }))}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
