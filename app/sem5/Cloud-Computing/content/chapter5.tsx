export function Ch5Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Infrastructure as a Service (IaaS)</h2>
      <p>IaaS provides virtualized computing resources over the internet. You rent IT infrastructure instead of buying and maintaining it.</p>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Core Components</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Compute:</strong> Virtual machines with customizable CPU, RAM, storage</li>
        <li><strong>Storage:</strong> Object storage, block storage, file storage</li>
        <li><strong>Networking:</strong> Virtual networks, load balancers, firewalls, VPNs</li>
        <li><strong>Databases:</strong> Managed database services (MySQL, PostgreSQL, NoSQL)</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Key Benefits</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Flexibility:</strong> Scale resources up or down as needed</li>
        <li><strong>Cost-Effective:</strong> No capital investment in hardware</li>
        <li><strong>Reliability:</strong> Built-in redundancy and backups</li>
        <li><strong>Performance:</strong> Enterprise-grade infrastructure</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Examples</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>AWS: EC2, S3, RDS</li>
        <li>Microsoft Azure Virtual Machines</li>
        <li>Google Cloud Compute Engine</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Use Cases</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Web application hosting</li>
        <li>Development and test environments</li>
        <li>High-performance computing</li>
        <li>Big data analysis</li>
      </ul>
    </div>
  );
}