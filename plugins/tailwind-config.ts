import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

function tailwindPlugin(context, options) {
  return {
    name: "tailwind-plugin",
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [postcssImport, tailwindcss, autoprefixer];
      return postcssOptions;
    },
  };
}

export { tailwindPlugin };
