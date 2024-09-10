/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aliceblue: {
          "100": "#f2f7ff",
          "200": "#edf2f7",
          "300": "#e6eff5",
        },
        "gray-white": "#fff",
        gray: {
          "100": "#fcfcfd",
          "200": "#27272e",
          "300": "#23262f",
          "400": "#141416",
        },
        darkslategray: {
          "100": "#425466",
          "200": "#47474a",
          "300": "#3a3a3a",
        },
        slategray: {
          "100": "#7a828a",
          "200": "#777e91",
          "300": "#718096",
        },
        lavender: {
          "100": "#e1e8ff",
          "200": "#cedcff",
        },
        mediumslateblue: {
          "100": "#4c6fff",
          "200": "#2d60ff",
        },
        mistyrose: "#ffe6e4",
        salmon: "#f16063",
        mediumaquamarine: "#66cb9f",
        black: "#000",
        darkgray: {
          "100": "#b1b1b1",
          "200": "#9d9d9d",
        },
        blue: "#0009ee",
        dimgray: "#626c70",
        lightsteelblue: {
          "100": "#b5c2e6",
          "200": "#8ba3cb",
        },
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f5f7fa",
        },
        darkslateblue: "#3b5999",
        lightgray: "#cfcfcf",
        "primary-600": "#0b4cae",
        dodgerblue: "#3073d4",
      },
      spacing: {},
      fontFamily: {
        "headings-h6": "Inter",
        "headline-3": "'DM Sans'",
        "body-regular-400": "'Public Sans'",
      },
      borderRadius: {
        mini: "15px",
        "71xl": "90px",
        "81xl": "100px",
        "6xl": "25px",
        "3xs": "10px",
        "21xl": "40px",
        "141xl": "160px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      xs: "0.75rem",
      base: "1rem",
      "2xs": "0.688rem",
      mini: "0.938rem",
      "9xl": "1.75rem",
      "3xl": "1.375rem",
      lg: "1.125rem",
      "21xl": "2.5rem",
      "5xl": "1.5rem",
      "13xl": "2rem",
      xl: "1.25rem",
      "6xl": "1.563rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
