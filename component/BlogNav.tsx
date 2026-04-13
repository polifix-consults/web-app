import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

export default function BlogNav() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sort = searchParams.get("sort");

  const handleLatestClick = () => {
    router.push("/?sort=latest");
  };

  const handlePopularClick = () => {
    router.push("/?sort=popular");
  };

  const filterClasses = sort === "popular"
    ? "bg-brand-accent px-6 py-2 text-brand-primary font-sans text-xs md:text-sm cursor-pointer border-l-4 border-brand-primary transition-colors"
    : "bg-brand-gray-50 px-6 py-2 text-brand-primary font-sans text-xs md:text-sm cursor-pointer border-l-4 border-transparent hover:bg-brand-gray-100 transition-colors";

  return (
    <h3
      onClick={handlePopularClick}
      className={filterClasses}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handlePopularClick();
        }
      }}
    >
      Popular Stories
    </h3>
  );
}
