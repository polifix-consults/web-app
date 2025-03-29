"use client";
import { addSubscriber } from "@/services/fetchArticle";
import { useMutation } from "@tanstack/react-query";

// Custom hook for subscribing
export function useSubscribe() {
  const Mutation = useMutation({
    mutationFn: addSubscriber,
    mutationKey: ["addSubscriber"],
    onSuccess: (data) => {
      console.log("Subscription successful:", data);
    },
    onError: (error) => {
      console.error("Subscription error:", error.message);
    },
  });
  return {
    Mutate: Mutation.mutate,
    isLoading: Mutation.isLoading,
    error: Mutation.error,
  };
}
