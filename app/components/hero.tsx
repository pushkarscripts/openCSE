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
      className="relative overflow-hidden text-center 
        py-12 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 
        rounded-3xl mt-6 mx-4 sm:mx-6 md:mx-10 lg:mx-16 mb-6
        min-h-[70vh] sm:min-h-fit flex items-center justify-center"
      style={{
        backgroundImage: "url('/HeroBG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#cbb89d",
      }}
    >
      {/* Blur overlay */}
      <div
        className="absolute inset-0 backdrop-blur-[2px]"
        style={{ WebkitBackdropFilter: "blur(2px)", zIndex: 0 }}
      />

      {/* Content Container */}
      <div className="relative z-10 px-2 sm:px-4 md:px-6 lg:px-8">
        <h1
          className={`${roadRage.className} text-black text-center 
            text-5xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[112px] 
            leading-tight sm:leading-tight md:leading-snug lg:leading-[95px] xl:leading-[102px] 
            pt-6 sm:pt-8 md:pt-10 lg:pt-[70px]`}
        >
          Learn Computer Science & Engineering
          <br className="hidden md:block" />
          &nbsp;the Open Way.
        </h1>

        <p
          className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[45px] text-black"
          style={{ fontFamily: "'Rockwell', 'Serif', serif" }}
        >
          Free, open, and beginner-friendly documentation
          <br className="hidden md:block" />
          &nbsp;for all CSE subjects.
        </p>

        <button
          onClick={() => {
            const el = document.getElementById("subjects");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-12 sm:mt-10 mb-8 px-8 sm:px-10 md:px-12 lg:px-16 
            py-3 sm:py-4 md:py-5 lg:py-6 rounded-full 
            text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
            bg-[#38220b] text-white hover:bg-[#2a1809] hover:scale-105 
            transition-all duration-300 cursor-pointer font-semibold"
          style={{ fontFamily: "'Rockwell', 'Serif', serif" }}
        >
          Explore Subjects
        </button>
      </div>
    </section>
  );
}