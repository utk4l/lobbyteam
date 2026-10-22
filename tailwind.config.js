/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F5F5F7",
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#FAFAFA",
          elevated: "#FBFBFD",
        },
        ink: {
          primary: "#1D1D1F",
          secondary: "#515154",
          muted: "#6E6E73",
          tertiary: "#86868B",
        },
        hairline: {
          DEFAULT: "#E5E5EA",
          subtle: "#ECECEE",
          dark: "#D1D1D6",
        },
        signal: {
          emerald: "#10B981",
          appleGreen: "#34C759",
          emeraldMuted: "rgba(16, 185, 129, 0.12)",
          emeraldBorder: "rgba(16, 185, 129, 0.28)",
        }
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Inter",
          "Segoe UI",
          "Helvetica Neue",
          "sans-serif"
        ],
        mono: [
          "SF Mono",
          "JetBrains Mono",
          "ui-monospace",
          "Menlo",
          "Monaco",
          "monospace"
        ]
      },
      letterSpacing: {
        tighterHeading: "-0.03em",
        channelTag: "0.06em",
      },
      boxShadow: {
        'apple-subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02)',
        'apple-card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'apple-float': '0 20px 40px -15px rgba(0, 0, 0, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
