import React from "react";
import Footer from "@theme-original/Footer";
import type FooterType from "@theme/Footer";
import type { WrapperProps } from "@docusaurus/types";
import FooterMessage from "./FooterMessage";

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      <FooterMessage></FooterMessage>
      <Footer {...props}></Footer>
    </>
  );
}
