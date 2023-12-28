import Head from "next/head";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";
import ReactPlayer from "react-player";

export default function Demo() {
  return (
    <Page>
      <Head>
        <title>Demo</title>
      </Head>
      <main>
        <Section
          title="Ressources"
          hero
          heroImage={require("public/images/banners/anastasia-nelen-mFHGq0RthBs-unsplash.jpg")}
        ></Section>
        <Section title="Ressources sur le projet"></Section>
        <Section title="Ressources sur les pièges photographiques"></Section>
      </main>
    </Page>
  );
}
