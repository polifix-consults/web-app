"use client";
import BlogNav from "@/component/BlogNav";
import useArticles from "@/hooks/useArticles";
import usePodcast from "@/hooks/usePodcast";
import { useSubscribe } from "@/hooks/useSubscriber";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation"; // App Router imports
import { Suspense, useState } from "react";

export default function Home() {
  const [sub, setSub] = useState(" ");
  const { Mutate, isLoading: sending } = useSubscribe();
  const { podcast, isLoading: podcasting, error: podError } = usePodcast();

  function OnSubscribe(e) {
    e.preventDefault();
    s;
    console.log(sub);
    Mutate({ subscriber: sub });
  }
  const { Article, isLoading, error } = useArticles();

  !isLoading && console.log(Article.pages);
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
            src="pfxH.jpg"
            alt="Governance and Policy Illustration"
          />
        </figure>
        <div className="hero-content">
          <h1>WELCOME TO POLIFIX</h1>
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
        </div>
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
              Article.pages[0].Article.map((index) => (
                <article className="blogList" key={index.slug}>
                  <Link href={`/digest/${index.slug}`}>
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
              <div className="podcastBoard">
                <h2>
                  A DIGITAL REPOSITORY FOR EXPLORING VARIOUS POLICY AND
                  STATECRAFT ISSUES AND TOPICS
                </h2>
                {/* <div className="cta-podBox">
                  <p>SHARE!</p>
                  <p>SUBSCRIBE!</p>
                </div> */}
                {/* <div className="podcastIcons">
                  <a href="https://www.youtube.com/@TheCivicPolicyArchive">
                    <img src="youtube.svg" alt="Watch on YouTube" />
                  </a>
                </div> */}

                <div className="podcastListBox">
                  {isLoading && <h1>Loading</h1>}
                  {!isLoading &&
                    podcast?.data.map((index) => (
                      <div key={index.id} className="podcastList">
                        <div className="podcastImgBox">
                          <img src={index.thumbnail} />
                        </div>
                        <div className="podcastContent">
                          <h2>{index.vidDescription}</h2>
                          <a href={index.youTubeLink} className="podcast-btn">
                            <span>
                              <img src="youtubeBlack.svg" width="16px" />
                            </span>{" "}
                            Watch
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </article>
          </section>
        </aside>
      </section>
    </main>
  );
}
