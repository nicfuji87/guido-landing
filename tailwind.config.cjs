/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        guido: {
          primary: "#0D1117",      // Azul Escuro "Deep Space"
          secondary: "#00F6FF",     // Ciano Elétrico
          text: "#F0F6FC",         // Branco "Gelo"
          gradient: {
            from: "#0D1117",
            to: "#00F6FF"
          }
        },
        // shadcn/ui colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-guido': 'linear-gradient(135deg, #0D1117 0%, #00F6FF 100%)',
        'gradient-guido-horizontal': 'linear-gradient(90deg, #0D1117 0%, #00F6FF 100%)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}