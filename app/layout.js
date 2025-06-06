"use client";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

import Header from "@/component/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <html lang="en">
      <Head>
        <title>
          PoliFIX Consults | Policy Consulting for Sustainable Governance
        </title>
        <meta
          name="description"
          content="PoliFIX provides expert policy consulting and advisory services, driving sustainable development through research and data analytics. Explore our insights on governance, civic engagement, and digital reform."
        />
        <meta
          name="google-site-verification"
          content="j5W3OlHrfhQimQnlwsl89etr58MJd_u8s3rgrpJ5Sg8"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="PoliFIX Consults | Policy Consulting for Sustainable Governance"
        />
        <meta
          property="og:description"
          content="PoliFIX provides expert policy consulting and advisory services, driving sustainable development through research and data analytics."
        />
        <meta
          property="og:image"
          content="https://polifixconsults.com/og-image.jpg"
        />
        <meta property="og:url" content="https://polifixconsults.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PoliFIX Consults | Policy Consulting for Sustainable Governance"
        />
        <meta
          name="twitter:description"
          content="PoliFIX provides expert policy consulting and advisory services, driving sustainable development through research and data analytics."
        />
        <meta
          name="twitter:image"
          content="https://polifixconsults.com/og-image.jpg"
        />
        <link rel="canonical" href="https://polifixconsults.com" />
        <link rel="icon" href="/polifix.png" />
      </Head>
      <body>
        <QueryClientProvider client={queryClient}>
          <div className="container">
            <Header />
            {children}
            <footer className="footer">
              <div className="foot-left">
                <img
                  src="/civicLogo.svg"
                  width="200px"
                  alt="Polifix"
                />
                <nav className="foot_navs">
                  <a href="#">About Us</a>
                  <a href="#">Blog</a>
                  <a href="#">Press Release</a>
                  <a href="#">Contact Us</a>
                </nav>
                <p>PoliFIX &copy; 2025</p>
              </div>
              <div id="contact-us" className="podcastIcons">
                <h3>CONTACT US </h3>
                <a href="https://www.youtube.com/@TheCivicPolicyArchive">
                  <img width="24px" src="/youtubeBlack.svg" alt="YouTube" />
                  @SENDPOLIFIX
                </a>
                <a href="https://www.instagram.com/sendpolifix?igsh=MW9mcWowaWY4Njd4dw%3D%3D&utm_source=qr">
                  <img width="24px" src="/instagramBlack.svg" alt="Instagram" />
                  @SENDPOLIFIX
                </a>
                <a href="https://x.com/sendpolifix?s=11">
                  <img width="24px" src="/twitterBlack.svg" alt="Twitter" />
                  @SENDPOLIFIX
                </a>
                <a href="">
                  <img width="24px" src="/mail.svg" alt="Mail" />
                  admin@polifixconsults.com
                </a>
              </div>
            </footer>
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
