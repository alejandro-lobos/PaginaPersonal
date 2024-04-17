import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import WhatsAppButton from '../components/WhatsAppButton';
import SocialLinks from '../components/SocialLinks';
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
      <Banner/>
      <Navbar />
      <ProjectCarousel projects={projects} />
      <SocialLinks /> 
      <Contact/>
      <Footer/>
      <WhatsAppButton />
    </div>
  );
}


