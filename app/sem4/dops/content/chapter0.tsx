export const Ch0Content = () => {
  return (
    <div className="course-content">

      <p className="p-text">
        Welcome to <span className="font-semibold">DevOps & Linux Administration</span>.
        This course introduces the practical foundations of Linux systems,
        command-line usage, software development workflows, version control,
        automation, and modern DevOps practices used in real-world software engineering.
      </p>

      <p className="p-text">
        Throughout this course, students will learn how developers and system administrators
        use Linux environments to manage files, users, software packages, scripts,
        repositories, deployment workflows, and cloud-based applications efficiently.
      </p>

      <section>
        <h3 className="section-heading">Module I: Introduction to Linux</h3>

        <ul className="section-list">
          <li>What is Linux and why it is widely used</li>
          <li>Linux distributions and open-source philosophy</li>
          <li>Linux vs Windows operating systems</li>
          <li>Applications of Linux in servers, cloud, and development</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">
          Module II: Linux Terminal & File System
        </h3>

        <ul className="section-list">
          <li>Understanding the Linux terminal</li>
          <li>Linux directory structure and hierarchy</li>
          <li>Navigation between directories</li>
          <li>Root directory, home directory, and file paths</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module III: Basic Linux Commands</h3>

        <ul className="section-list">
          <li>File and directory commands</li>
          <li>Viewing and editing files</li>
          <li>Copying, moving, renaming, and deleting files</li>
          <li>Basic command syntax and terminal workflow</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">
          Module IV: Users, Permissions & Packages
        </h3>

        <ul className="section-list">
          <li>User and group management</li>
          <li>File permissions and chmod</li>
          <li>sudo access and administrative privileges</li>
          <li>Installing and managing software packages</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module V: Shell Scripting Basics</h3>

        <ul className="section-list">
          <li>Introduction to shell scripting</li>
          <li>Variables and user input</li>
          <li>Conditional statements and loops</li>
          <li>Basic automation using bash scripts</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">Module VI: Git & GitHub Basics</h3>

        <ul className="section-list">
          <li>Version control systems and Git</li>
          <li>Repositories, commits, and branches</li>
          <li>GitHub workflow and collaboration</li>
          <li>Push, pull, clone, and pull requests</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">
          Module VII: Introduction to DevOps
        </h3>

        <ul className="section-list">
          <li>What is DevOps and why it matters</li>
          <li>Development and operations workflow</li>
          <li>Automation and deployment concepts</li>
          <li>Benefits of DevOps in software engineering</li>
        </ul>
      </section>

      <section>
        <h3 className="section-heading">
          Module VIII: CI/CD, Docker & Cloud Basics
        </h3>

        <ul className="section-list">
          <li>Introduction to CI/CD pipelines</li>
          <li>Basics of Docker and containers</li>
          <li>Cloud computing platforms overview</li>
          <li>Modern application deployment concepts</li>
        </ul>
      </section>

    </div>
  );
};