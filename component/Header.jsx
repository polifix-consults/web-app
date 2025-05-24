"use client";
import React, { useState } from "react";
import "./Header.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname(); // Get the current route
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view
  console.log(pathname);
  const handleContactClick = () => {
    const getStartedSection = document.getElementById("contact-us");
    if (getStartedSection) {
      getStartedSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <header className="head">
        <img
          src="/civicLogo.svg"
          width="200px"
          alt="Polifix"
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
            href="/digest"
            className={pathname === "/digest" ? "active" : "notactive"}
          >
            Policy Digest
          </Link>
          <Link
            href="#contact"
            onClick={handleContactClick}
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
              alt="Polifix"
            />
          )}
          {isMobile && (
            <img
              onClick={() => setIsMobile(false)}
              src="/cross.svg"
              height="30px"
              alt="PoliFix"
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
            href="/digest"
            className={pathname === "/digest" ? "active" : "notactive"}
          >
            Policy Digest
          </Link>

          <Link
            onClick={handleContactClick}
            href="#contact"
            className={pathname === "/contact" ? "active" : "notactive"}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
