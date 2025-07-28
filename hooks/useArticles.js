"use client";
import { client } from "@/sanity/lib/client";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchArticles = async ({ pageParam = 0 }) => {
  const query = `*[_type == "post"] | order(_createdAt desc) [${pageParam}...${pageParam + 10}] {
    title, slug, body, mainImage{ asset->{ _id, url } }, publishedAt,description 
  }`;
  const data = await client.fetch(query); // Use client instead of sanityClient
  console.log(data);
  return {
    articles: data,
    nextPage: data.length === 10 ? pageParam + 10 : undefined,
  };
};

const useArticles = () => {
  return useInfiniteQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};

export default useArticles;
