import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "../theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("bg-transparent pt-24 text-white")}>
      <div className="container text-center text-darkest dark:text-white">
        <Heading
          as="h1"
          className="font-heading text-7xl font-light tracking-tighter">
          {siteConfig.title}
        </Heading>
        <p className="font-body text-lg font-medium">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function ContactBanner() {
  return (
    <div className="flex w-full flex-col justify-center bg-white bg-contact-gradient py-10">
      <div className="text-md container text-center font-body font-medium text-white">
        <p>
          We welcome the community&apos;s suggestions to help improve our
          documentation.
        </p>
        <p>
          Feel free to email your input to us at{" "}
          <a className="text-white underline" href="mailto:docs@wire.network">
            docs@wire.network
          </a>
        </p>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Wire Docs`} description="Official Wire Documentation">
      <div className="flex flex-col justify-start bg-white dark:bg-masthead-gradient">
        <HomepageHeader />
        <main className="flex shrink-0 grow basis-1 flex-col justify-center py-8">
          <HomepageFeatures />
        </main>
        <ContactBanner />
      </div>
    </Layout>
  );
}
