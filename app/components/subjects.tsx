"use client";
import Link from "next/link";

const subjects = {
  "Semester-1": [
    "Basic Electrical and Electronics",
    "C Programming",
    "Engineering Mathematics-1",
    "Engineering Physics",
    "Engineering Graphics & Design",
    "English Communication",
  ],
  "Semester-2": [
    "Digital Electronics & Logic Circuits",
    "OOPs with Java",
    "Engineering Mathematics-2",
    "Data Structures using C",
    "Modern Biology",
    "Environmental Studies",
  ],
  "Semester-3": [
    "Problem Solving using Python",
    "Computer Organization & Architecture",
    "Probability & Statistics",
    "Theory of Computation",
    "Information Technology",
    "Technical Writing",
  ],
};

// Short codes for subjects
const subjectCodes: Record<string, string> = {
  "Basic Electrical and Electronics": "bee",
  "C Programming": "c",
  "Engineering Mathematics-1": "em1",
  "Engineering Physics": "ep",
  "Engineering Graphics & Design": "egd",
  "English Communication": "ec",

  "Digital Electronics & Logic Circuits": "delc",
  "OOPs with Java": "java",
  "Engineering Mathematics-2": "em2",
  "Data Structures using C": "dsc",
  "Modern Biology": "mb",
  "Environmental Studies": "es",

  "Problem Solving using Python": "py",
  "Computer Organization & Architecture": "coa",
  "Probability & Statistics": "ps",
  "Theory of Computation": "toc",
  "Information Technology": "it",
  "Technical Writing": "tw",
};

// Available subjects
const available = ["ep"]; // only Engineering Physics is live now

export default function SubjectsSection() {
  return (
    <section id="subjects" className="px-6 py-12 text-center">
      <h2
        className="text-8xl flex px-6 mb-0"
        style={{ fontFamily: '"Road Rage", sans-serif' }}
      >
        Browse Subjects
      </h2>
      <p
        className="mb-8 text-2xl flex px-6"
        style={{ fontFamily: "'Rockwell', 'Serif', serif" }}
      >
        Explore Subjects divided Semester-wise for your convenience.
      </p>
      <div
        className="space-y-10 px-6 py-6 text-3xl flex flex-col"
        style={{ fontFamily: "'Rockwell', 'Serif', serif" }}
      >
        {Object.entries(subjects).map(([semester, list]) => {
          const semCode = semester.toLowerCase().replace("semester-", "sem");
          return (
            <div key={semester}>
              <h3 className="text-3xl flex mb-4">{semester}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {list.map((subj) => {
                  const code = subjectCodes[subj];
                  const href = `/${semCode}/${code}/ch0`;
                  const isAvailable = available.includes(code);

                  const baseClass =
                    "relative bg-[#d2b48c] text-[#2b1b0e] flex items-center justify-center font-medium py-4 px-6 shadow-md";

                  return isAvailable ? (
                    <Link
                      key={subj}
                      href={href}
                      className={`${baseClass} hover:scale-[98%]`}
                    >
                      {subj}
                    </Link>
                  ) : (
                    <div
                      key={subj}
                      className={`${baseClass} opacity-50 cursor-not-allowed`}
                    >
                      {subj}
                      <span className="absolute bottom-1 right-1 text-xs bg-[#2b1b0e] text-white px-2 py-0.5 rounded">
                        Coming Soon
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <p
        className="mt-8 text-4xl"
        style={{ fontFamily: "'Rockwell', 'Serif', serif" }}
      >
        More subjects coming soon!!!
      </p>
    </section>
  );
}
