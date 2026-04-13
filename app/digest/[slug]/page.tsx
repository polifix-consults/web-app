import { notFound } from "next/navigation";
import { ArticleRenderer } from "@/component/ArticleRenderer";
import { getArticleBySlug } from "@/app/lib/articles";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slug) {
    return (
      <div className="flex items-center justify-center p-20 font-sans text-gray-400 tracking-[0.2em] text-sm uppercase font-black">
        Article slug missing
      </div>
    );
  }
  console.log(slug)
  const currentArticle = await getArticleBySlug(slug);
  if (!currentArticle) {
    notFound();
  }

  return (
    <article className="max-w-[900px] mx-auto px-4 sm:px-6 py-16 md:py-24 bg-white text-black">
      <header className="mb-12 border-b-2 border-black pb-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[10px] uppercase tracking-[0.2em] font-black text-black bg-gray-100 px-3 py-1.5">
            {currentArticle.category?.title || "Policy Digest"}
          </span>
          <time className="text-[11px] font-sans text-gray-500 tracking-widest uppercase font-bold">
            {formatCreatedAt(currentArticle._createdAt)}
          </time>
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
          {currentArticle.title}
        </h1>

        {currentArticle.description && (
          <p className="font-sans lg:text-lg md:text-xl text-gray-600 leading-relaxed border-l-4 border-gray-200 pl-5">
            {currentArticle.description}
          </p>
        )}
      </header>

      <div className="font-sans text-lg leading-loose text-gray-800 prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-bold prose-a:text-black prose-a:border-b prose-a:border-black hover:prose-a:text-gray-500">
        <ArticleRenderer article={currentArticle} />
      </div>

      <footer className="mt-20 pt-8 border-t border-gray-200 flex justify-between items-center">
        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">
          PoliFIX Consults
        </span>
        <button className="text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 hover:border-gray-400 transition-all">
          Share Story
        </button>
      </footer>
    </article>
  );
}

function formatCreatedAt(createdAtString: string) {
  if (!createdAtString || typeof createdAtString !== "string") {
    return "Date Unavailable";
  }

  const date = new Date(createdAtString);
  if (isNaN(date.getTime())) {
    return "Date Unavailable";
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}
