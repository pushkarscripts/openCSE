export function Ch21Content() {
  return (
    <div style={{ fontFamily: "Rockwell, Serif, serif" }} className="text-[#e2d1c1] space-y-4">
      <h2 className="text-3xl font-bold text-[#fccc7e]">Amazon Web Services (AWS)</h2>
      <p>
        Amazon Web Services is the world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. Launched in 2006, AWS holds the largest market share in cloud computing.
      </p>
      
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Compute</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>EC2(Elastic Compute Cloud):</strong> Virtual servers in the cloud. Choose from hundreds of instance types optimized for compute, memory, storage, or GPU workloads.</li>
        <li><strong>Lambda:</strong> Serverless compute — run code without provisioning servers. Pay per execution (millisecond billing).</li>
        <li><strong>Elastic Beanstalk:</strong>PaaS-style deployment — upload your code and AWS handles provisioning, load balancing, and scaling.</li>
        <li><strong>Lightsail:</strong>Simplified VPS service for small projects, with predictable pricing.</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Storage Services </h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>S3(Simple Storage Service): </strong> Object storage for any amount of data. Highly durable (99.999999999%). Used for backups, static website hosting, data lakes.</li>
        <li><strong>EBS(Elastic Block Store): </strong>Persistent block storage for EC2 instances (like a virtual hard disk).</li>
        <li><strong>EFS(Elastic File System): </strong>Managed NFS file storage shared across multiple EC2 instances.</li>
        <li><strong>Glacier / S3 Glacier Deep Archive: </strong>Low-cost archival storage. Retrieval takes minutes to hours.</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Database Service </h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>RDS(Relational Database Service): </strong> Managed relational databases( Managed MySQL, PostgreSQL, Oracle, SQL Server, MariaDB.)</li>
        <li><strong>DynamoDB:</strong> Fully managed NoSQL database with single-digit millisecond latency.</li>
        <li><strong>Redshift:</strong> Petabyte-scale data warehouse for analytics.</li>
        <li><strong>Aurora: </strong>AWS's own MySQL/PostgreSQL-compatible database — 5x faster than standard MySQL.</li>
        <li><strong>ElastiCache: </strong>In-memory caching with Redis or Memcached.</li>
      </ul>
      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6">Pricing Model</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>On-Demand:</strong> Pay for what you use</li>
        <li><strong>Spot Instances:</strong> Up to 90% discount for spare capacity</li>
        <li><strong>Reserved Instances:</strong> Commit for 1-3 years for discount</li>
      </ul>
    </div>
  );
}