"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Policy Report", href: "/policy-report" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="border border-gray-300 px-6 py-2.5 flex flex-wrap justify-center gap-6 text-[10px] md:text-xs uppercase font-bold tracking-wider">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`transition-all duration-200 py-0.5 ${
              isActive
                ? "text-black border-b-[2px] border-black" // The active bar
                : "text-gray-400 hover:text-black border-b-[2px] border-transparent"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
