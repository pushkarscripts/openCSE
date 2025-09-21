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
      <hr className="mx-70 mb-6 mt-18 border-t-4" />
      <SubjectsSection />
      <hr className="mx-70 mb-6 mt-10 border-t-4" />
      <ContributionsSection />
      <hr className="mx-70 mb-6 mt-10 border-t-4" />
      <SponsorSection />
      <hr className="mx-70 mb-6 mt-18 border-t-4" />
      {/* <Footer /> */}
    </div>
  );
}
