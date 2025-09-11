export default function SponsorSection() {
  return (
    <section id="sponsor" className="px-6 py-12 text-center">
      <h2 className="text-2xl font-bold">Sponsor Us</h2>
      <p className="mt-2 text-gray-300">
        If you find openCSE useful, consider supporting us to keep the project alive:
      </p>
      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-md font-bold">
          ☕ Buy Me a Coffee
        </a>
        <a href="#" className="bg-yellow-200 px-4 py-2 rounded-md font-bold">
          ⭐ Star
        </a>
        <a href="#" className="bg-purple-600 text-white px-4 py-2 rounded-md font-bold">
          💜 Sponsor us on GitHub
        </a>
      </div>
    </section>
  );
}
