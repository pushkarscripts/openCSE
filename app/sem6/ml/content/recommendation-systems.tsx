export const RecommendationSystemsContent = () => (
  <div className="course-content">
    <section id="recommendation-systems" className="scroll-mt-24">
      <h3 className="section-heading text-xl">7. Recommendation Systems</h3>
      <p className="p-text">
        A Recommendation System predicts the preference or rating a user would give to an item. They are widely used in e-commerce (Amazon) and streaming (Netflix, Spotify).
      </p>

      <div className="mt-8">
        <h4 className="font-bold text-xl mb-4 text-[#fccc7e]">1. Content-Based Filtering</h4>
        <p className="p-text mb-4 text-sm">
          Recommends items similar to those a user has liked in the past, based on item attributes (features).
          <br/><br/>
          <strong>Core Idea:</strong> &quot;If you liked item A, and item B is similar to A, you will like item B.&quot;
        </p>

        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f] mb-6">
          <h5 className="font-bold mb-2">How it works:</h5>
          <ol className="list-decimal pl-5 text-sm space-y-1 mb-3">
            <li>Build an <strong>item profile</strong> (e.g., genre, director for movies).</li>
            <li>Build a <strong>user profile</strong> based on items they interacted with.</li>
            <li>Compute similarity using Cosine Similarity.</li>
          </ol>
          <div className="bg-white/50 p-2 rounded font-mono text-xs overflow-x-auto whitespace-nowrap text-black">
            cos(θ) = (A · B) / (||A|| × ||B||)
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-xl mb-4 text-[#fccc7e]">2. Collaborative Filtering</h4>
        <p className="p-text mb-4 text-sm">
          Recommends items based on the preferences and behaviors of similar users, without using item features.
          <br/><br/>
          <strong>Core Idea:</strong> &quot;Users who liked the same items as you in the past will likely have similar tastes for new items.&quot;
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6] mb-2">User-Based CF Algorithm</h5>
            <ol className="list-decimal pl-5 text-sm space-y-1 text-[#fdf5e6]/90">
              <li>Find users similar to the active user using Pearson correlation or Cosine similarity on their rating vectors.</li>
              <li>Identify items liked by these similar users but not yet seen by the active user.</li>
              <li>Predict the rating for these unseen items by taking a weighted average of the similar users&apos; ratings.</li>
              <li>Recommend the items with the highest predicted ratings.</li>
            </ol>
          </div>
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6] mb-2">Model-Based CF (Matrix Factorization)</h5>
            <p className="text-sm text-[#fdf5e6]/80">Represents the user-item rating matrix as a product of two lower-dimensional matrices. <span className="font-mono bg-black/30 p-1 rounded">R ≈ U × Vᵀ</span>.</p>
          </div>
        </div>
      </div>

      <div className="note-box mt-6 bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00]">
        <h4 className="font-bold mb-1">3. Hybrid Filtering</h4>
        <p className="text-sm">
          Combines both approaches to overcome individual limitations (like the cold-start problem). Examples include Netflix, which uses matrix factorization (collaborative) along with genre/cast features (content).
        </p>
      </div>
    </section>
  </div>
);
