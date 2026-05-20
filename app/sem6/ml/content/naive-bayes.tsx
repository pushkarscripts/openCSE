export const NaiveBayesContent = () => (
  <div className="course-content">
    <section id="naive-bayes" className="scroll-mt-24">
      <h3 className="section-heading text-xl">4. Naive Bayes Classifier</h3>
      <p className="p-text">
        Naive Bayes is a probabilistic classifier based on Bayes&apos; Theorem with a strong (&quot;naive&quot;) independence assumption: all features are assumed to be conditionally independent given the class label.
      </p>

      <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f] my-6">
        <h4 className="font-bold text-lg mb-2">Bayes&apos; Theorem</h4>
        <div className="bg-white/50 p-3 rounded font-mono text-sm overflow-x-auto whitespace-nowrap mb-3 text-black text-center">
          P(C|X) = [ P(X|C) × P(C) ] / P(X)
        </div>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li><strong>P(C|X):</strong> Posterior probability of class C given features X.</li>
          <li><strong>P(X|C):</strong> Likelihood — probability of features X given class C.</li>
          <li><strong>P(C):</strong> Prior probability of class C.</li>
          <li><strong>P(X):</strong> Evidence (normalizing constant, same for all classes).</li>
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-2">Types of Naive Bayes</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6]">Gaussian</h5>
            <p className="text-sm mt-1 text-[#fdf5e6]/80 mb-2">Features are continuous. Assumes a normal distribution.</p>
            <div className="bg-black/30 p-2 rounded font-mono text-[10px] overflow-x-auto whitespace-nowrap text-[#fdf5e6]">
              P(xᵢ|C) = (1 / √(2πσ²)) * exp( -(xᵢ-μ)² / 2σ² )
            </div>
          </div>
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6]">Multinomial</h5>
            <p className="text-sm mt-1 text-[#fdf5e6]/80">Features are discrete counts. Common for text classification (word frequencies).</p>
          </div>
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6]">Bernoulli</h5>
            <p className="text-sm mt-1 text-[#fdf5e6]/80">Features are binary (0 or 1). Models presence/absence of features.</p>
          </div>
        </div>
      </div>

      <div className="example-box my-6 bg-[#fdf5e6] p-4 rounded-lg shadow-sm border border-[#c7a669]">
        <h4 className="font-bold border-b border-[#c7a669] pb-1 mb-2 text-[#2b1d0f]">Solved Example: Weather Dataset</h4>
        <p className="text-sm mb-2 text-[#2b1d0f]">
          <strong>Problem:</strong> Predict if the player should play when the weather outlook is Sunny.
          <br/>
          (Dataset: 7 total instances. 6 Yes, 1 No. Outlook Sunny appears 2 times in Yes, 1 time in No.)
        </p>
        <ol className="list-decimal pl-5 text-sm space-y-2 text-[#2b1d0f]">
          <li><strong>Priors:</strong> P(Play=Yes) = 6/7 ≈ 0.857, P(Play=No) = 1/7 ≈ 0.143</li>
          <li><strong>Likelihoods:</strong> P(Sunny|Yes) = 2/6 ≈ 0.333, P(Sunny|No) = 1/1 = 1.0</li>
          <li><strong>Apply Theorem (ignore evidence):</strong>
            <ul className="list-none pl-2 mt-1 space-y-1 font-mono text-xs text-black">
              <li>P(Yes|Sunny) ∝ 0.333 × 0.857 ≈ 0.2857</li>
              <li>P(No|Sunny) ∝ 1.0 × 0.143 ≈ 0.143</li>
            </ul>
          </li>
          <li><strong>Normalize:</strong> Total = 0.2857 + 0.143 = 0.4287
            <ul className="list-none pl-2 mt-1 font-mono text-xs text-black">
              <li>P(Yes|Sunny) = 0.2857 / 0.4287 ≈ 0.667 (66.7%)</li>
              <li>P(No|Sunny) = 0.143 / 0.4287 ≈ 0.333 (33.3%)</li>
            </ul>
          </li>
        </ol>
        <p className="text-sm mt-3 text-green-800 font-semibold">Conclusion: Player SHOULD PLAY.</p>
      </div>

      <div className="note-box mt-4 bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00]">
        <h4 className="font-bold mb-1">Laplace Smoothing</h4>
        <p className="text-sm">
          If a feature value never appears in a class during training, its probability is 0, which zeros out the entire product.
          Solution: Add a small constant α (usually 1) to all counts.
        </p>
      </div>
    </section>
  </div>
);
