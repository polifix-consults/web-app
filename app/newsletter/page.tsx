'use client';

import { useEffect, useState } from 'react';

export default function Newsletters() {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const perPage = 10;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchCampaigns = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/newsletters?per_page=${perPage}&page=${page}`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setCampaigns(data.campaigns);
        setTotal(data.total);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCampaigns();
  }, [page]);

  const totalPages = Math.ceil(total / perPage) || 1;

  if (loading) return <p className="p-6 font-sans text-brand-gray-dark">Loading newsletters…</p>;
  if (error) return <p className="p-6 font-sans text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-4">
      <h1 className="text-3xl font-bold mb-8 font-sans text-brand-primary">
        Past Newsletters
      </h1>

      <ul className="space-y-4">
        {campaigns.map((c) => (
          <li
            key={c.id}
            className="border-b-2 border-brand-gray-200 pb-4 hover:bg-brand-gray-50 p-3 rounded transition-colors"
          >
            <a
              href={c.archive_url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-inherit"
            >
              <h2 className="text-xl font-semibold text-brand-primary font-sans">
                {c.subject || c.title || "Untitled"}
              </h2>
            </a>
            <p className="text-brand-gray-dark text-sm font-sans mt-2">
              Sent on{" "}
              {c.send_time
                ? new Date(c.send_time).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "Unknown date"}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center gap-4 justify-center">
        <button
          disabled={page <= 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-6 py-2 bg-brand-primary text-white rounded font-sans font-bold hover:bg-brand-gray-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="font-sans text-brand-gray-dark">
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="px-6 py-2 bg-brand-primary text-white rounded font-sans font-bold hover:bg-brand-gray-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}
