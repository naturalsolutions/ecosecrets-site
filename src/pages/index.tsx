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
            <br /> pour la gestion des camera traps.
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
                href="/code"
                className="btn-primary text-white btn-lg"
              >
                Tester GeoCam
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
                href={`${process.env.NEXT_PUBLIC_GITHUB_URL}`}
                className="btn-light"
              >
                Code source
              </HomeLinkButton>
            </li>
          </ul>
        </Section>
        <Section title="À propos">
          <p className="lead">XXX</p>
          <p>XXX</p>
        </Section>
        <div className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Section title="Actualités" noContainer>
                  <PostPreview post={post} />
                </Section>
              </div>
              <div className="col-md-6">
                <Section title="Dernières versions" noContainer>
                  <div className="row row-cols-lg-2 g-2">
                    <Release title="GeoCam" repository="geocam" />
                  </div>
                </Section>
              </div>
            </div>
          </div>
        </div>
        <Section title="En bref">
          <div className="row row-cols-sm-2 row-cols-md-4">
            <Feature
              title="XXX"
              icon={require("public/icons/dataProcessing.png")}
            >
              XXX
            </Feature>
            <Feature
              title="XXX"
              icon={require("public/icons/natureOnScreen.png")}
            >
              XXX
            </Feature>
            <Feature title="XXX" icon={require("public/icons/codeReview.png")}>
              XXX
            </Feature>
            <Feature
              title="XXX"
              icon={require("public/icons/collaborators.png")}
            >
              XXX
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
