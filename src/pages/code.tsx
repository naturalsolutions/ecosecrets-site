import Head from "next/head";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";

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
        <Section title="Installation">
          <p>Pour installer GeoCam sur un serveur, consulter XXXX</p>
        </Section>
      </main>
    </Page>
  );
}
