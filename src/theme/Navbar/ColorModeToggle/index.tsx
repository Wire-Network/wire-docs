import React from "react";
import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
import type { Props } from "@theme/Navbar/ColorModeToggle";
import { MoonIcon, SunIcon } from "lucide-react";

export default function NavbarColorModeToggle({
  className,
}: Props): JSX.Element | null {
  const navbarStyle = useThemeConfig().navbar.style;
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const { colorMode, setColorMode } = useColorMode();

  if (disabled) {
    return null;
  }

  const handleToggleMode = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setColorMode(colorMode === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggleMode}
      className="grid h-8 w-8 cursor-pointer place-items-center rounded-full text-darkest hover:bg-darkest/[.1] dark:text-white dark:hover:bg-white/[.1]">
      {colorMode === "dark" ? <SunIcon size={24} /> : <MoonIcon size={24} />}
    </button>
  );
}
