export const MulticollinearityContent = () => (
  <div className="course-content">
    <section id="multicollinearity" className="scroll-mt-24">
      <h3 className="section-heading text-xl">Multicollinearity & VIF</h3>
      <p className="p-text">
        In Multiple Linear Regression, <strong>Multicollinearity</strong> occurs when two or more independent variables are highly correlated with each other. This makes it difficult to determine the individual effect of each feature.
      </p>
      
      <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f] my-6">
        <h4 className="font-bold text-lg mb-2">Example: High Correlation</h4>
        <p className="text-sm mb-3">Suppose we are predicting health outcomes using <strong>Height</strong> and <strong>Leg Length</strong>. These two features are naturally very highly correlated (r ≈ 0.95).</p>
        <div className="bg-white/50 p-3 rounded mb-3 overflow-x-auto">
          <table className="min-w-full text-xs font-mono text-center">
            <thead>
              <tr className="border-b border-[#c7a669]">
                <th className="p-1">Feature</th>
                <th className="p-1">Height</th>
                <th className="p-1">Leg Length</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#c7a669]/30">
                <td className="p-1 font-bold">Height</td>
                <td className="p-1 bg-red-100">1.00</td>
                <td className="p-1 bg-red-200">0.98</td>
              </tr>
              <tr>
                <td className="p-1 font-bold">Leg Length</td>
                <td className="p-1 bg-red-200">0.98</td>
                <td className="p-1 bg-red-100">1.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm">In this scenario, the model cannot distinguish between the impact of Height vs. Leg Length.</p>
      </div>

      <div className="note-box mt-4 bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00]">
        <h4 className="font-bold mb-1">Detection: Variance Inflation Factor (VIF)</h4>
        <p className="text-sm">VIF measures how much the variance of an estimated regression coefficient increases when predictors are correlated. To calculate VIF for feature <span className="font-mono">Xⱼ</span>:</p>
        <ol className="list-decimal pl-5 text-sm my-2">
          <li>Run a regression of <span className="font-mono">Xⱼ</span> against all other predictors (<span className="font-mono">X₁, X₂, ..., Xⱼ₋₁, Xⱼ₊₁, ...</span>).</li>
          <li>Find the <span className="font-mono">R²</span> value for that specific regression (<span className="font-mono">R²ⱼ</span>).</li>
          <li>Calculate: <span className="font-mono bg-white/50 p-1 rounded">VIFⱼ = 1 / (1 - R²ⱼ)</span></li>
        </ol>
        <p className="text-sm mt-2 text-red-800 font-semibold">Rule of thumb: VIF &gt; 5 or 10 indicates severe multicollinearity.</p>
      </div>

      <div className="mt-6">
        <h4 className="font-bold text-xl mb-2 text-[#fccc7e]">Solutions:</h4>
        <ul className="list-disc pl-5 space-y-2 p-text">
          <li>Remove one of the highly correlated variables.</li>
          <li>Use PCA to combine correlated features into uncorrelated principal components.</li>
          <li>Use Regularization techniques like Ridge Regression (L2) or LASSO (L1).</li>
        </ul>
      </div>
    </section>
  </div>
);
