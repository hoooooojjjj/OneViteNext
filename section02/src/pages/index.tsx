"use client";

import { trpc } from "@/utils/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery("TRPC");

  if (!hello.data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{hello.data}</h1>
    </div>
  );
}
