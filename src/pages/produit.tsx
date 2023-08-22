import Head from "next/head";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";

export default function Produit() {
  return (
    <Page>
      <Head>
        <title>Produit</title>
      </Head>
      <main>
        <Section title="Découvrir GeoCam" hero></Section>
        <Section title="L'architecture">
          <ul>
            <li>NextJS</li>
          </ul>
        </Section>
      </main>
    </Page>
  );
}
