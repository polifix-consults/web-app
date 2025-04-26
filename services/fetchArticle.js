"use server";
import supabase from "./supabase";

export async function fetchArticles() {
  const limit = 35;
  const from = 0 * limit;
  const to = from + limit - 1;
  console.log(from, to);

  let { data: Article, error } = await supabase
    .from("Article")
    .select("*")
    .range(from, to);

  if (error) throw new error();
  return { Article };
}

export async function addSubscriber(inserted) {
  let { data, error } = await supabase
    .from("Subscribers")
    .insert([inserted])
    .select();

  if (error) throw new error();
  return { data };
}

export async function fetchPodcast() {
  let { data, error } = await supabase.from("podcast").select("*");

  if (error) throw new error();
  return { data };
}
