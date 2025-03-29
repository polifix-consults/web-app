import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

export default function BlogNav() {
    const router = useRouter(); // Get the router instance from Next.js
  const handleLatestClick = () => {
    router.push("/?sort=latest"); // Correct syntax for App Router: use a string URL
  };
  const handlePopularClick = () => {
    router.push("/?sort=popular"); // Correct syntax for App Router: use a string URL
  };

  const searchParams = useSearchParams(); // Get query params in App Router
  const sort = searchParams.get("sort"); // Extract the "sort" query param (e.g., "latest")
  return (
    <>
      <button
        onClick={() => {
          handleLatestClick();
        }}
        className={`${sort === "latest" ? "active-filter" : "filter"}`}
      >
        Latest
      </button>
      <button
        onClick={() => {
          handlePopularClick();
        }}
        className={`${sort === "popular" ? "active-filter" : "filter"}`}
      >
        Popular
      </button>
    </>
  );
}
