export const Ch5Content = () => {
  return (
    <div className="course-content">

      {/* Module Intro */}
      <section>
        <p className="p-text">
          <strong>Module V: Shell Scripting Basics.</strong> This module introduces
          shell scripting in Linux, including script creation, variables,
          user input, conditional statements, loops, and automation basics.
          Shell scripting is an essential skill in Linux administration,
          DevOps workflows, and server automation.
        </p>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* What is Shell Scripting */}
      <section>
        <h2 className="section-heading">
          What is Shell Scripting?
        </h2>

        <p className="p-text">
          A shell script is a file containing a sequence of Linux commands
          that are executed automatically by the shell. Instead of typing
          commands manually one by one, users can automate repetitive tasks
          using scripts.
        </p>

        <p className="p-text">
          Shell scripting is widely used for:
        </p>

        <ul className="section-list">
          <li>Task automation</li>
          <li>System administration</li>
          <li>Server management</li>
          <li>Software deployment</li>
          <li>Backup and monitoring systems</li>
        </ul>

        <div className="mt-6">
          <h4 className="text-2xl font-bold mb-4">
            Shell Script Workflow
          </h4>

          <div className="space-y-3 text-center">

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Write Commands in Script File
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Save Script (.sh)
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Give Execute Permission
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Run Script in Terminal
            </div>

          </div>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Creating Scripts */}
      <section>
        <h2 className="section-heading">
          Creating a Shell Script
        </h2>

        <p className="p-text">
          Shell scripts are usually saved with the <code>.sh</code> extension.
          The first line of a script generally contains a special statement called
          the <strong>shebang</strong>.
        </p>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-6 border border-[#c7a669]">

          <h4 className="text-2xl font-bold mb-3">
            Example Script
          </h4>

          <pre className="overflow-x-auto text-lg">
{`#!/bin/bash

echo "Hello Linux"

echo "Welcome to Shell Scripting"`}
          </pre>

        </div>

        <div className="overflow-x-auto mt-8">

          <table className="w-full border border-[#c7a669]">

            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">
                  Component
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Purpose
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>
                <td className="border border-[#c7a669] p-3">
                  #!/bin/bash
                </td>

                <td className="border border-[#c7a669] p-3">
                  Specifies Bash shell interpreter
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  echo
                </td>

                <td className="border border-[#c7a669] p-3">
                  Displays output on terminal
                </td>
              </tr>

            </tbody>

          </table>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Executing Scripts */}
      <section>
        <h2 className="section-heading">
          Executing a Shell Script
        </h2>

        <p className="p-text">
          Before running a shell script, execute permission must be granted
          using the <code>chmod</code> command.
        </p>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-6 border border-[#c7a669]">

          <h4 className="text-2xl font-bold mb-3">
            Execution Commands
          </h4>

          <pre className="overflow-x-auto text-lg">
{`$ chmod +x script.sh

$ ./script.sh`}
          </pre>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

          <div className="bg-[#8b5e47] rounded-lg p-5 border border-[#c7a669]">
            <h4 className="text-2xl font-bold mb-3">
              chmod +x
            </h4>

            <p className="p-text">
              Gives execute permission to the script file.
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 border border-[#c7a669]">
            <h4 className="text-2xl font-bold mb-3">
              ./script.sh
            </h4>

            <p className="p-text">
              Executes the script in the current directory.
            </p>
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Variables */}
      <section>
        <h2 className="section-heading">
          Variables in Shell Scripting
        </h2>

        <p className="p-text">
          Variables are used to store data values in shell scripts.
          Values can later be accessed and reused whenever required.
        </p>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-6 border border-[#c7a669]">

          <h4 className="text-2xl font-bold mb-3">
            Variable Example
          </h4>

          <pre className="overflow-x-auto text-lg">
{`#!/bin/bash

name="Tanmay"

echo "Hello $name"`}
          </pre>

        </div>

        <ul className="section-list mt-4">
          <li>Variables are assigned without spaces</li>
          <li><code>$</code> is used to access variable values</li>
          <li>Variables improve code reusability</li>
        </ul>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* User Input */}
      <section>
        <h2 className="section-heading">
          Taking User Input
        </h2>

        <p className="p-text">
          Shell scripts can accept input from users using the
          <code> read </code> command.
        </p>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-6 border border-[#c7a669]">

          <h4 className="text-2xl font-bold mb-3">
            User Input Example
          </h4>

          <pre className="overflow-x-auto text-lg">
{`#!/bin/bash

echo "Enter your name"

read name

echo "Welcome $name"`}
          </pre>

        </div>

        <div className="mt-6">
          <h4 className="text-2xl font-bold mb-4">
            Input Flow
          </h4>

          <div className="space-y-3 text-center">

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Display Prompt
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              User Enters Data
            </div>

            <div className="text-3xl">↓</div>

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Value Stored in Variable
            </div>

          </div>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Conditional Statements */}
      <section>
        <h2 className="section-heading">
          Conditional Statements
        </h2>

        <p className="p-text">
          Conditional statements allow scripts to make decisions based on conditions.
          The most commonly used conditional statement is <code>if</code>.
        </p>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-6 border border-[#c7a669]">

          <h4 className="text-2xl font-bold mb-3">
            if Statement Example
          </h4>

          <pre className="overflow-x-auto text-lg">
{`#!/bin/bash

num=10

if [ $num -gt 5 ]

then
  echo "Number is greater than 5"

fi`}
          </pre>

        </div>

        <div className="mt-6">
          <h4 className="text-2xl font-bold mb-4">
            Decision Making Flow
          </h4>

          <div className="space-y-3 text-center">

            <div className="bg-[#8b5e47] rounded-lg py-4 text-xl font-semibold">
              Check Condition
            </div>

            <div className="text-3xl">↓</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="bg-[#8b5e47] rounded-lg py-4">
                True → Execute Block
              </div>

              <div className="bg-[#8b5e47] rounded-lg py-4">
                False → Skip Block
              </div>

            </div>

          </div>
        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Loops */}
      <section>
        <h2 className="section-heading">
          Loops in Shell Scripting
        </h2>

        <p className="p-text">
          Loops are used to repeat a set of commands multiple times automatically.
        </p>

        <div className="overflow-x-auto mt-6">

          <table className="w-full border border-[#c7a669]">

            <thead className="bg-[#8b5e47]">
              <tr>
                <th className="border border-[#c7a669] p-3 text-left">
                  Loop Type
                </th>

                <th className="border border-[#c7a669] p-3 text-left">
                  Purpose
                </th>
              </tr>
            </thead>

            <tbody className="bg-[#f3e7c2] text-[#1B0D00]">

              <tr>
                <td className="border border-[#c7a669] p-3">
                  for loop
                </td>

                <td className="border border-[#c7a669] p-3">
                  Repeats for fixed values
                </td>
              </tr>

              <tr>
                <td className="border border-[#c7a669] p-3">
                  while loop
                </td>

                <td className="border border-[#c7a669] p-3">
                  Executes while condition is true
                </td>
              </tr>

            </tbody>

          </table>
        </div>

        <div className="bg-[#f3e7c2] text-[#1B0D00] rounded-lg p-5 mt-6 border border-[#c7a669]">

          <h4 className="text-2xl font-bold mb-3">
            for Loop Example
          </h4>

          <pre className="overflow-x-auto text-lg">
{`#!/bin/bash

for i in 1 2 3 4 5

do
  echo $i

done`}
          </pre>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Automation */}
      <section>
        <h2 className="section-heading">
          Automation using Shell Scripts
        </h2>

        <p className="p-text">
          Shell scripting is extremely powerful for automating repetitive tasks.
          DevOps engineers use shell scripts for deployment, backups,
          monitoring, and server configuration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Backups
            </h4>

            <p className="mt-2">
              Automate file and database backups
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Monitoring
            </h4>

            <p className="mt-2">
              Monitor servers and system health
            </p>
          </div>

          <div className="bg-[#8b5e47] rounded-lg p-5 text-center">
            <h4 className="text-2xl font-bold">
              Deployment
            </h4>

            <p className="mt-2">
              Automate software deployment workflows
            </p>
          </div>

        </div>
      </section>

      <hr className="my-8 border-[#8b5e47]" />

      {/* Summary */}
      <section>
        <h2 className="section-heading">
          Summary
        </h2>

        <p className="p-text">
          In this chapter, we learned the fundamentals of shell scripting,
          including script creation, execution, variables, user input,
          conditional statements, loops, and automation basics.
          Shell scripting plays a major role in Linux administration and DevOps automation.
        </p>
      </section>

    </div>
  );
};