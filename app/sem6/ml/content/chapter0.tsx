export const Ch0Content = () => (
  <div className="course-content">
    <p className="p-text">
      <span className="font-semibold">Machine Learning</span> provides the foundation for building systems that can learn from data. This course takes you from basic human learning concepts to advanced algorithms like Deep Learning and Ensemble methods.
    </p>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Syllabus Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="p-4 rounded-lg border border-[#c7a669] bg-[#f0ddb6] text-[#3a2a14]">
          <h4 className="font-bold text-lg mb-2">Unit 1: Introduction</h4>
          <ul className="section-list text-sm">
            <li>Human Learning vs Machine Learning</li>
            <li>Types of Learning</li>
            <li>Well-Posed Learning Problems</li>
            <li>Applications and Issues in ML</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg border border-[#c7a669] bg-[#f3e7c2] text-[#3a2a14]">
          <h4 className="font-bold text-lg mb-2">Unit 2: Regression</h4>
          <ul className="section-list text-sm">
            <li>Data Pre-processing</li>
            <li>Dimensionality Reduction</li>
            <li>Linear and Polynomial Regression</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg border border-[#c7a669] bg-[#f0ddb6] text-[#3a2a14]">
          <h4 className="font-bold text-lg mb-2">Unit 3: Classification</h4>
          <ul className="section-list text-sm">
            <li>Logistic Regression</li>
            <li>K-Nearest Neighbours</li>
            <li>Decision Trees & SVM</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg border border-[#c7a669] bg-[#f3e7c2] text-[#3a2a14]">
          <h4 className="font-bold text-lg mb-2">Unit 4: Unsupervised</h4>
          <ul className="section-list text-sm">
            <li>Clustering Algorithms</li>
            <li>Association Rule Learning</li>
          </ul>
        </div>
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Prerequisites</h3>
      <div className="p-3 my-3 rounded border-l-4 border-[#b8925d] bg-[#f7e7bf] text-[#2b1d0f]">
        <ul className="section-list mt-0">
          <li>Basic understanding of Statistics and Probability</li>
          <li>Familiarity with Linear Algebra</li>
          <li>Fundamental programming knowledge</li>
        </ul>
      </div>
    </section>
  </div>
);
