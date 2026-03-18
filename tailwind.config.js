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
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      /* Wire Network Brand Guide 2026 - Core Palette */
      obsidian: "#020406",      /* Primary background */
      carbon: "#0B1016",        /* Secondary surfaces */
      gunmetal: "#171F29",      /* Frames and structure */
      platinum: "#E8EDF4",      /* Primary text */
      sterling: "#B2BCC8",      /* Secondary text */
      cobalt: "#2F6BFF",        /* Signal Blue - CTAs */
      horizon: "#7EA5FF",       /* Horizon Blue - Hover */
      /* Legacy mappings for compatibility */
      dark: "#0B1016",          /* Maps to Carbon */
      darker: "#020406",        /* Maps to Obsidian */
      darkest: "#020406",       /* Maps to Obsidian */
      gray: "#B2BCC8",          /* Maps to Sterling */
      blue: "#2F6BFF",          /* Maps to Signal Blue */
      teal: "#7EA5FF",          /* Maps to Horizon Blue */
      /* Semantic colors */
      info: "#7EA5FF",
      success: "#44E2A1",
      warning: "#E68E35",
      error: "#CB0C59",
      headerBg: "rgba(2,4,6, var(--header-opacity))",
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
        /* Wire Network Brand Guide 2026 - Gradients */
        "contact-gradient":
          "linear-gradient(to bottom right, #2F6BFF 30%, #7EA5FF 100%)",
        "masthead-gradient":
          "linear-gradient(to bottom, #020406 30%, #0B1016 100%)",
        "masthead-shadow":
          "linear-gradient(to bottom, #0200, #02040680, #020406, #020406)",
        "node-tier-gradient":
          "linear-gradient(to bottom, #020406, #2F6BFF)",
        "page-header-gradient":
          "linear-gradient(255deg, #2F6BFF 0%, #7EA5FF 100%), linear-gradient(236.21deg, #0200 29.95%, #020406 99.33%)",
        "page-title-gradient": "linear-gradient(190deg, #0200, #020406)",
        "tile-gradient":
          "linear-gradient(to bottom right, #2F6BFF, #7EA5FF) border-box",
        "blue-gradient":
          "linear-gradient(112.8deg, #2F6BFF -15.76%, #7EA5FF 102.86%)",
        "button-gradient":
          "linear-gradient(20deg, #1a5bff 0%, #2F6BFF 40%, #4a7fff 70%, #7EA5FF 100%)",
        /* Metallic silver gradient for premium elements */
        "metal-gradient":
          "linear-gradient(135deg, #F9FBFD 0%, #E1E6EC 18%, #ADB5BF 36%, #F0F3F7 52%, #979FA8 72%, #D7DCE2 100%)",
      },
    },
  },
  plugins: [twAspectRatio, twContainerQueries, twTypography],
};
export default config;
