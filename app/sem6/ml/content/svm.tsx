export const SvmContent = () => (
  <div className="course-content">
    <section id="svm" className="scroll-mt-24">
      <h3 className="section-heading text-xl">6. Support Vector Machine (SVM)</h3>
      <p className="p-text">
        Support Vector Machine (SVM) is a powerful supervised learning algorithm. It finds the optimal hyperplane that best separates data points of different classes by maximizing the margin between them.
      </p>

      <div className="mt-6">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-4">Key Terminology</h4>
        <div className="space-y-3 text-sm p-text">
          <p><strong>Hyperplane:</strong> A decision boundary that separates different classes. In 2D it's a line, in 3D it's a plane. Equation: <span className="font-mono bg-white/10 p-1 rounded">w·x + b = 0</span>.</p>
          <p><strong>Support Vectors:</strong> Training data points closest to the hyperplane. If removed, the hyperplane would change. The margin is entirely determined by them.</p>
          <p><strong>Margin:</strong> The perpendicular distance between the hyperplane and the nearest data points from each class. SVM maximizes this. <span className="font-mono bg-white/10 p-1 rounded">Margin = 2 / ||w||</span>.</p>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-4">SVM Scenarios</h4>
        <div className="grid grid-cols-1 gap-4">
          <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
            <h5 className="font-bold mb-1">1. Hard Margin SVM (Linearly Separable)</h5>
            <p className="text-sm mb-2">Works only when data can be perfectly separated. It maximizes the margin with no misclassifications allowed.</p>
            <div className="bg-white/50 p-2 rounded font-mono text-[11px] overflow-x-auto whitespace-nowrap text-black">
              Maximize: 2 / ||w||<br/>
              Subject to: yᵢ(w·xᵢ + b) ≥ 1
            </div>
          </div>
          
          <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
            <h5 className="font-bold mb-1">2. Soft Margin / C-SVM (Non-Separable/Noisy)</h5>
            <p className="text-sm mb-2">Allows some misclassification to handle overlapping classes. Introduces slack variables ξᵢ.</p>
            <div className="bg-white/50 p-2 rounded font-mono text-[11px] overflow-x-auto whitespace-nowrap text-black mb-2">
              Minimize: (1/2)||w||² + C * Σξᵢ<br/>
              Subject to: yᵢ(w·xᵢ + b) ≥ 1 − ξᵢ
            </div>
            <p className="text-xs text-[#4a3619]">High C = fewer violations (risk overfitting), Low C = more violations (wider margin).</p>
          </div>

          <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
            <h5 className="font-bold mb-1">3. Kernel SVM (Non-Linearly Separable)</h5>
            <p className="text-sm mb-2">Uses the <strong>Kernel Trick</strong> to map data into a higher-dimensional space. Formulas:</p>
            <ul className="list-none pl-0 text-[11px] space-y-1 font-mono bg-white/50 p-2 rounded text-black overflow-x-auto whitespace-nowrap">
              <li>Polynomial: K(x,y) = (xᵀy + c)ᵈ</li>
              <li>RBF (Gaussian): K(x,y) = exp(−γ||x−y||²)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="note-box mt-6 bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00]">
        <h4 className="font-bold mb-1">Multi-class Classification</h4>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li><strong>One-vs-One (OvO):</strong> Train a binary SVM for every pair of classes. (K(K−1)/2 classifiers). Predict by majority vote.</li>
          <li><strong>One-vs-Rest (OvR):</strong> Train one SVM per class against all others. Predict using maximum decision score.</li>
        </ul>
      </div>
    </section>
  </div>
);
