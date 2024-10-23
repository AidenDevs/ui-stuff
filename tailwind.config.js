/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },

        bronze: {
          1: "hsl(20 25% 7%)",
          2: "hsl(20 24% 10%)",
          3: "hsl(24 49% 13%)",
          4: "hsl(24 91% 14%)",
          5: "hsl(24 75% 18%)",
          6: "hsl(24 57% 25%)",
          7: "hsl(20 41% 32%)",
          8: "hsl(24 49% 41%)",
          9: "hsl(24 50% 39%)",
          10: "hsl(24 45% 34%)",
          11: "hsl(24 85% 75%)",
          12: "hsl(24 100% 89%)",
        },

        goose: {
          1: "hsl(220 10% 7%)",
          2: "hsl(240 5% 10%)",
          3: "hsl(220 6% 14%)",
          4: "hsl(225 5% 17%)",
          5: "hsl(225 7% 20%)",
          6: "hsl(228 8% 24%)",
          7: "hsl(225 7% 29%)",
          8: "hsl(231 7% 39%)",
          9: "hsl(228 9% 45%)",
          10: "hsl(228 7% 50%)",
          11: "hsl(228 9% 72%)",
          12: "hsl(240 11% 94%)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
