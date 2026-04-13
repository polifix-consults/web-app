"use client";
import { addSubscriber } from "@/services/fetchArticle";
import { useMutation } from "@tanstack/react-query";

// Custom hook for subscribing
export function useSubscribe() {
  const mutation = useMutation({
    mutationFn: addSubscriber,
    mutationKey: ["addSubscriber"],
    onSuccess: (data) => {
      console.log("Subscription successful:", data);
    },
    onError: (error: Error) => {
      console.error("Subscription error:", error.message);
    },
  });
  return {
    Mutate: mutation.mutate,
    isLoading: mutation.status === "pending",
    error: mutation.error,
  };
}
