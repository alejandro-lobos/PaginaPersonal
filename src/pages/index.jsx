import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
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
    <div >
        <Head>
            <title>Alejandro Lobos</title>
            <link rel="icon" sizes="16x16" href="/icons/lobo.png" type="image/png" />
            <link rel="icon" sizes="32x32" href="/icons/lobo.png" type="image/png" />
            <link rel="icon" sizes="96x96" href="/icons/lobo.png" type="image/png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/lobo.png" />
        </Head>
        <Navbar />
      <main className="bg-gray-100 w-full" >
        <div id="inicio" className="w-full " > 
          <Banner />
        </div>
        <div id="about" className="w-full"> 
          <AboutMe/>
        </div>
        <div id="project"> 
          <ProjectCarousel projects={projects} />
        </div>
      </main>
      <footer>
      <WhatsAppButton />
      </footer>
    </div>
  );
} 