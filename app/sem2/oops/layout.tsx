// app/sem1/ep/layout.tsx
import Navbar from "../../components/navbar";
import Sidebar from "./components/sidebar";

export const metadata = {
  title: "OOPs | openCSE",
  description: "Object-Oriented Programming or relevant subject for openCSE",
};

export default function Sem1EpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="sem1-ep-root min-h-screen">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          <main className="flex-1 overflow-y-auto px-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
