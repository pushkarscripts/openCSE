export default function RequestCourse() {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold">
        Can't find a course?
      </h2>

      <p className="mt-4 text-gray-400">
        Request a new course/topic through GitHub.
      </p>

      <a
        href="https://github.com/safwanshk11/opencse-safwan/issues/new?template=course_request.md"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:opacity-80 transition"
      >
        Request a Course
      </a>
    </section>
  );
}