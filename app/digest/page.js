import React from "react";
import "./page.css";
import BlogSection from "@/component/BlogSection";

export default function BlogPage() {
  return (
    <div className="Blog">
      <h3 className={` newsHead`}>Popular Stories</h3>
      <div className="Blogs">
        <BlogSection />
      </div>
    </div>
  );
}
