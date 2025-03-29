"use client"
import { fetchArticles } from "@/services/fetchArticle";
import { useQuery } from "@tanstack/react-query";



export default function useArticles() {
  const {
    data: Article,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["Articles"],
    queryFn: () => fetchArticles(),
  });

  return { Article, isLoading, error };
}
