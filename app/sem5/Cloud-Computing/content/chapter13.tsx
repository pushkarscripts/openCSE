export function Ch13Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Cloud-Native Architecture</h2>
      <p>Designed specifically for cloud environments, emphasizing scalability, resilience, and agility.</p>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Key Principles</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Microservices:</strong> Break applications into small, independent services</li>
        <li><strong>Containerization:</strong> Package applications in lightweight containers</li>
        <li><strong>Orchestration:</strong> Automate deployment, scaling, and management</li>
        <li><strong>DevOps:</strong> Integrate development and operations</li>
        <li><strong>Immutable Infrastructure:</strong> Infrastructure treated as replaceable</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Technologies</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Docker for containerization</li>
        <li>Kubernetes for orchestration</li>
        <li>Serverless / FaaS platforms</li>
        <li>CI/CD pipelines</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Design Patterns</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>API-First:</strong> Design APIs before implementation</li>
        <li><strong>Event-Driven:</strong> Services communicate via events</li>
        <li><strong>Circuit Breaker:</strong> Prevent cascading failures</li>
        <li><strong>Database Per Service:</strong> Each service has its own database</li>
      </ul>
    </div>
  );
}