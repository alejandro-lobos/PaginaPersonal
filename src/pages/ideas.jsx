import Head from "next/head";
import SectionLandingPage from "@/components/SectionLandingPage";

export default function IdeasPage() {
  return (
    <>
      <Head>
        <title>Ideas | Alejandro Lobos</title>
        <meta
          name="description"
          content="Ideas y aprendizajes sobre productos digitales, tecnología y voleibol."
        />
      </Head>
      <SectionLandingPage
        eyebrow="Notas y aprendizajes"
        title="Ideas"
        description="Un espacio para ideas y aprendizajes sobre productos digitales, tecnología y voleibol."
      />
    </>
  );
}
