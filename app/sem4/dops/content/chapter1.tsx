export const Ch1Content = () => {
  return (
    <div className="course-content">

      {/* Module Intro */}
      <section>
        <p className="p-text">
          <strong>Module I: Introduction to Linux.</strong> This module introduces
          the fundamentals of Linux operating systems, their importance in modern
          computing, different Linux distributions, and how Linux is used in
          servers, cloud computing, cybersecurity, software development, and
          DevOps environments.
        </p>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* What is Linux */}
      <section>
        <h2 className="section-heading">What is Linux?</h2>

        <p className="p-text">
          Linux is a free and open-source operating system based on Unix. It acts
          as a bridge between computer hardware and software applications,
          managing system resources efficiently.
        </p>

        <p className="p-text">
          Linux was created by <strong>Linus Torvalds</strong> in 1991 and has now
          become one of the most widely used operating systems in the world.
        </p>

        <div className="mt-6">
          <h4 className="text-2xl font-bold mb-4">
            Basic Linux Architecture
          </h4>

          <div className="space-y-3 text-center">

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              User
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Shell
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Kernel
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Hardware
            </div>

          </div>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Why Linux */}
      <section>
        <h2 className="section-heading">Why Linux is Important</h2>

        <p className="p-text">
          Linux is widely used because of its stability, security, performance,
          and flexibility. Most servers, cloud platforms, supercomputers, and
          software development environments run on Linux.
        </p>

        <ul className="section-list">
          <li>Highly stable and reliable</li>
          <li>Open-source and free to use</li>
          <li>Secure and customizable</li>
          <li>Efficient resource management</li>
          <li>Preferred for servers and cloud computing</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

          <div className="bg-[#8b5e47] rounded-lg p-5 border border-[#c7a669]">
            <h4 className="text-2xl font-bold mb-2">Servers</h4>
            <p className="p-text">
              Most web servers and backend infrastructures run on Linux.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 border border-[#c7a669]">
            <h4 className="text-2xl font-bold mb-2">Cloud Computing</h4>
            <p className="p-text">
              Cloud platforms like AWS and Google Cloud heavily rely on Linux
              systems.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 border border-[#c7a669]">
            <h4 className="text-2xl font-bold mb-2">Cybersecurity</h4>
            <p className="p-text">
              Linux is widely used in ethical hacking and security research.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 border border-[#c7a669]">
            <h4 className="text-2xl font-bold mb-2">
              Software Development
            </h4>
            <p className="p-text">
              Developers use Linux for programming, deployment, and automation.
            </p>
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Linux Distributions */}
      <section>
        <h2 className="section-heading">Linux Distributions</h2>

        <p className="p-text">
          A Linux distribution (distro) is a packaged version of Linux that
          includes the Linux kernel, software tools, package managers, and
          graphical interfaces.
        </p>

        <ul className="section-list">
          <li><strong>Ubuntu</strong> – Beginner-friendly and widely used</li>
          <li><strong>Fedora</strong> – Modern features and developer-focused</li>
          <li><strong>Debian</strong> – Stable and reliable distribution</li>
          <li><strong>Kali Linux</strong> – Popular for cybersecurity and penetration testing</li>
          <li><strong>Arch Linux</strong> – Lightweight and highly customizable</li>
        </ul>

        <div className="overflow-x-auto mt-6">

          <table className="w-full border border-[#c7a669]">

            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">
                  Distribution
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Primary Use
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>
                <td className="border border-[#c7a669] p-3">Ubuntu</td>
                <td className="border border-[#c7a669] p-3">
                  Beginner-friendly desktop and server OS
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">Kali Linux</td>
                <td className="border border-[#c7a669] p-3">
                  Cybersecurity and penetration testing
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">Debian</td>
                <td className="border border-[#c7a669] p-3">
                  Stable server environments
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">Fedora</td>
                <td className="border border-[#c7a669] p-3">
                  Developer-focused modern Linux distribution
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Linux vs Windows */}
      <section>
        <h2 className="section-heading">Linux vs Windows</h2>

        <p className="p-text">
          Linux and Windows are both operating systems, but they differ in
          licensing, customization, security, and usage environments.
        </p>

        <div className="overflow-x-auto mt-6">

          <table className="w-full border border-[#c7a669]">

            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">
                  Feature
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Linux
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Windows
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>
                <td className="border border-[#c7a669] p-3">License</td>
                <td className="border border-[#c7a669] p-3">Open Source</td>
                <td className="border border-[#c7a669] p-3">Proprietary</td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">Security</td>
                <td className="border border-[#c7a669] p-3">Highly Secure</td>
                <td className="border border-[#c7a669] p-3">More Vulnerable</td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">Customization</td>
                <td className="border border-[#c7a669] p-3">Highly Customizable</td>
                <td className="border border-[#c7a669] p-3">Limited</td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">Usage</td>
                <td className="border border-[#c7a669] p-3">Servers & DevOps</td>
                <td className="border border-[#c7a669] p-3">Personal Desktop</td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Applications */}
      <section>
        <h2 className="section-heading">Applications of Linux</h2>

        <p className="p-text">
          Linux is used in many important technological systems across the world.
        </p>

        <ul className="section-list">
          <li>Web servers and cloud infrastructure</li>
          <li>Android mobile operating system</li>
          <li>Cybersecurity and ethical hacking</li>
          <li>Artificial Intelligence and Machine Learning servers</li>
          <li>Supercomputers and research systems</li>
          <li>Software development and DevOps environments</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">Cloud</h4>
            <p className="mt-2">AWS, Azure, Google Cloud</p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">AI & ML</h4>
            <p className="mt-2">Linux powers AI training servers</p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">Cybersecurity</h4>
            <p className="mt-2">Widely used in ethical hacking tools</p>
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Advantages */}
      <section>
        <h2 className="section-heading">Advantages of Linux</h2>

        <ul className="section-list">
          <li>Free and open-source</li>
          <li>Secure and stable environment</li>
          <li>Supports multitasking and multi-user systems</li>
          <li>Large developer and community support</li>
          <li>Highly customizable and efficient</li>
        </ul>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Summary */}
      <section>
        <h2 className="section-heading">Summary</h2>

        <p className="p-text">
          In this chapter, we explored the basics of Linux, its importance,
          popular distributions, advantages, and real-world applications.
          Linux forms the backbone of modern cloud infrastructure, servers,
          software development, and DevOps systems.
        </p>
      </section>

    </div>
  );
};