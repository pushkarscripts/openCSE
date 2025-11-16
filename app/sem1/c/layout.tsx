// app/sem1/c/layout.tsx
import Navbar from "../../components/navbar";
import Sidebar from "./components/sidebar";

export const metadata = {
  title: "C Programming | openCSE",
  description: "Free and Open Documentations for Programming in C Language",
};

export default function Sem1CLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sem1-c-root min-h-screen">
      {/* Navigation Bar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Area */}
        <div className="flex-1 flex flex-col">
          {/* Page Content */}
          <main className="flex-1 overflow-y-auto px-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
