import Head from "next/head";
import Image from "next/image";
import Contact from "@/components/presentation/Contact";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";

export default function ContactPage() {
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
        <Section>
          <h4>
            Contactez{" "}
            <a href="mailto:?to=mathilde_leclerc@natural-solutions.eu,ophelie_da-silva@natural-solutions.eu">
              Natural Solutions
            </a>{" "}
            :
          </h4>
          <br />
          <Contact
            name="Mathilde Leclerc"
            img={require("public/images/contacts/Mathilde.png")}
            description="Ingénieure agronome et cheffe de projet numérique"
          />
          <Contact
            name="Ophélie Da Silva"
            img={require("public/images/contacts/Ophélie.png")}
            description="Ingénieure spécialisée dans l'analyse et la visualisation de la
            donnée"
          />
        </Section>
      </main>
    </Page>
  );
}
