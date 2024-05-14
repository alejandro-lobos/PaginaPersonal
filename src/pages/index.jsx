import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCarousel from "@/components/ProjectCarrousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import Head from "next/head"; // Para definir elementos en el <head> de tu documento HTML
import { useEffect, useState } from "react";


export default function Home() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
      const fetchProjects = async () => {
        const response = await fetch('https://api.github.com/users/alejandro-lobos/repos');
        const data = await response.json();
        setProjects(data);
      };
  
      fetchProjects();
    }, []);
  return (
    <div className="relative min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/tp3.jpg')" }}>
        <Head>
            <title>Alejandro Lobos</title>
            <link rel="icon" sizes="16x16" href="/icons/lobo.png" type="image/png" />
            <link rel="icon" sizes="32x32" href="/icons/lobo.png" type="image/png" />
            <link rel="icon" sizes="96x96" href="/icons/lobo.png" type="image/png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/lobo.png" />
        </Head>
        <Navbar />
        <main className="relative w-full bg-transparent">
          <div id="inicio" className="w-full">
            <Banner />
          </div>
          <div id="about" className="w-full bg-gray-bg">
            <AboutMe />
          </div>
          <div id="experience" className="w-full bg-transparent">
            <h2 className="text-3xl md:text-5xl font-bold text-left flex justify-center py-10 text-white bg-black bg-opacity-60 ">
              Experiencia
            </h2>
            <Experience />
          </div>
          <div id="project" className="bg-gray-bg">
            <ProjectCarousel projects={projects} />
          </div>
        </main>
      <footer>
      <WhatsAppButton />
      <Footer/>
      </footer>
    </div>
  );
} 