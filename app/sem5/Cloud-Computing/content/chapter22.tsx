export function Ch22Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Microsoft Azure</h2>
      <p>Microsoft Azure is the second-largest cloud provider, deeply integrated with Microsoft's enterprise ecosystem (Windows Server, Active Directory, Office 365, Teams). It is the preferred choice for enterprises already running Microsoft products.</p>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Compute</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Virtual Machines:</strong> Windows and Linux VMs</li>
        <li><strong>App Service:</strong> Web and mobile app hosting</li>
        <li><strong>Azure Functions:</strong> Serverless computing</li>
        <li><strong>AKS:</strong> Managed Kubernetes Service</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Database</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>SQL Database:</strong> Managed SQL Server</li>
        <li><strong>Cosmos DB:</strong> Multi-model, globally distributed NoSQL database with 99.999% SLA.</li>
        <li><strong>Azure PostgreSQL/MySQL:</strong> Managed open-source DBs</li>
        <li><strong>Azure Synapse Analytics: </strong>Unified analytics service combining data warehousing and big data.</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Enterprise Integration</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Active Directory integration</li>
        <li>Office 365 / Microsoft 365 seamless integration</li>
        <li>Strong hybrid cloud capabilities</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">AI/ML Services</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Azure AI — pre-built models</li>
        <li>Azure Machine Learning — custom models</li>
        <li>Cognitive Services — vision, speech, language</li>
      </ul>
    </div>
  );
}