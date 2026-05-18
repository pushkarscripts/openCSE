export const FeatureSelectionContent = () => (
  <div className="course-content">
    <section id="feature-selection" className="scroll-mt-24">
      <h3 className="section-heading text-xl">Feature Subset Selection</h3>
      <p className="p-text">
        Feature subset selection (FSS) is the process of identifying and selecting the most relevant subset of features from the original feature set for building a machine learning model. Unlike feature extraction (like PCA), feature selection retains the original features, making the results highly interpretable.
      </p>

      <div className="space-y-4 mt-6">
        <details open className="group border-l-4 border-[#b8925d] bg-[#f7e7bf] rounded-r-lg shadow-sm transition-all overflow-hidden">
          <summary className="p-4 cursor-pointer font-bold text-lg text-[#2b1d0f] list-none flex justify-between items-center group-open:bg-[#f3e7c2]">
            1. Filter Methods
            <span className="group-open:rotate-180 transition-transform text-sm opacity-50 text-[#2b1d0f]">▼</span>
          </summary>
          <div className="p-4 pt-0 text-[#3a2a14] bg-[#f3e7c2]/30">
            <p className="text-sm mb-3">Evaluate the relevance of features by measuring their statistical relationship with the target variable, <strong>independent of any machine learning algorithm</strong>. They are fast, scalable, and act as a pre-processing step.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Pearson Correlation:</strong> Measures linear relationship. Features with high correlation (e.g., <span className="font-mono">|r| &gt; 0.7</span>) to the target are highly relevant. Features with near zero correlation are dropped.</li>
              <li><strong>Information Gain:</strong> Measures the reduction in entropy (uncertainty) after splitting data on a feature.</li>
              <li><strong>Chi-Square Test:</strong> Tests statistical independence between a categorical feature and a categorical target.</li>
            </ul>
            <div className="mt-3 text-xs bg-white/50 p-2 rounded">
              <span className="font-bold text-red-800">Disadvantage:</span> Ignores feature interactions (how features work together).
            </div>
          </div>
        </details>

        <details className="group border-l-4 border-[#b8925d] bg-[#f7e7bf] rounded-r-lg shadow-sm transition-all overflow-hidden">
          <summary className="p-4 cursor-pointer font-bold text-lg text-[#2b1d0f] list-none flex justify-between items-center group-open:bg-[#f3e7c2]">
            2. Wrapper Methods
            <span className="group-open:rotate-180 transition-transform text-sm opacity-50 text-[#2b1d0f]">▼</span>
          </summary>
          <div className="p-4 pt-0 text-[#3a2a14] bg-[#f3e7c2]/30">
            <p className="text-sm mb-3">Use a specific machine learning algorithm as a &quot;black box&quot; to evaluate feature subsets. They search through combinations of features and use model performance (e.g., accuracy) to pick the best subset.</p>
            <div className="space-y-3">
              <div className="bg-white/40 p-2 rounded">
                <p className="font-bold text-sm">Forward Selection:</p>
                <ol className="list-decimal pl-5 text-xs space-y-1">
                  <li>Start with an empty set: <span className="font-mono">S = {"{}"}</span></li>
                  <li>For each remaining feature, train a model adding only that feature to <span className="font-mono">S</span>.</li>
                  <li>Add the feature that gives the highest accuracy improvement to <span className="font-mono">S</span>.</li>
                  <li>Repeat until performance stops improving.</li>
                </ol>
              </div>
              <div className="bg-white/40 p-2 rounded">
                <p className="font-bold text-sm">Backward Elimination:</p>
                <ol className="list-decimal pl-5 text-xs space-y-1">
                  <li>Start with all features: <span className="font-mono">S = {"{all features}"}</span></li>
                  <li>For each feature in <span className="font-mono">S</span>, train a model without that feature.</li>
                  <li>Remove the feature whose removal causes the least drop in accuracy.</li>
                  <li>Repeat until performance drops significantly.</li>
                </ol>
              </div>
            </div>
            <div className="mt-3 text-xs bg-white/50 p-2 rounded">
              <span className="font-bold text-red-800">Disadvantage:</span> Computationally expensive, especially for datasets with many features.
            </div>
          </div>
        </details>

        <details className="group border-l-4 border-[#b8925d] bg-[#f7e7bf] rounded-r-lg shadow-sm transition-all overflow-hidden">
          <summary className="p-4 cursor-pointer font-bold text-lg text-[#2b1d0f] list-none flex justify-between items-center group-open:bg-[#f3e7c2]">
            3. Embedded Methods
            <span className="group-open:rotate-180 transition-transform text-sm opacity-50 text-[#2b1d0f]">▼</span>
          </summary>
          <div className="p-4 pt-0 text-[#3a2a14] bg-[#f3e7c2]/30">
            <p className="text-sm mb-3">Perform feature selection automatically <strong>as part of the model training process</strong>. They strike a balance between the speed of filter methods and the accuracy of wrapper methods.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>LASSO (L1 Regularization):</strong> Adds a penalty to the loss function that shrinks the coefficients of irrelevant or redundant features exactly to zero, effectively eliminating them from the model.</li>
              <li><strong>Decision Trees / Random Forests:</strong> Naturally evaluate feature importance during the construction of the tree splits (using Information Gain or Gini Impurity).</li>
            </ul>
          </div>
        </details>
      </div>
    </section>
  </div>
);
