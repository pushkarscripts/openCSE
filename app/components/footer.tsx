"use client";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { Road_Rage } from "next/font/google";

const roadRage = Road_Rage({
  variable: "--font-road-rage",
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-[#1B0D00] text-[#FAE8D7] py-12 px-6 border-t-4 border-[#2b1b0e]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Branding & Description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src="/mascot.png" alt="openCSE" className="w-8 h-11" />
            <span className={`${roadRage.className} text-4xl font-bold text-white`}>
              openCSE
            </span>
          </div>
          <p className="text-lg opacity-80 leading-relaxed" style={{ fontFamily: 'Rockwell, Serif, serif' }}>
            Empowering Computer Science students with free, open-source documentation and resources. 
            Built by the community, for the community.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className={`${roadRage.className} text-3xl text-white mb-2`}>Quick Links</h3>
          <ul className="flex flex-col gap-2 text-xl" style={{ fontFamily: 'Rockwell, Serif, serif' }}>
            <li><Link href="/" className="hover:text-[#d2b48c] transition">Home</Link></li>
            <li><Link href="/#subjects" className="hover:text-[#d2b48c] transition">Subjects</Link></li>
            <li><Link href="/#contribute" className="hover:text-[#d2b48c] transition">Contribute</Link></li>
            <li><Link href="/#sponsor" className="hover:text-[#d2b48c] transition">Sponsor</Link></li>
          </ul>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex flex-col gap-4">
          <h3 className={`${roadRage.className} text-3xl text-white mb-2`}>Connect</h3>
          <div className="flex gap-4">
            <a href="https://github.com/ayushyadav0707/openCSE" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 bg-[#2b1b0e] rounded-full hover:bg-[#d2b48c] hover:text-[#1B0D00] transition">
              <Github size={24} />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 bg-[#2b1b0e] rounded-full hover:bg-[#d2b48c] hover:text-[#1B0D00] transition">
              <Linkedin size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 bg-[#2b1b0e] rounded-full hover:bg-[#d2b48c] hover:text-[#1B0D00] transition">
              <Twitter size={24} />
            </a>
            <a href="mailto:contact@opencse.com" aria-label="Email" className="p-2 bg-[#2b1b0e] rounded-full hover:bg-[#d2b48c] hover:text-[#1B0D00] transition">
              <Mail size={24} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 mt-6 text-lg hover:text-[#d2b48c] transition cursor-pointer"
            style={{ fontFamily: 'Rockwell, Serif, serif' }}
          >
            <ArrowUp size={20} className="animate-bounce" />
            Back to Top
          </button>
        </div>
      </div>

      <hr className="max-w-7xl mx-auto my-8 border-[#2b1b0e]" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60" style={{ fontFamily: 'Rockwell, Serif, serif' }}>
        <p>© {new Date().getFullYear()} openCSE. All rights reserved.</p>
        <p>Made with ♡ by the open-source community.</p>
      </div>
    </footer>
  );
}
