"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedStartups from "@/components/TrustedStartups";
import TheSolution from "@/components/TheSolution";
import WhyVideospark from "@/components/WhyVideospark";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import GetStarted from "@/components/GetStarted";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ReadySection from "@/components/ReadySection";
import Footer from "@/components/Footer";
import VideoPopup from "@/components/VideoPopup";
import Marqueeslider from "@/components/marqueeslider";

export default function Home() {
  useEffect(() => {
    window.Webflow = window.Webflow || [];

    const resetVideoTimeOnFirstPlay = () => {
      document.querySelectorAll("video").forEach((video) => {
        let playCount = 0;

        video.addEventListener("play", function () {
          if (playCount === 0) {
            this.currentTime = 0;
          }
          playCount += 1;
        });
      });
    };

    window.Webflow.push(resetVideoTimeOnFirstPlay);
    resetVideoTimeOnFirstPlay();
  }, []);

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">
        <Navbar />
        <Hero />
        <TrustedStartups />
        <TheSolution />
        <Marqueeslider />
        <WhyVideospark />
        <Testimonials />
        <Process />
        <GetStarted />
        <Reviews />
        <Pricing />
        <FAQ />
        <ReadySection />
        <Footer />
      </main>
      <VideoPopup />
    </div>
  );
}
