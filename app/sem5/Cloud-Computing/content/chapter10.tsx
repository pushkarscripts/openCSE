export function Ch10Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Private Cloud</h2>
      <p>Infrastructure provisioned for exclusive use by a single organization, offering greater control and security.</p>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Deployment Options</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>On-Premises:</strong> Hosted in organization's own data center</li>
        <li><strong>Hosted Private Cloud:</strong> Hosted by provider but dedicated to you</li>
        <li><strong>Managed Private Cloud:</strong> Third-party manages the infrastructure</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Advantages</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Complete control over security measures</li>
        <li>Meet industry-specific regulatory requirements</li>
        <li>Full customization of infrastructure</li>
        <li>Optimized for internal workloads</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Disadvantages</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>High capital investment and maintenance</li>
        <li>Requires skilled IT staff</li>
        <li>Limited scalability by purchased capacity</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Best For</h3>
      <p>Large enterprises, financial institutions, healthcare organizations, highly regulated industries.</p>
    </div>
  );
}