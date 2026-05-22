export const AdvancedDimReductionContent = () => (
  <div className="course-content">
    <section id="advanced-dim-reduction" className="scroll-mt-24">
      <h3 className="section-heading text-xl">Advanced Dimensionality Reduction Techniques</h3>
      <p className="p-text">
        Beyond Principal Component Analysis (PCA), several other techniques are used depending on whether the task is supervised, non-linear, or requires neural networks.
      </p>

      <div className="space-y-6 mt-8">
        {/* LDA */}
        <div className="card bg-[#e6d0a7] p-5 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold text-xl border-b border-[#c7a669] pb-2 mb-3">1. Linear Discriminant Analysis (LDA)</h4>
          <p className="text-sm mb-3">
            LDA is a <strong>supervised</strong> dimensionality reduction technique. Unlike PCA, which focuses on maximum variance regardless of labels, LDA specifically seeks to project data in a way that maximizes the distance between different classes.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li><strong>Supervised:</strong> Uses class labels to find optimal axes.</li>
            <li><strong>Between-Class Variance:</strong> Maximizes the distance between the means of different classes.</li>
            <li><strong>Within-Class Variance:</strong> Minimizes the spread of data points within each individual class.</li>
          </ul>
        </div>

        {/* t-SNE */}
        <div className="card bg-[#e6d0a7] p-5 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold text-xl border-b border-[#c7a669] pb-2 mb-3">2. t-SNE (t-Distributed Stochastic Neighbor Embedding)</h4>
          <p className="text-sm mb-3">
            t-SNE is a <strong>non-linear</strong> dimensionality reduction technique particularly well suited for the visualization of high-dimensional datasets in 2D or 3D.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li><strong>Pairwise Similarities:</strong> It converts Euclidean distances between high-dimensional data points into joint probabilities that represent similarities.</li>
            <li><strong>KL Divergence:</strong> It optimizes the low-dimensional embedding by minimizing the Kullback-Leibler (KL) divergence between the high-dimensional and low-dimensional probability distributions.</li>
            <li><strong>Crowding Problem:</strong> It uses a Student t-distribution in the low-dimensional space to solve the &quot;crowding problem&quot;, allowing for better cluster separation in visualization.</li>
          </ul>
          <div className="note-box mt-3 text-xs bg-white/50 p-2 rounded">
            <span className="font-bold text-red-800">Note:</span> t-SNE is primarily for visualization and exploration; it is not typically used for feature engineering or general preprocessing as it doesn&apos;t preserve global structure well.
          </div>
        </div>

        {/* Autoencoders */}
        <div className="card bg-[#e6d0a7] p-5 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold text-xl border-b border-[#c7a669] pb-2 mb-3">3. Autoencoders (Neural Networks)</h4>
          <p className="text-sm mb-3">
            Autoencoders are a type of unsupervised neural network that learns how to efficiently compress and encode data then learn how to reconstruct the data back from the reduced representation.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li><strong>Encoder:</strong> The part of the network that compresses the input into a latent-space representation (dimensionality reduction).</li>
            <li><strong>Bottleneck Layer:</strong> The layer with the fewest neurons, representing the reduced features.</li>
            <li><strong>Decoder:</strong> The part of the network that attempts to reconstruct the original input from the bottleneck representation.</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);
