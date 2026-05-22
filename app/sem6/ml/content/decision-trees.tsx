export const DecisionTreesContent = () => (
  <div className="course-content">
    <section id="decision-trees" className="scroll-mt-24">
      <h3 className="section-heading text-xl">5. Decision Tree Algorithm</h3>
      <p className="p-text">
        A Decision Tree is a tree-structured classifier where internal nodes represent feature tests, branches represent the outcome of tests, and leaf nodes represent class labels. It creates a model that predicts the value of a target variable by learning decision rules from the features.
      </p>

      <div className="mt-6">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-2">Tree Building Algorithm (Top-Down Recursive)</h4>
        <ol className="list-decimal pl-5 space-y-2 p-text text-sm">
          <li>Start with the entire training dataset at the root node.</li>
          <li>Calculate the impurity (e.g., Entropy or Gini Index) of the current dataset.</li>
          <li>Iterate through all available features and calculate the Information Gain (or reduction in impurity) if the data were split on each feature.</li>
          <li>Select the feature that yields the <strong>highest Information Gain</strong> (or lowest Gini Index) as the decision node.</li>
          <li>Split the dataset into subsets based on the selected feature&apos;s values.</li>
          <li>Recursively repeat steps 2-5 for each subset until a stopping criterion is met (e.g., all instances in a node belong to the same class, or max depth is reached).</li>
        </ol>
      </div>

      <div className="mt-6">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-2">Attribute Selection Measures</h4>
        <p className="p-text mb-4 text-sm">
          The key challenge is deciding which feature to split on at each node.
        </p>
        
        <div className="space-y-4">
          <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
            <h5 className="font-bold mb-1">A) Information Gain (ID3 Algorithm)</h5>
            <p className="text-sm mb-2">Based on entropy (measure of impurity/disorder):</p>
            <div className="bg-white/50 p-2 rounded font-mono text-xs overflow-x-auto whitespace-nowrap mb-2 text-black">
              Entropy(S) = −Σ pᵢ log₂(pᵢ)
            </div>
            <div className="bg-white/50 p-2 rounded font-mono text-xs overflow-x-auto whitespace-nowrap text-black">
              IG(S, A) = Entropy(S) − Σ (|Sᵥ|/|S|) × Entropy(Sᵥ)
            </div>
          </div>

          <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
            <h5 className="font-bold mb-1">B) Gini Index (CART Algorithm)</h5>
            <p className="text-sm mb-2">Measures the probability of a variable being wrongly classified. Lower is better (more pure).</p>
            <div className="bg-white/50 p-2 rounded font-mono text-xs overflow-x-auto whitespace-nowrap text-black">
              Gini(S) = 1 − Σ pᵢ²
            </div>
          </div>

          <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
            <h5 className="font-bold mb-1">C) Gain Ratio (C4.5 Algorithm)</h5>
            <p className="text-sm mb-2">Normalizes Information Gain to prevent bias toward attributes with many distinct values.</p>
            <div className="bg-white/50 p-2 rounded font-mono text-xs overflow-x-auto whitespace-nowrap text-black">
              Gain Ratio(S, A) = IG(S, A) / Split Info(S, A)
            </div>
          </div>
        </div>
      </div>

      <div className="note-box mt-6 bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00]">
        <h4 className="font-bold mb-1">Tree Pruning</h4>
        <p className="text-sm mb-2">Overgrown trees overfit the training data. Pruning reduces tree complexity:</p>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li><strong>Pre-pruning (Early Stopping):</strong> Stop growing before it perfectly classifies training data (e.g., set max depth).</li>
          <li><strong>Post-pruning:</strong> Grow full tree, then remove subtrees that do not improve validation accuracy.</li>
        </ul>
      </div>
    </section>
  </div>
);
