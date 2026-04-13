"use client";
import React, { useEffect, useRef } from "react";
import useArticles from "@/hooks/useArticles";
import Link from "next/link";
import Image from "next/image";

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
  console.log("Articles data:", data);
  if (data?.pages) {
    data.pages.forEach((page, idx) => {
      console.log(
        `Page ${idx} articles:`,
        page.articles.map((a) => ({
          title: a.title,
          slug: a.slug?.current || "MISSING SLUG",
          hasSlug: !!a.slug?.current,
        })),
      );
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 },
    );

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading)
    return (
      <div className="flex flex-col gap-8">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="animate-pulse flex flex-col md:flex-row gap-6 py-10 border-b border-gray-100"
          >
            <div className="w-full md:w-2/5 aspect-[16/10] bg-gray-200"></div>
            <div className="w-full md:w-3/5 space-y-4">
              <div className="h-4 bg-gray-200 w-1/4"></div>
              <div className="h-8 bg-gray-200 w-3/4"></div>
              <div className="h-4 bg-gray-200 w-full"></div>
            </div>
          </div>
        ))}
      </div>
    );

  if (error)
    return (
      <div className="p-8 text-center text-red-500 font-sans">
        Error loading articles. Please try again.
      </div>
    );

  return (
    <div className="flex flex-col">
      {data?.pages && Array.isArray(data.pages) ? (
        data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.articles && Array.isArray(page.articles) ? (
              page.articles.map((post: any, i: number) => {
                // Skip articles without slugs and log them for debugging
                if (!post.slug?.current) {
                  console.warn(
                    `Article without slug at index ${i}:`,
                    post.title,
                  );
                  return null;
                }
                return (
                  <article
                    key={post.id || i}
                    className="group border-b border-gray-200 last:border-0"
                  >
                    <Link
                      href={`/digest/${post.slug.current}`}
                      className="flex flex-col md:flex-row gap-8 py-10 transition-all duration-300"
                    >
                      {/* Image Container */}
                      <div className="w-full md:w-[40%] aspect-[16/10] relative overflow-hidden bg-gray-50">
                        <Image
                          src={post.mainImage?.asset?.url || "/placeholder.jpg"}
                          alt={post.imageAlt || post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>

                      {/* Content Container */}
                      <div className="w-full md:w-[60%] flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-black bg-gray-100 px-2.5 py-1">
                            {post.category?.title || "Policy"}
                          </span>
                          <span className="text-[11px] text-gray-400 font-sans tracking-tight">
                            {post.publishedAt
                              ? new Date(post.publishedAt).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                  },
                                )
                              : "Recent Story"}
                          </span>
                        </div>

                        {/* Reduced Title Size Here */}
                        <h2 className="text-xl md:text-2xl font-bold leading-tight mb-3 group-hover:text-gray-600 transition-colors">
                          {post.title}
                        </h2>

                        <p className="text-gray-600 text-sm md:text-base line-clamp-2 mb-6 leading-relaxed font-sans">
                          {post.description}
                        </p>

                        <div className="mt-auto">
                          <span className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 group-hover:border-gray-400 transition-all">
                            Read Full Story
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })
            ) : (
              <p className="text-gray-500 text-sm font-sans">
                No articles available
              </p>
            )}
          </React.Fragment>
        ))
      ) : (
        <p className="text-gray-500 text-sm font-sans">No data available</p>
      )}

      {/* Infinite Scroll Trigger */}
      <div
        ref={loadMoreRef}
        className="text-center py-16 text-xs font-black uppercase tracking-[0.3em] text-gray-400 font-sans"
      >
        {isFetchingNextPage
          ? "Syncing more stories..."
          : hasNextPage
            ? "Scroll for more"
            : "End of Digest"}
      </div>
    </div>
  );
};

export default BlogSection;
