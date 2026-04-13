"use client";
import React, { useEffect, useRef } from "react";
import "./BlogSection.css";
import useArticles from "@/hooks/useArticles";
import Link from "next/link";

const BlogSection = () => {
  const {
    data,
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
  if (error) return <div>Error loading articles</div>;

  return (
    <>
      {data?.pages.map((page, index) => (
        <div key={index}>
          {page.articles.map((post, i) => (
            <div key={i}>
              <article className="blogList">
                <Link href={`/digest/${post.slug.current}`}>
                  <h2>{post.title}</h2>
                  <div className="blogListDescript">
                    <p>{post.description}</p>
                    <figure className="blogListImgBox">
                      <img
                        src={post.mainImage?.asset?.url}
                        alt={post.imageAlt}
                      />
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
