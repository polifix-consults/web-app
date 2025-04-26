"use client";
import { fetchPodcast } from "@/services/fetchArticle";
import { useQuery } from "@tanstack/react-query";

export default function usePodcast() {
  const {
    data: podcast,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["podcasts"],
    queryFn: () => fetchPodcast(),
  });

  return {
    podcast,
    isLoading,
    error,
  };
}
