"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import AOS from "aos"


export default function Home() {
  AOS.init();
  return (
    <main className="flex flex-col">
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </main>
  );
}
