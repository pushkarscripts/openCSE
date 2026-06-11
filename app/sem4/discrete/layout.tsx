// app/sem4/discrete/layout.tsx

import Navbar from "../../components/navbar";
import Sidebar from "./components/sidebar";

export const metadata = {
  title: "Discrete Mathematics | openCSE",
  description: "Free and Open Documentations for Discrete Mathematics",
};

export default function DiscreteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="discrete-root min-h-screen flex flex-col pt-14">
      <Navbar />

      <div className="flex bg-[#1b0d00] flex-1 min-h-0">
        <Sidebar />

        <div className="flex-1 flex flex-col min-w-0">
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}
