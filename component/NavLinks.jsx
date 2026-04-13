"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/policy-report", label: "Policy Report" },
  { href: "/contact", label: "Contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="border border-gray-300 px-6 py-2.5 flex flex-wrap justify-center gap-6 text-[10px] md:text-xs uppercase font-bold tracking-wider">
      {navLinks.map(({ href, label }) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            className={`transition-colors ${
              isActive
                ? "text-black border-b-2 border-black pb-0.5"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
