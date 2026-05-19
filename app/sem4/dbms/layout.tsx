import Navbar from "../../components/navbar";
 import Sidebar from "./components/sidebar";

export const metadata = {
  title: "Database Management Systems | openCSE",
  description:
    "Free and Open Documentations for Database Management Systems",
};

export default function DBMSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="operating-system-root min-h-screen flex flex-col pt-14">
      <Navbar />
      <div className="flex bg-[#1b0d00] flex-1 min-h-0">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}