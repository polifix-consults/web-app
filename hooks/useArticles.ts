"use client";
import { client } from "@/sanity/lib/client";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchArticles = async ({ pageParam = 0 }) => {
  const res = await fetch(`/api/articles?page=${pageParam}`);
  if (!res.ok) {
    throw new Error("Failed to load articles");
  }
  return res.json();
};

const useArticles = () => {
  return useInfiniteQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 0,
  });
};

export default useArticles;
