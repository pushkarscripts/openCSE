export const PCADeepDiveContent = () => (
  <div className="course-content">
    <section id="pca-deep-dive" className="scroll-mt-24">
      <h3 className="section-heading text-xl">PCA: Deep Dive</h3>
      <p className="p-text">
        Principal Component Analysis (PCA) is a critical technique for reducing dimensions while preserving data variance. It identifies the directions (principal components) of maximum variance in the data.
      </p>

      <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f] my-6">
        <h4 className="font-bold text-lg mb-2">Step-by-Step Algorithm</h4>
        <ol className="list-decimal pl-5 space-y-2 text-sm">
          <li><strong>Standardization:</strong> Scale the data so each feature has mean=0 and variance=1. This ensures that features with larger ranges don&apos;t dominate the variance.</li>
          <li><strong>Covariance Matrix:</strong> Calculate how each feature varies with every other feature.</li>
          <li><strong>Eigen-Decomposition:</strong> Compute <em>Eigenvalues</em> (magnitude of variance) and <em>Eigenvectors</em> (directions of variance).</li>
          <li><strong>Sorting:</strong> Rank the eigenvectors by their corresponding eigenvalues in descending order. The first eigenvector is the &quot;Principal Component 1&quot; (PC1).</li>
          <li><strong>Projection:</strong> Multiply the original data by the top k eigenvectors to transform it into the new k-dimensional space.</li>
        </ol>
      </div>

      <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f] my-6">
        <h4 className="font-bold text-lg mb-2">The Scree Plot & Cumulative Variance</h4>
        <p className="text-sm mb-3">
          How many components should we keep? We use a <strong>Scree Plot</strong>, which plots eigenvalues (y-axis) against component numbers (x-axis).
        </p>
        <div className="bg-white/50 p-3 rounded mb-3 text-xs font-mono overflow-x-auto whitespace-nowrap">
          PC1: 75% variance, PC2: 15% variance, PC3: 5% variance ...
        </div>
        <p className="text-sm">
          We look for the &quot;elbow&quot; in the plot where the variance drop levels off. Typically, we aim to retain enough components to explain <strong>90-95%</strong> of the total variance.
        </p>
      </div>

      <p className="p-text">
        Below is a simplified worked example of how PCA reduces 2D data to 1D.
      </p>
      <div className="example-box my-4 bg-[#fdf5e6] p-4 rounded-lg shadow-sm border border-[#c7a669]">
        <h4 className="font-bold border-b border-[#c7a669] pb-1 mb-2">Mathematical Example: 2D to 1D</h4>
        <p className="text-sm mb-2"><strong>Original Data (Height, Weight):</strong> [170, 65], [175, 70], [160, 55], [180, 80], [165, 60]</p>
        <ul className="list-decimal pl-5 text-sm space-y-2">
          <li><strong>Standardize (Mean Center):</strong> Height mean = 170, Weight mean = 66. Centered data: [0,−1], [5,4], [−10,−11], [10,14], [−5,−6].</li>
          <li><strong>Covariance Matrix:</strong> Cov(H,H)=62.5, Cov(W,W)=107.5, Cov(H,W)=81.25.</li>
          <li><strong>Eigenvalues:</strong> λ1=161.8 (PC1), λ2=8.2 (PC2).</li>
          <li><strong>Variance Captured:</strong> PC1 captures 161.8 / (161.8 + 8.2) = <strong>95.2% variance</strong>!</li>
        </ul>
        <p className="text-sm mt-2 text-green-800 font-semibold">Conclusion: We can reduce from 2D to 1D and still retain 95.2% of the information.</p>
      </div>
    </section>
  </div>
);
