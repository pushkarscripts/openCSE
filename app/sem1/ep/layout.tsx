// app/layout.tsx
import Navbar from "../../components/navbar";
import "../../globals.css";
import Sidebar from "./components/sidebar";

export const metadata = {
  title: "Engineering Physics | openCSE",
  description: "Free and Open Documentations for Engineering Physics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        
        {/* Navigation Bar */}
        <Navbar />

        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Area */}
          <div className="flex-1 flex flex-col">
            {/* Page Content */}
            <main className="flex-1 overflow-y-auto bg-[#1B0D00] px-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
