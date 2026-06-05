export function Ch2Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Cloud Computing Models</h2>
      <p>
        Cloud computing is offered through three primary service models, each providing a different level of control, flexibility, and management. Understanding these models helps organizations choose the right approach for their needs.
      </p>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Public Cloud</h3>
      <p>Infrastructure provisioned for open use by the general public.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Advantages:</strong> Cost-effective, scalable, no maintenance</li>
        <li><strong>Disadvantages:</strong> Less control, potential security concerns</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Private Cloud</h3>
      <p>Infrastructure provisioned for exclusive use by one organization.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Advantages:</strong> Greater control, security, customization</li>
        <li><strong>Disadvantages:</strong> Higher costs, requires dedicated staff</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Hybrid Cloud</h3>
      <p>Composition of two or more distinct cloud infrastructures.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Advantages:</strong> Flexibility, cost optimization, balance</li>
        <li><strong>Disadvantages:</strong> Complexity, integration challenges</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Community Cloud</h3>
      <p>Infrastructure provisioned for a specific community of consumers.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Advantages:</strong> Shared resources, reduced costs</li>
        <li><strong>Disadvantages:</strong> Limited scalability, niche use cases</li>
      </ul>
    </div>
  );
}