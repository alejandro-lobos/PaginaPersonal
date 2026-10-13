import Head from "next/head";
import SectionLandingPage from "@/components/SectionLandingPage";

export default function VolleyballPage() {
  return (
    <>
      <Head>
        <title>Voleibol | Alejandro Lobos</title>
        <meta
          name="description"
          content="Mi experiencia como entrenador y los equipos que acompaño."
        />
      </Head>
      <SectionLandingPage
        eyebrow="Liderazgo en equipo"
        title="Voleibol"
        description="Actualmente entreno al Equipo Cadete Femenino y al Equipo Alevín Mixto."
      />
    </>
  );
}
