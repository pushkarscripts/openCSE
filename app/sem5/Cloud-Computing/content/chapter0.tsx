export const Ch0Content = () => (
  <div className="course-content">
    <p className="p-text">
      <span className="font-semibold">Cloud Computing</span> introduces the
      infrastructure, services, and deployment models that power the modern
      digital economy. This course helps you understand how cloud platforms
      work, the service models used by businesses, and the architectural
      principles every computing professional must know.
    </p>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Syllabus Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

        <div className="p-4 rounded-lg border border-[#c7a669] bg-[#f0ddb6] text-[#3a2a14]">
          <h4 className="font-bold text-lg mb-2">Unit 1: Introduction to Cloud</h4>
          <ul className="section-list text-sm">
            <li>What is Cloud Computing?</li>
            <li>History and evolution of the cloud</li>
            <li>Key characteristics of cloud services</li>
            <li>Cloud vs traditional computing</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg border border-[#c7a669] bg-[#f3e7c2] text-[#3a2a14]">
          <h4 className="font-bold text-lg mb-2">Unit 2: Cloud Service Models</h4>
          <ul className="section-list text-sm">
            <li>Infrastructure as a Service (IaaS)</li>
            <li>Platform as a Service (PaaS)</li>
            <li>Software as a Service (SaaS)</li>
            <li>Comparing service models</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg border border-[#c7a669] bg-[#f0ddb6] text-[#3a2a14]">
          <h4 className="font-bold text-lg mb-2">Unit 3: Deployment Models</h4>
          <ul className="section-list text-sm">
            <li>Public, Private & Hybrid Cloud</li>
            <li>Community Cloud</li>
            <li>Multi-cloud strategies</li>
            <li>Choosing the right deployment model</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg border border-[#c7a669] bg-[#f3e7c2] text-[#3a2a14]">
          <h4 className="font-bold text-lg mb-2">Unit 4: Cloud Architecture</h4>
          <ul className="section-list text-sm">
            <li>Cloud-native architecture principles</li>
            <li>Microservices and containerization</li>
            <li>Scalability and load balancing</li>
            <li>High availability & disaster recovery</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg border border-[#c7a669] bg-[#f0ddb6] text-[#3a2a14]">
          <h4 className="font-bold text-lg mb-2">Unit 5: Security & Compliance</h4>
          <ul className="section-list text-sm">
            <li>Identity & Access Management (IAM)</li>
            <li>Data protection and encryption</li>
            <li>Network security in the cloud</li>
            <li>Compliance and governance</li>
          </ul>
        </div>

        <div className="p-4 rounded-lg border border-[#c7a669] bg-[#f3e7c2] text-[#3a2a14]">
          <h4 className="font-bold text-lg mb-2">Unit 6: Cloud Platforms</h4>
          <ul className="section-list text-sm">
            <li>Amazon Web Services (AWS)</li>
            <li>Microsoft Azure overview</li>
            <li>Google Cloud Platform (GCP)</li>
            <li>Real-world deployment scenarios</li>
          </ul>
        </div>

      </div>
    </section>

    <hr className="my-6 border-[#c7a669] opacity-40" />

    <section>
      <h3 className="section-heading">Prerequisites</h3>
      <div className="p-3 my-3 rounded border-l-4 border-[#b8925d] bg-[#f7e7bf] text-[#2b1d0f]">
        <ul className="section-list mt-0">
          <li>Basic understanding of how the internet and networks work</li>
          <li>Familiarity with operating systems and file management</li>
          <li>No prior cloud experience required</li>
        </ul>
      </div>
    </section>
  </div>
);

export default Ch0Content;