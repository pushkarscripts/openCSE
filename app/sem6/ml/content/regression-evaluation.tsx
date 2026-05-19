export const RegressionEvaluationContent = () => (
  <div className="course-content">
    <section id="regression-evaluation" className="scroll-mt-24">
      <h3 className="section-heading text-xl">Model Evaluation Metrics</h3>
      <p className="p-text">
        How do we know if our regression model is performing well? We use evaluation metrics that calculate the error between predicted values (<span className="font-mono">ŷ</span>) and actual values (<span className="font-mono">y</span>).
      </p>
      <div className="space-y-3 mt-4">
        <div className="p-3 bg-[#f7e7bf] rounded border-l-4 border-[#b8925d]">
          <p className="font-bold text-[#1b0d00]">Mean Absolute Error (MAE)</p>
          <p className="text-sm font-mono my-1 text-black">MAE = (1/n) * Σ|yi - ŷi|</p>
          <p className="text-sm text-[#4a3619]">Calculates the average absolute distance between predictions and actual values. It is more robust to outliers than MSE.</p>
        </div>
        <div className="p-3 bg-[#f7e7bf] rounded border-l-4 border-[#b8925d]">
          <p className="font-bold text-[#1b0d00]">Mean Squared Error (MSE)</p>
          <p className="text-sm font-mono my-1 text-black">MSE = (1/n) * Σ(yi - ŷi)²</p>
          <p className="text-sm text-[#4a3619]">Penalizes larger errors more heavily by squaring the difference.</p>
        </div>
        <div className="p-3 bg-[#f7e7bf] rounded border-l-4 border-[#b8925d]">
          <p className="font-bold text-[#1b0d00]">Root Mean Squared Error (RMSE)</p>
          <p className="text-sm font-mono my-1 text-black">RMSE = √MSE</p>
          <p className="text-sm text-[#4a3619]">Brings the error metric back to the original units of the target variable.</p>
        </div>
        <div className="p-3 bg-[#f7e7bf] rounded border-l-4 border-[#b8925d]">
          <p className="font-bold text-[#1b0d00]">R-Squared (Coefficient of Determination)</p>
          <p className="text-sm font-mono my-1 text-black overflow-x-auto whitespace-nowrap">R² = 1 - (SSR / SST)</p>
          <p className="text-sm text-[#4a3619]">Ranges from 0 to 1. Measures the proportion of variance in the target variable explained by the model.</p>
        </div>
        <div className="p-3 bg-[#f7e7bf] rounded border-l-4 border-[#b8925d]">
          <p className="font-bold text-[#1b0d00]">Adjusted R-Squared</p>
          <p className="text-sm font-mono my-1 text-black overflow-x-auto whitespace-nowrap">Adj R² = 1 - [(1 - R²) * (n - 1) / (n - k - 1)]</p>
          <p className="text-sm text-[#4a3619]">
            Unlike R², Adjusted R² only increases if a new feature improves the model more than would be expected by chance. 
            <em> (n = sample size, k = number of predictors)</em>
          </p>
        </div>
      </div>
    </section>
  </div>
);
