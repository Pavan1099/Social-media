"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [helloMessage, setHelloMessage] = useState("");

  useEffect(() => {
    async function getHello() {
      try {
        const res = await fetch("http://localhost:5001/api/hello");
        const data = await res.json();
        setHelloMessage(data.message);
      } catch (err) {
        console.error("Error fetching backend:", err);
      }
    }

    getHello();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="text-lg font-medium text-blue-600">
            Backend says: {helloMessage || "Loading..."}
          </p>
        </div>

        {/* Existing links remain */}
      </main>
    </div>
  );
}
