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
            Vous voulez échanger sur l'outil, contactez{" "}
            <a href="mailto:?to=mathilde_leclerc@natural-solutions.eu,ophelie_da-silva@natural-solutions.eu,vaja_pavlovic@natural-solutions.eu">
              nous
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
          <Contact
            name="Vaja Pavlovic"
            img={require("public/images/contacts/Vaja.png")}
            description="Chargée de développement commercial à Natural Solutions"
          />
          <br />
          <h4>Communauté open-source</h4>
          <p>
            Pour tout échange sur les fonctionnalités de l'outil ou question
            technique, vous pouvez également vous reportez{" "}
            <a href="https://github.com/NaturalSolutions/GeoCam">
              au dépôt GitHub
            </a>{" "}
            du projet.
          </p>
        </Section>
      </main>
    </Page>
  );
}
