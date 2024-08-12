import siteConfig from "@generated/docusaurus.config";

import type * as PrismNamespace from "prismjs";
import type { Optional } from "utility-types";

// export default function prismIncludeLanguages(
//   PrismObject: typeof PrismNamespace
// ): void {}
export default function prismIncludeLanguages(
  PrismObject: typeof PrismNamespace
): void {
  // const { siteConfig } = useDocusaurusContext();

  const {
    themeConfig: { prism },
  } = siteConfig;
  const { additionalLanguages } = prism as { additionalLanguages: string[] };

  console.log(additionalLanguages);
  // Prism components work on the Prism instance on the window, while prism-
  // react-renderer uses its own Prism instance. We temporarily mount the
  // instance onto window, import components to enhance it, then remove it to
  // avoid polluting global namespace.
  // You can mutate PrismObject: registering plugins, deleting languages... As
  // long as you don't re-assign it
  globalThis.Prism = PrismObject;

  additionalLanguages.forEach(lang => {
    if (lang === "php") {
      // eslint-disable-next-line global-require
      require("prismjs/components/prism-markup-templating.js");
    } else if (lang === "shell" || lang === "sh" || lang === "bash") {
      // eslint-disable-next-line global-require
      require("./bash.js");
    } else if (lang === "shell-session") {
      require("./shell-session.js");
    } else {
      require(`prismjs/components/prism-${lang}.js`);
    }
  });

  delete (globalThis as Optional<typeof globalThis, "Prism">).Prism;
}
