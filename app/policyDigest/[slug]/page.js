"use client";
import React from "react";
import "./page.css";
import { useParams } from "next/navigation";
import useArticles from "@/hooks/useArticles";
import BlogSect, { ArticleRenderer } from "@/component/ArticleRenderer";

export default function Page() {
  const { Article, isLoading, error } = useArticles();
  const params = useParams();

  function formatCreatedAt(createdAtString) {
    // Check if the input is valid
    if (!createdAtString || typeof createdAtString !== "string") {
      return "Invalid date";
    }

    // Parse the string into a Date object
    const date = new Date(createdAtString);

    // Check if the Date object is valid
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }

    // Format the date and time
    const formattedDate = date.toLocaleString("en-US", {
      month: "short", // "Mar"
      day: "2-digit", // "28"
      year: "numeric", // "2025"
      hour: "2-digit", // "18"
      minute: "2-digit", // "29"
      second: "2-digit", // "00"
      hour12: false, // 24-hour format
    });

    return formattedDate;
  }

  // Example usage
  const createdAt = "2025-03-28T18:29:00Z"; // Typical Supabase created_at format
  console.log(formatCreatedAt(createdAt)); // "Mar 28, 2025, 18:29:00"

  // Test with invalid input
  console.log(formatCreatedAt("")); // "Invalid date"
  console.log(formatCreatedAt("not-a-date")); // "Invalid date"

  if (isLoading) return <div>Loading...</div>;
  console.log(Article.pages);
  const currentPost = Article?.pages[0]?.Article?.find(
    (post) => post.slug === params.slug
  );
  console.log(currentPost);
  console.log(params.slug);

  const timecreated = formatCreatedAt(currentPost?.created_at);
  console.log(currentPost.article_Body);

  return (
    <div className="blogDetails">
      {" "}
      <ArticleRenderer article={currentPost.article_Body} />
      <i>-Published on {timecreated}</i>
    </div>
  );
}
