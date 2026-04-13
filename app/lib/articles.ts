import { cache } from "react";
import { client } from "@/sanity/lib/client";

const ARTICLE_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  slug,
  body,
  mainImage{asset->{_id,url}},
  publishedAt,
  description,
  _createdAt,
  category->{title}
}`;

export const getArticleBySlug = cache(async (slug: string) => {
  if (!slug) return null;
  try {
    const article = await client.fetch(ARTICLE_BY_SLUG_QUERY, { slug });
    console.log(article)
    return article ?? null;
  } catch (error) {
    console.log(error)
    console.error("getArticleBySlug error", error);
    return null;
  }
});
