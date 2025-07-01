/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        text: "#111827", // Dark Gray
        background: "#FAFAFA",
        text: "#111827",
        muted: "#6B7280",
        primary: "#111111",
        hover: "#1F1F1F",
        card: "#F5F5F5",
        border: "#E5E7EB",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        generalsans: ["GeneralSans", "sans-serif"],
        // sans: ["GeneralSans-Variable", "sans-serif"], // default
      },
    },
  },
  plugins: [],
};
