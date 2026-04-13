"use client";

import { client } from "@/sanity/lib/client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const fetchArticleBySlug = async (slug: string) => {
  const res = await fetch(`/api/articles/${encodeURIComponent(slug)}`);
  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }
  return res.json();
};

const useCurrentArticles = () => {
  const params = useParams();
  const slugParam = params.slug;
  const slug =
    typeof slugParam === "string" ? decodeURIComponent(slugParam) : "";

  return useQuery({
    queryKey: ["article", slug],
    queryFn: () => fetchArticleBySlug(slug),
    enabled: !!slug,
  });
};

export default useCurrentArticles;
