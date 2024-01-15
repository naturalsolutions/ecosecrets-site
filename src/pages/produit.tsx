import Head from "next/head";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";
import ReactPlayer from "react-player";
import Member from "@/components/presentation/team_member";

export default function Produit() {
  return (
    <Page>
      <Head>
        <title>Produit</title>
      </Head>
      <main>
        <Section
          title="Qu'est-ce que GeoCam ?"
          hero
          heroImage={require("public/images/banners/rafale.png")}
        ></Section>
        <Section title="Démonstration de la plateforme">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=FUrnB_F1FV8"
            light={true}
          />
        </Section>
        <Section title="L'équipe">
          {/* <div className="container text-center">
            <div className="row align-items-start">
              <div className="col">
                <Member
                  name="Mathilde Leclerc"
                  img={require("public/images/contacts/Mathilde.png")}
                  description="Ingénieure agronome et cheffe de projet numérique"
                />
              </div>
              <div className="col">
                <Member
                  name="Ophélie Da Silva"
                  img={require("public/images/contacts/Ophélie.png")}
                  description=""
                />
              </div>
              <div className="col">
                <Member
                  name="Maxime Vergez"
                  img={require("public/images/contacts/Max.png")}
                  description="Ingénieur et développeur "
                />
              </div>
              <div className="col" style={{ display: "flex" }}>
                <Member
                  name="Julien Graziani"
                  img={require("public/images/contacts/Julien.png")}
                  description="Ingénieure et développeur web sénior"
                />
              </div>
            </div>
          </div> */}
        </Section>
      </main>
    </Page>
  );
}
