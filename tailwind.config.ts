import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      neutral: { white: "#f2f2f2", black: "#121212" },
      topics: { general: "#5792FF", sports: "#4ACB5E", geography: "#FF8731" },
      warning: "#C85656",
      profile: "#C8301C",
      options: "#D1D1D1"
    },
    extend: {
      spacing: {
        '20px': '20px',
      },
      screens: {
        'custom-lg': {'min': '415px'},
      },
    },
  },
  plugins: [],
};
export default config;
