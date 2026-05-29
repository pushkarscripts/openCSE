export const IntroUnsupervisedContent = () => (
  <div className="course-content">
    <section id="intro-unsupervised" className="scroll-mt-24">
      <h3 className="section-heading text-xl">1. Introduction to Unsupervised Learning</h3>
      <p className="p-text">
        Unsupervised Learning is a type of machine learning where the algorithm learns patterns from <strong>UNLABELED</strong> data. There is no target variable (y) to predict; the algorithm must discover the hidden structure, patterns, or groupings on its own.
      </p>

      <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f] my-6">
        <h4 className="font-bold text-lg mb-2">What is Clustering?</h4>
        <p className="text-sm">
          Clustering is the task of grouping a set of data points such that points in the same group (cluster) are <strong>MORE SIMILAR</strong> to each other than to points in other groups.
        </p>
        <h5 className="font-bold text-sm mt-3 mb-2">Real-World Examples:</h5>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li><strong>Customer Segmentation:</strong> Group customers by purchasing behavior for targeted marketing.</li>
          <li><strong>Document Clustering:</strong> Group news articles by topic for search engines.</li>
          <li><strong>Image Segmentation:</strong> Group pixels by color/texture for object detection.</li>
          <li><strong>Anomaly Detection:</strong> Points NOT in any cluster are anomalies (e.g., fraud).</li>
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-2">Distance Measures</h4>
        <p className="p-text text-sm mb-3">
          Clustering algorithms measure how close data points are using distance metrics:
        </p>
        <div className="space-y-4">
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6] mb-1">Euclidean Distance (L2)</h5>
            <p className="text-sm text-[#fdf5e6]/80 mb-2">Straight-line distance. Used in K-Means.</p>
            <div className="bg-black/30 p-2 rounded font-mono text-xs overflow-x-auto whitespace-nowrap text-[#fdf5e6]">
              d(x, y) = √[ Σ(xᵢ - yᵢ)² ]
            </div>
          </div>
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6] mb-1">Manhattan Distance (L1)</h5>
            <p className="text-sm text-[#fdf5e6]/80 mb-2">Grid-like path distance. Better for high-dimensional data.</p>
            <div className="bg-black/30 p-2 rounded font-mono text-xs overflow-x-auto whitespace-nowrap text-[#fdf5e6]">
              d(x, y) = Σ |xᵢ - yᵢ|
            </div>
          </div>
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6] mb-1">Cosine Similarity</h5>
            <p className="text-sm text-[#fdf5e6]/80 mb-2">Measures the angle between vectors. Great for text/document clustering.</p>
            <div className="bg-black/30 p-2 rounded font-mono text-xs overflow-x-auto whitespace-nowrap text-[#fdf5e6]">
              cos(θ) = (A · B) / (||A|| × ||B||)
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
