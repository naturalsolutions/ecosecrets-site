import Head from "next/head";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";

export default function Contact() {
  return (
    <Page>
      <Head>
        <title>Contact</title>
      </Head>
      <main>
        <Section
          title="Contact"
          hero
          heroImage={require("public/images/banners/marek-piwnicki-ZBvUxUvWwFw-unsplash.jpg")}
        />
        <Section title="Des questions?">
          <p>
            Contactez
            <a href="mailto:?to=mathilde_leclerc@natural-solutions.eu,ophelie_da-silva@natural-solutions.eu">
              Natural Solutions
            </a>
            :
            <br /> Mathilde Leclerc, ingénieure agronome et cheffe de projet
            numérique
            <br /> Ophélie Da Silva, ingénieure spécialisée dans l'analyse et la
            visualisation de la donnée.
          </p>
        </Section>
      </main>
    </Page>
  );
}
