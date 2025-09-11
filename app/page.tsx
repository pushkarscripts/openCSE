import ContributionsSection from "./components/contribute";
import HeroSection from "./components/hero";
import Navbar from "./components/navbar";
import SponsorSection from "./components/sponsor";
import SubjectsSection from "./components/subjects";
// import Footer from "./components/footer";

export default function Home() {
  return (
    <div
      style={{
      scrollbarColor: "yellow transparent",
      scrollbarWidth: "thin",
      }}
      className="scrollbar-yellow"
    >
      <Navbar />
      <HeroSection />
      <hr className="mx-6 mb-6 mt-12 border-t" />
      <SubjectsSection />
      <hr className="mx-6 mb-6 mt-12 border-t" />
      <ContributionsSection />
      <hr className="mx-6 mb-6 mt-12 border-t" />
      <SponsorSection />
      <hr className="mx-6 mb-6 mt-12 border-t" />
      {/* <Footer /> */}
    </div>
  );
}
