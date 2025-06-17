"use client";
import { useState } from "react";
export default function Home() {
  const [res, setRes] = useState("");
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const body = { destination: "Madeira", days: 3, vibe: "adventure" };
    const r = await fetch("/api/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setRes(await r.text());
  }
  return (
    <form onSubmit={submit}>
      <button type="submit">Test API</button>
      <pre>{res}</pre>
    </form>
  );
}
