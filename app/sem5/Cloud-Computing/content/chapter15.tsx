export function Ch15Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Scalability Patterns</h2>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Horizontal Scaling (Scale Out)</h3>
      <p>Adding more servers/instances. Load distributed across multiple servers.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Unlimited scalability potential</li>
        <li>High availability and fault tolerance</li>
        <li>More complex to manage</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Vertical Scaling (Scale Up)</h3>
      <p>Adding more power (CPU, RAM) to existing servers.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Simple to implement</li>
        <li>Limited by hardware capabilities</li>
        <li>Single point of failure</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Auto-Scaling Strategies</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Metric-Based:</strong> Scale based on CPU, memory, network usage</li>
        <li><strong>Time-Based:</strong> Scale at predictable times</li>
        <li><strong>Predictive:</strong> ML to predict future needs</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Load Balancing</h3>
      <p>Distributes incoming requests across multiple servers.</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Round-robin</li>
        <li>Least connections</li>
        <li>IP hash</li>
        <li>Weighted distribution</li>
      </ul>
    </div>
  );
}