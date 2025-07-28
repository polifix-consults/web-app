"use client";
import BlogNav from "@/component/BlogNav";
import BlogSection from "@/component/BlogSection";
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
  const { data: Article, isLoading, error } = useArticles();

  if (!isLoading) console.log(Article);

  !isLoading && console.log(Article);
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
            src={Article?.pages[0].articles[0].mainImage?.asset?.url}
            alt="Governance and Policy Illustration"
          />
        </figure>
        <div className="hero-content">
          <h1>WELCOME TO POLIFIX</h1>
          <p>
            At the forefront of innovative and strategic change, we specialize
            in Policy Consulting and Advisory Services, driving impactful
            solutions through Research, Data Analytics. Our mission is to
            provide high-quality policy consulting services that enhance
            government efficiency, promote good governance, and drive
            sustainable development. We also foster civic engagement and public
            policy education to ensure inclusive,open and
            participatory governance.
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
          {/* <div className="blogListContainer">
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
          </div> */}
          <BlogSection />
        </div>

        <aside className="sect_otherProds">
          <section className="newsletter">
            <h3 className="newsHead">The Policy Dispatch</h3>
            {/* <h2>DISPATCH</h2> */}
            <p>Subscribe to our Newsletter: The Policy Dispatch</p>
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
            <h3 className="newsHead">The Polifix Podcast</h3>
            <p>UNVEILING THE ART OF GOVERNANCE AND STATECRAFT</p>
            <article>
              <div className="podcastBoard">
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
      <section className="sect_sponsor">
        <h3 className="newsHead">Clients & Partnership</h3>
        <div className="sponsorBoxContainer">
          <div className="sponsorBox">
            <img width="200px" className="policyBox" src="pRoundT.png" />
            <h2>The Policy Round Table</h2>
          </div>
          <div className="sponsorBox">
            <img className="otherImages" width="90px" src="hOfRep.png" />
            <h2>The Nigerian House of Representative</h2>
          </div>
          <div className="sponsorBox">
            <img className="otherImages" width="90px" src="senate.png" />
            <h2>The Nigerian Senate</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
