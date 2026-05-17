export const Ch7Content = () => {
  return (
    <div className="course-content">

      {/* Module Intro */}
      <section>
        <p className="p-text">
          <strong>Module VII: Introduction to DevOps.</strong> This module introduces
          the fundamentals of DevOps, its workflow, collaboration practices,
          automation concepts, monitoring, and the tools commonly used in
          modern software development and deployment environments.
        </p>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* What is DevOps */}
      <section>
        <h2 className="section-heading">
          What is DevOps?
        </h2>

        <p className="p-text">
          DevOps is a combination of <strong>Development (Dev)</strong> and
          <strong> Operations (Ops)</strong>. It is a modern software development
          approach that focuses on collaboration, automation, continuous testing,
          and faster delivery of applications.
        </p>

        <p className="p-text">
          Traditionally, developers wrote software while operations teams handled
          deployment and maintenance separately. DevOps combines both teams to
          improve communication, speed, and reliability.
        </p>

        <div className="mt-6">
          <h4 className="text-2xl font-bold mb-4">
            Traditional vs DevOps Workflow
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-[#8b5e47] rounded-lg p-5">
              <h4 className="text-2xl font-bold mb-3 text-center">
                Traditional Workflow
              </h4>

              <div className="space-y-3 text-center">
                <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg py-3">
                  Development Team
                </div>

                <div className="text-2xl">↓</div>

                <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg py-3">
                  Testing Team
                </div>

                <div className="text-2xl">↓</div>

                <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg py-3">
                  Operations Team
                </div>
              </div>
            </div>

            <div className="bg-[#8b5e47] rounded-lg p-5">
              <h4 className="text-2xl font-bold mb-3 text-center">
                DevOps Workflow
              </h4>

              <div className="space-y-3 text-center">
                <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg py-3">
                  Development + Operations Collaboration
                </div>

                <div className="text-2xl">↓</div>

                <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg py-3">
                  Automated Testing & Deployment
                </div>

                <div className="text-2xl">↓</div>

                <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg py-3">
                  Continuous Delivery
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Goals */}
      <section>
        <h2 className="section-heading">
          Goals of DevOps
        </h2>

        <p className="p-text">
          DevOps aims to improve software quality, reduce deployment time,
          automate repetitive tasks, and enhance collaboration between teams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

          <div className="bg-[#8b5e47] rounded-lg p-5">
            <h4 className="text-2xl font-bold">
              Faster Delivery
            </h4>

            <p className="mt-2">
              Applications can be developed and deployed more quickly.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5">
            <h4 className="text-2xl font-bold">
              Better Collaboration
            </h4>

            <p className="mt-2">
              Developers and operations teams work together efficiently.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5">
            <h4 className="text-2xl font-bold">
              Automation
            </h4>

            <p className="mt-2">
              Reduces manual tasks and human errors.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5">
            <h4 className="text-2xl font-bold">
              Reliability
            </h4>

            <p className="mt-2">
              Improves software stability and monitoring.
            </p>
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* DevOps Lifecycle */}
      <section>
        <h2 className="section-heading">
          DevOps Lifecycle
        </h2>

        <p className="p-text">
          The DevOps lifecycle represents the continuous stages involved in
          software development, testing, deployment, and monitoring.
        </p>

        <div className="mt-6 space-y-3 text-center">

          <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
            Planning
          </div>

          <div className="text-3xl">↓</div>

          <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
            Development
          </div>

          <div className="text-3xl">↓</div>

          <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
            Testing
          </div>

          <div className="text-3xl">↓</div>

          <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
            Deployment
          </div>

          <div className="text-3xl">↓</div>

          <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
            Monitoring
          </div>

          <div className="text-3xl">↓</div>

          <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
            Continuous Feedback
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* CI CD */}
      <section>
        <h2 className="section-heading">
          Continuous Integration & Continuous Delivery
        </h2>

        <p className="p-text">
          Continuous Integration (CI) and Continuous Delivery (CD) are important
          DevOps practices used to automate software building, testing,
          and deployment.
        </p>

        <div className="overflow-x-auto mt-6">

          <table className="w-full border border-[#c7a669]">

            <thead className="bg-[#8b5e47]">
              <tr>

                <th className="border border-[#c7a669] p-3 text-left">
                  Concept
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Description
                </th>

              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>
                <td className="border border-[#c7a669] p-3">
                  Continuous Integration (CI)
                </td>

                <td className="border border-[#c7a669] p-3">
                  Automatically tests and integrates code changes.
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  Continuous Delivery (CD)
                </td>

                <td className="border border-[#c7a669] p-3">
                  Automatically prepares software for deployment.
                </td>
              </tr>

            </tbody>

          </table>
        </div>

        <div className="mt-6 space-y-3 text-center">

          <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
            Developer Pushes Code
          </div>

          <div className="text-3xl">↓</div>

          <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
            Automated Build & Testing
          </div>

          <div className="text-3xl">↓</div>

          <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
            Deployment to Server
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* DevOps Tools */}
      <section>
        <h2 className="section-heading">
          Popular DevOps Tools
        </h2>

        <p className="p-text">
          Different tools are used in DevOps pipelines for automation,
          version control, deployment, monitoring, and containerization.
        </p>

        <div className="overflow-x-auto mt-6">

          <table className="w-full border border-[#c7a669]">

            <thead className="bg-[#8b5e47]">
              <tr>

                <th className="border border-[#c7a669] p-3 text-left">
                  Tool
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Purpose
                </th>

              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>
                <td className="border border-[#c7a669] p-3">Git</td>
                <td className="border border-[#c7a669] p-3">
                  Version control system
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">GitHub</td>
                <td className="border border-[#c7a669] p-3">
                  Repository hosting and collaboration
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">Docker</td>
                <td className="border border-[#c7a669] p-3">
                  Containerization platform
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">Jenkins</td>
                <td className="border border-[#c7a669] p-3">
                  CI/CD automation tool
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">Kubernetes</td>
                <td className="border border-[#c7a669] p-3">
                  Container orchestration platform
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">Prometheus</td>
                <td className="border border-[#c7a669] p-3">
                  Monitoring and metrics collection
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Infrastructure as Code */}
      <section>
        <h2 className="section-heading">
          Infrastructure as Code (IaC)
        </h2>

        <p className="p-text">
          Infrastructure as Code is a DevOps practice where infrastructure
          configuration is managed using code instead of manual setup.
        </p>

        <p className="p-text">
          IaC allows servers, networks, and cloud resources to be created,
          modified, and managed automatically.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

          <div className="bg-[#8b5e47] rounded-lg p-5">
            <h4 className="text-2xl font-bold">
              Manual Infrastructure
            </h4>

            <p className="mt-2">
              Slow, repetitive, and error-prone setup process.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5">
            <h4 className="text-2xl font-bold">
              Infrastructure as Code
            </h4>

            <p className="mt-2">
              Automated, repeatable, and scalable configuration.
            </p>
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Monitoring */}
      <section>
        <h2 className="section-heading">
          Monitoring and Logging
        </h2>

        <p className="p-text">
          Monitoring helps track application performance, server health,
          resource usage, and system availability.
        </p>

        <p className="p-text">
          Logging stores records of events and errors for troubleshooting
          and security analysis.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Monitoring
            </h4>

            <p className="mt-2">
              Tracks system performance in real time.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Logging
            </h4>

            <p className="mt-2">
              Stores detailed system and application events.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Alerts
            </h4>

            <p className="mt-2">
              Sends notifications when issues occur.
            </p>
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Benefits */}
      <section>
        <h2 className="section-heading">
          Benefits of DevOps
        </h2>

        <ul className="section-list mt-4">
          <li>Faster software development and deployment</li>
          <li>Improved collaboration between teams</li>
          <li>Reduced deployment failures</li>
          <li>Better automation and scalability</li>
          <li>Continuous monitoring and reliability</li>
          <li>Efficient management of cloud infrastructure</li>
        </ul>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Summary */}
      <section>
        <h2 className="section-heading">
          Summary
        </h2>

        <p className="p-text">
          In this chapter, we explored DevOps fundamentals, DevOps lifecycle,
          CI/CD concepts, infrastructure automation, monitoring, collaboration,
          and important DevOps tools. DevOps plays a critical role in modern
          software engineering, cloud computing, and scalable infrastructure management.
        </p>
      </section>

    </div>
  );
};

