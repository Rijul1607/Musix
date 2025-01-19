import { main } from "framer-motion/client";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features"
import Whyus from "@/components/Whyus"
import Testimonial from "@/components/Testimonials";
import Instructors from "@/components/Insructors"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

    <h1 className="text-2xl text-center"></h1>
    <HeroSection />
    <Features/>
    <Whyus/>
    <Testimonial/>
    <Features/>
    <Instructors/>
    <Footer/>
    </main>
  );
}
