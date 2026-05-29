export const AprioriContent = () => (
  <div className="course-content">
    <section id="apriori" className="scroll-mt-24">
      <h3 className="section-heading text-xl">5. Apriori Algorithm & Association Rules</h3>
      <p className="p-text">
        Association Rule Mining discovers interesting relationships between variables in large databases, famously used for <strong>Market Basket Analysis</strong> (finding which products are frequently bought together).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h5 className="font-bold mb-1">1. Support</h5>
          <p className="text-xs mb-2">How frequently an itemset appears in the dataset.</p>
          <div className="bg-white/50 p-2 rounded font-mono text-[10px] overflow-x-auto whitespace-nowrap text-black">
            Support(A) = (Transactions with A) / Total
          </div>
        </div>
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h5 className="font-bold mb-1">2. Confidence</h5>
          <p className="text-xs mb-2">How often the rule is true. Given A, how likely is B?</p>
          <div className="bg-white/50 p-2 rounded font-mono text-[10px] overflow-x-auto whitespace-nowrap text-black">
            Conf(A→B) = Support(A ∪ B) / Support(A)
          </div>
        </div>
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h5 className="font-bold mb-1">3. Lift</h5>
          <p className="text-xs mb-2">Strength of association over random chance. Lift &gt; 1 = positive correlation.</p>
          <div className="bg-white/50 p-2 rounded font-mono text-[10px] overflow-x-auto whitespace-nowrap text-black">
            Lift(A→B) = Conf(A→B) / Support(B)
          </div>
        </div>
      </div>

      <div className="note-box mt-6 bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00]">
        <h4 className="font-bold mb-1">The Apriori Property (Anti-Monotonicity)</h4>
        <p className="text-sm">
          <strong>&quot;If an itemset is frequent, then all of its subsets must also be frequent.&quot;</strong><br />
          Conversely: If an itemset is infrequent, all its supersets will also be infrequent. This rule allows the algorithm to aggressively prune the search space without counting every combination.
        </p>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-2">Apriori Algorithm Steps</h4>
        <ol className="list-decimal pl-5 space-y-1 p-text text-sm">
          <li><strong>GENERATE C₁:</strong> Create all 1-itemsets.</li>
          <li><strong>SCAN & PRUNE:</strong> Count support. Remove items &lt; Minimum Support to create L₁.</li>
          <li><strong>GENERATE Cₖ₊₁ from Lₖ:</strong> Join Lₖ with itself (self-join).</li>
          <li><strong>PRUNE Cₖ₊₁ (Using Apriori Property):</strong> Remove candidates having ANY infrequent k-subset.</li>
          <li><strong>SCAN & PRUNE:</strong> Count support in database. Remove itemsets &lt; Minimum Support to get Lₖ₊₁.</li>
          <li><strong>REPEAT:</strong> Until no new frequent itemsets can be found.</li>
          <li><strong>GENERATE RULES:</strong> From frequent itemsets, generate rules satisfying Minimum Confidence.</li>
        </ol>
      </div>

      <div className="example-box my-8 bg-[#fdf5e6] p-4 rounded-lg shadow-sm border border-[#c7a669]">
        <h4 className="font-bold border-b border-[#c7a669] pb-1 mb-2 text-[#2b1d0f]">Solved Example (Min Support = 2, Min Conf = 50%)</h4>
        <p className="text-sm mb-2 text-[#2b1d0f]">
          <strong>Dataset:</strong> A,B,C (T1), A,C (T2), A,D (T3), B,E,F (T4) ... total 9 transactions.
        </p>
        <ol className="list-decimal pl-5 text-sm space-y-2 text-[#2b1d0f]">
          <li><strong>Step 1 (Generate L₁):</strong> Scan DB. Suppose counts are: A:6, B:7, C:6, D:2. All ≥ 2, so L₁ = &#123;&#123;A&#125;, &#123;B&#125;, &#123;C&#125;, &#123;D&#125;&#125;.</li>
          <li><strong>Step 2 (Generate C₂ → L₂):</strong> Join L₁. Candidate pairs are &#123;A,B&#125;, &#123;A,C&#125;, &#123;B,C&#125;, &#123;B,D&#125; etc. Scan DB. Only those appearing ≥ 2 times survive. L₂ = &#123;&#123;A,B&#125;:4, &#123;A,C&#125;:4, &#123;B,C&#125;:4, &#123;B,D&#125;:2&#125;.</li>
          <li><strong>Step 3 (Generate C₃ → L₃):</strong> Join L₂ where first item matches. Candidate &#123;A,B,C&#125;. Scan DB. Count = 2. L₃ = &#123;&#123;A,B,C&#125;:2&#125;.</li>
          <li><strong>Step 4 (Rules from L₃):</strong> For &#123;A,B,C&#125;:
            <ul className="list-disc pl-5 mt-1 font-mono text-xs text-black">
              <li>A,B → C: Conf = Sup(A,B,C) / Sup(A,B) = 2/4 = 50% (Valid)</li>
              <li>A,C → B: Conf = Sup(A,B,C) / Sup(A,C) = 2/4 = 50% (Valid)</li>
              <li>B,C → A: Conf = Sup(A,B,C) / Sup(B,C) = 2/4 = 50% (Valid)</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  </div>
);
