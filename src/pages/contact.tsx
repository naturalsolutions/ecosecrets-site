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
          <p>Contactez Natural Solutions</p>
        </Section>
      </main>
    </Page>
  );
}
