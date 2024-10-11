/* eslint-disable prettier/prettier */
/* eslint-disable @docusaurus/no-untranslated-text */
import React from "react";

import Link from "@docusaurus/Link";
import { useThemeConfig } from "@docusaurus/theme-common";
import { WireLogo } from "@site/src/components/logos/wire/logo";
import { SOCIAL_LOGOS, SOCIALS } from "@site/src/utils/data";

function Footer(): JSX.Element | null {
  // const { footer } = useThemeConfig();
  // if (!footer) {
  //   return null;
  // }

  return (
    <div
      id="footer"
      className="flex flex-col gap-16 bg-masthead-gradient px-4 pb-4 pt-20 sm:px-6 md:gap-40 lg:px-8 dark:border-t dark:border-[var(--ifm-toc-border-color)]">
      <div className="flex w-full flex-col gap-10 lg:mx-auto lg:max-w-7xl">
        <div className="grid grid-cols-12 place-content-center gap-10 md:gap-8 lg:gap-14">
          <div className="col-span-12 flex flex-col gap-4 md:col-span-6 xl:col-span-8">
            <div className="flex w-full flex-row items-center justify-center md:items-start md:justify-start">
              <Link
                to="/"
                className="grid place-items-center text-white transition-colors hover:text-purple-light">
                <WireLogo className="w-64" />
              </Link>
            </div>
            <p className="font-body text-center text-base font-light text-white md:text-left">
              The Blockchain for the Ai Agent Economy
            </p>
          </div>
          <div className="col-span-12 flex flex-col items-center justify-center gap-4 text-center md:col-span-3 md:items-start md:text-left xl:col-span-2">
            <h6 className="font-body font-bold uppercase text-white">
              Wire Network
            </h6>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  to="/docs/category/wire-basics"
                  className="transiton font-body cursor-pointer text-base text-white duration-150 hover:text-purple-light"
                  href="https://wire.network/#about">
                  Developer Portal
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/api-reference/quick-reference"
                  className="transiton font-body cursor-pointer text-base text-white duration-150 hover:text-purple-light"
                  href="mailto:docs@wire.network">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 flex flex-col gap-4 text-center md:col-span-3 md:text-left xl:col-span-2">
            <h6 className="font-body font-bold uppercase text-white">
              Follow Us
            </h6>
            <div className="flex flex-row items-center justify-center gap-x-4 md:items-start md:justify-start">
              {SOCIALS.map(({ name, link }, idx) => {
                const Logo = SOCIAL_LOGOS[name];

                return (
                  <a
                    key={`socials-key-${idx}`}
                    href={link}
                    target="_blank"
                    className="block cursor-pointer text-white transition-colors hover:text-purple-light"
                    aria-label={`Wire&apo;s ${name} account`}>
                    <Logo className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 text-center md:flex-row">
        <a
          className="font-body text-[10px] text-white transition-opacity duration-200 hover:text-purple-light"
          href="https://wire.network/privacy">
          Privacy
        </a>
        <a
          className="font-body text-[10px] text-white transition-opacity duration-200 hover:text-purple-light"
          href="https://wire.network/terms-of-service">
          Terms of Service
        </a>
        <p className="font-body text-[10px] text-white">
          © 2024 Wire Network. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default React.memo(Footer);
