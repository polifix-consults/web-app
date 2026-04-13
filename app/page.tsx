"use client";
import Image from "next/image";
import BlogNav from "@/component/BlogNav";
import BlogSection from "@/component/BlogSection";
import Newsletter from "@/component/Newsletter";
import usePodcast from "@/hooks/usePodcast";
import { Suspense } from "react";

// Individual Story Component for high-end editorial look
const StoryItem = ({ title, category, date, excerpt, image }: any) => (
  <article className="flex flex-col md:flex-row gap-6 py-10 border-b border-gray-200 last:border-0 group cursor-pointer">
    {/* Image container with hover zoom */}
    <div className="w-full md:w-2/5 aspect-[16/10] relative overflow-hidden bg-gray-100">
      <Image
        src={image || "/heropp.webp"}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>

    {/* Text Content */}
    <div className="w-full md:w-3/5 flex flex-col justify-center">
      <div className="flex items-center gap-4 mb-3">
        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-black bg-gray-100 px-2 py-1">
          {category || "Policy"}
        </span>
        <span className="text-[11px] text-gray-400 font-sans tracking-tight">
          {date || "March 20, 2026"}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4 group-hover:text-gray-600 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 text-sm md:text-base line-clamp-2 mb-6 leading-relaxed font-sans">
        {excerpt ||
          "Driving impactful solutions through Research and Data Analytics to enhance government efficiency and promote sustainable development."}
      </p>

      <div className="mt-auto">
        <button className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:border-gray-400 transition-all">
          Read Story
        </button>
      </div>
    </div>
  </article>
);

const PodcastSkeleton = () => (
  <div className="flex w-full gap-4 mb-6 animate-pulse">
    <div className="w-1/3 h-24 bg-gray-700 rounded-sm"></div>
    <div className="w-2/3 flex flex-col gap-2 justify-center">
      <div className="h-4 bg-gray-700 rounded w-full"></div>
      <div className="h-4 bg-gray-700 rounded w-4/5"></div>
      <div className="h-8 bg-gray-700 rounded w-24 mt-2"></div>
    </div>
  </div>
);

export default function Home() {
  const { podcast, isLoading: podcasting } = usePodcast();

  const handleGetStartedClick = () => {
    const getStartedSection = document.getElementById("get-started-section");
    if (getStartedSection) {
      getStartedSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 font-serif bg-white text-black">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row border border-gray-200 mb-20">
        <figure className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-[550px]">
          <Image
            className="object-cover"
            src="/heropp.webp"
            alt="Governance and Policy Illustration"
            fill
            priority
          />
        </figure>
        <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          <h1 className="text-4xl lg:text-[3rem] uppercase font-bold tracking-tight mb-8 leading-[1.1]">
            Unveiling The Art <br /> Of Governance
          </h1>
          <p className="text-gray-700 text-base md:text-lg font-normal leading-relaxed mb-10 font-sans">
            At the forefront of innovative and strategic change, we specialize
            in Policy Consulting and Advisory Services, driving impactful
            solutions through Research and Data Analytics.
          </p>
          <div>
            <button
              onClick={handleGetStartedClick}
              className="bg-black text-white uppercase px-12 py-4 text-xs font-bold tracking-[0.2em] hover:bg-gray-800 transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section
        id="get-started-section"
        className="flex flex-col lg:flex-row gap-16"
      >
        {/* Left Column: Popular Stories */}
        <div className="w-full lg:w-[62%]">
          <div className="mb-10 border-b border-black pb-4">
            <h2 className="text-2xl font-black uppercase tracking-tighter">
              Popular Stories
            </h2>
          </div>

          <nav className="mb-8">
            <Suspense
              fallback={
                <div className="animate-pulse h-8 bg-gray-100 w-full"></div>
              }
            >
             
            </Suspense>
          </nav>

          <div className="flex flex-col">
            {/* Example list items matching your skill requirement */}

            {/* Keeping your dynamic section for other content */}
            <Suspense
              fallback={
                <div className="animate-pulse h-64 bg-gray-100 w-full"></div>
              }
            >
              <BlogSection />
            </Suspense>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="w-full lg:w-[38%] flex flex-col gap-16">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-tight mb-6 border-l-4 border-black pl-4">
              PoliFIX Newsletter
            </h2>
            <div className="bg-gray-50 p-8 border border-gray-100">
              <p className="text-gray-600 text-sm mb-6 font-sans">
                Subscribe to our newsletter:{" "}
                <span className="font-bold text-black italic">
                  Side Walk Parliament
                </span>
              </p>
              <Newsletter />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-tight mb-6 border-l-4 border-black pl-4">
              PoliFIX Podcast
            </h2>
            <div className="bg-black text-white p-8">
              <div className="max-h-[550px] overflow-y-auto pr-2 custom-scrollbar">
                {podcasting ? (
                  <>
                    <PodcastSkeleton />
                    <PodcastSkeleton />
                  </>
                ) : (
                  podcast?.map((item: any) => (
                    <div
                      key={item.id}
                      className="flex gap-4 mb-8 last:mb-0 group"
                    >
                      <div className="w-1/3 aspect-video relative flex-shrink-0 grayscale group-hover:grayscale-0 transition-all">
                        <Image
                          src={item.thumbnail || "/placeholder-podcast.jpg"}
                          alt="Podcast"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="text-xs md:text-sm font-bold leading-snug mb-3 line-clamp-2">
                          {item.vidDescription || item.title}
                        </h3>
                        <a
                          href={item.youTubeLink}
                          target="_blank"
                          className="text-[10px] font-black uppercase tracking-widest bg-white text-black px-3 py-1 w-fit hover:bg-gray-300"
                        >
                          Watch Now
                        </a>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        </aside>
      </section>

      {/* Clients Section */}
      <section className="mt-32 border-t border-gray-100 pt-16">
        <h2 className="text-2xl font-black uppercase tracking-tighter mb-12 text-center">
          Clients & Partnerships
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["/pRoundT.png", "/hOfRep.png", "/senate.png"].map((src, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-12 bg-gray-50/30 hover:bg-gray-50 transition-colors border border-gray-100"
            >
              <div className="relative w-24 h-24 mb-6 grayscale hover:grayscale-0 transition-all">
                <Image
                  className="object-contain"
                  src={src}
                  alt="Partner"
                  fill
                />
              </div>
              <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400 text-center">
                Official Partner
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
