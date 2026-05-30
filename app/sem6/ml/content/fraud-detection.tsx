export const FraudDetectionContent = () => (
  <div className="course-content">
    <section id="fraud-detection" className="scroll-mt-24">
      <h3 className="section-heading text-xl">7. Online Fraud Detection</h3>
      <p className="p-text mb-4">
        Fraud Detection uses machine learning to automatically flag fraudulent transactions (credit card fraud, account takeover, phishing) in real-time. It is essential because fraudsters constantly evolve tactics, rendering static rules obsolete.
      </p>

      <div className="note-box bg-[#f3e7c2] border-l-4 border-red-700 p-4 text-[#1B0D00] mb-6">
        <h4 className="font-bold text-red-800 mb-2">The Biggest Challenge: Class Imbalance</h4>
        <p className="text-sm mb-2">
          Fraudulent transactions typically represent less than 0.1% to 1% of all transactions. A naive model predicting &quot;Not Fraud&quot; for everything would achieve 99.9% accuracy but fail completely at its job. Accuracy is a misleading metric here—we must use Precision-Recall curves or F1-Scores.
        </p>
      </div>

      <details className="bg-[#fdf5e6] p-4 rounded-lg border border-[#c7a669] my-4 cursor-pointer group" open>
        <summary className="font-bold text-[#2b1d0f] outline-none hover:text-[#8b5a2b] transition-colors">
          Deep Dive: Solutions for Class Imbalance
        </summary>
        <div className="mt-4 text-[#2b1d0f] text-sm overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#c7a669]">
                <th className="p-2">Technique</th>
                <th className="p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#c7a669]/30">
                <td className="p-2 font-bold">Oversampling (SMOTE)</td>
                <td className="p-2">Synthetically generate new minority (fraud) samples to balance the dataset.</td>
              </tr>
              <tr className="border-b border-[#c7a669]/30">
                <td className="p-2 font-bold">Undersampling</td>
                <td className="p-2">Randomly reduce the majority class (normal transactions) to match the minority class.</td>
              </tr>
              <tr>
                <td className="p-2 font-bold">Cost-Sensitive Learning</td>
                <td className="p-2">Assign high &quot;Class Weights&quot; to fraud cases, severely penalizing the algorithm when it misclassifies them.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>

      <h4 className="font-bold text-lg text-[#fccc7e] mt-8 mb-2">Machine Learning Approaches</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h5 className="font-bold mb-1">Supervised Learning</h5>
          <p className="text-xs mb-2">Used when rich historical labels are available.</p>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Logistic Regression:</strong> Fast, highly interpretable baseline.</li>
            <li><strong>XGBoost / LightGBM:</strong> State-of-the-art for tabular financial data. Highly accurate.</li>
          </ul>
        </div>
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h5 className="font-bold mb-1">Anomaly Detection</h5>
          <p className="text-xs mb-2">Used to catch completely new, unseen fraud patterns.</p>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>Isolation Forest:</strong> Isolates anomalies as they require fewer feature splits to separate.</li>
            <li><strong>Autoencoders:</strong> Learns normal behavior; high reconstruction error flags fraud.</li>
          </ul>
        </div>
      </div>

      <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
        <h5 className="font-bold mb-2">Graph Neural Networks (GNNs)</h5>
        <p className="text-sm">
          Financial fraud often involves networks of colluding parties (money mule networks). GNNs are uniquely suited to detect these topological anomalies by analyzing the relationship connections between accounts rather than just isolated transaction features.
        </p>
      </div>
    </section>
  </div>
);
