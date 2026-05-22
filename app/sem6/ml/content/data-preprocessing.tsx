export const DataPreprocessingContent = () => (
  <div className="course-content">
    <section id="data-preprocessing" className="scroll-mt-24">
      <h3 className="section-heading text-xl">Data Pre-processing</h3>
      <p className="p-text">
        Data pre-processing transforms raw, real-world data into a clean and suitable format before applying machine learning algorithms. Real-world data is often incomplete, noisy, inconsistent, and unstructured. Proper pre-processing directly impacts model accuracy, performance, and generalizability.
      </p>

      <div className="space-y-4 mt-6">
        <details open className="group border-l-4 border-[#b8925d] bg-[#f7e7bf] rounded-r-lg shadow-sm transition-all overflow-hidden">
          <summary className="p-4 cursor-pointer font-bold text-lg text-[#2b1d0f] list-none flex justify-between items-center group-open:bg-[#f3e7c2]">
            1. Data Cleaning
            <span className="group-open:rotate-180 transition-transform text-sm opacity-50 text-[#2b1d0f]">▼</span>
          </summary>
          <div className="p-4 pt-0 text-[#3a2a14] bg-[#f3e7c2]/30">
            <p className="text-sm mb-3">Fixes incomplete, noisy, and inconsistent data.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Handling Missing Values:</strong> Remove rows (listwise deletion), Mean/Median/Mode Imputation, or Predictive Imputation (e.g., KNN imputer).</li>
              <li><strong>Handling Outliers:</strong> Z-Score method (<span className="font-mono">|z| &gt; 3</span>) or IQR method (removing values below <span className="font-mono">Q1 - 1.5*IQR</span> or above <span className="font-mono">Q3 + 1.5*IQR</span>).</li>
              <li><strong>Noise Reduction:</strong> Smoothing using moving averages.</li>
            </ul>
          </div>
        </details>

        <details className="group border-l-4 border-[#b8925d] bg-[#f7e7bf] rounded-r-lg shadow-sm transition-all overflow-hidden">
          <summary className="p-4 cursor-pointer font-bold text-lg text-[#2b1d0f] list-none flex justify-between items-center group-open:bg-[#f3e7c2]">
            2. Data Transformation
            <span className="group-open:rotate-180 transition-transform text-sm opacity-50 text-[#2b1d0f]">▼</span>
          </summary>
          <div className="p-4 pt-0 text-[#3a2a14] bg-[#f3e7c2]/30">
            <p className="text-sm mb-3">Converts data into an appropriate scale or format for models.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Normalization (Min-Max Scaling):</strong> Scales data to a <span className="font-mono">[0, 1]</span> range.<br /><span className="font-mono text-xs bg-white/40 px-1 rounded">x&apos; = (x - min) / (max - min)</span></li>
              <li><strong>Standardization (Z-Score):</strong> Scales data to have zero mean (<span className="font-mono">μ=0</span>) and unit variance (<span className="font-mono">σ=1</span>).<br /><span className="font-mono text-xs bg-white/40 px-1 rounded">x&apos; = (x - μ) / σ</span></li>
              <li><strong>Log Transformation:</strong> Reduces right-skewness in data.<br /><span className="font-mono text-xs bg-white/40 px-1 rounded">x&apos; = log(1 + x)</span></li>
            </ul>
          </div>
        </details>

        <details className="group border-l-4 border-[#b8925d] bg-[#f7e7bf] rounded-r-lg shadow-sm transition-all overflow-hidden">
          <summary className="p-4 cursor-pointer font-bold text-lg text-[#2b1d0f] list-none flex justify-between items-center group-open:bg-[#f3e7c2]">
            3. Data Encoding
            <span className="group-open:rotate-180 transition-transform text-sm opacity-50 text-[#2b1d0f]">▼</span>
          </summary>
          <div className="p-4 pt-0 text-[#3a2a14] bg-[#f3e7c2]/30">
            <p className="text-sm mb-3">Most machine learning models require numerical input. Encoding converts categorical data to numeric data.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>One-Hot Encoding:</strong> Converts nominal categories into separate binary columns. (e.g., Color: <span className="font-mono">[1,0,0]</span> for Red, <span className="font-mono">[0,1,0]</span> for Green).</li>
              <li><strong>Label Encoding:</strong> Assigns integer values to ordinal categories. (e.g., Low=0, Medium=1, High=2).</li>
            </ul>
          </div>
        </details>

        <details className="group border-l-4 border-[#b8925d] bg-[#f7e7bf] rounded-r-lg shadow-sm transition-all overflow-hidden">
          <summary className="p-4 cursor-pointer font-bold text-lg text-[#2b1d0f] list-none flex justify-between items-center group-open:bg-[#f3e7c2]">
            4. Data Integration & Discretization
            <span className="group-open:rotate-180 transition-transform text-sm opacity-50 text-[#2b1d0f]">▼</span>
          </summary>
          <div className="p-4 pt-0 text-[#3a2a14] bg-[#f3e7c2]/30">
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Data Integration:</strong> Combining data from multiple sources (databases, files, APIs) while resolving entity identification problems and handling redundant attributes.</li>
              <li><strong>Data Discretization (Binning):</strong> Converting continuous data into categorical groups. (e.g., grouping ages: 0-18 = child, 19-60 = adult, 60+ = senior).</li>
            </ul>
          </div>
        </details>
      </div>
    </section>
  </div>
);
