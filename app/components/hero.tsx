"use client";
import { Road_Rage } from "next/font/google";

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: "400",
});

export default function HeroSection() {
  return (
    <section
      className="text-center py-14 px-6 rounded-3xl mt-19 mx-15 mb-6"
      style={{
        backgroundImage: "url('/HeroBG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#cbb89d",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blur overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          className={`pt-[70px] font-bold ${roadRage.variable}`}
          style={{
            color: "#000",
            textAlign: "center",
            fontFamily: "var(--font-road-rage), 'Road Rage', cursive",
            fontSize: "112px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "102px",
          }}
        >
          Learn Computer Science & Engineering<br />the Open Way.
        </h1>
        <p
          className="mt-6 text-[45px] text-black"
          style={{
            fontFamily: "'Rockwell', 'Serif', serif",
          }}
        >
          Free, open, and beginner-friendly documentation<br /> for all CSE subjects.
        </p>
        <button
          onClick={() => {
            const el = document.getElementById("subjects");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-18 mb-10 px-18 py-6 rounded-full text-5xl hover:bg-[#38220b] transition-all duration-300 text-white hover:scale-105 cursor-pointer"
          style={{
            fontFamily: "'Rockwell', 'Serif', serif",
            background: "#38220b",
          }}
        >
          Explore Subjects
        </button>
      </div>
    </section>
  );
}
