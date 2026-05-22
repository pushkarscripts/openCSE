export const KMedoidsContent = () => (
  <div className="course-content">
    <section id="kmedoids" className="scroll-mt-24">
      <h3 className="section-heading text-xl">3. K-Medoids Clustering</h3>
      <p className="p-text">
        K-Medoids (also known as PAM — Partitioning Around Medoids) is a clustering algorithm similar to K-Means. However, instead of computing the mathematical mean as the cluster center, it uses an <strong>ACTUAL DATA POINT</strong> from the dataset as the center, known as a medoid.
      </p>

      <div className="mt-6">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-2">The PAM Algorithm</h4>
        <ol className="list-decimal pl-5 space-y-2 p-text text-sm">
          <li><strong>INITIALIZATION:</strong> Randomly select <span className="font-mono text-white">k</span> actual data points as initial medoids: m₁, m₂, ..., mₖ</li>
          <li><strong>ASSIGNMENT:</strong> Assign each data point to the nearest medoid based on a distance metric (e.g., Manhattan distance).</li>
          <li><strong>SWAP STEP:</strong> For each medoid mᵢ and each non-medoid point xⱼ:
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Compute the total cost (sum of distances) of <strong>swapping</strong> mᵢ with xⱼ.</li>
              <li>If the new total cost is less than the current cost, perform the swap (xⱼ becomes the new medoid).</li>
            </ul>
          </li>
          <li><strong>CONVERGENCE:</strong> Repeat Steps 2 and 3 until no swap reduces the total cost.</li>
        </ol>
      </div>

      <div className="example-box my-8 bg-[#fdf5e6] p-4 rounded-lg shadow-sm border border-[#c7a669]">
        <h4 className="font-bold border-b border-[#c7a669] pb-1 mb-2 text-[#2b1d0f]">Worked Example (k=2)</h4>
        <p className="text-sm mb-2 text-[#2b1d0f]">
          <strong>Dataset:</strong> 1D points &#123;1, 2, 4, 5, 6, 7&#125;
        </p>
        <ol className="list-decimal pl-5 text-sm space-y-2 text-[#2b1d0f]">
          <li><strong>Initial Medoids:</strong> Select m1=1, m2=6.</li>
          <li><strong>Assignment:</strong>
            <ul className="list-none pl-0 mt-1 font-mono text-xs text-black">
              <li>Cluster 1 (closest to 1): &#123;1, 2&#125;</li>
              <li>Cluster 2 (closest to 6): &#123;4, 5, 6, 7&#125;</li>
            </ul>
          </li>
          <li><strong>Current Cost (Absolute Difference):</strong>
            <div className="font-mono text-xs text-black mt-1">
              |1-1| + |2-1| + |4-6| + |5-6| + |6-6| + |7-6| = 0 + 1 + 2 + 1 + 0 + 1 = 5
            </div>
          </li>
          <li><strong>Try Swap (m1=1 with point 4):</strong>
            <ul className="list-none pl-0 mt-1 font-mono text-xs text-black">
              <li>New Medoids: m1=4, m2=6</li>
              <li>Clusters: Cluster 1=&#123;1, 2, 4&#125;, Cluster 2=&#123;5, 6, 7&#125;</li>
              <li>New Cost: |1-4| + |2-4| + |4-4| + |5-6| + |6-6| + |7-6| = 3 + 2 + 0 + 1 + 0 + 1 = 7 (Worse!)</li>
            </ul>
          </li>
          <li><strong>Conclusion:</strong> No swap improves the cost of 5. The algorithm converges with final clusters: <strong>&#123;1, 2&#125;</strong> and <strong>&#123;4, 5, 6, 7&#125;</strong>.</li>
        </ol>
      </div>

      <div className="note-box mt-6 bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00]">
        <h4 className="font-bold mb-1">When to Use K-Medoids vs K-Means?</h4>
        <p className="text-sm">
          K-Medoids is significantly more <strong>robust to outliers</strong>. Because K-Means uses the mathematical average, an extreme outlier (e.g., an income of ₹10 crore) will drag the centroid far away from the true cluster center. K-Medoids is forced to pick an actual data point, completely mitigating this effect. However, K-Medoids is computationally more expensive (O(k(n-k)²)) than K-Means.
        </p>
      </div>
    </section>
  </div>
);
