import twAspectRatio from "@tailwindcss/aspect-ratio";
import twContainerQueries from "@tailwindcss/container-queries";
import twTypography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  corePlugins: {
    corePlugins: { preflight: false },
    container: false,
  },
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      dark: "#282c33",
      darker: "#121418",
      darkest: "#000000",
      gray: "#9c9ea5",
      blue: "#387ffe",
      teal: "#44b2f5",
      purple: {
        light: "#ac5fe6",
        dark: "#6a36ff",
      },
      info: "#59CCEC",
      success: "#44E2A1",
      warning: "#E68E35",
      error: "#CB0C59",
      headerBg: "rgba(0,0,0, var(--header-opacity))",
    },
    extend: {
      fontFamily: {
        body: ["var(--font-body)", "sans"],
        heading: ["var(--font-heading)", "sans"],
      },
      animation: {
        "fade-in": "fade-in",
        "fade-out": "fade-out",
        "fade-in-up": "fade-in-up",
        "fade-in-down": "fade-in-down",
        "masthead-bg": "masthead-bg",
        "card-float":
          "card-float 5s ease-in-out var(--float-delay, 0) infinite",
        "modal-show": "modal-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "modal-content-show":
          "modal-content-show 250ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "masthead-bg": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "0.25", transform: "translateY(0)" },
        },
        "card-float": {
          "0%": {
            "box-shadow": "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translateY(0)",
          },
          "50%": {
            "box-shadow": "0 25px 15px 0px rgba(0,0,0,0.2)",
            transform: "translateY(calc(-5%))",
          },
          "100%": {
            "box-shadow": "0 5px 15px 0px rgba(0,0,0,0.6)",
            transform: "translateY(0%)",
          },
        },
        "modal-show": {
          from: {
            opacity: "1",
          },
          to: {
            opacity: "1",
          },
        },
        "modal-content-show": {
          from: {
            opacity: "0",
            transform: "translate(-50%, -45%) scale(0.90)",
          },
          to: {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
      },
      backgroundSize: {
        "button-gradient": "400% 100%",
      },
      backgroundPosition: {
        "button-gradient-end": "100% 0%",
      },
      backgroundImage: {
        "contact-gradient":
          "linear-gradient(to bottom right, #6a36ff 30%, #AC5FE6 100%)",
        "masthead-gradient":
          "linear-gradient(to bottom, #000000 30%, #0c1a34 100%)",
        "masthead-shadow":
          "linear-gradient(to bottom, #0000, #00000080, #000, #000)",
        "node-tier-gradient":
          "linear-gradient(to bottom,theme(colors.darkest),theme(colors.blue))",
        "page-header-gradient":
          "linear-gradient(255deg, #387FFE, 0%, #AC5FE6 100%), linear-gradient(236.21deg, #0000 29.95%, #000 99.33%)",
        "page-title-gradient": "linear-gradient(190deg, #0000, #000)",
        "tile-gradient":
          "linear-gradient(to bottom right, #6a36ff, #ac5fe6) border-box",
        "purple-gradient":
          "linear-gradient(112.8deg, #6a36ff -15.76%, #ac5fe6 102.86%)",
        "button-gradient":
          "linear-gradient( 20deg, rgba(106, 54, 255, 1) 0%, rgba(172, 95, 230, 1) 40%, rgba(56, 127, 254, 1) 80%, rgba(68, 178, 245, 1) 100%)",
      },
    },
  },
  plugins: [twAspectRatio, twContainerQueries, twTypography],
};
export default config;
