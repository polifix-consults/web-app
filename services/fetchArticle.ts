"use server";
import supabase from "./supabase";

export async function fetchArticles() {
  const limit = 35;
  const from = 0 * limit;
  const to = from + limit - 1;

  const { data: articles, error } = await supabase
    .from("Article")
    .select("*")
    .range(from, to);

  if (error) {
    throw new Error(error.message || "Failed to fetch articles");
  }

  return {
    articles: articles ?? [],
    nextPage: (articles?.length ?? 0) === limit ? to + 1 : undefined,
  };
}

export async function addSubscriber(inserted: { email: string }) {
  const { data, error } = await supabase
    .from("Subscribers")
    .insert([inserted])
    .select();

  if (error) {
    throw new Error(error.message || "Failed to add subscriber");
  }

  return { data: data ?? [] };
}

export async function fetchPodcast() {
  const { data, error } = await supabase.from("podcast").select("*");

  if (error) {
    throw new Error(error.message || "Failed to fetch podcast");
  }

  return { podcast: data ?? [] };
}
