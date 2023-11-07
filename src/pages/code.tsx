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
          title="Démo et code"
          hero
          heroImage={require("public/images/banners/anastasia-nelen-mFHGq0RthBs-unsplash.jpg")}
        ></Section>
        <Section title="Démonstration de la plateforme">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=FUrnB_F1FV8"
            light={true}
          />
        </Section>
      </main>
    </Page>
  );
}
