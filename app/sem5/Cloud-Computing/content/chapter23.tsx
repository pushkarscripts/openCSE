export function Ch23Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Google Cloud Platform (GCP)</h2>
      <p>Google Cloud Platform is the third-largest cloud provider, known for its leadership in data analytics, machine learning, and Kubernetes (which Google invented). It powers Google Search, YouTube, and Gmail — demonstrating extreme scale and reliability.</p>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Compute</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Compute Engine:</strong>IaaS VMs with custom machine types. Sustained use discounts automatically applied.</li>
        <li><strong>App Engine:</strong> Fully managed PaaS. Zero server management.</li>
        <li><strong>Cloud Run:</strong> Run containerized apps in a fully serverless environment. Scales to zero.</li>
        <li><strong>GKE(Google Kubernetes Engine):</strong>The most mature managed Kubernetes service — GCP invented Kubernetes.</li>
      </ul>
       <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Storage</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Cloud Storage:</strong>Object storage with four classes — Standard, Nearline, Coldline, Archive — optimized for different access frequencies.</li>
        <li><strong>Persistent Disk / Hyperdisk:</strong>Block storage for Compute Engine VMs.</li>
        <li><strong>Filestore: </strong>Managed NFS file storage.</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Database</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Cloud SQL: </strong>Managed MySQL, PostgreSQL, and SQL Server.</li>
        <li><strong>Cloud Spanner: </strong>Globally distributed, horizontally scalable relational database — unique to GCP. Combines ACID transactions with global scale.</li>
        <li><strong>Firestore / Datastore: </strong>Serverless NoSQL document database for mobile and web apps.</li>
        <li><strong>Bigtable: </strong>Petabyte-scale NoSQL for time-series, IoT, and analytics workloads. Powers Google Search internally</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Data Analytics</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>BigQuery:</strong> Data warehouse for large-scale analytics</li>
        <li><strong>Dataflow:</strong> Data pipeline processing</li>
        <li><strong>Pub/Sub:</strong> Real-time messaging</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Machine Learning</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Vertex AI:</strong> Unified ML platform</li>
        <li><strong>TensorFlow:</strong> Open-source ML framework</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Unique Advantages</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Best-in-class BigQuery analytics</li>
        <li>Strong ML/AI capabilities</li>
        <li>Competitive pricing with no upfront commitment</li>
      </ul>
    </div>
  );
}