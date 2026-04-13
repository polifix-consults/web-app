"use client";
import { fetchPodcast } from "@/services/fetchArticle";
import { useQuery } from "@tanstack/react-query";

interface Podcast {
  id: string;
  title: string;
  thumbnail?: string;
  vidDescription?: string;
  youTubeLink: string;
}

export default function usePodcast() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["podcasts"],
    queryFn: () => fetchPodcast(),
  });

  const podcasts: Podcast[] = data?.podcast ?? [];

  return {
    podcast: podcasts,
    isLoading,
    error,
  };
}
