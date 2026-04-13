"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (href) =>
    pathname === href;

  const linkClasses = (href) =>
    isActive(href)
      ? "bg-white border-2 border-brand-primary px-6 py-2 text-brand-primary font-sans text-xs md:text-sm transition-colors"
      : "bg-brand-gray-50 px-6 py-2 text-brand-primary font-sans text-xs md:text-sm hover:bg-brand-gray-100 transition-colors";

  return (
    <>
      <header className="flex justify-between items-center">
        <img
          src="/civicLogo.svg"
          width="200px"
          alt="Polifix"
          className="md:w-20"
        />
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-4">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClasses("/about")}>
            About
          </Link>
          <Link href="/digest" className={linkClasses("/digest")}>
            Policy Digest
          </Link>
          <Link href="/contact" className={linkClasses("/contact")}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <nav className="flex md:hidden flex-col items-end">
          <button
            onClick={() => setIsMobile(!isMobile)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <img
              src={isMobile ? "/cross.svg" : "/hamburger.svg"}
              height="30px"
              width="30px"
              alt={isMobile ? "Close menu" : "Open menu"}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Navigation */}
      {isMobile && (
        <nav className="flex flex-col gap-2 mt-4 md:hidden">
          <Link
            href="/"
            className={linkClasses("/")}
            onClick={() => setIsMobile(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={linkClasses("/about")}
            onClick={() => setIsMobile(false)}
          >
            About
          </Link>
          <Link
            href="/digest"
            className={linkClasses("/digest")}
            onClick={() => setIsMobile(false)}
          >
            Policy Digest
          </Link>
          <Link
            href="/contact"
            className={linkClasses("/contact")}
            onClick={() => {
              setIsMobile(false);
              handleContactClick();
            }}
          >
            Contact
          </Link>
        </nav>
      )}
    </>
  );
}
