import Head from "next/head";
import SectionLandingPage from "@/components/SectionLandingPage";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Proyectos | Alejandro Lobos</title>
        <meta
          name="description"
          content="Proyectos digitales en diseño, evolución y exploración."
        />
      </Head>
      <SectionLandingPage
        eyebrow="Trabajo seleccionado"
        title="Proyectos"
        description="Un espacio para documentar los productos e ideas digitales que estoy creando y explorando."
      />
    </>
  );
}
