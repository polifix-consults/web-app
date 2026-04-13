import "./globals.css";

import Image from "next/image";
import Link from "next/link";
import QueryProvider from "./QueryProvider";
import { FacebookIcon, Linkedin, Mail } from "lucide-react";

export const metadata = {
  title: "PoliFIX Consults | Policy Consulting for Sustainable Governance",
  description:
    "PoliFIX provides expert policy consulting and advisory services, driving sustainable development through research and data analytics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">
        <QueryProvider>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
            
            {/* --- HEADER --- */}
            <header className="flex flex-col md:flex-row justify-between items-center py-8 gap-6 md:gap-0">
              <Link href="/">
                <Image
                  src="/civicLogo.svg"
                  width={160}
                  height={48}
                  alt="PoliFIX Innovation & Strategy"
                  className="object-contain"
                />
              </Link>
              
              {/* Boxed Navigation matching UI */}
              <nav className="border border-gray-300 px-6 py-2.5 flex flex-wrap justify-center gap-6 text-[10px] md:text-xs uppercase font-bold tracking-wider">
                <Link href="/" className="hover:text-gray-500 transition-colors">Home</Link>
                <Link href="/about" className="hover:text-gray-500 transition-colors">About</Link>
                <Link href="/policy-report" className="hover:text-gray-500 transition-colors">Policy Report</Link>
                <Link href="/contact" className="hover:text-gray-500 transition-colors">Contact</Link>
              </nav>
            </header>

            {/* --- MAIN CONTENT --- */}
            <main className="flex-grow">
              {children}
            </main>

            {/* --- FOOTER --- */}
            <footer className="mt-20 pt-10 pb-12 flex flex-col gap-8 border-t border-transparent"> {/* Added transparent border to match spacing */}
              
              {/* Top Footer: Logo */}
              <div>
                <Image
                  src="/civicLogo.svg"
                  width={140}
                  height={42}
                  alt="PoliFIX Innovation & Strategy"
                  className="object-contain"
                />
              </div>

              {/* Bottom Footer: Links, Copyright, and Socials */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                
                {/* Left Side: Nav Links & Copyright */}
                <div className="flex flex-col gap-4">
                  <nav className="flex flex-wrap gap-6 text-sm font-semibold text-black">
                    <Link href="/about" className="hover:underline hover:underline-offset-4">About Us</Link>
                    <Link href="/digest" className="hover:underline hover:underline-offset-4">Blog</Link>
                    <Link href="/newsletter" className="hover:underline hover:underline-offset-4">Press Release</Link>
                    <Link href="/contact" className="hover:underline hover:underline-offset-4">Contact Us</Link>
                  </nav>
                  <p className="text-xs text-gray-500 font-normal m-0 tracking-wide">
                    (c) 2026 Thecivicpolicyarchive.org
                  </p>
                </div>

                {/* Right Side: Social Icons */}
                <div id="contact-us" className="flex items-center gap-5">
                  <a href="https://x.com/sendpolifix?s=11" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">
                    <Image width={20} height={20} src="/twitterBlack.svg" alt="Twitter/X" />
                  </a>
                  <a href="https://www.instagram.com/sendpolifix?igsh=MW9mcWowaWY4Njd4dw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">
                    <Image width={20} height={20} src="/instagramBlack.svg" alt="Instagram" />
                  </a>
                  <a href="https://www.youtube.com/@TheCivicPolicyArchive" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity">
                    <Image width={20} height={20} src="/youtubeBlack.svg" alt="YouTube" />
                  </a>
                  {/* Kept your existing extra links just in case, styling them to blend in */}
                  <a href="mailto:contact@polifix.com" className="hover:opacity-70 transition-opacity text-black">
                    <Mail size={20} strokeWidth={2} />
                  </a>
                  <a href="https://www.linkedin.com/in/polifix-inc-045714242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity text-black">
                    <Linkedin size={20} strokeWidth={2} />
                  </a>
                  <a href="https://www.facebook.com/PoliFIXnig?rdid=akpNYVVGuegpMKWy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19JN6qd9SY%2F#" target="_blank" rel="noreferrer" className="hover:opacity-70 transition-opacity text-black">
                    <FacebookIcon size={20} strokeWidth={2} />
                  </a>
                </div>

              </div>
            </footer>

          </div>
        </QueryProvider>
      </body>
    </html>
  );
}