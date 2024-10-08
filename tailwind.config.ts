import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'site-background': 'linear-gradient(45deg, #15616D, #161719)',
      },
      colors: {
        primary: "#E3ECF1",
        secondary: "#1C1919",
        tertiary: "#5E5F61",
        quaternary: "#2D2B2C",
      },
      opacity: {
        '15': '0.15',
        '25': '0.25',
        '50': '0.50',
        '75': '0.75',
      },
    },
  },
  plugins: [],
};
export default config;
