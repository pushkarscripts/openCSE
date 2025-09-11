export default function HeroSection() {
  return (
    <section
      className="text-center py-16 px-6 rounded-xl m-6"
      style={{
        backgroundImage: "url('/HeroBG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#cbb89d",
      }}
    >
      <h1 className="text-3xl md:text-6xl font-bold text-[#3a220f]">
        Learn Computer Science & Engineering<br />the Open Way.
      </h1>
      <p className="mt-4 text-4xl text-gray-800">
        Free, open, and beginner-friendly documentation<br /> for all CSE subjects.
      </p>
      <button className="mt-18 px-6 py-3 bg-[#3a220f] text-white rounded-full font-semibold">
        Explore Subjects
      </button>
    </section>
  );
}
