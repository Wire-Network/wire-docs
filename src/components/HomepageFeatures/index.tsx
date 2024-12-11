import clsx from "clsx";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Developers Portal",
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    link: "/docs/introduction/overview",
    description: (
      <>All you need to know to build on Wire Network and harness its power!</>
    ),
  },
  {
    title: "API Reference",
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    link: "/docs/api-reference/quick-reference",
    description: (
      <>Check out our comprehensive documentation for APIs and SDKs.</>
    ),
  },
  {
    title: "Glossary",
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    link: "/docs/introduction/glossary",
    description: (
      <>Get familiar with common blockchain and Wire specific terminology.</>
    ),
  },
  // {
  //   title: "Guides",
  //   // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  //   link: "/docs/guides",
  //   description: <>Check out our simple guides to get you started.</>,
  // },
  // {
  //   title: 'Learning Center',
  //   // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   link: "/docs/learning_center",

  //   description: (
  //     <>
  //       Your starting point if you are a complete beginner.
  //     </>
  //   ),
  // },
  // {
  //   title: '',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({ title, description, link }: FeatureItem) {
  return (
    <div className="text--center col-span-12 flex flex-col gap-y-2 rounded-lg border border-darkest/[.05] p-8 shadow-lg lg:col-span-4 dark:bg-white/[.05] dark:shadow-none">
      <div className="text-xl font-bold">
        <h3>{title}</h3>
      </div>
      <div className="text-balance">
        <p className="text-balance">{description}</p>
      </div>
      <div className="mt-6 flex shrink-0 grow basis-1 flex-row items-end justify-center">
        <Link
          to={link}
          className="relative gap-2 rounded-lg border-none bg-button-gradient px-8 py-3 font-body text-base font-medium tracking-wide text-white no-underline outline-none transition-[background-position] duration-300 ease-in-out before:absolute before:inset-0 before:h-full before:w-full before:rounded-lg before:border-2 before:border-white/[.25] before:bg-transparent hover:bg-button-gradient-end hover:text-white hover:no-underline md:w-max">
          {title}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className="container py-12">
      <div className="grid grid-cols-12 gap-x-4 gap-y-6">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
