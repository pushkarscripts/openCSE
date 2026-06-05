export function Ch20Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Compliance & Governance</h2>
      <p>
        Cloud governance refers to the policies, controls, and processes that ensure cloud resources are used securely, efficiently, and in alignment with business and regulatory requirements.
      </p>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Compliance Frameworks</h3>
      <ul className="list-disc ml-6 space-y-3">
        <li><strong>GDPR:</strong> EU data protection — requires consent, right to be forgotten</li>
        <li><strong>HIPAA:</strong> Healthcare standard — protects patient health information</li>
        <li><strong>PCI DSS:</strong> Payment card data — encryption, regular security testing</li>
        <li><strong>SOC 2:</strong> Security/availability controls — independent audit required</li>
        <li><strong>India DPDP Act 2023:</strong>Regulates processing of digital personal data of Indian residents</li>
        <li><strong>RBI Guidelines:</strong>Reserve Bank of India mandates for financial data localization and cloud usage by banks</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Governance Policies</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Password Policy:</strong> Complexity and expiration requirements</li>
        <li><strong>Access Policy:</strong> Who can access what resources</li>
        <li><strong>Encryption Policy:</strong> What data must be encrypted</li>
        <li><strong>Backup Policy:</strong> Frequency and retention rules</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Shared Responsibility Model</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Provider:</strong> Infrastructure security</li>
        <li><strong>Customer:</strong> Application security and data protection</li>
        <li><strong>Shared:</strong> Access management and configuration</li>
      </ul>
    </div>
  );
}