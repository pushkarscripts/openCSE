// app/sem5/cle/layout.tsx
import Navbar from "../../components/navbar";
import Sidebar from "./components/sidebar";

export const metadata = {
  title: "Cyber Laws and Ethics | openCSE",
  description: "Free and Open Documentations for Cyber Laws and Ethics",
};

export default function CLELayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sem5-cle-root min-h-screen flex flex-col pt-14">
      {/* Navigation Bar */}
      <Navbar />

      <div className="flex bg-[#1b0d00] flex-1 min-h-0">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Page Content */}
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}
