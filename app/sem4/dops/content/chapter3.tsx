export const Ch3Content = () => {
  return (
    <div className="course-content">

      {/* Module Intro */}
      <section>
        <p className="p-text">
          <strong>Module III: Basic Linux Commands.</strong> This module introduces
          commonly used Linux commands for file handling, directory management,
          file viewing, copying, moving, deleting, and basic terminal operations.
          These commands form the core foundation of Linux system usage and DevOps workflows.
        </p>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Why Commands Matter */}
      <section>
        <h2 className="section-heading">
          Why Linux Commands are Important
        </h2>

        <p className="p-text">
          Linux commands allow users to interact efficiently with the operating system.
          Most professional Linux environments, cloud servers, and DevOps systems are
          managed primarily through terminal commands instead of graphical interfaces.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">Speed</h4>
            <p className="mt-2">
              Commands execute tasks much faster than GUI operations.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">Automation</h4>
            <p className="mt-2">
              Commands can be automated using shell scripts.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">Remote Access</h4>
            <p className="mt-2">
              Servers are usually managed remotely using terminal commands.
            </p>
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Command Syntax */}
      <section>
        <h2 className="section-heading">
          Basic Linux Command Syntax
        </h2>

        <p className="p-text">
          Most Linux commands follow a standard structure:
        </p>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-5 border border-[#c7a669]">

          <pre className="overflow-x-auto text-lg">
{`command [options] [arguments]`}
          </pre>

        </div>

        <div className="overflow-x-auto mt-6">

          <table className="w-full border border-[#c7a669]">

            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">
                  Component
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Meaning
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>
                <td className="border border-[#c7a669] p-3">command</td>
                <td className="border border-[#c7a669] p-3">
                  Action to perform
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">options</td>
                <td className="border border-[#c7a669] p-3">
                  Modify command behavior
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">arguments</td>
                <td className="border border-[#c7a669] p-3">
                  Files, folders, or values used by the command
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Essential Commands */}
      <section>
        <h2 className="section-heading">
          Essential Linux Commands
        </h2>

        <p className="p-text">
          Linux provides various commands to navigate directories and manage files.
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

                <th className="border border-[#c7a669] p-3 text-left">
                  Example
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>
                <td className="border border-[#c7a669] p-3">pwd</td>
                <td className="border border-[#c7a669] p-3">
                  Shows current directory
                </td>
                <td className="border border-[#c7a669] p-3">
                  pwd
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">ls</td>
                <td className="border border-[#c7a669] p-3">
                  Lists files and folders
                </td>
                <td className="border border-[#c7a669] p-3">
                  ls -l
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">cd</td>
                <td className="border border-[#c7a669] p-3">
                  Changes directory
                </td>
                <td className="border border-[#c7a669] p-3">
                  cd Documents
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">mkdir</td>
                <td className="border border-[#c7a669] p-3">
                  Creates new directory
                </td>
                <td className="border border-[#c7a669] p-3">
                  mkdir project
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">touch</td>
                <td className="border border-[#c7a669] p-3">
                  Creates empty file
                </td>
                <td className="border border-[#c7a669] p-3">
                  touch notes.txt
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* File Management Commands */}
      <section>
        <h2 className="section-heading">
          File Management Commands
        </h2>

        <p className="p-text">
          Linux provides commands to copy, move, rename, and remove files efficiently.
        </p>

        <div className="overflow-x-auto mt-6">

          <table className="w-full border border-[#c7a669]">

            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">
                  Command
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Function
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Example
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>
                <td className="border border-[#c7a669] p-3">cp</td>
                <td className="border border-[#c7a669] p-3">
                  Copies files
                </td>
                <td className="border border-[#c7a669] p-3">
                  cp file1.txt backup.txt
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">mv</td>
                <td className="border border-[#c7a669] p-3">
                  Moves or renames files
                </td>
                <td className="border border-[#c7a669] p-3">
                  mv old.txt new.txt
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">rm</td>
                <td className="border border-[#c7a669] p-3">
                  Removes files
                </td>
                <td className="border border-[#c7a669] p-3">
                  rm file.txt
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">rmdir</td>
                <td className="border border-[#c7a669] p-3">
                  Removes empty directories
                </td>
                <td className="border border-[#c7a669] p-3">
                  rmdir folder
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* File Viewing Commands */}
      <section>
        <h2 className="section-heading">
          File Viewing Commands
        </h2>

        <p className="p-text">
          Linux includes commands for reading and displaying file contents directly
          in the terminal.
        </p>

        <ul className="section-list">
          <li><strong>cat</strong> – Displays complete file content</li>
          <li><strong>less</strong> – Displays file content page by page</li>
          <li><strong>head</strong> – Displays first few lines of a file</li>
          <li><strong>tail</strong> – Displays last few lines of a file</li>
        </ul>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-6 border border-[#c7a669]">

          <h4 className="text-2xl font-bold mb-3">
            Example Usage
          </h4>

          <pre className="overflow-x-auto text-lg">
{`$ cat notes.txt

Linux is an open-source operating system.

$ head notes.txt

Linux is an open-source operating system.`}
          </pre>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Command Workflow */}
      <section>
        <h2 className="section-heading">
          Typical Linux Workflow
        </h2>

        <div className="space-y-3 text-center mt-6">

          <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
            Navigate Directory
          </div>

          <div className="text-3xl">↓</div>

          <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
            Create Files/Folders
          </div>

          <div className="text-3xl">↓</div>

          <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
            Edit & Manage Files
          </div>

          <div className="text-3xl">↓</div>

          <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
            Execute Commands
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Summary */}
      <section>
        <h2 className="section-heading">Summary</h2>

        <p className="p-text">
          In this chapter, we explored important Linux commands used for
          navigation, file handling, directory management, and viewing file
          contents. These commands are essential for working efficiently in Linux
          systems and DevOps environments.
        </p>
      </section>

    </div>
  );
};