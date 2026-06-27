"use client";

import Hero from "@/components/Hero";

import Colors from "@/components/Colors";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <Hero />
  
      <Colors/>
    </main>
  );
}
