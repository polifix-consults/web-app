import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import React from "react";

export const ArticleRenderer = ({ article }) => {
  const postImageUrl = article.mainImage
    ? urlFor(article.mainImage?.asset?._ref)?.width(1500).height(810).url()
    : null;

  console.log(article.mainImage?.asset?._ref);
  if (!article || !article.body) return null;

  const { title, body } = article;
  const { sections } = body;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">
        {title || "Untitled"}
      </h1>
      <div className="mx-4">
        <img width={"100%"} src={postImageUrl} />
      </div>
      {Array.isArray(body) && (
        <div className="portable-text">
          {" "}
          <PortableText value={body} />{" "}
        </div>
      )}
    </div>
  );
};
