import Navbar from '../components/Navbar';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import WhatsAppButton from '../components/WhatsAppButton';
import SocialLinks from '../components/SocialLinks';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Experience from '../components/Experience';
import ProjectCarousel from '../components/ProjectCarrousel';
import { useState, useEffect } from 'react';
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
  <>  
    <Head>
    <title>Alejandro Lobos</title>
    <link rel="icon" sizes="16x16" href="/icons/lobo.png" type="image/png" />
    <link rel="icon" sizes="32x32" href="/icons/lobo.png" type="image/png" />
    <link rel="icon" sizes="96x96" href="/icons/lobo.png" type="image/png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/lobo.png" />
    </Head>
    <div className={styles.container}>
    <Navbar />
    <div id="inicio" > 
      <Banner />
    </div>
    <div id="about"> 
    <AboutMe/>
    <Education/>
    <Experience/>
    </div>
    <div id="project"> 
    <ProjectCarousel projects={projects} />
    </div>
    <div id="contact"> 
      <Contact />
    </div>
    
    <div id="socialLinks"> 
    <SocialLinks /> 
    </div>
   
      <Footer/>
      <WhatsAppButton />
    </div>
  </>
  );
}


