"use client";
import BlogNav from "@/component/BlogNav";
import useArticles from "@/hooks/useArticles";
import { useSubscribe } from "@/hooks/useSubscriber";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation"; // App Router imports
import { Suspense, useState } from "react";

export default function Home() {
  const [sub, setSub] = useState(" ");
  const { Mutate, isLoading: sending } = useSubscribe();

  function OnSubscribe(e) {
    e.preventDefault();
    console.log(sub);
    Mutate({ subscriber: sub });
  }
  const { Article, isLoading, error } = useArticles();
  // Function to scroll to the "Get Started" section
  const handleGetStartedClick = () => {
    const getStartedSection = document.getElementById("get-started-section");
    if (getStartedSection) {
      getStartedSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <section className="hero">
        <figure className="img-box">
          <img
            className="img-boxImage"
            src="HeroImage.png"
            alt="Governance and Policy Illustration"
          />
        </figure>
        <article className="hero-content">
          <h1>UNVEILING THE ART OF GOVERNANCE</h1>
          <p>
            Dive into a dynamic repository of ideas, analysis, and solutions
            shaping the world of policy and statecraft. From historical lessons
            to modern challenges, explore the strategies, debates, and decisions
            that define how societies are governed—crafted for thinkers,
            leaders, and changemakers.
          </p>
          <div>
            <button onClick={handleGetStartedClick} className="btn-hero">
              GET STARTED
            </button>
          </div>
        </article>
      </section>

      <section id="get-started-section" className="content">
        <div className="sect_blog">
          <nav className="blog-nav">
            <Suspense fallback={<div>Loading...</div>}>
              <BlogNav />
            </Suspense>
          </nav>
          <div className="blogListContainer">
            {!isLoading ? (
              Article.Article.map((index) => (
                <article className="blogList" key={index.slug}>
                  <Link href={`/blog/${index.slug}`}>
                    <h2>{index.article_title}</h2>
                    <div className="blogListDescript">
                      <p>{index.article_body.slice(0, 200) + "..."}</p>
                      <figure className="blogListImgBox">
                        <img
                          src={index.article_img}
                          alt="Digital Government Reform Illustration"
                        />
                      </figure>
                    </div>
                  </Link>
                </article>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>

        <aside className="sect_otherProds">
          <section className="newsletter">
            <h3 className="newsHead">Newsletter</h3>
            <h2>DISPATCH</h2>
            <p>
              Sign up to read exclusive articles and insights on the dispatch
            </p>
            <form
              onSubmit={(e) => {
                OnSubscribe(e);
              }}
            >
              <input
                className="newsletterInput"
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                value={sub}
                onChange={(e) => setSub(e.target.value)}
              />
              <button className="btn-newsletter" type="submit">
                {sending ? "Sending..." : "Subscribe"}
              </button>
            </form>
          </section>

          <section className="podcast">
            <h3 className="newsHead">Podcast</h3>
            <article>
              <div className="podcastBox"></div>
              <div className="podcastBoard">
                <h2>
                  A DIGITAL REPOSITORY FOR EXPLORING VARIOUS POLICY AND
                  STATECRAFT ISSUES AND TOPICS
                </h2>
                <div className="cta-podBox">
                  <p>WATCH!</p>
                  <p>ENJOY!</p>
                  <p>SHARE!</p>
                  <p>SUBSCRIBE!</p>
                </div>
                <div className="podcastIcons">
                  <a href="#">
                    <img src="spotify.svg" alt="Listen on Spotify" />
                  </a>
                  <a href="https://www.youtube.com/@TheCivicPolicyArchive">
                    <img src="youtube.svg" alt="Watch on YouTube" />
                  </a>
                </div>
              </div>
            </article>
          </section>
        </aside>
      </section>
    </main>
  );
}
