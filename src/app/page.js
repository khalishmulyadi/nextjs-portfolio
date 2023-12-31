import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-mainBg">
      <Navbar />
      <div className="contianer mt-24 px-6 sm:px-12 py-4">
        <HeroSection />
        <AchievementsSection />
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#19376D"
          fillOpacity="1"
          d="M0,256L48,261.3C96,267,192,277,288,256C384,235,480,181,576,149.3C672,117,768,107,864,128C960,149,1056,203,1152,234.7C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div id="about" className="px-4 sm:px-12 py-4 bg-primary">
        <AboutSection />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#19376D"
          fillOpacity="1"
          d="M0,128L34.3,106.7C68.6,85,137,43,206,64C274.3,85,343,171,411,192C480,213,549,171,617,181.3C685.7,192,754,256,823,272C891.4,288,960,256,1029,218.7C1097.1,181,1166,139,1234,133.3C1302.9,128,1371,160,1406,176L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <div id="projects" className="px-4 sm:px-12 py-4">
        <ProjectsSection />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#19376D"
          fillOpacity="1"
          d="M0,32L34.3,64C68.6,96,137,160,206,176C274.3,192,343,160,411,149.3C480,139,549,149,617,144C685.7,139,754,117,823,128C891.4,139,960,181,1029,197.3C1097.1,213,1166,203,1234,208C1302.9,213,1371,235,1406,245.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div id="contact" className="px-4 sm:px-12 py-4 bg-primary">
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
