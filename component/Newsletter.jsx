"use client";

import { useState, useEffect } from "react";
import "./newsletter.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/newsletters");
        if (!res.ok) throw new Error("Failed to fetch newsletters");
        const data = await res.json();
        setCampaigns(data.campaigns);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setStatus("subscribing");
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("subscribed");
      setMessage(data.message);
      setEmail("");
    } catch (error) {
      setStatus("");
      setMessage(error.message);
    }
  };

  return (
    <div className="newsletter-container">
      {/* Subscription Form */}
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          className="newsletterInput"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
        />
        <button className="newsletter-btn" type="submit">
          {status === "subscribing" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {message && <p className="text-green-600">{message}</p>}

      {/* Newsletter List */}
      <div className="newsletter-list">
        <h2>Past Newsletters</h2>
        {loading && <p>Loading newsletters…</p>}
        {error && <p className="text-red-600">Error: {error}</p>}

        {/* 👇 scrollable section */}
        <div className="newsletter-scroll-area">
          <div className="flex">
            {campaigns.map((c) => (
              <a
                key={c.id}
                href={c.archive_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="newsletter-imgBox">
                  <img
                    src={c.image}
                    alt={c.subject || c.title || "Newsletter"}
                  />
                </div>
                <div className="newsletter-textBox">
                  <h3>{c.subject || c.title || "Untitled"}</h3>
                  <p>
                    Sent on{" "}
                    {c.send_time
                      ? new Date(c.send_time).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                      : "Unknown date"}
                  </p>
                  <p className="text-blue-600">Read more →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
