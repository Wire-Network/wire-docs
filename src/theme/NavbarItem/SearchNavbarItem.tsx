import React from "react";
import NavbarSearch from "../Navbar/Search";
import SearchBar from "../SearchBar";
import type { Props } from "@theme/NavbarItem/SearchNavbarItem";

export default function SearchNavbarItem({
  mobile,
  className,
}: Props): JSX.Element | null {
  if (mobile) {
    return null;
  }

  return (
    <NavbarSearch className={className}>
      <SearchBar />
    </NavbarSearch>
  );
}
