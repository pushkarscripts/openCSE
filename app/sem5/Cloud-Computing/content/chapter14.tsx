export function Ch14Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Microservices Architecture</h2>
      <p>An architectural approach where an application is built as a collection of small, independent, loosely-coupled services.</p>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Characteristics</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Small and Focused:</strong> Each service handles one business function</li>
        <li><strong>Independent Deployment:</strong> Deploy services without affecting others</li>
        <li><strong>Loose Coupling:</strong> Services communicate through APIs</li>
        <li><strong>Multiple Technologies:</strong> Different tech stacks per service</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Advantages</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Scale individual services independently</li>
        <li>Failure in one service doesn't crash entire app</li>
        <li>Teams can work on services independently</li>
        <li>Easier to maintain smaller codebases</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Disadvantages</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Distributed system complexity</li>
        <li>Data consistency challenges</li>
        <li>Network latency between services</li>
        <li>More services to monitor</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Key Patterns</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>API Gateway:</strong> Single entry point for clients</li>
        <li><strong>Service Discovery:</strong> Finding services dynamically</li>
        <li><strong>Saga Pattern:</strong> Distributed transactions</li>
        <li><strong>Strangler Pattern:</strong> Gradually replace monolith</li>
      </ul>
    </div>
  );
}