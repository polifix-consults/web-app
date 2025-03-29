import React from "react";
import './page.css'
import BlogSection from "@/component/BlogSection";
export default function BlogPage() {
  return (
    <div className="Blog">
      <nav className="blog-nav">
        <a href="#">Latest</a>
        <a href="#">Popular</a>
      </nav>
      <div className="Blogs">
        <BlogSection />
      </div>
    </div>
  );
}
