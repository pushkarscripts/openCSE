export function Ch1Content() {
  return (
    <div className="prose prose-invert max-w-none text-[#e2d1c1]"
      style={{ fontFamily: "Rockwell, Serif, serif" }}>

      <h2 className="text-3xl font-bold text-[#fccc7e] mb-4">What is Cloud Computing</h2>

      <p>Cloud computing is the delivery of computing services—servers, storage, databases,
      networking, software, analytics, and intelligence—over the Internet to offer faster
      innovation, flexible resources, and economies of scale. Rather than owning and
      maintaining physical data centers and servers, you can access technology services
      on an as-needed basis from a cloud provider.</p>

      <p className="mt-3">The term "cloud" refers to the Internet, and cloud computing means storing
      and accessing data and programs over the Internet instead of your computer's hard drive.
      It shifts computing from a product to a service, much like electricity — you use what
      you need and pay accordingly.</p>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6 mb-3">A Brief History</h3>
      <ul>
        <li><strong>1960s:</strong> John McCarthy proposed that computing could be sold as a utility, like water or electricity.</li>
        <li><strong>1999:</strong> Salesforce pioneered delivering enterprise applications via the internet.</li>
        <li><strong>2002:</strong> Amazon launched Amazon Web Services (AWS) offering cloud-based storage and computation.</li>
        <li><strong>2006:</strong> AWS launched EC2 (Elastic Compute Cloud) — a major milestone in public cloud.</li>
        <li><strong>2008:</strong> Google and Microsoft entered the cloud market with Google App Engine and Azure.</li>
        <li><strong>2010s–present:</strong> Cloud became mainstream; hybrid and multi-cloud strategies emerged.</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6 mb-3">Key Characteristics</h3>
      <p>The National Institute of Standards and Technology (NIST) defines five essential characteristics of cloud computing:</p>
      <ul  className="list-disc ml-6 space-y-1">
        <li>
          <strong>On-demand self-service:</strong> Users can provision computing resources—such as server time and network storage—automatically without requiring human interaction with the service provider. For example, spinning up a virtual machine takes minutes through a web portal.
        </li>
        <li>
          <strong>Broad network access:</strong> Cloud capabilities are available over the network and accessed through standard mechanisms — desktops, laptops, tablets, and smartphones can all connect to cloud services via the internet.
        </li>
        <li>
          <strong>Resource pooling:</strong> The provider's computing resources are pooled to serve multiple consumers using a multi-tenant model. Physical and virtual resources are dynamically assigned and reassigned per demand. Users generally do not control or know the exact location of the provided resources.
        </li>
        <li>
          <strong>Rapid elasticity:</strong> Resources can be elastically provisioned and released to scale rapidly outward and inward with demand. To the consumer, the resources available appear unlimited and can be purchased in any quantity at any time.
        </li>
        <li>
          <strong>Measured service:</strong> Cloud systems automatically control and optimize resource use through metering. Resource usage can be monitored, controlled, and reported — providing transparency for both the provider and consumer. You pay only for what you use.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6 mb-3">How Cloud Computing Works</h3>
      <p>Cloud computing relies on a front-end (client side) and back-end (server side) connected through the internet:</p>
      <ul  className="list-disc ml-6 space-y-1">
        <li><strong>Front-end:</strong> The client's computer or network, plus the application used to access the cloud (e.g., a web browser or app).</li>
        <li><strong>Back-end:</strong> The cloud itself — servers, computers, databases, and central servers managed by the cloud provider.</li>
        <li><strong>Network:</strong> The internet acts as the bridge between front-end and back-end.</li>
        <li><strong>Middleware:</strong> Software that allows networked computers to communicate with each other.</li>
        <li><strong>Virtualization:</strong> A core technology that allows a single physical server to act as multiple virtual machines, maximizing hardware utilization.</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6 mb-3">Why Cloud Computing Matters</h3>
      <ul  className="list-disc ml-6 space-y-1">
        <li>
          <strong>Cost Efficiency:</strong> Eliminates the capital expense of buying hardware and software. You only pay for the services you use, which helps reduce operating costs, run infrastructure more efficiently, and scale as business needs change.
        </li>
        <li>
          <strong>Scalability:</strong> Cloud services can scale up or down automatically based on usage. A startup can start small and scale to millions of users without changing their architecture.
        </li>
        <li>
          <strong>Reliability:</strong> Major cloud providers offer 99.99% uptime SLAs with data backed up across multiple redundant sites, ensuring business continuity even during hardware failures.
        </li>
        <li>
          <strong>Innovation Speed:</strong> Developers can provision test environments in minutes. New features and applications can be deployed globally without waiting weeks for hardware procurement.
        </li>
        <li>
          <strong>Global Reach:</strong> Cloud providers operate data centers across the world. Applications can be deployed closer to end users to reduce latency and improve performance.
        </li>
        <li>
          <strong>Security:</strong> Leading cloud providers invest heavily in security certifications, compliance programs, and teams of dedicated security professionals — often exceeding what most organizations can achieve on-premise.
        </li>
        <li>
          <strong>Automatic Updates:</strong> Cloud providers handle software updates and patches, freeing IT teams to focus on business priorities rather than maintenance.
        </li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6 mb-3">Real-World Examples</h3>
      <ul  className="list-disc ml-6 space-y-1">
        <li><strong>Netflix:</strong> Streams to 200+ million users worldwide using AWS cloud infrastructure.</li>
        <li><strong>Gmail / Google Drive:</strong> Store emails and documents on Google's cloud servers, accessible from any device.</li>
        <li><strong>Zoom:</strong> Runs video conferencing infrastructure on cloud platforms to handle millions of simultaneous calls.</li>
        <li><strong>Dropbox:</strong> Provides cloud-based file storage and sync across devices.</li>
        <li><strong>Swiggy / Zomato:</strong> Use cloud to handle massive traffic spikes during peak hours without maintaining dedicated servers.</li>
      </ul>

      <h3 className="text-2xl font-bold text-[#fccc7e] mt-6 mb-3">Types of Cloud Users</h3>
      <ul  className="list-disc ml-6 space-y-1">
        <li><strong>Individual Users:</strong> Use cloud for personal storage (Google Photos, iCloud), productivity (Office 365), and entertainment (Spotify, Netflix).</li>
        <li><strong>Small & Medium Businesses:</strong> Use cloud to run websites, manage CRM, and collaborate without heavy IT investment.</li>
        <li><strong>Large Enterprises:</strong> Use cloud for big data analytics, AI/ML workloads, global app deployment, and disaster recovery.</li>
        <li><strong>Government & Education:</strong> Use cloud for citizen services, e-governance platforms, and virtual learning environments.</li>
      </ul>

    </div>
  );
}