/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('src/IMAGES/45-degree-fabric-light.png')",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@tailwindcss/forms"),
  ],
};

