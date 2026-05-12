"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SponsorSection() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".sponsor-header", {
        scrollTrigger: {
          trigger: ".sponsor-header",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".sponsor-btn", {
        scrollTrigger: {
          trigger: ".sponsor-btn",
          start: "top 90%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} id="sponsor" className="px-6 py-12 text-center">
      <div className="sponsor-header">
        <h2
          className="text-8xl flex px-6 mb-0"
          style={{ fontFamily: '"Road Rage", sans-serif' }}
        >
          Sponsor Us
        </h2>
        <p
          className="mb-8 text-2xl flex px-6"
          style={{ fontFamily: "'Rockwell', 'Serif', serif" }}
        >
          If you find openCSE useful, consider supporting us to keep the project
          alive:
        </p>
      </div>
      <div className="mt-12 flex px-6 gap-4 flex-wrap">
        <a
          href="https://buymeacoffee.com/pushkarsinghh"
          className="sponsor-btn rounded-md font-bold flex items-center gap-2 transition-transform duration-200"
        >
          <img src="/BuyMeACoffee.png" alt="Buy Me a Coffee" className="h-22" />
        </a>
        <a
          href="https://github.com/pushkarscripts/openCSE"
          className="sponsor-btn rounded-md font-bold flex items-center gap-2 transition-transform duration-200"
        >
          <img src="/StarOnGitHub.png" alt="Star on GitHub" className="h-22" />
        </a>
        <a
          href="https://github.com/sponsors/pushkarscripts"
          className="sponsor-btn rounded-md font-bold flex items-center gap-2 transition-transform duration-200"
        >
          <img
            src="/GitHubSponsor.png"
            alt="Sponsor us on GitHub"
            className="h-22"
          />
        </a>
      </div>
    </section>
  );
}
