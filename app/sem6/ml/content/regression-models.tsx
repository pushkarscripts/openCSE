export const RegressionModelsContent = () => (
  <div className="course-content">
    <section id="regression-models" className="scroll-mt-24">
      <h3 className="section-heading text-xl">Regression Models</h3>
      <p className="p-text">
        Regression is a supervised learning technique used to predict a <strong>continuous numerical output variable</strong> (dependent variable, <span className="font-mono">y</span>) based on input features (independent variables, <span className="font-mono">x</span>). It establishes a mathematical function mapping inputs to the output.
      </p>

      <div className="space-y-6 mt-8">
        
        {/* Simple Linear Regression */}
        <div className="card bg-[#e6d0a7] p-5 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold text-xl border-b border-[#c7a669] pb-2 mb-3">1. Simple Linear Regression (SLR)</h4>
          <p className="text-sm mb-3">Models the relationship between exactly <strong>one</strong> independent variable and one dependent variable using a straight line.</p>
          
          <div className="bg-[#fdf5e6] p-3 rounded mb-3 font-mono text-center text-sm border border-[#c7a669] overflow-x-auto whitespace-nowrap">
            y = β₀ + β₁x + ε
          </div>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li><span className="font-semibold">y:</span> Dependent variable (target to predict)</li>
            <li><span className="font-semibold">x:</span> Independent variable (feature)</li>
            <li><span className="font-semibold">β₀:</span> Y-intercept (value of y when x = 0)</li>
            <li><span className="font-semibold">β₁:</span> Slope (how much y changes for a 1-unit change in x)</li>
            <li><span className="font-semibold">ε:</span> Error term (residuals)</li>
          </ul>
        </div>

        {/* Multiple Linear Regression */}
        <div className="card bg-[#e6d0a7] p-5 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold text-xl border-b border-[#c7a669] pb-2 mb-3">2. Multiple Linear Regression (MLR)</h4>
          <p className="text-sm mb-3">Extends simple linear regression to model the relationship between <strong>two or more</strong> independent variables and a single dependent variable.</p>
          
          <div className="bg-[#fdf5e6] p-3 rounded mb-3 font-mono text-center text-sm border border-[#c7a669] overflow-x-auto whitespace-nowrap">
            y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ε
          </div>

          <h5 className="font-bold mt-4 mb-2">Matrix Representation & OLS Estimation</h5>
          <p className="text-sm mb-2">For <span className="italic">m</span> data points with <span className="italic">n</span> features, we define <span className="font-mono">Y = Xβ + ε</span>. The Ordinary Least Squares (OLS) method minimizes the Sum of Squared Residuals to find the optimal coefficients:</p>
          <div className="bg-[#fdf5e6] p-2 rounded mb-3 font-mono text-center text-sm border border-[#c7a669] overflow-x-auto whitespace-nowrap">
            Normal Equation: β = (XᵀX)⁻¹ Xᵀ Y
          </div>

          <h5 className="font-bold mt-4 mb-2">5 Key Assumptions (LINED)</h5>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li><strong>L</strong>inearity: Relationship between x and y is linear.</li>
            <li><strong>I</strong>ndependence: Observations are independent of each other.</li>
            <li><strong>N</strong>ormality: Residuals (errors) are normally distributed.</li>
            <li><strong>E</strong>qual Variance (Homoscedasticity): Residuals have constant variance.</li>
            <li>No <strong>D</strong>ependency (No Multicollinearity): Independent variables are not highly correlated.</li>
          </ul>
        </div>

        {/* Polynomial Regression */}
        <div className="card bg-[#e6d0a7] p-5 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold text-xl border-b border-[#c7a669] pb-2 mb-3">3. Polynomial Regression</h4>
          <p className="text-sm mb-3">Linear regression fails when the true relationship is non-linear (curved). Polynomial regression extends MLR by adding polynomial (higher-power) features to fit these non-linear patterns.</p>
          
          <div className="bg-[#fdf5e6] p-3 rounded mb-3 font-mono text-center text-sm border border-[#c7a669] overflow-x-auto whitespace-nowrap">
            y = β₀ + β₁x + β₂x² + β₃x³ + ... + βₙxⁿ + ε
          </div>
          
          <p className="text-sm mb-3">
            <strong>Key Insight:</strong> Although the curve is non-linear with respect to <span className="font-mono">x</span>, the model is still considered <em>linear in its parameters (β)</em>. Therefore, we can substitute <span className="font-mono">z₁=x, z₂=x²</span> and solve it exactly like Multiple Linear Regression!
          </p>

          <h5 className="font-bold mt-4 mb-2 text-red-800">The Overfitting Danger</h5>
          <p className="text-sm mb-2">Choosing the correct polynomial degree is a classic <strong>Bias-Variance Tradeoff</strong>:</p>
          <ul className="list-disc pl-5 text-sm space-y-1 mb-3">
            <li><strong>Low degree (e.g., n=1):</strong> High Bias (Underfitting) - model is too simple.</li>
            <li><strong>Optimal degree:</strong> Captures the true underlying pattern.</li>
            <li><strong>High degree (e.g., n=15):</strong> High Variance (Overfitting) - model fits the noise perfectly but fails on new data.</li>
          </ul>
          <p className="text-sm font-semibold">Solutions to Overfitting: Use Regularization (Ridge/LASSO) or Cross-Validation.</p>
        </div>

      </div>
    </section>
  </div>
);
