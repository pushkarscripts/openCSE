import Link from "next/link";

export const DimensionalityReductionContent = () => (
  <div className="course-content">
    <section id="dimensionality-reduction" className="scroll-mt-24">
      <h3 className="section-heading text-xl">Dimensionality Reduction</h3>
      <p className="p-text">
        Dimensionality reduction transforms high-dimensional data into a lower-dimensional representation, preserving the essential structure and information needed for learning. In machine learning, datasets can have hundreds or thousands of features. Not all features contribute equally to the prediction task.
      </p>

      <div className="note-box mt-6 bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00]">
        <h4 className="font-bold mb-2">The Problem: Curse of Dimensionality</h4>
        <p className="text-sm">
          As the number of features (dimensions) grows, the feature space becomes increasingly sparse. Machine learning models require exponentially more data to generalize well, leading to:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
          <li><strong>Overfitting:</strong> The model learns noise rather than actual patterns.</li>
          <li><strong>High computational cost:</strong> Slow training and inference times.</li>
          <li><strong>Visualization difficulty:</strong> Impossible to visualize data above 3 dimensions.</li>
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-xl mb-3 text-[#fccc7e]">Main Approaches</h4>
        
        <div className="space-y-4">
          <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
            <h5 className="font-bold text-lg border-b border-[#c7a669] pb-1 mb-2">1. Feature Extraction (Projection)</h5>
            <p className="text-sm mb-3">Creates NEW features that are combinations (transformations) of the original features. The original features are projected into a lower-dimensional subspace.</p>
            
            <ul className="list-disc pl-5 space-y-4 text-sm leading-relaxed">
              <li>
                <div className="mb-1">
                  <strong>Principal Component Analysis (PCA):</strong> The most widely used technique. It creates orthogonal features that capture the maximum variance in the data. (Unsupervised).
                </div>
                <Link href="/sem6/ml/ch2-pca-deep-dive" className="text-blue-800 hover:underline font-semibold block mt-1">
                  → View PCA Deep Dive Example
                </Link>
              </li>
              <li>
                <div className="mb-1">
                  <strong>Other Advanced Techniques (LDA, t-SNE, Autoencoders):</strong> Methods used for supervised classification, non-linear visualization, or neural network-based compression.
                </div>
                <Link href="/sem6/ml/ch2-advanced-dim-reduction" className="text-blue-800 hover:underline font-semibold block mt-1">
                  → View Advanced Techniques Detail
                </Link>
              </li>
            </ul>
          </div>

          <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
            <h5 className="font-bold text-lg border-b border-[#c7a669] pb-1 mb-2">2. Feature Selection</h5>
            <p className="text-sm mb-2">Selects a SUBSET of the original features without transforming them. Keeps the most relevant features and discards the rest.</p>
            <div className="mt-1">
              <Link href="/sem6/ml/ch2-feature-selection" className="text-blue-800 hover:underline font-semibold">→ See Feature Selection Methods</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
