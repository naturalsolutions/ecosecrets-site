import Head from "next/head";
import Image from "next/image";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";

export default function Demo() {
  return (
    <Page>
      <Head>
        <title>Technologies</title>
      </Head>
      <main>
        <Section
          title="Les technologies utilisées"
          hero
          heroImage={require("public/images/banners/anastasia-nelen-mFHGq0RthBs-unsplash.jpg")}
        ></Section>

        <Section title="L'architecture">
          <p className="lead">
            L'application web GeoCam utilise uniquement des technologies
            open-source.
          </p>
          <Image
            src={require("public/images/GeoCam/techno_scheme.png")}
            // style={{ width: 150, height: 150 }}
            alt={"Cette image n'est pas disponible"}
          ></Image>
          <br />
          <br />
          <p>
            Pour faciliter son développement et son installation l'application
            est <strong>dockerisée</strong>. Elle utilise également la
            technologie <a href="https://min.io/">MinIo</a> pour répondre au
            besoin d'un stockage optimisé d'une grande quantité de média photo
            ou vidéo.
            <br />
            <br /> L'application est développée de manière clasique avec en
            backend une API REST forunissant les données au frontend. Celui est
            développé en <a href="https://fr.legacy.reactjs.org/">
              React JS
            </a>{" "}
            basé sur la librairie <a href="https://mui.com/">MUI</a>. La
            sécurité d'application est gérée grâce à{" "}
            <a href="https://www.keycloak.org/">keycloak</a> permettant de gérer
            l'authentification et par la suite les gestion des rôles et droits
            au sein de l'application.
            <br />
            <br />
            Actuellement des développements sont en cours pour intégrer un
            modèle de Deep Learning à l'application. Pour répondre aux
            contraintes techniques du fonctionnement de ce type de
            fonctionnalité au sein d'une application web, il a été choisi
            d'utiliser un gestionnaire de tâche{" "}
            <a href="https://docs.celeryq.dev/en/stable/">Celery</a> avec{" "}
            <a href="https://redis.io/">Redis</a>.
          </p>
          <br />
          <p>
            <em>
              {" "}
              N'hésitez pas à poser vos questions sur les choix techniques et
              proposer d'autres solutions potentielles sur{" "}
              <a href="https://github.com/NaturalSolutions/GeoCam">
                GitHub
              </a>.{" "}
            </em>
          </p>
        </Section>
      </main>
    </Page>
  );
}
