// app/sem4/cn/page.tsx
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

export default function ComputerNetworksHome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-[#e2d1c1] text-center px-4 py-12 bg-gradient-to-b from-[#1B0D00] to-[#2a1a0a]">
      <div className="max-w-4xl w-full">
        <h1 className={`text-7xl md:text-8xl font-bold mb-6 tracking-tight ${righteous.className} text-transparent bg-clip-text bg-gradient-to-r from-[#fccc7e] to-[#e2d1c1]`}>
          Computer Networks
        </h1>
        <p className="text-2xl md:text-3xl mb-12 opacity-90 leading-relaxed font-light" style={{ fontFamily: "Rockwell, Serif, serif" }}>
          Master the architecture of the modern internet. 
          From raw bits to global protocols, explore the backbone of digital communication.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 text-left">
          <div className="p-8 border border-[#c7a669]/30 rounded-2xl bg-[#3a2a14]/40 backdrop-blur-sm shadow-2xl hover:border-[#fccc7e]/50 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 text-[#fccc7e] flex items-center">
              <span className="mr-3">🚀</span> Core Concepts
            </h2>
            <ul className="text-xl space-y-3 opacity-80" style={{ fontFamily: "Rockwell, Serif, serif" }}>
              <li>• OSI & TCP/IP Reference Models</li>
              <li>• Network Topologies & Types</li>
              <li>• Data Link & Media Access Control</li>
            </ul>
          </div>

          <div className="p-8 border border-[#c7a669]/30 rounded-2xl bg-[#3a2a14]/40 backdrop-blur-sm shadow-2xl hover:border-[#fccc7e]/50 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-4 text-[#fccc7e] flex items-center">
              <span className="mr-3">🛠️</span> Protocols & Hardware
            </h2>
            <ul className="text-xl space-y-3 opacity-80" style={{ fontFamily: "Rockwell, Serif, serif" }}>
              <li>• Switches, Routers & Gateways</li>
              <li>• IPv4/IPv6 Addressing</li>
              <li>• Transport Protocols (TCP/UDP)</li>
            </ul>
          </div>
        </div>

        <p className="mt-16 text-xl animate-pulse text-[#fccc7e]/70">
          ← Select a chapter from the sidebar to begin
        </p>
      </div>
    </div>
  );
}

