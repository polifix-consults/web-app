"use client";
import React from "react";
import "./page.css";
import { useParams } from "next/navigation";
import sanityClient from "@/sanityClient";
import { ArticleRenderer } from "@/component/ArticleRenderer";

export default async function Page() {
  const params = useParams();

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    article_Body,
    created_at
  }`;
  const currentPost = await sanityClient.fetch(query, { slug: params.slug });

  if (!currentPost) return <div>Post not found</div>;

  function formatCreatedAt(createdAtString) {
    if (!createdAtString || typeof createdAtString !== "string") return "Invalid date";
    const date = new Date(createdAtString);
    if (isNaN(date.getTime())) return "Invalid date";
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

  const timecreated = formatCreatedAt(currentPost.created_at);

  return (
    <div className="blogDetails">
      <ArticleRenderer article={currentPost.article_Body} />
      <i>-Published on {timecreated}</i>
    </div>
  );
}