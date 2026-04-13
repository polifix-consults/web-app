import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page") ?? "0");
  const limit = 10;
  const start = page;
  const query = `*[_type == "post"] | order(_createdAt desc)[${start}...${start + limit}] { title, slug, body, mainImage{ asset->{ _id, url } }, publishedAt, description, category->{ title } }`;

  const data = await client.fetch(query);
  return NextResponse.json({
    articles: Array.isArray(data) ? data : [],
    nextPage:
      Array.isArray(data) && data.length === limit ? page + limit : undefined,
  });
}
