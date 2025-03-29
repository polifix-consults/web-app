"use client";
import React from "react";
import "./BlogSection.css";
import useArticles from "@/hooks/useArticles";
import Link from "next/link";

const BlogSection = () => {
  const { Article, isLoading, error } = useArticles();
  

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {Article.Article.map((post, index) => (
        <article className="blogList" key={index}>
          <Link href={`/blog/${post.slug}`}>
            <h2>{post.article_title}</h2>
            <div className="blogListDescript">
              <p>{post.article_body.slice(0, 250) + "..."}</p>
              <figure className="blogListImgBox">
                <img src={post.article_img} alt={post.imageAlt} />
              </figure>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
};

export default BlogSection;
