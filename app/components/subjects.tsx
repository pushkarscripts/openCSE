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

export default function SubjectsSection() {
  return (
    <section id="subjects" className="px-6 py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Browse Subjects</h2>
      <p className="mb-8 text-gray-300">
        Explore Subjects divided Semester-wise for your convenience.
      </p>
      <div className="space-y-10">
        {Object.entries(subjects).map(([semester, list]) => (
          <div key={semester}>
            <h3 className="text-xl font-semibold mb-4">{semester}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {list.map((subj) => (
                <div
                  key={subj}
                  className="bg-[#d2b48c] text-[#2b1b0e] font-medium py-4 px-6 rounded-md shadow-md"
                >
                  {subj}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 font-semibold">More subjects coming soon!!!</p>
    </section>
  );
}
