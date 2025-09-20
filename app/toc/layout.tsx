// app/layout.tsx
import Navbar from "../components/navbar";
import NavbarShadow from "../components/navbar-shadow";
import "../globals.css";
import Sidebar from "./components/sidebar";

export const metadata = {
  title: "Docs Site",
  description: "Chapters tutorial example",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        
        {/* Navigation Bar */}
        <Navbar />
        <NavbarShadow />

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
