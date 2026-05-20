export const AnomalyDetectionContent = () => (
  <div className="course-content">
    <section id="anomaly-detection" className="scroll-mt-24">
      <h3 className="section-heading text-xl">6. Anomaly Detection Algorithm</h3>
      <p className="p-text">
        Anomaly Detection (or Outlier Detection) is the process of identifying data points or events that deviate significantly from the expected pattern or normal behavior.
      </p>

      <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f] my-6">
        <h4 className="font-bold text-lg mb-2">Types of Anomalies</h4>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li><strong>Point Anomalies:</strong> A single instance is anomalous relative to the rest of the data (e.g., a huge credit card purchase).</li>
          <li><strong>Contextual Anomalies:</strong> Normal under some contexts but anomalous in others (e.g., buying a snow shovel in July).</li>
          <li><strong>Collective Anomalies:</strong> A collection of related data instances is anomalous, even if individual points are not (e.g., rapid sequential login attempts).</li>
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-4">Detection Approaches</h4>
        
        <div className="space-y-4">
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6] mb-1">1. Statistical Methods (Z-Score)</h5>
            <p className="text-sm text-[#fdf5e6]/80 mb-2">Assumes normal data follows a Gaussian distribution.</p>
            <div className="bg-black/30 p-2 rounded font-mono text-xs overflow-x-auto whitespace-nowrap text-[#fdf5e6]">
              Z = |(x - μ) / σ|
            </div>
            <p className="text-xs text-[#c7a669] mt-1">If Z &gt; 3, the point is flagged as an anomaly.</p>
          </div>

          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6] mb-1">2. Density-Based (DBSCAN)</h5>
            <p className="text-sm text-[#fdf5e6]/80 mb-2">Groups dense regions into clusters. Points are classified as Core, Border, or Noise.</p>
            <p className="text-xs text-[#c7a669] mt-1 italic">Noise points (not within ε-radius of any core point) are anomalies.</p>
          </div>

          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6] mb-1">3. Distance-Based (LOF - Local Outlier Factor)</h5>
            <p className="text-sm text-[#fdf5e6]/80">Compares the local density of a point to the local densities of its neighbors. A point with a much lower density than its neighbors is an anomaly.</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-2">Machine Learning Approach: Isolation Forest</h4>
        <p className="p-text text-sm mb-3">
          Isolation Forest is specifically designed for anomaly detection. It isolates anomalies rather than profiling normal points.
        </p>
        <ol className="list-decimal pl-5 space-y-1 p-text text-sm mb-4">
          <li>Build multiple random decision trees (isolation trees).</li>
          <li>At each node, randomly select a feature and a random split value between the min and max.</li>
          <li>Repeat until each point is isolated in its own leaf node.</li>
        </ol>
        <div className="note-box bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00]">
          <h5 className="font-bold mb-1">The Core Logic</h5>
          <p className="text-sm">
            Because anomalies are rare and different, they require <strong>fewer splits</strong> to be isolated. Therefore, points with a <strong>shorter path length</strong> from the root to the leaf are scored as anomalies.
          </p>
        </div>
      </div>
    </section>
  </div>
);
