export const Ch6Content = () => {
  return (
    <div className="course-content">

      {/* Module Intro */}
      <section>
        <p className="p-text">
          <strong>Module VI: Git & GitHub Basics.</strong> This module introduces
          version control systems, Git fundamentals, GitHub workflows, repositories,
          commits, branches, and collaboration techniques used in modern software
          development and DevOps environments.
        </p>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* What is Version Control */}
      <section>
        <h2 className="section-heading">
          What is Version Control?
        </h2>

        <p className="p-text">
          Version control is a system used to track changes made to files and source code
          over time. It allows developers to maintain project history, collaborate with teams,
          and restore previous versions whenever required.
        </p>

        <p className="p-text">
          Modern software development heavily relies on version control systems
          for teamwork and project management.
        </p>

        <div className="mt-6">
          <h4 className="text-2xl font-bold mb-4">
            Version Control Workflow
          </h4>

          <div className="space-y-3 text-center">

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Write Code
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Save Changes
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Track Versions
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Collaborate with Team
            </div>

          </div>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* What is Git */}
      <section>
        <h2 className="section-heading">
          What is Git?
        </h2>

        <p className="p-text">
          Git is a distributed version control system developed by
          <strong> Linus Torvalds</strong>. It helps developers manage source code,
          track changes, and collaborate efficiently on projects.
        </p>

        <p className="p-text">
          Git stores snapshots of project files and maintains a complete history
          of changes made during development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Fast
            </h4>

            <p className="mt-2">
              Git operations are highly optimized and efficient.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Distributed
            </h4>

            <p className="mt-2">
              Every developer has a complete copy of repository history.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Reliable
            </h4>

            <p className="mt-2">
              Git safely tracks and manages code changes.
            </p>
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* GitHub */}
      <section>
        <h2 className="section-heading">
          What is GitHub?
        </h2>

        <p className="p-text">
          GitHub is a cloud-based platform used to host Git repositories online.
          It enables developers to collaborate, share code, review contributions,
          and manage projects efficiently.
        </p>

        <p className="p-text">
          GitHub is widely used in open-source projects, software companies,
          and DevOps workflows.
        </p>

        <div className="mt-6">
          <h4 className="text-2xl font-bold mb-4">
            GitHub Collaboration Flow
          </h4>

          <div className="space-y-3 text-center">

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Developer Writes Code
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Commit Changes
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Push to GitHub Repository
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Team Reviews & Collaborates
            </div>

          </div>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Repository */}
      <section>
        <h2 className="section-heading">
          Repositories
        </h2>

        <p className="p-text">
          A repository (repo) is a storage location for project files and Git history.
          It contains source code, documentation, configuration files, and commit history.
        </p>

        <div className="overflow-x-auto mt-6">

          <table className="w-full border border-[#c7a669]">

            <thead className="bg-[#8b5e47]">
              <tr>

                <th className="border border-[#c7a669] p-3 text-left">
                  Repository Type
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Description
                </th>

              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>

                <td className="border border-[#c7a669] p-3">
                  Local Repository
                </td>

                <td className="border border-[#c7a669] p-3">
                  Stored on user&apos;s computer
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  Remote Repository
                </td>

                <td className="border border-[#c7a669] p-3">
                  Hosted online on GitHub or cloud platforms
                </td>

              </tr>

            </tbody>

          </table>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Basic Git Commands */}
      <section>
        <h2 className="section-heading">
          Basic Git Commands
        </h2>

        <p className="p-text">
          Git provides various commands to initialize repositories,
          track changes, and synchronize code.
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

                <td className="border border-[#c7a669] p-3">
                  git init
                </td>

                <td className="border border-[#c7a669] p-3">
                  Initializes a Git repository
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  git status
                </td>

                <td className="border border-[#c7a669] p-3">
                  Shows repository status
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  git add
                </td>

                <td className="border border-[#c7a669] p-3">
                  Adds files to staging area
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  git commit
                </td>

                <td className="border border-[#c7a669] p-3">
                  Saves changes permanently
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  git push
                </td>

                <td className="border border-[#c7a669] p-3">
                  Uploads changes to GitHub
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  git pull
                </td>

                <td className="border border-[#c7a669] p-3">
                  Downloads latest changes
                </td>

              </tr>

            </tbody>

          </table>
        </div>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-6 border border-[#c7a669]">

          <h4 className="text-2xl font-bold mb-3">
            Example Workflow
          </h4>

          <pre className="overflow-x-auto text-lg">
{`$ git init

$ git add .

$ git commit -m "Initial Commit"

$ git push origin main`}
          </pre>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Branching */}
      <section>
        <h2 className="section-heading">
          Git Branching
        </h2>

        <p className="p-text">
          Branches allow developers to work on different features independently
          without affecting the main project code.
        </p>

        <div className="mt-6">
          <h4 className="text-2xl font-bold mb-4">
            Branching Workflow
          </h4>

          <div className="space-y-3 text-center">

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Main Branch
            </div>

            <div className="text-3xl">↓</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="bg-[#8b5e47] rounded-lg py-4">
                Feature Branch
              </div>

              <div className="bg-[#8b5e47] rounded-lg py-4">
                Bug Fix Branch
              </div>

            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Merge Changes into Main
            </div>

          </div>
        </div>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-6 border border-[#c7a669]">

          <pre className="overflow-x-auto text-lg">
{`$ git branch feature-login

$ git checkout feature-login`}
          </pre>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Pull Requests */}
      <section>
        <h2 className="section-heading">
          Pull Requests
        </h2>

        <p className="p-text">
          A pull request (PR) is a request to merge changes from one branch
          into another branch on GitHub.
        </p>

        <p className="p-text">
          Pull requests are commonly used in open-source projects and team-based
          software development for reviewing code before merging.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Code Review
            </h4>

            <p className="mt-2">
              Team members review submitted code changes.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Discussion
            </h4>

            <p className="mt-2">
              Developers discuss improvements and fixes.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Merge
            </h4>

            <p className="mt-2">
              Approved changes are merged into main branch.
            </p>
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Git vs GitHub */}
      <section>
        <h2 className="section-heading">
          Git vs GitHub
        </h2>

        <div className="overflow-x-auto mt-6">

          <table className="w-full border border-[#c7a669]">

            <thead className="bg-[#8b5e47]">

              <tr>

                <th className="border border-[#c7a669] p-3 text-left">
                  Git
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  GitHub
                </th>

              </tr>

            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>

                <td className="border border-[#c7a669] p-3">
                  Version control system
                </td>

                <td className="border border-[#c7a669] p-3">
                  Cloud hosting platform
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  Works locally
                </td>

                <td className="border border-[#c7a669] p-3">
                  Works online
                </td>

              </tr>

              <tr>

                <td className="border border-[#c7a669] p-3">
                  Tracks code history
                </td>

                <td className="border border-[#c7a669] p-3">
                  Enables collaboration
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
          In this chapter, we explored Git, GitHub, repositories,
          version control workflows, Git commands, branching,
          pull requests, and collaboration techniques. These concepts are
          essential for modern software development and DevOps practices.
        </p>
      </section>

    </div>
  );
};