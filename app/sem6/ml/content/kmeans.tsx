export const KMeansContent = () => (
  <div className="course-content">
    <section id="kmeans" className="scroll-mt-24">
      <h3 className="section-heading text-xl">2. K-Means Clustering</h3>
      <p className="p-text">
        K-Means is the most widely used partitioning clustering algorithm. It partitions <strong>n</strong> data points into <strong>k</strong> clusters by minimizing the total within-cluster sum of squared distances (inertia).
      </p>

      <div className="mt-6">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-2">Algorithm Steps</h4>
        <ol className="list-decimal pl-5 space-y-2 p-text text-sm">
          <li><strong>INITIALIZATION:</strong> Randomly select <span className="font-mono text-white">k</span> data points as initial centroids: μ₁, μ₂, ..., μₖ</li>
          <li>
            <strong>ASSIGNMENT STEP:</strong> Assign each data point <span className="font-mono text-white">xᵢ</span> to the nearest centroid.
            <div className="bg-white/10 p-2 rounded font-mono text-xs overflow-x-auto whitespace-nowrap text-[#fdf5e6] mt-2 mb-1">
              Cⱼ = &#123; xᵢ : ||xᵢ - μⱼ||² ≤ ||xᵢ - μₗ||² ∀ l ≠ j &#125;
            </div>
          </li>
          <li>
            <strong>UPDATE STEP:</strong> Recompute each centroid as the mean of all points in the cluster.
            <div className="bg-white/10 p-2 rounded font-mono text-xs overflow-x-auto whitespace-nowrap text-[#fdf5e6] mt-2 mb-1">
              μⱼ = (1 / |Cⱼ|) × Σ(xᵢ) for xᵢ ∈ Cⱼ
            </div>
          </li>
          <li><strong>CONVERGENCE CHECK:</strong> If centroids do not change (or change is below a threshold), STOP. Otherwise, repeat from Step 2.</li>
        </ol>
      </div>

      <div className="example-box my-8 bg-[#fdf5e6] p-4 rounded-lg shadow-sm border border-[#c7a669]">
        <h4 className="font-bold border-b border-[#c7a669] pb-1 mb-2 text-[#2b1d0f]">Worked Example (k=2)</h4>
        <p className="text-sm mb-2 text-[#2b1d0f]">
          <strong>Points:</strong> A(1,1), B(1.5,2), C(3,4), D(5,7), E(3.5,5), F(4.5,5)
        </p>
        <ol className="list-decimal pl-5 text-sm space-y-2 text-[#2b1d0f]">
          <li><strong>Initialize:</strong> Pick C1=(1,1) and C2=(5,7).</li>
          <li><strong>Assignment (Iteration 1):</strong> Compute distance from points to C1 and C2.
            <ul className="list-disc pl-5 mt-1">
              <li>Cluster 1 (closest to C1): &#123;A, B, C&#125;</li>
              <li>Cluster 2 (closest to C2): &#123;D, E, F&#125;</li>
            </ul>
          </li>
          <li><strong>Update Centroids:</strong>
            <ul className="list-disc pl-5 mt-1 font-mono text-xs text-black">
              <li>New C1 = ((1+1.5+3)/3, (1+2+4)/3) = (1.83, 2.33)</li>
              <li>New C2 = ((5+3.5+4.5)/3, (7+5+5)/3) = (4.33, 5.67)</li>
            </ul>
          </li>
          <li><strong>Repeat Assignment (Iteration 2):</strong> Using new centroids.
            <ul className="list-disc pl-5 mt-1">
              <li>Cluster 1: &#123;A, B&#125;</li>
              <li>Cluster 2: &#123;C, D, E, F&#125;</li>
            </ul>
          </li>
          <li><strong>Final Centroids:</strong> New C1=(1.25, 1.5), New C2=(4.0, 5.25). Next assignment yields no changes. <strong>CONVERGED.</strong></li>
        </ol>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h5 className="font-bold mb-2">The Elbow Method</h5>
          <p className="text-sm">
            Used to determine the optimal <span className="font-mono">k</span>. Run K-Means for various k values and plot the <strong>Inertia</strong> (within-cluster sum of squares). The &quot;elbow&quot; point where inertia starts decreasing linearly is the optimal k.
          </p>
        </div>
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h5 className="font-bold mb-2">K-Means++</h5>
          <p className="text-sm">
            Improves initialization. Instead of purely random centers, it picks the first center randomly, and selects subsequent centers with a probability proportional to their squared distance from existing centers.
          </p>
        </div>
      </div>
    </section>
  </div>
);
