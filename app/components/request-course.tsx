export default function RequestCourse() {
  return (
    <section className="py-4 text-center">
      <h2 className="text-4xl font-bold">
        Can't find a course?
      </h2>

      <p className="mt-5 text-[#ffffff]">
        Request a new course/topic through GitHub.
      </p>

      <a
        href="https://github.com/pushkarscripts/opencse/issues/new?template=course_request.md"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 px-6 py-3 rounded-lg bg-[#d2b48c] text-black font-semibold hover:opacity-80 transition"
      >
        Request a Course
      </a>
    </section>
  );
}