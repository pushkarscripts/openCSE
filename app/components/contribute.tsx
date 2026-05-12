"use client";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContributionsSection() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".contribute-header", {
        scrollTrigger: {
          trigger: ".contribute-header",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".contribute-img", {
        scrollTrigger: {
          trigger: ".contribute-img",
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".contribute-content", {
        scrollTrigger: {
          trigger: ".contribute-content",
          start: "top 80%",
        },
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="contribute"
      className="px-6 py-12 text-center overflow-hidden"
    >
      <div className="contribute-header">
        <h2
          className="text-8xl flex px-6 mb-0"
          style={{ fontFamily: '"Road Rage", sans-serif' }}
        >
          Contributions are Welcome!
        </h2>
        <p
          className="mb-8 text-2xl flex px-6"
          style={{ fontFamily: "'Rockwell', 'Serif', serif" }}
        >
          openCSE is community-driven. Want to add or improve docs? Contribute on
          GitHub.
        </p>
      </div>
      <div className="mt-6 px-6 flex flex-col md:flex-row gap-8">
        <img
          src="/Contribute.png"
          alt="GitHub Issues"
          className="contribute-img w-[40vw] shadow-md"
        />
        <div className="contribute-content text-left max-w-[60vw]">
          <h3
            className="font-semibold text-5xl mb-4"
            style={{ fontFamily: "'Rockwell', 'Serif', serif" }}
          >
            Browse and Tackle Issues
          </h3>
          <p
            className="mt-2 text-2xl"
            style={{ fontFamily: "'Rockwell', 'Serif', serif" }}
          >
            Check out the available issues on our{" "}
            <span className="underline">
              <Link href="https://github.com/pushkarsinghh/opencse/issues">
                GitHub repository
              </Link>
            </span>
            . Pick one to work on, or raise your own if you spot something new!
          </p>
          <ul
            className="list-disc ml-5 text-2xl mt-3 space-y-1"
            style={{ fontFamily: "'Rockwell', 'Serif', serif" }}
          >
            <li>Find beginner-friendly and advanced issues</li>
            <li>Discuss solutions and get feedback</li>
            <li>Help us improve by reporting bugs or suggesting features</li>
          </ul>
          <p
            className="mt-6 text-2xl"
            style={{ fontFamily: "'Rockwell', 'Serif', serif" }}
          >
            Every contribution, big or small, helps make openCSE better for
            everyone. Join us in building a great resource for CSE students!
          </p>
        </div>
      </div>
    </section>
  );
}
