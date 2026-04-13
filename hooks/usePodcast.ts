"use client";
import { fetchPodcast } from "@/services/fetchArticle";
import { useQuery } from "@tanstack/react-query";

export default function usePodcast() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["podcasts"],
    queryFn: () => fetchPodcast(),
  });

  return {
    podcast: data?.podcast ?? [],
    isLoading,
    error,
  };
}
