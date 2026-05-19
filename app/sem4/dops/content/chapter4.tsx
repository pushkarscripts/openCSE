export const Ch4Content = () => {
  return (
    <div className="course-content">

      {/* Module Intro */}
      <section>
        <p className="p-text">
          <strong>Module IV: Users, Permissions & Packages.</strong> This module
          introduces Linux user management, file permissions, administrative
          privileges, and software package management. These concepts are extremely
          important in Linux administration, server management, and DevOps workflows.
        </p>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Linux Multiuser System */}
      <section>
        <h2 className="section-heading">
          Linux as a Multi-User Operating System
        </h2>

        <p className="p-text">
          Linux is designed as a multi-user operating system, meaning multiple users
          can access and use the same system simultaneously while maintaining
          security and separation between accounts.
        </p>

        <p className="p-text">
          Each user has:
        </p>

        <ul className="section-list">
          <li>Unique username and password</li>
          <li>Personal home directory</li>
          <li>Separate permissions and access rights</li>
          <li>Individual files and configurations</li>
        </ul>

        <div className="mt-6">
          <h4 className="text-2xl font-bold mb-4">
            Linux User Hierarchy
          </h4>

          <div className="space-y-3 text-center">

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Root User (Administrator)
            </div>

            <div className="text-3xl">↓</div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="bg-[#8b5e47] rounded-lg py-4">
                Developer User
              </div>

              <div className="bg-[#8b5e47] rounded-lg py-4">
                Guest User
              </div>

              <div className="bg-[#8b5e47] rounded-lg py-4">
                System User
              </div>

            </div>
          </div>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Root User */}
      <section>
        <h2 className="section-heading">
          Root User and sudo
        </h2>

        <p className="p-text">
          The <strong>root user</strong> is the administrator account in Linux.
          It has complete control over the system including software installation,
          user management, and configuration changes.
        </p>

        <p className="p-text">
          To safely execute administrative tasks, Linux provides the
          <strong> sudo </strong> command which temporarily grants administrator privileges.
        </p>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-6 border border-[#c7a669]">

          <h4 className="text-2xl font-bold mb-3">
            Example Commands
          </h4>

          <pre className="overflow-x-auto text-lg">
{`$ sudo apt update

$ sudo apt install nginx

$ sudo reboot`}
          </pre>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

          <div className="bg-[#8b5e47] rounded-lg p-5 border border-[#c7a669]">
            <h4 className="text-2xl font-bold mb-3">
              Root User
            </h4>

            <p className="p-text">
              Has unrestricted system access and administrative control.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 border border-[#c7a669]">
            <h4 className="text-2xl font-bold mb-3">
              sudo Command
            </h4>

            <p className="p-text">
              Allows normal users to execute administrative commands securely.
            </p>
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* File Permissions */}
      <section>
        <h2 className="section-heading">
          Linux File Permissions
        </h2>

        <p className="p-text">
          Linux uses a permission system to control access to files and directories.
          Permissions determine who can read, write, or execute files.
        </p>

        <div className="overflow-x-auto mt-6">

          <table className="w-full border border-[#c7a669]">

            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">
                  Symbol
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Permission
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Meaning
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>
                <td className="border border-[#c7a669] p-3">r</td>
                <td className="border border-[#c7a669] p-3">Read</td>
                <td className="border border-[#c7a669] p-3">
                  View file contents
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">w</td>
                <td className="border border-[#c7a669] p-3">Write</td>
                <td className="border border-[#c7a669] p-3">
                  Modify file contents
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">x</td>
                <td className="border border-[#c7a669] p-3">Execute</td>
                <td className="border border-[#c7a669] p-3">
                  Run executable files
                </td>
              </tr>

            </tbody>

          </table>
        </div>

        <div className="mt-8">
          <h4 className="text-2xl font-bold mb-4">
            Permission Structure
          </h4>

          <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 border border-[#c7a669]">

            <pre className="overflow-x-auto text-lg">
{`-rwxr-xr--

Owner  Group  Others`}
            </pre>

          </div>

          <ul className="section-list mt-4">
            <li>First set → Owner permissions</li>
            <li>Second set → Group permissions</li>
            <li>Third set → Other users permissions</li>
          </ul>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* chmod */}
      <section>
        <h2 className="section-heading">
          chmod Command
        </h2>

        <p className="p-text">
          The <strong>chmod</strong> command is used to change file permissions
          in Linux.
        </p>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-6 border border-[#c7a669]">

          <h4 className="text-2xl font-bold mb-3">
            Example Commands
          </h4>

          <pre className="overflow-x-auto text-lg">
{`$ chmod +x script.sh

$ chmod 755 file.txt

$ chmod 644 notes.txt`}
          </pre>

        </div>

        <div className="overflow-x-auto mt-6">

          <table className="w-full border border-[#c7a669]">

            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">
                  Number
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Permission
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>
                <td className="border border-[#c7a669] p-3">7</td>
                <td className="border border-[#c7a669] p-3">
                  Read + Write + Execute
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">6</td>
                <td className="border border-[#c7a669] p-3">
                  Read + Write
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">5</td>
                <td className="border border-[#c7a669] p-3">
                  Read + Execute
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">4</td>
                <td className="border border-[#c7a669] p-3">
                  Read Only
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Package Management */}
      <section>
        <h2 className="section-heading">
          Linux Package Management
        </h2>

        <p className="p-text">
          Linux distributions use package managers to install, update,
          and remove software applications efficiently.
        </p>

        <div className="mt-6">
          <h4 className="text-2xl font-bold mb-4">
            Package Management Workflow
          </h4>

          <div className="space-y-3 text-center">

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Search Package
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Install Package
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Update Software
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Remove Package
            </div>

          </div>
        </div>

        <div className="overflow-x-auto mt-8">

          <table className="w-full border border-[#c7a669]">

            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">
                  Package Manager
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Distribution
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>
                <td className="border border-[#c7a669] p-3">apt</td>
                <td className="border border-[#c7a669] p-3">
                  Ubuntu / Debian
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">yum</td>
                <td className="border border-[#c7a669] p-3">
                  CentOS / Red Hat
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">pacman</td>
                <td className="border border-[#c7a669] p-3">
                  Arch Linux
                </td>
              </tr>

            </tbody>

          </table>
        </div>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-6 border border-[#c7a669]">

          <h4 className="text-2xl font-bold mb-3">
            Example Commands
          </h4>

          <pre className="overflow-x-auto text-lg">
{`$ sudo apt update

$ sudo apt install git

$ sudo apt remove nginx`}
          </pre>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* User Management Commands */}
      <section>
        <h2 className="section-heading">
          Basic User Management Commands
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
                <td className="border border-[#c7a669] p-3">whoami</td>
                <td className="border border-[#c7a669] p-3">
                  Displays current user
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">adduser</td>
                <td className="border border-[#c7a669] p-3">
                  Creates new user
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">passwd</td>
                <td className="border border-[#c7a669] p-3">
                  Changes user password
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">su</td>
                <td className="border border-[#c7a669] p-3">
                  Switches user account
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Summary */}
      <section>
        <h2 className="section-heading">
          Summary
        </h2>

        <p className="p-text">
          In this chapter, we explored Linux users, permissions, administrative
          privileges, package management, and important system administration
          commands. These concepts are essential for Linux system management,
          server administration, and DevOps operations.
        </p>
      </section>

    </div>
  );
};