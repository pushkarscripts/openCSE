// app/sem4/cn/layout.tsx
import Navbar from "../../components/navbar";
import Sidebar from "./components/sidebar";

export const metadata = {
  title: "Computer Networks | openCSE",
  description: "Beginner-Friendly Computer Networks Documentation for Semester 4",
};

export default function Sem4CNLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sem4-cn-root min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Area */}
        <div className="flex-1 flex flex-col">
          {/* Page Content */}
          <main className="flex-1 overflow-y-auto px-6 bg-[#1B0D00]">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
