export function Ch9Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Public Cloud</h2>
      <p>Infrastructure provisioned for open use by the general public, owned by a cloud provider.</p>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Major Providers</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>AWS:</strong> Most popular, comprehensive services</li>
        <li><strong>Microsoft Azure:</strong> Strong enterprise integration</li>
        <li><strong>Google Cloud (GCP):</strong> Excellent data analytics</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Advantages</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>No upfront capital investment</li>
        <li>Unlimited scalability</li>
        <li>High reliability with built-in redundancy</li>
        <li>Access from anywhere globally</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Disadvantages</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Limited control and customization</li>
        <li>Security concerns with shared infrastructure</li>
        <li>Vendor lock-in risk</li>
        <li>Compliance challenges</li>
      </ul>
    </div>
  );
}