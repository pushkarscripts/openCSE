export function Ch3Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Benefits and Challenges</h2>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Benefits of Cloud Computing</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Cost Savings:</strong> No upfront capital expenditure on hardware. Pay-as-you-go pricing reduces waste.</li>
        <li><strong>Scalability:</strong> Automatically adjust resources based on demand.</li>
        <li><strong>Reliability:</strong> Built-in redundancy, automatic failover, disaster recovery.</li>
        <li><strong>Performance:</strong> Access to cutting-edge hardware without maintenance burden.</li>
        <li><strong>Security:</strong> Professional-grade security infrastructure.</li>
        <li><strong>Flexibility:</strong> Choose from various service and deployment models.</li>
        <li><strong>Accessibility:</strong> Access services from anywhere with internet.</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Challenges of Cloud Computing</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Security and Privacy:</strong> Storing sensitive data on third-party servers raises concerns about breaches, unauthorized access, and compliance.</li>
        <li><strong>Vendor Lock-in:</strong> Migrating from one cloud provider to another is complex and expensive. Proprietary services tie organizations to one vendor.</li>
        <li><strong>Network Dependency:</strong> Complete reliance on internet connectivity.</li>
        <li><strong>Performance Variability:</strong> Potential latency for real-time applications.</li>
        <li><strong>Compliance Issues:</strong> Regulated industries (healthcare, banking) must ensure cloud providers meet legal standards like HIPAA, GDPR, RBI guidelines.</li>
        <li><strong>Cost Management:</strong> Unexpected charges if resources not monitored.</li>
        <li><strong>Latency:</strong> For real-time applications, network delays between user and cloud data center can be a problem..</li>
      
      </ul>
    </div>
  );
}