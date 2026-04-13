import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import React from "react";

export const ArticleRenderer = ({ article }) => {
  if (!article || !article.body) return null;

  const { title, body, mainImage } = article;
  const postImageUrl = mainImage
    ? urlFor(mainImage).width(1500).height(810).url()
    : null;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-brand-light">
      <h1 className="text-4xl font-bold mb-8 text-brand-primary font-sans">
        {title || "Untitled"}
      </h1>
      {postImageUrl && (
        <div className="mx-4">
          <img
            width="100%"
            src={postImageUrl}
            alt={title || "Article image"}
            className="h-auto"
          />
        </div>
      )}
      {Array.isArray(body) && (
        <div className="portable-text font-sans text-brand-gray-dark">
          <PortableText value={body} />
        </div>
      )}
    </div>
  );
};
