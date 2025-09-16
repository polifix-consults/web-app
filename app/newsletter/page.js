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

  if (loading) return <p>Loading newsletters…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Past Newsletters</h1>

      <ul className="space-y-4">
        {campaigns.map(c => (
          <li key={c.id} className="border-b pb-4">
            <a href={c.archive_url} target="_blank" rel="noopener noreferrer">
              <h2 className="text-xl font-semibold">{c.subject || c.title || 'Untitled'}</h2>
            </a>
            <p className="text-gray-600 text-sm">
              Sent on {c.send_time ? new Date(c.send_time).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Unknown date'}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center gap-3">
        <button disabled={page <= 1} onClick={() => setPage(p => Math.max(1, p - 1))}>Previous</button>
        <span>Page {page} of {totalPages}</span>
        <button disabled={page >= totalPages} onClick={() => setPage(p => Math.min(totalPages, p + 1))}>Next</button>
      </div>
    </div>
  );
}
