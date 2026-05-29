export const Ch2Content = () => {
  return (
    <div className="course-content">

      {/* Module Intro */}
      <section>
        <p className="p-text">
          <strong>Module II: Linux Terminal & File System.</strong> This module
          introduces the Linux command-line interface, terminal usage, Linux file
          system hierarchy, navigation commands, and essential concepts related to
          files and directories. These concepts form the foundation of Linux system
          administration and DevOps workflows.
        </p>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Terminal Introduction */}
      <section>
        <h2 className="section-heading">What is the Linux Terminal?</h2>

        <p className="p-text">
          The Linux terminal is a text-based interface through which users interact
          with the operating system using commands. Unlike graphical interfaces,
          the terminal provides faster and more powerful control over the system.
        </p>

        <p className="p-text">
          Most DevOps engineers, cloud administrators, and cybersecurity
          professionals heavily rely on terminal commands for automation,
          server management, and deployment tasks.
        </p>

        <div className="mt-6">
          <h4 className="text-2xl font-bold mb-4">
            Terminal Workflow
          </h4>

          <div className="space-y-3 text-center">

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              User Types Command
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Shell Interprets Command
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Kernel Executes Request
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Output Displayed to User
            </div>

          </div>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Shell */}
      <section>
        <h2 className="section-heading">What is a Shell?</h2>

        <p className="p-text">
          A shell is a command interpreter that acts as a bridge between the user
          and the Linux kernel. It reads commands entered by the user and passes
          them to the operating system for execution.
        </p>

        <ul className="section-list">
          <li><strong>Bash</strong> – Most common Linux shell</li>
          <li><strong>Zsh</strong> – Advanced shell with customization</li>
          <li><strong>Fish</strong> – User-friendly interactive shell</li>
          <li><strong>Sh</strong> – Traditional Unix shell</li>
        </ul>

        <div className="overflow-x-auto mt-6">

          <table className="w-full border border-[#c7a669]">

            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">
                  Shell
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Main Feature
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>
                <td className="border border-[#c7a669] p-3">Bash</td>
                <td className="border border-[#c7a669] p-3">
                  Default shell in many Linux distributions
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">Zsh</td>
                <td className="border border-[#c7a669] p-3">
                  Highly customizable and modern
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">Fish</td>
                <td className="border border-[#c7a669] p-3">
                  Beginner-friendly with smart suggestions
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* File System */}
      <section>
        <h2 className="section-heading">Linux File System Structure</h2>

        <p className="p-text">
          Linux organizes all files and directories in a hierarchical structure
          starting from the root directory represented by <code>/</code>.
        </p>

        <p className="p-text">
          Everything in Linux is treated as a file, including devices and system
          resources.
        </p>

        <div className="mt-6">
          <h4 className="text-2xl font-bold mb-4">
            Linux Directory Hierarchy
          </h4>

          <div className="space-y-3 text-center">

            <div className="bg-[#8b5e47] rounded-lg py-3 text-xl font-semibold">
              /
            </div>

            <div className="text-2xl">↓</div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              <div className="bg-[#8b5e47] rounded-lg py-3">
                /home
              </div>

              <div className="bg-[#8b5e47] rounded-lg py-3">
                /bin
              </div>

              <div className="bg-[#8b5e47] rounded-lg py-3">
                /etc
              </div>

              <div className="bg-[#8b5e47] rounded-lg py-3">
                /var
              </div>

            </div>
          </div>
        </div>

        <div className="overflow-x-auto mt-8">

          <table className="w-full border border-[#c7a669]">

            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">
                  Directory
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Purpose
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>
                <td className="border border-[#c7a669] p-3">/home</td>
                <td className="border border-[#c7a669] p-3">
                  Stores user files and personal data
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">/bin</td>
                <td className="border border-[#c7a669] p-3">
                  Essential system commands and binaries
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">/etc</td>
                <td className="border border-[#c7a669] p-3">
                  Configuration files
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">/var</td>
                <td className="border border-[#c7a669] p-3">
                  Variable data like logs and caches
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">/tmp</td>
                <td className="border border-[#c7a669] p-3">
                  Temporary files
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Navigation Commands */}
      <section>
        <h2 className="section-heading">Basic Navigation Commands</h2>

        <p className="p-text">
          Linux provides commands to move between directories and manage files
          efficiently.
        </p>

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
                <td className="border border-[#c7a669] p-3">pwd</td>
                <td className="border border-[#c7a669] p-3">
                  Shows current directory
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">ls</td>
                <td className="border border-[#c7a669] p-3">
                  Lists files and folders
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">cd</td>
                <td className="border border-[#c7a669] p-3">
                  Changes directory
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">mkdir</td>
                <td className="border border-[#c7a669] p-3">
                  Creates new directory
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">touch</td>
                <td className="border border-[#c7a669] p-3">
                  Creates empty file
                </td>
              </tr>

            </tbody>

          </table>
        </div>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-6 border border-[#c7a669]">

          <h4 className="text-2xl font-bold mb-3">
            Example Terminal Session
          </h4>

          <pre className="overflow-x-auto text-lg">
{`$ pwd
/home/student

$ mkdir project

$ cd project

$ touch notes.txt

$ ls
notes.txt`}
          </pre>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Absolute vs Relative */}
      <section>
        <h2 className="section-heading">
          Absolute Path vs Relative Path
        </h2>

        <p className="p-text">
          Linux uses paths to locate files and directories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

          <div className="bg-[#8b5e47] rounded-lg p-5 border border-[#c7a669]">
            <h4 className="text-2xl font-bold mb-3">
              Absolute Path
            </h4>

            <p className="p-text">
              Starts from the root directory <code>/</code>.
            </p>

            <div className="bg-[#f3e7c2] text-[#1B0D00] rounded p-3 mt-3">
              /home/student/project
            </div>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 border border-[#c7a669]">
            <h4 className="text-2xl font-bold mb-3">
              Relative Path
            </h4>

            <p className="p-text">
              Defined relative to the current working directory.
            </p>

            <div className="bg-[#f3e7c2] text-[#1B0D00] rounded p-3 mt-3">
              ./project
            </div>
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* File Types */}
      <section>
        <h2 className="section-heading">Types of Files in Linux</h2>

        <p className="p-text">
          Linux supports different types of files for different purposes.
        </p>

        <ul className="section-list">
          <li><strong>Regular Files</strong> – text files, images, programs</li>
          <li><strong>Directories</strong> – folders containing files</li>
          <li><strong>Symbolic Links</strong> – shortcuts to files</li>
          <li><strong>Device Files</strong> – hardware representations</li>
        </ul>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Summary */}
      <section>
        <h2 className="section-heading">Summary</h2>

        <p className="p-text">
          In this chapter, we learned how the Linux terminal works, explored
          different shells, understood the Linux file system hierarchy, and studied
          important navigation commands used in everyday Linux administration and
          DevOps workflows.
        </p>
      </section>

    </div>
  );
};