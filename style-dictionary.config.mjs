export default {
  source: [
    "tokens/primitive/**/*.json",
    "tokens/semantic/**/*.json",
    "tokens/responsive/**/*.json"
  ],
  hooks: {
    transforms: {
      "size/px-number": {
        type: "value",
        filter: (token) => token.type === "number",
        transform: (token) => `${token.value}px`,
      },
      "font-weight/number": {
        type: "value",
        filter: (token) =>
          token.type === "fontWeight" || 
          (token.path?.includes("weight") && token.path?.includes("font")),
        transform: (token) => {
          const map = {
            thin: 100, extralight: 200, light: 300, regular: 400,
            medium: 500, semibold: 600, bold: 700, extrabold: 800, black: 900,
          };
          return map[String(token.value).toLowerCase()] ?? token.value;
        },
      },
    },
  },
  platforms: {
    css: {
      transformGroup: "css",
      transforms: [
        "attribute/cti", "name/kebab", "time/seconds", "html/icon",
        "size/px", "size/px-number", "font-weight/number",
        "color/css", "asset/url", "fontFamily/css", "cubicBezier/css",
        "strokeStyle/css/shorthand", "border/css/shorthand",
        "typography/css/shorthand", "transition/css/shorthand", "shadow/css/shorthand"
      ],
      buildPath: "styles/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: { selector: ":root", outputReferences: true },
        },
      ],
    },
  },
};