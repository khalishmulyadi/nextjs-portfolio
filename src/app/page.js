import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#153b50]">
      <Navbar />
      <div class="contianer mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1d4ed8"
          fill-opacity="1"
          d="M0,256L48,261.3C96,267,192,277,288,256C384,235,480,181,576,149.3C672,117,768,107,864,128C960,149,1056,203,1152,234.7C1248,267,1344,277,1392,282.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div class="contianer mx-auto px-12 py-4 bg-gradient-to-t from-blue-500 via-blue-600 to-blue-700">
        <AboutSection />
      </div>
    </main>
  );
}
