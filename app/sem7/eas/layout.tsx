import Sidebar from "./components/Sidebar";

export default function EasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-[#1B0D00] min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-8 min-w-0">
        {children}
      </main>
    </div>
  );
}
