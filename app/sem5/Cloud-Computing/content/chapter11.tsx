export function Ch11Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Hybrid Cloud</h2>
      <p>Combines public and private cloud infrastructure, allowing organizations to leverage benefits of both.</p>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Key Components</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Private Cloud:</strong> Internal infrastructure for sensitive workloads</li>
        <li><strong>Public Cloud:</strong> External resources for variable workloads</li>
        <li><strong>Integration Layer:</strong> Seamless communication between clouds</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Advantages</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Flexibility to choose best solution per workload</li>
        <li>Cost optimization using public cloud for variable needs</li>
        <li>Data sovereignty — keep sensitive data private</li>
        <li>Burst to public cloud during peak demand</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Use Cases</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Backup and disaster recovery</li>
        <li>Development and testing environments</li>
        <li>Variable workload handling</li>
        <li>Data compliance scenarios</li>
      </ul>
    </div>
  );
}