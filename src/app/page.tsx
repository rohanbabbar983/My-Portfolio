"use client"
import Contact from "@/sections/Contact";
import { Education } from "@/sections/Education";
import { Features } from "@/sections/Features";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
export default function Home() {
  return (
    <div className="">
          <Header/>
          <Hero/>
          <LogoTicker/>
          <Features/>
          <Education/>
          <Contact/>
          <Footer/>

    </div>
    );
}
