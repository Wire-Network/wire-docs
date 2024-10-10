import React from "react";
import Link from "@docusaurus/Link";
import { WireLogoMark } from "@site/src/components/logos/wire/mark";

export default function NavbarLogo(): JSX.Element {
  return (
    <Link to="/" className="w-14 shrink text-darkest dark:text-white">
      <WireLogoMark className="w-44" />
    </Link>
  );
}
