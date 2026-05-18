export const Ch1Content = () => (
  <div className="course-content">
    <p className="p-text">
      <span className="font-semibold">Introduction to Machine Learning</span> explores how systems can learn from experience without being explicitly programmed. This chapter covers human learning, the formal definition of ML, types of algorithms, well-posed learning problems, applications, issues, and data quality.
    </p>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    {/* Topic 1: Human Learning */}
    <section>
      <h3 className="section-heading">Human Learning & Its Types</h3>
      <p className="p-text">
        Human learning is the process by which a person acquires new knowledge, skills, behaviours, and understanding through experience, study, or instruction.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="card">
          <h4 className="font-bold text-lg">Rote Learning</h4>
          <p className="text-sm mt-1">Memorising information through repetition without deep understanding (e.g., memorising multiplication tables).</p>
        </div>
        <div className="card">
          <h4 className="font-bold text-lg">Meaningful Learning</h4>
          <p className="text-sm mt-1">Understanding and relating new concepts to existing knowledge (e.g., applying Newton&apos;s laws to real-world physics problems).</p>
        </div>
        <div className="card">
          <h4 className="font-bold text-lg">Discovery Learning</h4>
          <p className="text-sm mt-1">Constructing knowledge through exploration and inquiry independently (e.g., discovering patterns in nature).</p>
        </div>
        <div className="card">
          <h4 className="font-bold text-lg">Analogical Learning</h4>
          <p className="text-sm mt-1">Understanding a new concept by comparing it to a previously known concept (e.g., comparing electrical current to water flow).</p>
        </div>
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    {/* Topic 2: Machine Learning Definition */}
    <section>
      <h3 className="section-heading">Machine Learning Definition</h3>
      <p className="p-text">
        Machine Learning is a subset of Artificial Intelligence (AI) that enables systems to learn from data and improve over time.
      </p>

      <div className="example-box my-4">
        <div className="font-semibold text-lg mb-2 border-b border-[#c7a669] pb-1">Tom Mitchell&apos;s Definition (1997)</div>
        <p className="italic text-lg">
          &quot;A computer program is said to learn from experience <strong>E</strong> with respect to some class of tasks <strong>T</strong> and performance measure <strong>P</strong>, if its performance at tasks T, as measured by P, improves with experience E.&quot;
        </p>
      </div>

      <ul className="section-list">
        <li><strong>Task (T):</strong> What the program is doing (e.g., classifying emails).</li>
        <li><strong>Experience (E):</strong> The data the system learns from (e.g., historical labelled emails).</li>
        <li><strong>Performance (P):</strong> The evaluation metric (e.g., accuracy percentage).</li>
      </ul>

      <div className="note-box my-4">
        <strong>The Hierarchy:</strong> Artificial Intelligence is the broadest concept. Machine Learning is a subset of AI. Deep Learning is a further subset of ML that uses multi-layered neural networks.
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    {/* Topic 3: Types of ML (Expandable) */}
    <section>
      <h3 className="section-heading">Types of Machine Learning</h3>
      <p className="p-text">Click on each type to see detailed characteristics, sub-types, and examples.</p>
      
      <div className="space-y-4 mt-4">
        {/* Supervised Learning */}
        <details className="group border-l-4 border-[#b8925d] bg-[#f7e7bf] rounded-r-lg shadow-sm transition-all overflow-hidden">
          <summary className="p-4 cursor-pointer font-bold text-lg text-[#2b1d0f] list-none flex justify-between items-center group-open:bg-[#f3e7c2]">
            Supervised Learning
            <span className="group-open:rotate-180 transition-transform text-sm opacity-50">▼</span>
          </summary>
          <div className="p-4 pt-0 text-[#3a2a14] bg-[#f3e7c2]/30">
            <p className="mb-2"><strong>Definition:</strong> Learning from a labelled training dataset where each example is paired with the correct output.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Sub-types:</strong> 
                <ul className="list-[circle] pl-5 mt-1">
                  <li><em>Classification:</em> Discrete output labels (e.g., Spam vs Not-Spam).</li>
                  <li><em>Regression:</em> Continuous numerical values (e.g., Predicting house prices).</li>
                </ul>
              </li>
              <li><strong>Feedback:</strong> Immediate and direct. The algorithm knows the correct answer.</li>
              <li><strong>Examples:</strong> Credit risk scoring, image recognition, medical diagnosis.</li>
              <li><strong>Algorithms:</strong> Linear Regression, SVM, KNN, Naive Bayes.</li>
            </ul>
          </div>
        </details>
        
        {/* Unsupervised Learning */}
        <details className="group border-l-4 border-[#b8925d] bg-[#f7e7bf] rounded-r-lg shadow-sm transition-all overflow-hidden">
          <summary className="p-4 cursor-pointer font-bold text-lg text-[#2b1d0f] list-none flex justify-between items-center group-open:bg-[#f3e7c2]">
            Unsupervised Learning
            <span className="group-open:rotate-180 transition-transform text-sm opacity-50">▼</span>
          </summary>
          <div className="p-4 pt-0 text-[#3a2a14] bg-[#f3e7c2]/30">
            <p className="mb-2"><strong>Definition:</strong> Working with unlabelled data to discover hidden patterns, structures, or groupings without guidance.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Sub-types:</strong> 
                <ul className="list-[circle] pl-5 mt-1">
                  <li><em>Clustering:</em> Grouping similar data points together (e.g., customer segmentation).</li>
                  <li><em>Association:</em> Discovering rules between items (e.g., market basket analysis).</li>
                  <li><em>Dimensionality Reduction:</em> Reducing features while retaining info (e.g., PCA).</li>
                </ul>
              </li>
              <li><strong>Feedback:</strong> No labels or ground truth provided.</li>
              <li><strong>Examples:</strong> Anomaly detection, document clustering, genes grouping.</li>
              <li><strong>Algorithms:</strong> K-Means, Hierarchical Clustering, Apriori.</li>
            </ul>
          </div>
        </details>
        
        {/* Semi-Supervised Learning */}
        <details className="group border-l-4 border-[#b8925d] bg-[#f7e7bf] rounded-r-lg shadow-sm transition-all overflow-hidden">
          <summary className="p-4 cursor-pointer font-bold text-lg text-[#2b1d0f] list-none flex justify-between items-center group-open:bg-[#f3e7c2]">
            Semi-Supervised Learning
            <span className="group-open:rotate-180 transition-transform text-sm opacity-50">▼</span>
          </summary>
          <div className="p-4 pt-0 text-[#3a2a14] bg-[#f3e7c2]/30">
            <p className="mb-2"><strong>Definition:</strong> Lies between supervised and unsupervised; uses a small amount of labelled data with a large amount of unlabelled data.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Use Case:</strong> When labelling data is too expensive or time-consuming.</li>
              <li><strong>Examples:</strong> Web content classification (few labelled pages), Medical imaging (few labelled X-rays).</li>
            </ul>
          </div>
        </details>

        {/* Reinforcement Learning */}
        <details className="group border-l-4 border-[#b8925d] bg-[#f7e7bf] rounded-r-lg shadow-sm transition-all overflow-hidden">
          <summary className="p-4 cursor-pointer font-bold text-lg text-[#2b1d0f] list-none flex justify-between items-center group-open:bg-[#f3e7c2]">
            Reinforcement Learning
            <span className="group-open:rotate-180 transition-transform text-sm opacity-50">▼</span>
          </summary>
          <div className="p-4 pt-0 text-[#3a2a14] bg-[#f3e7c2]/30">
            <p className="mb-2"><strong>Definition:</strong> An agent learns to make decisions by interacting with an environment through trial and error to maximise cumulative rewards.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Key Concepts:</strong> Agent, Environment, State, Action, Reward, Policy.</li>
              <li><strong>Feedback:</strong> Reward/Penalty signal (delayed reinforcement).</li>
              <li><strong>Examples:</strong> Game AI (AlphaGo), Self-driving cars, Robotics, Stock trading.</li>
              <li><strong>Algorithms:</strong> Q-Learning, DQN, SARSA.</li>
            </ul>
          </div>
        </details>
      </div>

      {/* Comparison Table */}
      <div className="example-box mt-8 overflow-x-auto">
        <h4 className="font-bold text-lg mb-3 border-b border-[#c7a669] pb-1">Comparison of ML Types</h4>
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-[#f0ddb6] text-[#3a2a14]">
              <th className="p-2 border border-[#c7a669]">Aspect</th>
              <th className="p-2 border border-[#c7a669]">Supervised</th>
              <th className="p-2 border border-[#c7a669]">Unsupervised</th>
              <th className="p-2 border border-[#c7a669]">Reinforcement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-[#c7a669] font-bold">Training Data</td>
              <td className="p-2 border border-[#c7a669]">Labelled</td>
              <td className="p-2 border border-[#c7a669]">Unlabelled</td>
              <td className="p-2 border border-[#c7a669]">No fixed dataset</td>
            </tr>
            <tr className="bg-[#fcf8f0]/50">
              <td className="p-2 border border-[#c7a669] font-bold">Feedback</td>
              <td className="p-2 border border-[#c7a669]">Direct</td>
              <td className="p-2 border border-[#c7a669]">None</td>
              <td className="p-2 border border-[#c7a669]">Reward/Penalty</td>
            </tr>
            <tr>
              <td className="p-2 border border-[#c7a669] font-bold">Goal</td>
              <td className="p-2 border border-[#c7a669]">Predict output</td>
              <td className="p-2 border border-[#c7a669]">Find patterns</td>
              <td className="p-2 border border-[#c7a669]">Maximise reward</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    {/* Topic 4: Well-Posed Problems */}
    <section>
      <h3 className="section-heading">Well-Posed Learning Problems</h3>
      <p className="p-text">
        A problem is well-posed when it is formally defined with a Task (T), Performance measure (P), and Experience (E).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="example-box">
          <h4 className="font-bold border-b border-[#c7a669] pb-1 mb-2">Example: Checkers Game</h4>
          <ul className="text-sm space-y-1">
            <li><strong>T:</strong> Playing checkers</li>
            <li><strong>P:</strong> Percentage of games won</li>
            <li><strong>E:</strong> Practice games played against itself</li>
          </ul>
        </div>
        
        <div className="example-box">
          <h4 className="font-bold border-b border-[#c7a669] pb-1 mb-2">Example: Email Spam</h4>
          <ul className="text-sm space-y-1">
            <li><strong>T:</strong> Classifying emails as spam or not</li>
            <li><strong>P:</strong> Percentage of correct classifications</li>
            <li><strong>E:</strong> Database of manually labelled emails</li>
          </ul>
        </div>
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    {/* Topic 5: Applications */}
    <section>
      <h3 className="section-heading">Real-World Applications</h3>
      <ul className="section-list">
        <li><strong>Healthcare:</strong> Disease diagnosis (cancer, diabetes), drug discovery, medical image analysis.</li>
        <li><strong>Finance:</strong> Fraud detection, credit risk scoring, algorithmic stock trading.</li>
        <li><strong>Natural Language Processing:</strong> Virtual assistants (Siri, Alexa), sentiment analysis, language translation.</li>
        <li><strong>Computer Vision:</strong> Face recognition, object detection, optical character recognition (OCR).</li>
        <li><strong>Recommendation Systems:</strong> Netflix movie suggestions, Amazon product recommendations.</li>
      </ul>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    {/* Topic 6: Issues in ML */}
    <section>
      <h3 className="section-heading">Issues in Machine Learning</h3>
      
      <div className="space-y-4 mt-4">
        <div className="note-box">
          <strong>Overfitting:</strong> The model learns the training data (including noise) too well and fails to generalise to new data. (Low bias, High variance). Fixed using regularisation or more data.
        </div>
        <div className="note-box">
          <strong>Underfitting:</strong> The model is too simple to capture the underlying patterns. It performs poorly on both training and test data. (High bias, Low variance). Fixed by increasing model complexity.
        </div>
        <ul className="section-list">
          <li><strong>Data Quality:</strong> Missing values, noisy data, outliers, and inconsistent records heavily impact performance (Garbage In, Garbage Out).</li>
          <li><strong>Bias-Variance Tradeoff:</strong> Finding the sweet spot between an oversimplified model (bias) and an overly sensitive model (variance).</li>
          <li><strong>Lack of Interpretability:</strong> Deep neural networks often act as &quot;black boxes,&quot; making it hard to explain their decisions.</li>
        </ul>
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    {/* Topic 7: Types of Data */}
    <section>
      <h3 className="section-heading">Types of Data</h3>
      <p className="p-text">Understanding data types is critical for selecting the right algorithms.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="card">
          <h4 className="font-bold text-lg mb-2 border-b border-[#c7a669] pb-1">Qualitative (Categorical)</h4>
          <ul className="text-sm space-y-2">
            <li><strong>Nominal:</strong> Named categories with NO inherent order. (e.g., Blood Group, Gender, Nationality). Operations: Counting, Mode.</li>
            <li><strong>Ordinal:</strong> Named categories with a meaningful ORDER, but exact differences are unknown. (e.g., Grades A/B/C, Customer Satisfaction). Operations: Median, Mode.</li>
          </ul>
        </div>
        
        <div className="card">
          <h4 className="font-bold text-lg mb-2 border-b border-[#c7a669] pb-1">Quantitative (Numerical)</h4>
          <ul className="text-sm space-y-2">
            <li><strong>Interval:</strong> Numeric data with meaningful order AND exact differences, but NO true zero. (e.g., Temperature in °C, Calendar Years).</li>
            <li><strong>Ratio:</strong> Highest level of measurement. Has a true zero (meaning complete absence). Ratios are meaningful. (e.g., Height, Weight, Salary, Age).</li>
          </ul>
        </div>
      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    {/* Topic 8: Data Remediation */}
    <section>
      <h3 className="section-heading">Data Quality & Remediation</h3>
      <p className="p-text">Strategies to clean imperfect real-world datasets:</p>
      <ul className="section-list">
        <li><strong>Missing Values:</strong> Remedied by deletion, mean/median/mode imputation, or predictive imputation using other ML models.</li>
        <li><strong>Noisy Data:</strong> Addressed using binning (smoothing by grouping), regression fitting, or clustering to identify and remove outliers.</li>
        <li><strong>Duplicate Data:</strong> Solved using deduplication algorithms based on key attributes to keep a single authoritative record.</li>
        <li><strong>Irrelevant Features:</strong> Handled using Feature Selection (statistical correlation tests) or Dimensionality Reduction (PCA) to compress feature space.</li>
      </ul>
    </section>

  </div>
);
