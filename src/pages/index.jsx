import Head from "next/head";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectsSection";
import FocusAreasSection from "@/components/home/FocusAreasSection";
import HeroSection from "@/components/home/HeroSection";
import IdeasSection from "@/components/home/IdeasSection";
import NowSection from "@/components/home/NowSection";
import VolleyballSection from "@/components/home/VolleyballSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alejandro Lobos | Tecnología, productos digitales y voleibol</title>
        <meta
          name="description"
          content="Soy Alejandro Lobos, Ingeniero Civil Informático, profesional de telecomunicaciones, entrenador de voleibol y constructor de productos digitales."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Alejandro Lobos | Tecnología, productos digitales y voleibol"
        />
        <meta
          property="og:description"
          content="Conecto tecnología, personas e ideas para convertir problemas en soluciones."
        />
        <meta property="og:locale" content="es_ES" />
        <meta
          property="og:image"
          content="https://pagina-personal-bice.vercel.app/images/ale.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/icons/lobo32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/lobo96.png" />
      </Head>

      <a
        href="#contenido"
        className="sr-only z-[100] rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>

      <Navbar />
      <main id="contenido">
        <HeroSection />
        <FocusAreasSection />
        <FeaturedProjectsSection />
        <NowSection />
        <VolleyballSection />
        <IdeasSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
