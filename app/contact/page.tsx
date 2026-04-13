"use client";
import Image from "next/image";

export default function Contact() {
  const team = [
    {
      name: "OLUBUNMI AYANTUNJI",
      role: "Managing Partner",
      image: "/teamLead.jpg",
      bio: "Olubunmi Ayantunji is a Legal Practitioner, Policy Expert, and Government Relations Advisor. He holds a Master's degree in Legislative Studies and Policy from the University of Benin Nigeria and a Master of Public Administration (MPA) from the Johnson Shoyama Graduate School of Public Policy (University of Regina). He has served on the board of the Institute of Public Administration of Canada (IPAC) and has almost a decade of experience in the Public service in Nigeria, Ghana and the Provincial Government of Saskatchewan in Canada.",
    },
    {
      name: "JOSEPH OLADEHINDE",
      role: "Managing Partner",
      image: "/OLADEHINDE.webp",
      bio: "Joseph Oladehinde is a seasoned Human Resources professional with over a decade of diverse experience across various HR functions. He is committed to continuous professional growth and actively stays informed on emerging industry trends and best practices. Currently, Joseph serves as an HR Consultant, leading special projects with the City of Regina. He holds a Bachelor's degree in Human Resource Management from Lagos State University and a Master's degree in Human Resource Management from the University of Regina.",
    },
    {
      name: "BRAYDEN PARK",
      role: "Financial Consultant",
      image: "/brandon.jpg",
      bio: "Brayden brings a unique mix of financial expertise and people-first thinking to the table. With education in both Psychology and Business from the University of Regina, and nearly a decade of experience managing budgets and strategic planning within the Government of Saskatchewan, he's well-versed in navigating complex financial systems with clarity and confidence.",
    },
    {
      name: "UMMI-KHULSUM JIBREEL",
      role: "Communication Strategist",
      image: "/communication.webp",
      bio: "Ummi-Khulsum Jibreel is a passionate Communication Strategist with a background in media, development, information literacy, and strategic brand consulting. She is a Communication Strategist at PoliFIX Inc. Skilled in strategic communication, media/public relations, brand consulting, creative storytelling and copywriting, she thrives at building meaningful connections and shaping narratives that inspire action.",
    },
  ];

  return (
    <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 font-serif bg-white text-black">
      {/* Editorial Section Header */}
      <div className="mb-16 border-b border-black pb-6">
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
          Our Team
        </h2>
        <p className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.3em] mt-2">
          The minds behind the policy innovation
        </p>
      </div>

      {/* Team Grid - 2 Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20">
        {team.map((member, idx) => (
          <article
            key={idx}
            className="group flex flex-col sm:flex-row gap-6 items-start"
          >
            {/* Image Container with Grayscale Effect */}
            <div className="w-full sm:w-1/3 aspect-[4/5] relative overflow-hidden bg-gray-100 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>

            {/* Content Container */}
            <div className="w-full sm:w-2/3">
              <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-400 mb-2 block">
                {member.role}
              </span>
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase leading-none transition-colors group-hover:text-gray-600">
                {member.name}
              </h3>
              <p className="text-gray-600 font-sans text-sm leading-relaxed line-clamp-5 group-hover:line-clamp-none transition-all duration-500">
                {member.bio}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Call to Action Footer */}
      {/* <div className="mt-24 pt-12 border-t border-gray-100 text-center">
        <p className="font-sans text-gray-400 text-sm mb-6">
          Interested in joining our mission?
        </p>
        <button className="inline-flex items-center text-[11px] font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:border-gray-400 transition-all">
          View Open Positions
        </button>
      </div> */}
    </main>
  );
}
