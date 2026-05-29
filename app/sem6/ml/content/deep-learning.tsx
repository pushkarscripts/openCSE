export const DeepLearningContent = () => (
  <div className="course-content">
    <section id="deep-learning" className="scroll-mt-24">
      <h3 className="section-heading text-xl">1. Deep Learning Fundamentals</h3>
      <p className="p-text mb-4">
        Deep Learning is a subset of ML based on Artificial Neural Networks (ANNs). It is designed to simulate the way the human brain processes information.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold mb-2">The Perceptron</h4>
          <p className="text-sm mb-2">The fundamental building block. It takes multiple inputs, multiplies them by weights, adds a bias, and passes the sum through an activation function.</p>
          <div className="bg-black/10 p-2 rounded font-mono text-xs overflow-x-auto whitespace-nowrap text-black text-center">
            y = f( Σ (wᵢxᵢ) + b )
          </div>
        </div>
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold mb-2">Multi-Layer Perceptron (MLP)</h4>
          <p className="text-sm mb-2">A stack of perceptrons forming layers: an <strong>Input Layer</strong>, one or more hidden layers, and an <strong>Output Layer</strong>.</p>
        </div>
      </div>

      <details className="bg-[#fdf5e6] p-4 rounded-lg border border-[#c7a669] my-4 cursor-pointer group">
        <summary className="font-bold text-[#2b1d0f] outline-none hover:text-[#8b5a2b] transition-colors">
          Deep Dive: Activation Functions
        </summary>
        <div className="mt-4 text-[#2b1d0f] text-sm overflow-x-auto">
          <p className="mb-2">Activation functions introduce non-linearity, allowing the network to learn complex patterns.</p>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#c7a669]">
                <th className="p-2">Function</th>
                <th className="p-2">Formula</th>
                <th className="p-2">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#c7a669]/30">
                <td className="p-2 font-bold">Sigmoid</td>
                <td className="p-2 font-mono text-xs bg-black/10 px-1 rounded">1 / (1 + e⁻ˣ)</td>
                <td className="p-2">Binary classification output. Maps to (0, 1).</td>
              </tr>
              <tr className="border-b border-[#c7a669]/30">
                <td className="p-2 font-bold">ReLU</td>
                <td className="p-2 font-mono text-xs bg-black/10 px-1 rounded">max(0, x)</td>
                <td className="p-2">Hidden layers. Solves vanishing gradient.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">Softmax</td>
                <td className="p-2 font-mono text-xs bg-black/10 px-1 rounded">eˣⁱ / Σ eˣʲ</td>
                <td className="p-2">Multi-class classification output (probabilities sum to 1).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>

      <div className="note-box bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00] my-6">
        <h4 className="font-bold mb-1">Training: Forward & Backpropagation</h4>
        <ul className="list-decimal pl-5 text-sm space-y-1 mt-2">
          <li><strong>Forward Pass:</strong> Data flows from input to output, generating a prediction.</li>
          <li><strong>Loss Calculation:</strong> Compare prediction to actual target (e.g., Cross-Entropy, MSE).</li>
          <li><strong>Backward Pass (Backprop):</strong> Uses the Calculus Chain Rule to calculate the gradient of the loss with respect to every weight in the network.</li>
          <li><strong>Gradient Descent:</strong> Update weights by stepping in the opposite direction of the gradient.</li>
        </ul>
      </div>
    </section>
  </div>
);
