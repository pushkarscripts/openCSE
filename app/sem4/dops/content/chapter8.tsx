export const Ch8Content = () => {
  return (
    <div className="course-content">

      {/* Module Intro */}
      <section>
        <p className="p-text">
          <strong>Module VIII: CI/CD, Docker & Cloud Basics.</strong>
          This module introduces Continuous Integration and Continuous Delivery,
          containerization using Docker, cloud computing fundamentals,
          deployment pipelines, and scalable modern infrastructure systems.
        </p>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* CI/CD */}
      <section>
        <h2 className="section-heading">
          What is CI/CD?
        </h2>

        <p className="p-text">
          CI/CD stands for <strong>Continuous Integration</strong> and
          <strong> Continuous Delivery/Deployment</strong>.
          It is a DevOps practice used to automate software development,
          testing, and deployment processes.
        </p>

        <p className="p-text">
          CI/CD helps teams deliver software updates quickly, reliably,
          and with fewer manual errors.
        </p>

        <div className="mt-6">
          <h4 className="text-2xl font-bold mb-4">
            CI/CD Pipeline
          </h4>

          <div className="space-y-3 text-center">

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Developer Writes Code
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Push to Git Repository
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Automated Build & Testing
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Deployment to Server
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Monitoring & Feedback
            </div>

          </div>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Continuous Integration */}
      <section>
        <h2 className="section-heading">
          Continuous Integration (CI)
        </h2>

        <p className="p-text">
          Continuous Integration is the process of automatically testing
          and integrating code changes into a shared repository.
        </p>

        <p className="p-text">
          Developers regularly push code updates, and automated systems
          check whether the application builds and works correctly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Automated Testing
            </h4>

            <p className="mt-2">
              Detects bugs quickly after code changes.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Frequent Commits
            </h4>

            <p className="mt-2">
              Encourages developers to push changes regularly.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Faster Development
            </h4>

            <p className="mt-2">
              Improves collaboration and software quality.
            </p>
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Continuous Delivery */}
      <section>
        <h2 className="section-heading">
          Continuous Delivery & Deployment
        </h2>

        <p className="p-text">
          Continuous Delivery automatically prepares software for release,
          while Continuous Deployment automatically deploys applications
          directly to production servers.
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
                  Continuous Delivery
                </td>

                <td className="border border-[#c7a669] p-3">
                  Software is ready for deployment anytime.
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  Continuous Deployment
                </td>

                <td className="border border-[#c7a669] p-3">
                  Software is automatically deployed after testing.
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Docker */}
      <section>
        <h2 className="section-heading">
          Introduction to Docker
        </h2>

        <p className="p-text">
          Docker is a containerization platform used to package applications
          and their dependencies into lightweight units called containers.
        </p>

        <p className="p-text">
          Containers ensure that applications run consistently across
          different systems and environments.
        </p>

        <div className="mt-6">
          <h4 className="text-2xl font-bold mb-4">
            Docker Architecture
          </h4>

          <div className="space-y-3 text-center">

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Application Code
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Docker Container
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Docker Engine
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Operating System
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

          <div className="bg-[#8b5e47] rounded-lg p-5">
            <h4 className="text-2xl font-bold">
              Lightweight
            </h4>

            <p className="mt-2">
              Containers use fewer resources compared to virtual machines.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5">
            <h4 className="text-2xl font-bold">
              Portable
            </h4>

            <p className="mt-2">
              Applications run consistently on different platforms.
            </p>
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Docker Commands */}
      <section>
        <h2 className="section-heading">
          Basic Docker Commands
        </h2>

        <div className="overflow-x-auto mt-6">

          <table className="w-full border border-[#c7a669]">

            <thead className="bg-[#8b5e47]">
              <tr>

                <th className="border border-[#c7a669] p-3 text-left">
                  Command
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Purpose
                </th>

              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>
                <td className="border border-[#c7a669] p-3">
                  docker pull
                </td>

                <td className="border border-[#c7a669] p-3">
                  Downloads Docker images
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  docker run
                </td>

                <td className="border border-[#c7a669] p-3">
                  Runs a container
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  docker ps
                </td>

                <td className="border border-[#c7a669] p-3">
                  Lists running containers
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  docker stop
                </td>

                <td className="border border-[#c7a669] p-3">
                  Stops a running container
                </td>
              </tr>

            </tbody>

          </table>
        </div>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-6 border border-[#c7a669]">

          <h4 className="text-2xl font-bold mb-3">
            Example
          </h4>

          <pre className="overflow-x-auto text-lg">
{`$ docker pull nginx

$ docker run -d -p 8080:80 nginx`}
          </pre>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Cloud Computing */}
      <section>
        <h2 className="section-heading">
          Introduction to Cloud Computing
        </h2>

        <p className="p-text">
          Cloud computing provides computing resources such as servers,
          storage, databases, and networking over the internet.
        </p>

        <p className="p-text">
          Instead of managing physical hardware locally, organizations can
          use cloud platforms to scale infrastructure easily.
        </p>

        <div className="mt-6">
          <h4 className="text-2xl font-bold mb-4">
            Cloud Service Models
          </h4>

          <div className="overflow-x-auto">

            <table className="w-full border border-[#c7a669]">

              <thead className="bg-[#8b5e47]">
                <tr>

                  <th className="border border-[#c7a669] p-3 text-left">
                    Model
                  </th>

                  <th className="border border-[#c7a669] p-3 text-left">
                    Description
                  </th>

                </tr>
              </thead>

              <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

                <tr>
                  <td className="border border-[#c7a669] p-3">
                    IaaS
                  </td>

                  <td className="border border-[#c7a669] p-3">
                    Infrastructure as a Service
                  </td>
                </tr>

                <tr>
                  <td className="border border-[#c7a669] p-3">
                    PaaS
                  </td>

                  <td className="border border-[#c7a669] p-3">
                    Platform as a Service
                  </td>
                </tr>

                <tr>
                  <td className="border border-[#c7a669] p-3">
                    SaaS
                  </td>

                  <td className="border border-[#c7a669] p-3">
                    Software as a Service
                  </td>
                </tr>

              </tbody>

            </table>
          </div>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Cloud Providers */}
      <section>
        <h2 className="section-heading">
          Popular Cloud Providers
        </h2>

        <p className="p-text">
          Several companies provide cloud infrastructure and services
          for hosting applications and managing scalable systems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              AWS
            </h4>

            <p className="mt-2">
              Amazon Web Services cloud platform.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Microsoft Azure
            </h4>

            <p className="mt-2">
              Cloud platform by Microsoft.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Google Cloud
            </h4>

            <p className="mt-2">
              Cloud infrastructure platform by Google.
            </p>
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Benefits */}
      <section>
        <h2 className="section-heading">
          Benefits of Cloud & Containerization
        </h2>

        <ul className="section-list mt-4">
          <li>Scalable infrastructure and deployment</li>
          <li>Reduced hardware management costs</li>
          <li>Fast application deployment</li>
          <li>Improved software portability</li>
          <li>High availability and reliability</li>
          <li>Supports modern DevOps workflows</li>
        </ul>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Summary */}
      <section>
        <h2 className="section-heading">
          Summary
        </h2>

        <p className="p-text">
          In this chapter, we explored CI/CD pipelines, Docker,
          containerization, cloud computing fundamentals,
          cloud service models, and deployment automation.
          These technologies form the foundation of modern DevOps
          and scalable cloud infrastructure systems.
        </p>
      </section>

    </div>
  );
};