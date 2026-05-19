export const EnsembleLearningContent = () => (
  <div className="course-content">
    <section id="ensemble" className="scroll-mt-24">
      <h3 className="section-heading text-xl">1. Ensemble Learning</h3>
      <p className="p-text mb-4">
        Ensemble learning is a paradigm where multiple models (weak learners) are trained and their predictions are combined to produce a final, more accurate and robust prediction. It is based on the <strong>wisdom of crowds</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold mb-2">A. Bagging (Bootstrap Aggregating)</h4>
          <p className="text-sm mb-2">
            Models are trained <strong>in parallel</strong> on random subsets (with replacement) of the training data. The final prediction is made by averaging (Regression) or majority voting (Classification).
          </p>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Objective:</strong> Reduce Variance (Overfitting).</li>
            <li><strong>Example:</strong> Random Forest.</li>
            <li><strong>OOB Error:</strong> The ~36.8% of data left out of a bootstrap sample can be used to estimate validation error natively.</li>
          </ul>
        </div>
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold mb-2">B. Boosting</h4>
          <p className="text-sm mb-2">
            Models are trained <strong>sequentially</strong>. Each new model focuses on correcting the errors made by the previous models by assigning higher weights to misclassified instances.
          </p>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Objective:</strong> Reduce Bias (Underfitting).</li>
            <li><strong>Example:</strong> AdaBoost, Gradient Boosting (XGBoost).</li>
          </ul>
        </div>
      </div>

      <h4 className="font-bold text-lg text-[#fccc7e] mb-2">2. Randomization in ML</h4>
      <p className="p-text text-sm mb-4">
        Randomization introduces diversity among base learners. If all models make the same errors, the ensemble fails. 
        <strong>Random Forest</strong> uses Data Randomization (Bootstrap) AND Algorithmic Randomization (random feature subset at each node split). 
        <strong>ExtraTrees</strong> takes this further by also picking random split thresholds.
      </p>

      <details className="bg-[#fdf5e6] p-4 rounded-lg border border-[#c7a669] my-6 cursor-pointer group">
        <summary className="font-bold text-[#2b1d0f] outline-none hover:text-[#8b5a2b] transition-colors">
          Deep Dive: AdaBoost (Adaptive Boosting) Algorithm
        </summary>
        <div className="mt-4 text-[#2b1d0f] text-sm space-y-3">
          <p>AdaBoost trains a sequence of weak learners. Misclassified instances receive exponentially higher weights in the next round.</p>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Initialize weights:</strong> wᵢ = 1/N for all N instances.</li>
            <li><strong>For t = 1 to T:</strong>
              <ul className="list-disc pl-5 mt-1">
                <li>Train weak learner hₜ on weighted data.</li>
                <li>Calculate weighted error (eₜ).</li>
                <li>Calculate learner weight (αₜ):
                  <div className="bg-black/10 p-2 rounded font-mono text-xs overflow-x-auto whitespace-nowrap mt-1 mb-1">
                    αₜ = 0.5 × ln((1 - eₜ) / eₜ)
                  </div>
                </li>
                <li>Update sample weights: Increase if misclassified, decrease if correct.</li>
              </ul>
            </li>
            <li><strong>Final Prediction:</strong> Weighted vote of all T learners.</li>
          </ol>
        </div>
      </details>

      <details className="bg-[#fdf5e6] p-4 rounded-lg border border-[#c7a669] my-6 cursor-pointer group">
        <summary className="font-bold text-[#2b1d0f] outline-none hover:text-[#8b5a2b] transition-colors">
          Deep Dive: Gradient Boosting
        </summary>
        <div className="mt-4 text-[#2b1d0f] text-sm space-y-3">
          <p>Instead of sample weights, Gradient Boosting fits each new model to the <strong>RESIDUAL ERRORS</strong> (actual - predicted) of the current ensemble.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Step 1:</strong> Initialize with a constant (e.g., mean).</li>
            <li><strong>Step 2:</strong> Compute residuals (negative gradient of loss function).</li>
            <li><strong>Step 3:</strong> Fit a new shallow tree to predict these residuals.</li>
            <li><strong>Step 4:</strong> Update ensemble: <span className="font-mono text-xs bg-black/10 px-1">new_pred = old_pred + (learning_rate × new_tree)</span></li>
          </ul>
          <p className="mt-2 font-bold text-xs">Popular Implementations: XGBoost (Regularization, fast), LightGBM (Leaf-wise growth), CatBoost (Categorical features).</p>
        </div>
      </details>
    </section>
  </div>
);
