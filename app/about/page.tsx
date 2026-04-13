"use client";
import Image from "next/image";

// Reusable Section Header to match the "Popular Stories" look
const SectionHeader = ({ title }: { title: string }) => (
  <div className="mb-10 border-b border-black pb-4">
    <h2 className="text-2xl font-black uppercase tracking-tighter text-black">
      {title}
    </h2>
  </div>
);

export default function About() {
  const team = [
    {
      name: "OLUBUNMI AYANTUNJI",
      role: "Managing Partner",
      image: "/teamLead.jpg",
      bio: "Olubunmi Ayantunji is a Legal Practitioner, Policy Expert, and Government Relations Advisor. He holds a Master's degree in Legislative Studies and Policy from the University of Benin Nigeria and an MPA from the Johnson Shoyama Graduate School of Public Policy.",
    },
    {
      name: "JOSEPH OLADEHINDE",
      role: "Managing Partner",
      image: "/OLADEHINDE.webp",
      bio: "Joseph Oladehinde is a seasoned Human Resources professional with over a decade of experience. He holds a Master's degree in Human Resource Management from the University of Regina and leads special projects with the City of Regina.",
    },
    {
      name: "BRAYDEN PARK",
      role: "Financial Consultant",
      image: "/brandon.jpg",
      bio: "Brayden brings a unique mix of financial expertise and people-first thinking. With nearly a decade of experience managing budgets within the Government of Saskatchewan, he navigates complex financial systems with clarity.",
    },
    {
      name: "UMMI-KHULSUM JIBREEL",
      role: "Communication Strategist",
      image: "/communication.webp",
      bio: "Ummi-Khulsum is a passionate Communication Strategist skilled in media relations, creative storytelling, and brand consulting. She thrives at building meaningful connections and shaping narratives that inspire action.",
    },
  ];

  return (
    <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 font-serif bg-white text-black">
      {/* Introduction Section */}
      <section className="mb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <h1 className="text-[2.5rem] md:text-5xl lg:text-[4rem] uppercase font-bold tracking-tighter leading-[0.9] mb-8">
              Transforming <br /> Governance <br /> with Precision
            </h1>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 mb-4 inline-block">
              Our Identity
            </span>
            <p className="text-gray-700 text-lg md:text-xl font-sans leading-relaxed">
              PoliFIX Consults is a forward-thinking firm specializing in
              strategic advisory services for governments and private
              institutions. We bridge the gap between policymakers and citizens
              through data-driven research and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border-y border-gray-200 mb-24">
        <div className="bg-white py-16 pr-8">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 mb-4 inline-block">
            01. Vision
          </span>
          <p className="text-2xl font-bold leading-snug text-black">
            To be the leading policy consulting firm driving innovative,
            evidence-based, and inclusive governance solutions worldwide.
          </p>
        </div>
        <div className="bg-white py-16 pl-8">
          <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400 mb-4 inline-block">
            02. Mission
          </span>
          <ul className="space-y-4 text-gray-700 font-sans text-base">
            <li className="flex gap-4">
              <span className="font-bold text-black">—</span>
              Providing high-quality policy consulting services that enhance
              government efficiency.
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-black">—</span>
              Fostering civic engagement and public policy education to ensure
              participatory governance.
            </li>
          </ul>
        </div>
      </section>

      {/* Key Focus Areas - Structured like the Popular Stories list */}
      <section className="mb-24">
        <SectionHeader title="Key Focus Areas" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Policy Consulting",
              desc: "Strategic advice and tailored recommendations that align with immediate priorities and long-term institutional objectives.",
            },
            {
              title: "Research & Data",
              desc: "Evidence-based qualitative and quantitative methodologies to support informed policy decisions and trend forecasting.",
            },
            {
              title: "Capacity Building",
              desc: "Tailored policy learning sessions and workshops for organizations, citizens, and student bodies globally.",
            },
          ].map((area, i) => (
            <div key={i} className="group border-t-4 border-black pt-6">
              <h4 className="text-xl font-bold uppercase mb-4 group-hover:text-gray-500 transition-colors">
                {area.title}
              </h4>
              <p className="text-gray-600 font-sans text-sm leading-relaxed">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section - Grid Layout */}
      <section className="mb-24">
        <SectionHeader title="Meet Our Team" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {team.map((member, idx) => (
            <article
              key={idx}
              className="group flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="w-full sm:w-1/3 aspect-[4/5] relative overflow-hidden bg-gray-100 grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="w-full sm:w-2/3">
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-2 block">
                  {member.role}
                </span>
                <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-sans text-sm leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer Conclusion */}
      <section className="bg-black text-white p-12 md:p-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6 tracking-tighter">
          Ready to drive meaningful change?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 font-sans text-lg mb-10">
          PoliFIX is uniquely positioned to support institutions in addressing
          the complex challenges of governance and public sector transformation.
        </p>
        <button className="bg-white text-black px-10 py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-gray-200 transition-all">
          Work With Us
        </button>
      </section>
    </main>
  );
}
