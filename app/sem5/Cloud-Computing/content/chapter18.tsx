export function Ch18Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Data Protection</h2>
      <p>
        Data protection in the cloud refers to the policies, tools, and processes used to safeguard data from loss, corruption, or unauthorized access throughout its lifecycle.
      </p>
            <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Types of data in cloud</h3>
            <ul className="list-disc ml-6 space-y-2">
                <li><strong>Structured data: </strong>Databases, spreadsheets (SQL tables, CSV files)</li>
                <li><strong>Unstructured data: </strong>Emails, images, videos, documents</li>
                <li><strong>Semi-structured data: </strong>JSON, XML, logs</li>
                <li><strong>Data at rest: </strong>Stored data on disks/databases</li>
                <li><strong>Data in transit: </strong>Data moving between systems over a network</li>
                <li><strong>Data in use: </strong>Data actively being processed in memory</li>
            </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Encryption Types</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>At Rest:</strong> All stored data is encrypted using AES-256. Even if disks are stolen, data is unreadable without the key.</li>
        <li><strong>In Transit:</strong> TLS/SSL protocols encrypt data while it moves between client and server.</li>
        <li><strong>In Use:</strong> Data actively being processed is encrypted</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Encryption Algorithms</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Symmetric:</strong> Same key for encrypt/decrypt (AES, DES)</li>
        <li><strong>Asymmetric:</strong> Different keys (RSA, ECC)</li>
        <li><strong>Hashing:</strong> One-way conversion (SHA-256, MD5)</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Data Classification</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Public:</strong> No restriction</li>
        <li><strong>Internal:</strong> Within organization only</li>
        <li><strong>Confidential:</strong> Limited access</li>
        <li><strong>Restricted:</strong> Highly sensitive, minimal access</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Compliance Standards</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>GDPR:</strong> European General Data Protection Regulation</li>
        <li><strong>HIPAA:</strong> Healthcare data protection (USA)</li>
        <li><strong>PCI DSS:</strong> Payment card data protection</li>
        <li><strong>SOC 2:</strong> Security and operational controls</li>
      </ul>
    </div>
  );
}