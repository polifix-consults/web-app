"use client";
import React from "react";
import BlogSection from "@/component/BlogSection";

export default function BlogPage() {
  return (
    <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 font-serif bg-white text-black">
      {/* Editorial Header */}
      <header className="mb-12 border-b-2 border-black pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 mb-2 block">
              PoliFIX Digest
            </span>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              Popular Stories
            </h1>
          </div>
          <p className="text-gray-500 font-sans text-sm md:text-base max-w-xs md:text-right leading-relaxed">
            In-depth analysis and reporting on the intersections of policy,
            governance, and public impact.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Blog Feed */}
        <div className="w-full lg:w-[65%]">
          <BlogSection />
        </div>

        {/* Optional Sidebar for the Blog Page to fill the space */}
        <aside className="hidden lg:block w-[35%]">
          <div className="sticky top-8 space-y-12">
            {/* Featured Quote or Small Banner */}
            <div className="bg-gray-50 p-8 border border-gray-100">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-black mb-4">
                The Mission
              </h4>
              <p className="text-lg font-bold italic leading-tight">
                "Bridging the gap between policymakers and citizens through
                data-driven storytelling."
              </p>
            </div>

            {/* Simple Category List */}
            {/* <div>
              <h4 className="text-xs font-black uppercase tracking-widest border-b border-black pb-2 mb-4">
                Top Categories
              </h4>
              <ul className="space-y-3 font-sans text-sm font-bold uppercase tracking-tight">
                {[
                  "Health Policy",
                  "Economic Reform",
                  "Civic Engagement",
                  "Tech Governance",
                ].map((cat) => (
                  <li
                    key={cat}
                    className="flex justify-between hover:text-gray-500 cursor-pointer transition-colors"
                  >
                    <span>{cat}</span>
                    <span className="text-gray-300">→</span>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </aside>
      </div>
    </main>
  );
}
