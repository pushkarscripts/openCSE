export const PredictionRecommendationContent = () => (
  <div className="course-content">
    <section id="prediction-recommendation" className="scroll-mt-24">
      <h3 className="section-heading text-xl">4. Prediction & Recommendation</h3>
      <p className="p-text mb-4">
        Recommendation systems predict user preferences to suggest items (movies, products, music) they are likely to engage with. They power platforms like Netflix, Amazon, and Spotify.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold mb-2">Collaborative Filtering</h4>
          <p className="text-sm mb-2">Based on the principle: <i>"Users who agreed in the past will agree in the future."</i> It relies purely on user-item interaction history.</p>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>User-Based:</strong> Find users similar to the target user; recommend what they liked.</li>
            <li><strong>Item-Based:</strong> Find items similar to what the target user liked.</li>
            <li><strong>Matrix Factorization:</strong> Uses SVD/ALS to decompose the rating matrix into latent factors.</li>
          </ul>
        </div>
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold mb-2">Content-Based Filtering</h4>
          <p className="text-sm mb-2">Recommends items similar to ones the user previously liked, based explicitly on the <strong>features</strong> of the items (genre, tags, actors).</p>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li>Builds a specific "user profile" based on item features.</li>
            <li>Uses metrics like Cosine Similarity or TF-IDF.</li>
            <li className="text-red-700 font-semibold mt-2">Disadvantage: Over-specialization (creates a "filter bubble", no serendipity).</li>
          </ul>
        </div>
      </div>

      <div className="note-box bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00] my-6">
        <h4 className="font-bold mb-1">Hybrid Recommendation Systems</h4>
        <p className="text-sm">
          Combines Collaborative and Content-Based methods to overcome their individual limitations (e.g., Netflix combines user viewing history with deep tagging of movie genres/actors).
        </p>
      </div>

      <details className="bg-[#fdf5e6] p-4 rounded-lg border border-[#c7a669] my-4 cursor-pointer group">
        <summary className="font-bold text-[#2b1d0f] outline-none hover:text-[#8b5a2b] transition-colors">
          Deep Dive: The Cold Start Problem
        </summary>
        <div className="mt-4 text-[#2b1d0f] text-sm overflow-x-auto">
          <p className="mb-3">The "Cold Start" is the primary weakness of Collaborative Filtering—what happens when there is no data?</p>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#c7a669]">
                <th className="p-2">Cold Start Scenario</th>
                <th className="p-2">The Problem</th>
                <th className="p-2">Solutions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#c7a669]/30">
                <td className="p-2 font-bold">New User</td>
                <td className="p-2">System has zero history on what the user likes.</td>
                <td className="p-2">Ask for preferences at signup (onboarding survey), use broad demographic data.</td>
              </tr>
              <tr className="border-b border-[#c7a669]/30">
                <td className="p-2 font-bold">New Item</td>
                <td className="p-2">A newly added movie/product has 0 ratings.</td>
                <td className="p-2">Use Content-Based filtering to push it to users who like its specific features.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">New System</td>
                <td className="p-2">A brand new app has zero users AND zero ratings.</td>
                <td className="p-2">Web crawling, buying external datasets, or importing social network data.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
    </section>
  </div>
);
