"use client";
import React, { useState } from "react";
import "./Header.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname(); // Get the current route
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view
  console.log(pathname);
  return (
    <>
      <header className="head">
        <img
          src="/civicLogo.svg"
          width="100px"
          alt="Civic Policy Archive Logo"
        />
        <nav className="navs">
          <Link href="/" className={pathname === "/" ? "active" : "notactive"}>
            Home
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? "active" : "notactive"}
          >
            About
          </Link>
          <Link
            href="/podcast"
            className={pathname === "/podcast" ? "active" : "notactive"}
          >
            The Policy Podcast
          </Link>
          <Link
            href="/digest"
            className={pathname === "/digeest" ? "active" : "notactive"}
          >
            Policy Digest
          </Link>
          <Link
            href="/articles"
            className={pathname === "/articles" ? "active" : "notactive"}
          >
            Articles
          </Link>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : "notactive"}
          >
            Contact
          </Link>
        </nav>
        <nav className="mobileNav">
          {!isMobile && (
            <img
              onClick={() => setIsMobile(true)}
              src="/hamburger.svg"
              height="30px"
              alt="Civic Policy Archive Logo"
            />
          )}
          {isMobile && (
            <img
              onClick={() => setIsMobile(false)}
              src="/cross.svg"
              height="30px"
              alt="Civic Policy Archive Logo"
            />
          )}
        </nav>
      </header>
      {isMobile && (
        <div className="mobileLinks">
          <Link href="/" className={pathname === "/" ? "active" : "notactive"}>
            Home
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? "active" : "notactive"}
          >
            About
          </Link>
          <Link
            href="/podcast"
            className={pathname === "/podcast" ? "active" : "notactive"}
          >
            The Policy Podcast
          </Link>
          <Link
            href="/digest"
            className={pathname === "/digest" ? "active" : "notactive"}
          >
            Policy Digest
          </Link>
          <Link
            href="/articles"
            className={pathname === "/articles" ? "active" : "notactive"}
          >
            Articles
          </Link>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : "notactive"}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
