"use client";
import React, { useEffect, useRef } from "react";
import "./BlogSection.css";
import useArticles from "@/hooks/useArticles";
import Link from "next/link";

const BlogSection = () => {
  const {
    Article,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useArticles();

  const loadMoreRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [loadMoreRef, hasNextPage, isFetchingNextPage]);

  if (isLoading) return <div>Loading...</div>;
  console.log(Article);

  return (
    <>
      {Article?.pages.map((page, index) => (
        <div key={index}>
          {page.Article.map((post, i) => (
            <div key={i}>
              {" "}
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
            </div>
          ))}
        </div>
      ))}
      <div ref={loadMoreRef}>
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load more"
          : "No more data"}
      </div>
     
    </>
  );
};

export default BlogSection;
