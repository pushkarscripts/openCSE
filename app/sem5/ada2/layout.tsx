// app/sem4/ada/layout.tsx

import Navbar from "../../components/navbar";
import Sidebar from "./components/sidebar";

export const metadata = {
  title: "Algorithm Design and Analysis | openCSE",

  description:
    "Free and Open Documentations for Algorithm Design and Analysis",
};

export default function Sem4ADALayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="sem4-ada-root min-h-screen flex flex-col pt-14">

      {/* Navbar */}
      <Navbar />

      <div className="flex bg-[#1b0d00] flex-1 min-h-0">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">

          <main className="flex-1 overflow-auto">
            {children}
          </main>

        </div>

      </div>

    </div>
  );
}