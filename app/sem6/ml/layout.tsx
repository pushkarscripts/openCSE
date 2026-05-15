// app/sem6/ml/layout.tsx
import Navbar from "../../components/navbar";
import Sidebar from "./components/sidebar";

export const metadata = {
  title: "Machine Learning | openCSE",
  description: "Free and Open Documentations for Machine Learning",
};

export default function MLLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sem6-ml-root min-h-screen">
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
