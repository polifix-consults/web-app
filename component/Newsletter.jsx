"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setStatus("subscribing");
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setStatus("subscribed");

      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setMessage(data.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <>
      {" "}
      <form className="newsletter" onSubmit={handleSubmit}>
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
      {message && <p>{message}</p>}
    </>
  );
}
