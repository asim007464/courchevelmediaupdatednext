"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedStartups from "@/components/TrustedStartups";
import RevealOnScroll from "@/components/RevealOnScroll";

const TheSolution = dynamic(() => import("@/components/TheSolution"), {
  ssr: true,
  loading: () => <div className="section-loading-spacer" aria-hidden="true" />,
});
const SelectedWork = dynamic(() => import("@/components/SelectedWork"), {
  ssr: true,
  loading: () => <div className="section-loading-spacer" aria-hidden="true" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: true,
  loading: () => <div className="section-loading-spacer" aria-hidden="true" />,
});
const Process = dynamic(() => import("@/components/Process"), {
  ssr: true,
  loading: () => <div className="section-loading-spacer" aria-hidden="true" />,
});
const GetStarted = dynamic(() => import("@/components/GetStarted"), {
  ssr: true,
  loading: () => <div className="section-loading-spacer" aria-hidden="true" />,
});
const Reviews = dynamic(() => import("@/components/Reviews"), {
  ssr: true,
  loading: () => <div className="section-loading-spacer" aria-hidden="true" />,
});
const Pricing = dynamic(() => import("@/components/Pricing"), {
  ssr: true,
  loading: () => <div className="section-loading-spacer" aria-hidden="true" />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  ssr: true,
  loading: () => <div className="section-loading-spacer" aria-hidden="true" />,
});
const ReadySection = dynamic(() => import("@/components/ReadySection"), {
  ssr: true,
  loading: () => <div className="section-loading-spacer" aria-hidden="true" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});
const VideoPopup = dynamic(() => import("@/components/VideoPopup"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="page-wrapper page-enter">
      <main className="main-wrapper">
        <Navbar />
        <Hero />
        <RevealOnScroll>
          <TrustedStartups />
        </RevealOnScroll>
        <RevealOnScroll>
          <TheSolution />
        </RevealOnScroll>
        <RevealOnScroll>
          <SelectedWork />
        </RevealOnScroll>
        <RevealOnScroll>
          <Testimonials />
        </RevealOnScroll>
        <RevealOnScroll>
          <Process />
        </RevealOnScroll>
        <RevealOnScroll>
          <GetStarted />
        </RevealOnScroll>
        <RevealOnScroll>
          <Reviews />
        </RevealOnScroll>
        <RevealOnScroll>
          <Pricing />
        </RevealOnScroll>
        <RevealOnScroll>
          <FAQ />
        </RevealOnScroll>
        <RevealOnScroll>
          <ReadySection />
        </RevealOnScroll>
        <RevealOnScroll>
          <Footer />
        </RevealOnScroll>
      </main>
      <VideoPopup />
    </div>
  );
}
