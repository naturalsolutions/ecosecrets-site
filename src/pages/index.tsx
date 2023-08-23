import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

import Page from "@/layout/Page";
import Section from "@/components/presentation/Section";
import Feature from "@/components/presentation/Feature";
import Release from "@/components/dynamic/github/Release";
import PostPreview from "@/components/posts/PostPreview";
import { getAllPosts } from "@/lib/api";
import Post from "@/interfaces/Post";

const HomeLinkButton: FC<
  PropsWithChildren<{ href: string; className?: string }>
> = ({ href, className, children }) => (
  <Link
    href={href}
    role="button"
    className={clsx(className, "btn btn-primary me-2 mb-2")}
  >
    {children}
  </Link>
);

export default function Home({ post }: { post: Post }) {
  return (
    <Page>
      <Head>
        <title>GeoCam</title>
        <meta
          name="description"
          content="GeoCam, un outil open source développé par Natural Solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Section
          title="GeoCam"
          hero
          heroImage={require("public/images/banners/tim-arnold-awbPPVPzO0c-unsplash.jpg")}
        >
          <p className="lead">
            Un outil open source développé par Natural Solutions,
            <br /> pour la gestion et le traitement
            <br /> des données de biodiversité issues de pièges photographiques.
          </p>
          <ul className="list-unstyled d-flex mb-0">
            <li>
              <HomeLinkButton
                href="/produit"
                className="btn-primary text-white btn-lg"
              >
                Découvrir GeoCam
              </HomeLinkButton>
            </li>
            <li>
              <HomeLinkButton
                href="https://demo.geocam.natural-solutions.eu/"
                className="btn-primary text-white btn-lg"
              >
                Démo
              </HomeLinkButton>
            </li>
          </ul>
          <ul className="list-unstyled d-flex mb-0">
            <li>
              <HomeLinkButton
                href="https://naturalsolutions.github.io/geocam/"
                className="btn-light"
              >
                Documentation
              </HomeLinkButton>
            </li>
            <li>
              <HomeLinkButton
                href={`${process.env.NEXT_PUBLIC_GITHUB_URL}` + `/GeoCam`}
                className="btn-light"
              >
                Code source
              </HomeLinkButton>
            </li>
          </ul>
        </Section>
        <Section title="À propos">
          <p>
            GeoCam est une <strong>application web open-source</strong> adaptée
            aux suivis en milieu naturel basés sur les capteurs autonomes, tels
            que les <strong>pièges photographiques</strong>. Initiée et
            développée par Natural Solutions, elle permet de caractériser dans
            son ensemble les différentes facettes des{" "}
            <strong>études de suivis</strong>
            et de faciliter le traitement des données associées.
          </p>
        </Section>
        <div className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Section title="Actualités" noContainer>
                  <ul>
                    <li>
                      <a href="https://www.natural-solutions.eu/blog/geocam-gestion-donnees-pieges-photographiques-open-source">
                        GeoCam, un outil open-source sur GitHub
                      </a>
                    </li>
                    <li>
                      <a href="https://www.natural-solutions.eu/blog/webinaire-pieges-phorographiques">
                        Webinaire - Gérer vos pièges photos et les données
                        associées
                      </a>
                    </li>
                  </ul>
                </Section>
              </div>
              <div className="col-md-6">
                <Section title="Dernières versions" noContainer>
                  <p>En cours de développement</p>
                </Section>
              </div>
            </div>
          </div>
        </div>
        <Section title="En bref">
          <div className="row row-cols-sm-2 row-cols-md-4">
            <Feature
              title="Gestion du stockage des médias"
              icon={require("public/icons/Image_folder.png")}
            >
              Technologie adaptée pour un stockage optimal des médias.
            </Feature>
            <Feature
              title="Gestion des pièges photographiques"
              icon={require("public/icons/Camera.png")}
            >
              Inventaire des pièges photographiques, de leurs caractéristiques
              et de leur déploiement sur le terrain
            </Feature>
            <Feature
              title="Gestion des sites de déploiement"
              icon={require("public/icons/Map_dark.png")}
            >
              Inventaire des sites de déploiements de pièges photographiques.
            </Feature>
            <Feature
              title="Annotation manuelle des médias"
              icon={require("public/icons/Edit_photo.png")}
            >
              Saisie de données taxonomiques issue du traitement manuel
              <br />
              des médias en s'appuyant sur le référentiel{" "}
              <strong>TaxRef</strong>
            </Feature>
          </div>
        </Section>
      </main>
    </Page>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts(["title", "date", "slug", "author", "excerpt"]);

  return {
    props: { post: posts[0] },
  };
};
