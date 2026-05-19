export const LogisticRegressionContent = () => (
  <div className="course-content">
    <section id="logistic-regression" className="scroll-mt-24">
      <h3 className="section-heading text-xl">2. Logistic Regression</h3>
      <p className="p-text">
        Logistic Regression is a statistical method used for binary classification despite its name containing "regression". It models the probability that an input belongs to a particular class using the logistic (sigmoid) function.
      </p>

      <div className="mt-6">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-2">The Sigmoid Function</h4>
        <p className="p-text mb-2">
          The sigmoid function maps any real-valued number into a value between 0 and 1:
        </p>
        <div className="bg-white/10 p-4 rounded-lg font-mono text-center overflow-x-auto whitespace-nowrap text-[#fdf5e6]">
          σ(z) = 1 / (1 + e⁻ᶻ)
        </div>
        <p className="p-text mt-2 text-sm">
          Where <span className="font-mono">z = w₀ + w₁x₁ + w₂x₂ + ... + wₙxₙ</span> (the linear combination of features).
        </p>
      </div>

      <div className="mt-6">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-2">Decision Boundary</h4>
        <p className="p-text mb-2">
          Logistic regression outputs a probability <span className="font-mono">P(y=1|x)</span>. A threshold (usually 0.5) is applied:
        </p>
        <ul className="list-disc pl-5 space-y-1 p-text text-sm">
          <li>If <span className="font-mono">P(y=1|x) ≥ 0.5</span> → Predict class 1</li>
          <li>If <span className="font-mono">P(y=1|x) &lt; 0.5</span> → Predict class 0</li>
        </ul>
      </div>

      <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f] my-6">
        <h4 className="font-bold text-lg mb-2">Cost Function & Training</h4>
        <p className="text-sm mb-2">
          The cost function used is <strong>Log Loss (Binary Cross-Entropy)</strong>:
        </p>
        <div className="bg-white/50 p-3 rounded font-mono text-xs overflow-x-auto whitespace-nowrap mb-3 text-black">
          J(w) = −(1/m) Σ [y·log(ŷ) + (1−y)·log(1−ŷ)]
        </div>
        <p className="text-sm mb-2">
          Weights are updated using gradient descent to minimize the cost function:
        </p>
        <div className="bg-white/50 p-3 rounded font-mono text-xs overflow-x-auto whitespace-nowrap text-black mb-3">
          wⱼ = wⱼ − α · (∂J/∂wⱼ)
        </div>
        <h5 className="font-bold text-sm mt-4 mb-2">Gradient Descent Algorithm Steps:</h5>
        <ol className="list-decimal pl-5 text-sm space-y-2">
          <li><strong>Initialize weights:</strong> Start with random weights or zeros for <span className="font-mono">w</span> and bias <span className="font-mono">b</span>.</li>
          <li><strong>Forward Pass:</strong> Compute the linear combination <span className="font-mono">z = w·x + b</span> and pass it through the sigmoid function to get predictions <span className="font-mono">ŷ</span>.</li>
          <li><strong>Compute Cost:</strong> Calculate the Log Loss <span className="font-mono">J(w)</span> to see how far off predictions are from actual labels.</li>
          <li><strong>Backward Pass (Gradients):</strong> Compute the partial derivatives of the cost function with respect to each weight: <span className="font-mono bg-white/50 p-1 rounded">∂J/∂wⱼ = (1/m) Σ (ŷ - y)·xⱼ</span>.</li>
          <li><strong>Update Weights:</strong> Adjust the weights in the opposite direction of the gradient: <span className="font-mono">wⱼ = wⱼ - α(∂J/∂wⱼ)</span>, where α is the learning rate.</li>
          <li><strong>Repeat:</strong> Iterate steps 2-5 until convergence (cost stops decreasing).</li>
        </ol>
      </div>

      <div className="note-box mt-4 bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00]">
        <h4 className="font-bold mb-1">Multinomial Logistic Regression</h4>
        <p className="text-sm">
          For multi-class classification (more than 2 classes), the <strong>softmax function</strong> is used instead of sigmoid:
        </p>
        <div className="bg-white/50 p-2 rounded font-mono text-xs mt-2 overflow-x-auto whitespace-nowrap">
          P(y=k|x) = e^(wₖᵀx) / Σⱼ e^(wⱼᵀx)
        </div>
      </div>
    </section>
  </div>
);
