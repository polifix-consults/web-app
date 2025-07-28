"use client";

import { client } from "@/sanity/lib/client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const fetchArticlesBySlug = async ({ pageParam = 0, slug }) => {
  const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
  const data = await client.fetch(
    POST_QUERY,
    { slug },
    {
      next: { revalidate: 30 },
    }
  );

  return {
    articles: data,
    nextPage: undefined, // Adjust this if you're paginating actual lists
  };
};

const useCurrentArticles = () => {
  const params = useParams();
  const slug = decodeURIComponent(params.slug);
  console.log(slug)
 
  return useInfiniteQuery({
    queryKey: ["articles", slug],
    queryFn: ({ pageParam }) => fetchArticlesBySlug({ pageParam, slug }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    enabled: !!slug, // Avoid running until slug is defined
  });
};

export default useCurrentArticles;
