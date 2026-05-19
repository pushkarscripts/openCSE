export const KnnContent = () => (
  <div className="course-content">
    <section id="knn" className="scroll-mt-24">
      <h3 className="section-heading text-xl">3. K-Nearest Neighbour (KNN) Algorithm</h3>
      <p className="p-text">
        KNN is a non-parametric, instance-based, lazy learning algorithm. It does not build an explicit model during training; instead, it memorizes the training dataset and makes predictions at test time by looking at the K closest data points.
      </p>

      <div className="mt-6">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-2">Working of KNN</h4>
        <ol className="list-decimal pl-5 space-y-2 p-text text-sm">
          <li>Load the training data and choose the value of <strong>K</strong>.</li>
          <li>For a new test point, calculate the distance to all training points using a distance metric (e.g., Euclidean).</li>
          <li>Select the K nearest neighbours (smallest distances).</li>
          <li><strong>For classification:</strong> assign the class that appears most frequently among the K neighbours (majority voting).</li>
          <li><strong>For regression:</strong> compute the mean/average of K neighbours' target values.</li>
        </ol>
      </div>

      <div className="mt-6">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-2">Distance Metrics</h4>
        <p className="p-text text-sm mb-3">
          To find the "nearest" neighbours, the algorithm relies on distance calculations. The two most common metrics are:
        </p>
        <div className="space-y-4">
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6] mb-1">1. Euclidean Distance (L2 Norm)</h5>
            <p className="text-sm text-[#fdf5e6]/80 mb-2">The straight-line distance between two points. Best for continuous real-valued features.</p>
            <div className="bg-black/30 p-2 rounded font-mono text-xs overflow-x-auto whitespace-nowrap text-[#fdf5e6]">
              d(x, y) = √[ Σ(xᵢ - yᵢ)² ]
            </div>
          </div>
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6] mb-1">2. Manhattan Distance (L1 Norm)</h5>
            <p className="text-sm text-[#fdf5e6]/80 mb-2">The distance between two points measured along axes at right angles (like a taxi navigating city blocks). Best for high-dimensional or categorical data.</p>
            <div className="bg-black/30 p-2 rounded font-mono text-xs overflow-x-auto whitespace-nowrap text-[#fdf5e6]">
              d(x, y) = Σ |xᵢ - yᵢ|
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f] my-6">
        <h4 className="font-bold text-lg mb-2">Choosing the Value of K</h4>
        <p className="text-sm mb-3">
          The choice of K is critical and has a significant impact on model performance:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm mb-4">
          <li><strong>Small K (e.g., K=1):</strong> Model is very sensitive to noise (overfitting). High variance.</li>
          <li><strong>Large K:</strong> Model is too smooth and may miss local patterns (underfitting). High bias.</li>
        </ul>
        <div className="bg-white/50 p-3 rounded text-xs border-l-4 border-blue-500 text-black">
          <p className="font-bold">Best Practices:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Rule of thumb: <span className="font-mono">K = √N</span> where N is the number of training samples.</li>
            <li>Use cross-validation to select the optimal K.</li>
            <li>Choose an odd K for binary classification to avoid ties in majority voting.</li>
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-2">Validation Error in KNN</h4>
        <p className="p-text text-sm mb-2">
          Validation error measures how well the model generalizes to unseen data. As K increases:
        </p>
        <ul className="list-disc pl-5 space-y-1 p-text text-sm">
          <li><strong>Training error</strong> increases (model becomes less flexible).</li>
          <li><strong>Validation error</strong> first decreases (underfitting reduced), then increases (bias increases).</li>
          <li>Optimal K is at the point where validation error is minimum (the U-shaped curve).</li>
        </ul>
      </div>

      <div className="note-box mt-4 bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00]">
        <h4 className="font-bold mb-1">Inductive Bias in KNN</h4>
        <p className="text-sm">
          Inductive bias refers to the assumptions a learning algorithm uses to generalize beyond the training data. For KNN, the inductive bias is: <strong>"similar inputs have similar outputs"</strong> — i.e., nearby points in feature space are likely to belong to the same class.
        </p>
      </div>
    </section>
  </div>
);
