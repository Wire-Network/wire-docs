// https://www.json.org/json-en.html
Prism.languages.json = {
  property: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: true,
    greedy: true,
    alias: "key", // Changed alias to "key" for easier CSS targeting
  },
  string: {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true,
    alias: "value", // Changed alias to "value"
  },
  comment: {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true,
  },
  number: {
    pattern: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    alias: "number", // Alias for easier styling
  },
  punctuation: /[{}[\],]/,
  operator: /:/,
  boolean: {
    pattern: /\b(?:false|true)\b/,
    alias: "boolean", // Alias for easier styling
  },
  null: {
    pattern: /\bnull\b/,
    alias: "null-value", // Alias to style null separately
  },
};
Prism.languages.webmanifest = Prism.languages.json;
