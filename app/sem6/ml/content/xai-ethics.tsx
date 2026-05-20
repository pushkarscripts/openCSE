export const XaiEthicsContent = () => (
  <div className="course-content">
    <section id="xai-ethics" className="scroll-mt-24">
      <h3 className="section-heading text-xl">5. Explainable AI (XAI) & Ethics</h3>
      <p className="p-text mb-4">
        As machine learning models (especially Deep Learning and Ensembles) become more complex, they become <strong>Black Boxes</strong>. We can see the input and the output, but we don&apos;t know <em>why</em> the model made that decision. In fields like healthcare, finance, and criminal justice, interpretability is not just preferred—it is legally and ethically required.
      </p>

      <div className="note-box bg-[#f3e7c2] border-l-4 border-[#1B0D00] p-4 text-[#1B0D00] mb-6">
        <h4 className="font-bold mb-2">Algorithmic Bias and Fairness</h4>
        <p className="text-sm">
          Models learn from historical data. If historical data contains human biases (e.g., gender bias in hiring data, racial bias in loan approvals), the ML model will learn, amplify, and automate that bias.
        </p>
        <p className="text-sm mt-2 font-bold text-red-800">
          &quot;A machine learning model is just money laundering for human bias.&quot;
        </p>
      </div>

      <h4 className="font-bold text-lg text-[#fccc7e] mb-2">Explainable AI (XAI) Techniques</h4>
      <p className="p-text text-sm mb-4">
        XAI aims to open the black box by providing mathematical proofs or visual cues as to which features drove a specific prediction.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h5 className="font-bold mb-1">LIME</h5>
          <p className="text-xs italic mb-2">Local Interpretable Model-agnostic Explanations</p>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>How it works:</strong> It takes a single prediction, slightly alters the input data (perturbation) hundreds of times, and sees how the black-box model&apos;s prediction changes.</li>
            <li>It then fits a simple, interpretable linear model locally around that specific prediction to explain it.</li>
          </ul>
        </div>
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h5 className="font-bold mb-1">SHAP</h5>
          <p className="text-xs italic mb-2">SHapley Additive exPlanations</p>
          <ul className="list-disc pl-5 text-xs space-y-1">
            <li><strong>How it works:</strong> Based on Game Theory. It treats each feature (e.g., &apos;Age&apos;, &apos;Income&apos;) as a player in a game, and the &apos;payout&apos; is the prediction.</li>
            <li>Calculates the exact marginal contribution of each feature to the final prediction, ensuring mathematical fairness.</li>
          </ul>
        </div>
      </div>
      
    </section>
  </div>
);
