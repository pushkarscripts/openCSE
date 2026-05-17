// app/sem1/c/layout.tsx
import Navbar from "../../components/navbar";
import Sidebar from "./components/sidebar";

export const metadata = {
  title: "C Programming | openCSE",
  description: "Free and Open Documentations for Programming in C Language",
};

export default function Sem1CLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sem1-c-root min-h-screen flex flex-col pt-14">
      {/* Navigation Bar */}
      <Navbar />

      <div className="flex bg-[#1b0d00] flex-1 min-h-0">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Page Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
