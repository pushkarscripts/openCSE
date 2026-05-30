export const ImageRecognitionContent = () => (
  <div className="course-content">
    <section id="image-recognition" className="scroll-mt-24">
      <h3 className="section-heading text-xl">2. Image Recognition</h3>
      <p className="p-text mb-4">
        Image Recognition is a field of computer vision that uses machine learning to identify and detect objects, people, or actions in images.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold mb-2">Traditional Pipeline</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li><strong>Manual Feature Extraction:</strong> Using algorithms like SIFT, HOG, SURF to find edges/corners.</li>
            <li><strong>Classification:</strong> Passing those features to an SVM or Random Forest.</li>
            <li className="text-red-700 font-semibold mt-2">Limitation: Manual feature engineering is domain-specific and fragile.</li>
          </ul>
        </div>
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold mb-2">Deep Learning (CNNs)</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li><strong>Convolutional Layers:</strong> Automatically detect low-level features (edges).</li>
            <li><strong>Pooling Layers:</strong> Reduce spatial dimensions.</li>
            <li><strong>Fully Connected Layers:</strong> Combine features for final Softmax classification.</li>
            <li className="text-green-700 font-semibold mt-2">Advantage: Learns features automatically from raw pixels.</li>
          </ul>
        </div>
      </div>

      <h4 className="font-bold text-lg text-[#fccc7e] mb-2">Image Preprocessing Basics</h4>
      <ul className="list-disc pl-5 p-text text-sm mb-6 space-y-1">
        <li><strong>Resizing:</strong> Standardize image dimensions (e.g., 224x224).</li>
        <li><strong>Normalization:</strong> Scale pixel values (0-255) down to [0,1] or [-1,1].</li>
        <li><strong>Data Augmentation:</strong> Flip, rotate, or crop training images to artificially increase dataset diversity and prevent overfitting.</li>
      </ul>

      <details className="bg-[#fdf5e6] p-4 rounded-lg border border-[#c7a669] my-4 cursor-pointer group">
        <summary className="font-bold text-[#2b1d0f] outline-none hover:text-[#8b5a2b] transition-colors">
          Deep Dive: Famous CNN Architectures
        </summary>
        <div className="mt-4 text-[#2b1d0f] text-sm overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#c7a669]">
                <th className="p-2">Architecture</th>
                <th className="p-2">Year</th>
                <th className="p-2">Key Innovation</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#c7a669]/30">
                <td className="p-2 font-bold">AlexNet</td>
                <td className="p-2">2012</td>
                <td className="p-2">ReLU activation, Dropout, GPU training (sparked DL boom).</td>
              </tr>
              <tr className="border-b border-[#c7a669]/30">
                <td className="p-2 font-bold">VGGNet</td>
                <td className="p-2">2014</td>
                <td className="p-2">Very deep networks using only small 3x3 filters.</td>
              </tr>
              <tr className="border-b border-[#c7a669]/30">
                <td className="p-2 font-bold">GoogLeNet</td>
                <td className="p-2">2014</td>
                <td className="p-2">Inception module (parallel convolutions of different sizes), 1x1 convs.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">ResNet</td>
                <td className="p-2">2015</td>
                <td className="p-2">Skip/Residual connections to solve the vanishing gradient problem in ultra-deep networks (150+ layers).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>
    </section>
  </div>
);
