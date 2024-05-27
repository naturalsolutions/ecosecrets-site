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
          title="Ressources"
          hero
          heroImage={require("public/images/banners/anastasia-nelen-mFHGq0RthBs-unsplash.jpg")}
        ></Section>
        <Section title="Ressources sur le projet">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="fw-bold">
                Etat de l&rsquo;art des outils existants dans le domaine des
                pièges photographiques
              </div>
              <p>
                Analyse compartive de plusieurs outils selon plusieurs critères
                : récenteté, périmètre fonctionnel, caractéristiques techniques,
                coût, etc...
                <br />
                Document disponible ici :{" "}
                <a
                  href="https://naturalsolutionsfr-my.sharepoint.com/:b:/g/personal/mathilde_leclerc_natural-solutions_eu/EbQ5HvaKJxRIm-cp1JSnjp0Bk7IHC-8oTlKfS1kDntm6aA?e=vHFSyO"
                  target="_blank"
                >
                  Etat_Art.pdf
                </a>
              </p>
            </li>
            <li className="list-group-item">
              <div className="fw-bold">Mémoire de stage</div>
              <p>
                Quel outil pour faciliter la gestion, le traitement et
                l&rsquo;analyse des données de biodiversité issues de pièges
                photographiques <br />
                Document disponible ici :{" "}
                <a
                  href="https://naturalsolutionsfr-my.sharepoint.com/:b:/g/personal/mathilde_leclerc_natural-solutions_eu/ET7jcrBurzlImmpmiZmDfIIBeCY4mxcpIfcXGLNVwH_BLQ?e=Rin7ce"
                  target="_blank"
                >
                  LECLERC_Mathilde-memoire.pdf
                </a>
              </p>
            </li>
            <li className="list-group-item">
              <div className="fw-bold">
                Powerpoint de présentation du projet à l&rsquo;issus du stage
              </div>
              <p>
                Présentation visuelle et synthétique des étapes du stage et du
                projet et des résultats <br />
                Document disponible ici :{" "}
                <a
                  href="https://naturalsolutionsfr-my.sharepoint.com/personal/mathilde_leclerc_natural-solutions_eu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmathilde%5Fleclerc%5Fnatural%2Dsolutions%5Feu%2FDocuments%2FecoSecrets%2Dpublique%2F20221202%5FNS%5Fwebinaire%5Fcameratrap%5FAdrien%20et%20Mathilde%2Epdf&parent=%2Fpersonal%2Fmathilde%5Fleclerc%5Fnatural%2Dsolutions%5Feu%2FDocuments%2FecoSecrets%2Dpublique"
                  target="_blank"
                >
                  PPT_Webinaire.pptx
                </a>
              </p>
            </li>
          </ul>
        </Section>
        <Section title="Ressources sur la thématique des pièges photographiques">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="fw-bold">Lila BC</div>
              <p>
                &quot;Dépôt de données relatives à la biologie et à la
                conservation, conçu comme une ressource pour les chercheurs en
                apprentissage automatique et pour ceux qui souhaitent mettre
                l'apprentissage automatique au service de la biologie et de la
                conservation.&quot;
                <br />
                Accessible ici :{" "}
                <a href="https://lila.science/" target="_blank">
                  LILA BC: Home
                </a>
              </p>
            </li>
            <li className="list-group-item">
              <div className="fw-bold">WildCAM</div>
              <p>
                {" "}
                &quot;L'objectif de WildCAM (Wildlife Cameras for Adaptive
                Management) est de soutenir la gestion efficace de la faune en
                encourageant la coordination des enquêtes par pièges
                photographiques et la synthèse des données au Canada. Ce site
                possède une section très riche en articles scientifiques sur la
                thématique des pièges photographiques en écologie.&quot;
                <br />
                Accessible ici :{" "}
                <a href="https://wildcams.ca/about-us/" target="_blank">
                  wildcams.ca
                </a>
              </p>
            </li>
            <li className="list-group-item">
              <div className="fw-bold">Manuel des pièges photographiques</div>
              <p>
                Etabli dans le cadre du projet &quot;Atlas des mammifères de
                Bruxelles&quot; par Diemer Vercayie (Natuurpunt
                Zoogdierenwerkgroep Vlaanderen), ce document renseigne sur le
                fonctionnement des pièges photographiques et conseille sur leur
                utilisation. <br />
                Document disponible ici :{" "}
                <a
                  href="https://docplayer.fr/34245846-Manuel-des-pieges-photographiques-etabli-dans-le-cadre-du-projet.html"
                  target="_blank"
                >
                  Manuel-des-pieges-photographiques.pdf
                </a>
              </p>
            </li>
            <li className="list-group-item">
              <div className="fw-bold">
                Benchmark sur les pièges photographiques
              </div>
              <p>
                Document comparatif de plusieurs pièges photgraphiques, réalisé
                par Aurélien Coste pour le Parc National des Ecrins <br />
                Document disponible ici :{" "}
                <a
                  href="https://data.ecrins-parcnational.fr/documents/stages/2023-09-stage-Aurelien-Coste-photos-IA-frequentation_Benchmark-pieges-photo.pdf"
                  target="_blank"
                >
                  2023-09-stage-Aurelien-Coste-photos-IA-frequentation_Benchmark-pieges-photo.pdf
                </a>
              </p>
            </li>
            <li className="list-group-item">
              <div className="fw-bold">
                Etat de l&rsquo;art &#x2012; Méthodes de suivi innovantes de la
                fréquentation
              </div>
              <p>
                {" "}
                Etat de l&rsquo;art de différentes technologies dans le domaines
                des pièges photographiques et de leurs données, réalisé par
                Aurélien Coste pour le Parc National des Ecrins
                <br />
                Document disponible ici :{" "}
                <a
                  href="https://data.ecrins-parcnational.fr/documents/stages/2023-09-stage-Aurelien-Coste-photos-IA-frequentation_Etat-art.pdf"
                  target="_blank"
                >
                  2023-09-stage-Aurelien-Coste-photos-IA-frequentation_Etat-art.pdf
                </a>
              </p>
            </li>
            <li className="list-group-item">
              <div className="fw-bold">
                Rapport de stage &#x2012; Prospection sur le développement
                d&rsquo;une solution de suivi de fréquentation innovante
              </div>
              <p>
                {" "}
                Réalisé par Aurélien Coste pour le Parc National des Ecrins
                <br />
                Document disponible ici :{" "}
                <a
                  href="https://data.ecrins-parcnational.fr/documents/stages/2023-09-rapport-stage-Aurelien-Coste-photos-IA-frequentation.pdf"
                  target="_blank"
                >
                  2023-09-rapport-stage-Aurelien-Coste-photos-IA-frequentation.pdf
                </a>
              </p>
            </li>
            <li className="list-group-item">
              <div className="fw-bold">
                Mémoire de stage &#x2012; Fréquentation touristique
              </div>
              <p>
                {" "}
                Développement d&rsquo;un indice de fréquentation touristique
                grâce aux camera traps et aux réseaux neuronaux convolutionnels,
                réalisé par Quentin Guidosse pour la faculté Gembloux Agro-Bio
                Tech (2018-2019)
                <br />
                Document disponible ici :{" "}
                <a
                  href="https://matheo.uliege.be/bitstream/2268.2/7829/4/Quentin%20Guidosse.pdf"
                  target="_blank"
                >
                  Memoire_Quentin_Guidosse.pdf
                </a>
              </p>
            </li>
          </ul>
        </Section>
      </main>
    </Page>
  );
}
