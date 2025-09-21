export default function SponsorSection() {
  return (
    <section id="sponsor" className="px-6 py-12 text-center">
      <h2 className="text-8xl flex px-6 mb-0" style={{ fontFamily: '"Road Rage", sans-serif' }}>Sponsor Us</h2>
      <p className="mb-8 text-2xl flex px-6" style={{ fontFamily: "'Rockwell', 'Serif', serif" }}>
        If you find openCSE useful, consider supporting us to keep the project alive:
      </p>
      <div className="mt-12 flex px-6 gap-4 flex-wrap">
        <a href="https://buymeacoffee.com/pushkarsinghh" className="rounded-md font-bold flex items-center gap-2 hover:scale-105">
          <img src="/BuyMeACoffee.png" alt="Buy Me a Coffee" className="h-22" />
        </a>
        <a href="https://github.com/pushkarsinghh/openCSE" className="rounded-md font-bold flex items-center gap-2 hover:scale-105">
          <img src="/StarOnGitHub.png" alt="Star on GitHub" className="h-22" />
        </a>
        <a href="https://github.com/sponsors/pushkarsinghh" className="rounded-md font-bold flex items-center gap-2 hover:scale-105">
          <img src="/GitHubSponsor.png" alt="Sponsor us on GitHub" className="h-22" />
        </a>
      </div>
    </section>
  );
}
