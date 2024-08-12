import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
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
    link: "/docs/api-reference",
    description: (
      <>Check out our comprehensive documentation for APIs and SDKs.</>
    ),
  },
  {
    title: "Glossary",
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    link: "/docs/glossary",
    description: (
      <>Get familiar with common blockchain and Wire specific terminology.</>
    ),
  },
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

// function Feature({title, description}: FeatureItem) {
//   return (
//     <div className={clsx('col col--5 card padding--md margin-sm')}>

//       {/* <div className="text--center">
//         <Svg className={styles.featureSvg} role="img" />
//       </div> */}
//       <div className="text--center padding-horiz--md">

//         <Heading as="h3">{title}</Heading>
//         <p>{description}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs">
//             Get started
//           </Link>
//         </div>
//       </div>

//     </div>
//   );
// }

function Feature({ title, description, link }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="card-demo">
        <div className="card text--center">
          <div className="card__header">
            <h3>{title}</h3>
          </div>
          <div className="card__body">
            <p className="card-content">{description}</p>
          </div>
          <div className="card__footer">
            <Link className="button button--secondary button--lg" to={link}>
              {title}
            </Link>
          </div>
          {/* <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg button--block"
              to={link}>
              {title}
            </Link>
          </div> */}
        </div>
      </div>
      {/* <div className="card-demo text--center">
  <div className="card">
    <div className="card__header">
      <h3>Lorem Ipsum</h3>
    </div>
    <div className="card__body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.
      </p>
    </div>
    <div className="card__footer">
      <button className="button button--secondary button--block">See All</button>
    </div>
  </div>
</div> */}
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
