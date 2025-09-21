import Link from "next/link";

export default function ContributionsSection() {
  return (
    <section id="contribute" className="px-6 py-12 text-center">
      <h2 className="text-8xl flex px-6 mb-0" style={{ fontFamily: '"Road Rage", sans-serif' }}>Contributions are Welcome!</h2>
      <p className="mb-8 text-2xl flex px-6" style={{ fontFamily: "'Rockwell', 'Serif', serif" }}>
        openCSE is community-driven. Want to add or improve docs? Contribute on GitHub.
      </p>
      <div className="mt-6 px-6 flex flex-col md:flex-row gap-8">
        <img src="/Contribute.png" alt="GitHub Issues" className="w-[40vw] shadow-md" />
        <div className="text-left max-w-[60vw]">
          <h3 className="font-semibold text-5xl mb-4" style={{ fontFamily: "'Rockwell', 'Serif', serif" }}>Browse and Tackle Issues</h3>
          <p className="mt-2 text-2xl" style={{ fontFamily: "'Rockwell', 'Serif', serif" }}>
            Check out the available issues on our <span className="underline"><Link href="https://github.com/pushkarsinghh/opencse/issues">GitHub repository</Link></span>. Pick one to work on, or raise your own if you spot something new!
          </p>
          <ul className="list-disc ml-5 text-2xl mt-3 space-y-1" style={{ fontFamily: "'Rockwell', 'Serif', serif" }}>
            <li>Find beginner-friendly and advanced issues</li>
            <li>Discuss solutions and get feedback</li>
            <li>Help us improve by reporting bugs or suggesting features</li>
          </ul>
          <p className="mt-6 text-2xl" style={{ fontFamily: "'Rockwell', 'Serif', serif" }}>
            Every contribution, big or small, helps make openCSE better for everyone. Join us in building a great resource for CSE students!
          </p>
        </div>
      </div>
    </section>
  );
}
