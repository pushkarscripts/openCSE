export const IntroClassificationContent = () => (
  <div className="course-content">
    <section id="intro-classification" className="scroll-mt-24">
      <h3 className="section-heading text-xl">1. Introduction to Classification</h3>
      <p className="p-text">
        Classification is a type of supervised machine learning task where the goal is to predict the categorical class label of new observations based on past observations (training data). The algorithm learns a mapping function <span className="font-mono bg-white/50 p-1 rounded text-xs text-black">f: X → Y</span>, where X represents input features and Y represents discrete class labels.
      </p>

      <div className="note-box mt-4 bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00]">
        <h4 className="font-bold mb-1">Definition</h4>
        <p className="text-sm">
          Given a set of training examples, each labeled with one of K classes, learn a classifier that maps new examples to one of these K classes.
        </p>
      </div>

      <div className="mt-8">
        <h4 className="font-bold text-xl mb-4 text-[#fccc7e]">Types of Classification</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
            <h5 className="font-bold mb-2">Binary Classification</h5>
            <p className="text-sm">Two class labels. Example: Email spam detection (Spam / Not Spam).</p>
          </div>
          <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
            <h5 className="font-bold mb-2">Multi-class Classification</h5>
            <p className="text-sm">More than two classes. Example: Handwritten digit recognition (0–9).</p>
          </div>
          <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
            <h5 className="font-bold mb-2">Multi-label Classification</h5>
            <p className="text-sm">Each instance can belong to multiple classes simultaneously. Example: Image tagging.</p>
          </div>
          <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
            <h5 className="font-bold mb-2">Imbalanced Classification</h5>
            <p className="text-sm">Class distribution is highly skewed. Example: Fraud detection (99.9% legit, 0.1% fraud).</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
