export const MlopsDeploymentContent = () => (
  <div className="course-content">
    <section id="mlops" className="scroll-mt-24">
      <h3 className="section-heading text-xl">4. MLOps & Model Deployment</h3>
      <p className="p-text mb-4">
        A machine learning model is useless if it sits isolated in a Jupyter Notebook. MLOps (Machine Learning Operations) focuses on reliably deploying, maintaining, and monitoring models in production environments.
      </p>

      <h4 className="font-bold text-lg text-[#fccc7e] mb-2">1. Model Serialization</h4>
      <p className="p-text text-sm mb-4">
        Once trained, a model must be saved to disk so it can be loaded later without retraining. In Python, this is typically done using the <code className="text-[#fccc7e] bg-black/30 px-1.5 py-0.5 rounded font-mono text-xs">pickle</code> or <code className="text-[#fccc7e] bg-black/30 px-1.5 py-0.5 rounded font-mono text-xs">joblib</code> libraries to serialize the model object into a binary `.pkl` file.
      </p>

      <details className="bg-[#fdf5e6] p-4 rounded-lg border border-[#c7a669] my-4 cursor-pointer group" open>
        <summary className="font-bold text-[#2b1d0f] outline-none hover:text-[#8b5a2b] transition-colors">
          Deep Dive: Serving the Model via REST API
        </summary>
        <div className="mt-4 text-[#2b1d0f] text-sm space-y-3">
          <p>To let other applications (like web or mobile frontends) use the model, it is wrapped in an API (commonly using Flask or FastAPI).</p>
          
          <div className="bg-[#1e1e1e] font-mono text-[#569cd6] p-4 rounded text-xs overflow-x-auto whitespace-pre">
<span className="text-[#c586c0]">import</span> pickle<br/>
<span className="text-[#c586c0]">from</span> flask <span className="text-[#c586c0]">import</span> Flask, request, jsonify<br/><br/>

<span className="text-[#4ec9b0]">app</span> = Flask(__name__)<br/>
model = pickle.load(<span className="text-[#4ec9b0]">open</span>(<span className="text-[#ce9178]">&apos;model.pkl&apos;</span>, <span className="text-[#ce9178]">&apos;rb&apos;</span>))<br/><br/>

<span className="text-[#dcdcaa]">@app.route</span>(<span className="text-[#ce9178]">&apos;/predict&apos;</span>, methods=[<span className="text-[#ce9178]">&apos;POST&apos;</span>])<br/>
<span className="text-[#c586c0]">def</span> <span className="text-[#dcdcaa]">predict</span>():<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;data = request.get_json()<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;prediction = model.predict([data[<span className="text-[#ce9178]">&apos;features&apos;</span>]])<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#c586c0]">return</span> jsonify({"{"}<span className="text-[#ce9178]">&apos;prediction&apos;</span>: prediction.tolist(){"}"})<br/>
          </div>
        </div>
      </details>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-6">
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold mb-2">2. Containerization (Docker)</h4>
          <p className="text-sm">
            Deploying raw Python scripts can lead to &quot;it works on my machine&quot; errors due to dependency mismatches. Docker encapsulates the Model, API, Python runtime, and exact library versions (e.g., scikit-learn v1.0.2) into an isolated Container that runs identically anywhere.
          </p>
        </div>
        <div className="card bg-[#e6d0a7] p-4 rounded-lg shadow-sm border border-[#c7a669] text-[#2b1d0f]">
          <h4 className="font-bold mb-2">3. Model Monitoring</h4>
          <p className="text-sm">
            Models degrade over time as the real world changes. <strong>Concept Drift</strong> occurs when the statistical properties of the target variable change (e.g., a fraud detection model trained in 2019 fails in 2021 due to new fraud tactics). Constant monitoring and retraining pipelines are essential.
          </p>
        </div>
      </div>
    </section>
  </div>
);
