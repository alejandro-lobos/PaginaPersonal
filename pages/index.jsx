import Navbar from '../components/Navbar';
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
    <div className={styles.container}>
    <Navbar />
    <div id="inicio" > 
      <Banner />
    </div>
    <div id="about"> 
    <AboutMe/>
    <Education/>
    </div>
    <div id="project"> 
    <Experience/>
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
  );
}


