"use server";
import supabase from "./supabase";

export async function fetchArticles() {
  let { data: Article, error } = await supabase.from("Article").select("*");
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
