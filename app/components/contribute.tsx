export default function ContributionsSection() {
  return (
    <section id="contribute" className="px-6 py-12 text-center">
      <h2 className="text-2xl font-bold">Contributions are Welcome!</h2>
      <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
        openCSE is community-driven. Want to add or improve docs? Contribute on
        GitHub.
      </p>
      <div className="mt-6 flex flex-col md:flex-row justify-center gap-8 items-center">
        <img src="/contribute.png" alt="GitHub Issues" className="w-80 rounded-lg shadow-md" />
        <div className="text-left max-w-md">
          <h3 className="font-semibold text-lg">Browse and Tackle Issues</h3>
          <ul className="list-disc ml-5 mt-3 space-y-1 text-gray-200">
            <li>Find beginner-friendly and advanced issues</li>
            <li>Discuss solutions and get feedback</li>
            <li>Help us improve by reporting bugs or suggesting features</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
