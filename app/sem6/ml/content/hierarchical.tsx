export const HierarchicalContent = () => (
  <div className="course-content">
    <section id="hierarchical" className="scroll-mt-24">
      <h3 className="section-heading text-xl">4. Hierarchical Clustering</h3>
      <p className="p-text">
        Hierarchical Clustering creates a tree-like hierarchy of clusters called a <strong>Dendrogram</strong>. Unlike K-Means, you do not need to specify the number of clusters (k) in advance; you can cut the dendrogram at an appropriate height later to define your clusters.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold text-lg mb-2">A. Agglomerative (Bottom-Up)</h4>
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li><strong>Start:</strong> <span className="font-mono">n</span> clusters (each point is its own cluster).</li>
            <li>Compute the pairwise distance matrix.</li>
            <li><strong>Merge:</strong> Find the two closest clusters and merge them into a single new cluster.</li>
            <li><strong>Update:</strong> Recompute the distances between the new cluster and all remaining clusters using a Linkage Method.</li>
            <li><strong>Repeat:</strong> Steps 3 and 4 until all points merge into one single master cluster.</li>
          </ol>
        </div>

        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold text-lg mb-2">B. Divisive (Top-Down / DIANA)</h4>
          <ol className="list-decimal pl-5 space-y-1 text-sm">
            <li><strong>Start:</strong> 1 cluster containing ALL points.</li>
            <li><strong>Split:</strong> Find the point with the greatest average dissimilarity to other cluster members. This point starts a new sub-cluster.</li>
            <li>Reassign points to the sub-cluster they are most similar to.</li>
            <li><strong>Repeat:</strong> Until each point is in its own individual cluster (n clusters).</li>
          </ol>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-lg text-[#fccc7e] mb-4">Linkage Methods (Measuring Inter-Cluster Distance)</h4>
        <div className="space-y-4">
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6] mb-1">1. Single Linkage (MIN)</h5>
            <p className="text-sm text-[#fdf5e6]/80">Distance between the <strong>NEAREST</strong> pair of points (one from each cluster).</p>
            <p className="text-xs text-[#c7a669] mt-1 italic">Creates long, chain-like clusters (&quot;chaining effect&quot;). Highly sensitive to noise/outliers.</p>
          </div>
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6] mb-1">2. Complete Linkage (MAX)</h5>
            <p className="text-sm text-[#fdf5e6]/80">Distance between the <strong>FARTHEST</strong> pair of points.</p>
            <p className="text-xs text-[#c7a669] mt-1 italic">Creates compact, ball-shaped clusters of roughly equal diameter. Good for well-separated data.</p>
          </div>
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6] mb-1">3. Average Linkage</h5>
            <p className="text-sm text-[#fdf5e6]/80">The average of all pairwise distances between points in cluster A and cluster B.</p>
          </div>
          <div className="bg-white/5 p-4 rounded border border-white/10">
            <h5 className="font-bold text-[#fdf5e6] mb-1">4. Ward&apos;s Method</h5>
            <p className="text-sm text-[#fdf5e6]/80">Merges the two clusters that result in the minimum increase in the total within-cluster variance.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
