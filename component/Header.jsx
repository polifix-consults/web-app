"use client"
import React from "react";
import "./Header.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname(); // Get the current route
  console.log(pathname)
  return (
    <header className="head">
      <img src="/civicLogo.svg" width="100px" alt="Civic Policy Archive Logo" />
      <nav className="navs">
        <Link href="/" className={pathname === "/" ? "active" : "notactive"}>
          Home
        </Link>
        <Link href="/blog" className={pathname === "/blog" ? "active" : "notactive"}>
          Blog
        </Link>
      </nav>
    </header>
  );
}
