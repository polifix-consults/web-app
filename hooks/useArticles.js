"use client";
import { fetchArticles } from "@/services/fetchArticle";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export default function useArticles() {
  const {
    data: Article,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["Articles"],
    queryFn: () => fetchArticles(),
    getNextPageParam: (lastPage) => {
      return lastPage.isLastPage ? undefined : lastPage.nextPage;
    },
  });

  return {
    Article,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchNextPage,
  };
}
