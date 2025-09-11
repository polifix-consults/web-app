import React from "react";
import "./page.css";

export default function page() {
  return (
    <div className="AboutUsContainer">
      <h3>OUR TEAM</h3>
      <div className="teamLead">
        <img src="teamLead.jpg" alt="Team Lead" />
        <div className="teamText">
          <h3>OLUBUNMI AYANTUNJI(TEAM LEAD)</h3>
          <p>
            Olubunmi Ayantunji is a Legal Practitioner, Policy Expert, and
            Government Relations Advisor. He holds a Master’s degree in
            Legislative Studies and Policy from the University of Benin Nigeria
            and a Master of Public Administration (MPA) from the Johnson Shoyama
            Graduate School of Public Policy(University of Regina). He has has
            served on the board of the Institute of Public Administratuon of
            Canada (IPAC) and has almost a decade of experience in the Public
            service in Nigeria,Ghana and the Provincial Government of
            Saskatchewan in Canada.
          </p>
        </div>
      </div>
      <div className="teamLead">
        <img src="brandon.jpg" alt="Team Lead" />
        <div className="teamText">
          <h3>BRAYDEN PARK(FINANCIAL CONSULTANT)</h3>
          <p>
            Brayden brings a unique mix of financial expertise and people-first
            thinking to the table. With education in both Psychology and
            Business from the University of Regina, and nearly a decade of
            experience managing budgets and strategic planning within the
            Government of Saskatchewan, he’s well-versed in navigating complex
            financial systems with clarity and confidence. Now working closely
            with startups and growing businesses, Brayden focuses on cash flow
            forecasting, financial modeling, and lean growth strategies. He also
            owns and operates a successful real estate portfolio, giving him a
            hands-on understanding of investment and long-term value creation.
            Whether its building a financial roadmap or helping founders make
            smart, sustainable decisions—Brayden is all about turning
            numbers into action.
          </p>
        </div>
      </div>
      <div className="teamText">
        <h3>UMMI-KHULSUM JIBREEL</h3>
        <p>
          Ummi-Khulsum Jibreel is a passionate Communication Strategist with a
          background in media, development, information literacy, and strategic
          brand consulting. She is a Communication Strategist at PoliFIX Inc.
          She is also leading communications at V4C (Volunteers4Cause) Abuja
          Chapter, volunteering as a Social Media Manager for TEDxMaitama,
          served as a Librarian at the Centre for Democracy and Development
          (CDD) and has interned with Daar Communications PLC. Skilled in
          strategic communication, media/public relations, brand consulting,
          creative storytelling, brand consulting and copywriting, she thrives
          at building meaningful connections and shaping narratives that inspire
          action. A Library and Information Science graduate from Ahmadu Bello
          University, Zaria, and an alumna of Enactus ABU, Ummi-Khulsum is
          driven by the belief that effective communication can create positive
          change in the world.
        </p>
      </div>
    </div>
  );
}
