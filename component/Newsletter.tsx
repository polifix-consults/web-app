"use client";

import { useState, useEffect } from "react";

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
        setCampaigns(Array.isArray(data.campaigns) ? data.campaigns : []);
      } catch (err) {
        setError(err.message);
        setCampaigns([]);
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
    <div className="max-w-2xl mx-auto p-6 font-sans">
      {/* Subscription Form */}
      <form className="flex mb-6 gap-2" onSubmit={handleSubmit}>
        <input
          className="flex-1 px-3 py-2 border-2 border-brand-primary rounded text-base focus:outline-none focus:ring-2 focus:ring-brand-accent"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
        />
        <button className="px-4 py-2 bg-brand-primary text-white rounded cursor-pointer hover:bg-brand-gray-dark transition-colors font-sans font-semibold uppercase text-sm" type="submit">
          {status === "subscribing" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {message && <p className="text-green-600 font-sans">{message}</p>}

      {/* Newsletter List */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-2 font-sans text-brand-primary">
          Past Newsletters
        </h2>
        {loading && <p className="font-sans">Loading newsletters…</p>}
        {error && <p className="text-red-600 font-sans">Error: {error}</p>}

        {/* Scrollable section */}
        <div className="max-h-[450px] overflow-y-auto pr-2">
          <div className="flex flex-col gap-4">
            {campaigns.map((c) => (
              <a
                key={c.id}
                href={c.archive_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 border border-gray-300 rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow no-underline text-inherit"
              >
                <div className="w-2/5 max-w-[150px] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.subject || c.title || "Newsletter"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-3/5 flex flex-col p-3">
                  <h3 className="text-base font-semibold mb-0 font-sans text-brand-primary">
                    {c.subject || c.title || "Untitled"}
                  </h3>
                  <p className="text-sm mb-0 font-sans text-brand-gray-dark">
                    Sent on{" "}
                    {c.send_time
                      ? new Date(c.send_time).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                      : "Unknown date"}
                  </p>
                  <p className="text-blue-600 font-sans text-sm mt-1">
                    Read more →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
