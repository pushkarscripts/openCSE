export function Ch19Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Network Security</h2>
      <p>
        Network security in the cloud involves protecting the cloud infrastructure's communication channels, controlling traffic flow, and preventing unauthorized access to cloud-hosted resources.
      </p>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Virtual Private Cloud</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>A logically isolated section of the cloud where you launch resources in a virtual network you define</li>
        <li>You control IP address ranges, subnets, routing tables, and internet gateways</li>
        <li>Resources inside a VPC are isolated from other customers' resources on the same physical hardware</li>
        <li>Example: AWS VPC, Azure Virtual Network (VNet), Google VPC</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Firewalls & Security Groups</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Security Groups: </strong>Virtual firewalls at the instance level. Define inbound and outbound traffic rules by port, protocol, and IP.</li>
        <li><strong>Network ACLs (Access Control Lists): </strong>Stateless firewalls at the subnet level. Control traffic entering and leaving subnets.</li>
        <li><strong>Web Application Firewall (WAF):</strong>Protects web apps from common attacks — SQL injection, cross-site scripting (XSS), DDoS at Layer 7.</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Threat Protection</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>DDoS Protection:</strong> Distributed Denial of Service attacks flood services with traffic to make them unavailable</li>
        <li><strong>IDS/IPS:</strong> Intrusion Detection/Prevention Systems</li>
        
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Monitoring & Logging</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>VPC Flow Logs:</strong> Log network flow information</li>
        <li><strong>CloudTrail:</strong> Track all API calls</li>
        <li><strong>Security Hub:</strong> Centralized security findings</li>
      </ul>
    </div>
  );
}