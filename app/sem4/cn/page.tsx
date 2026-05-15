// app/sem4/cn/page.tsx
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-righteous",
});

export default function ComputerNetworksHome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-[#e2d1c1] text-center px-4">
      <h1 className={`text-6xl font-bold mb-6 ${righteous.className}`}>
        Computer Networks
      </h1>
      <p className="text-2xl max-w-2xl" style={{ fontFamily: "Rockwell, Serif, serif" }}>
        Welcome to the Beginner-Friendly Computer Networks documentation. 
        Select a chapter from the sidebar to start your learning journey!
      </p>
      
      <div className="mt-12 p-6 border-2 border-[#c7a669] rounded-xl bg-[#2a1a0a] shadow-2xl max-w-lg">
        <h2 className="text-3xl font-semibold mb-4 text-[#fccc7e]">What we cover:</h2>
        <ul className="text-left text-xl space-y-2 list-disc list-inside">
          <li>OSI & TCP/IP Reference Models</li>
          <li>Network Devices (Hubs, Switches, Routers)</li>
          <li>IP Addressing & Subnetting</li>
          <li>Transport & Application Layer Protocols</li>
          <li>Network Security Fundamentals</li>
        </ul>
      </div>
    </div>
  );
}
