"use client";
import React from "react";
import "./page.css";
import { useSearchParams } from "next/navigation";
import useCurrentArticles from "@/hooks/useCurrentArticls";
import { ArticleRenderer } from "@/component/ArticleRenderer";
import { urlFor } from "@/sanity/lib/image";

export default function Page() {
  const { data, isLoading, error: dataError } = useCurrentArticles();

  if (isLoading) return <div>Loading...</div>;
  if (dataError) return <div>Error loading article</div>;

  const currentArticle = data?.pages?.[0].articles; // fetched article
  const timecreated = formatCreatedAt(currentArticle?.created_at);


  return (
    <div className="blogDetails">
      <ArticleRenderer article={currentArticle} />
      <i>-Published on {formatCreatedAt(currentArticle._createdAt)}</i>
    </div>
  );
}

// ✅ Date formatting helper
function formatCreatedAt(createdAtString) {
  if (!createdAtString || typeof createdAtString !== "string") {
    return "Invalid date";
  }

  const date = new Date(createdAtString);
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }

  return date.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}
