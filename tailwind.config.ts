/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: ["var(--font-inter)", "sans-serif"],
  			aspekta: ["var(--font-aspekta)", "sans-serif"]
  		},
  		fontSize: {
  			xs: ["0.75rem", { lineHeight: "1.5" }],
  			sm: ["0.875rem", { lineHeight: "1.5715" }],
  			base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
  			lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
  			xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
  			'2xl': ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.01em" }],
  			'3xl': ["1.875rem", { lineHeight: "1.333", letterSpacing: "-0.01em" }],
  			'4xl': ["2.25rem", { lineHeight: "1.277", letterSpacing: "-0.01em" }],
  			'5xl': ["3rem", { lineHeight: "1", letterSpacing: "-0.01em" }],
  			'6xl': ["3.75rem", { lineHeight: "1", letterSpacing: "-0.01em" }],
  			'7xl': ["4.5rem", { lineHeight: "1", letterSpacing: "-0.01em" }]
  		},
  		colors: {
			'cdwmcp-dark': '#10172A',
  			'cdwmcp-darkblue': '#001C46',
  			'cdwmcp-gray': '#F2F5FA',
  			'cdwmcp-white': '#FFFFFF',
  			'cdwmcp-blue': '#2762F8',
  			'cdwmcp-blue-10': '#275ADC',
  			senary: 'var(--color-senary)',
  			septenary: 'var(--color-septenary)',
  			octonary: 'var(--color-octonary)',
  			nonary: 'var(--color-nonary)',
  			denary: 'var(--color-denary)',
  			light: 'var(--color-light)',
  			dark: 'var(--color-dark)',
  			transparent: 'transparent',
  			current: 'currentColor',
  			black: '#000',
  			white: '#fff',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		letterSpacing: {
  			tighter: '-0.02em',
  			tight: '-0.01em',
  			normal: '0',
  			wide: '0.01em',
  			wider: '0.02em',
  			widest: '0.4em'
  		}
  	}
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
export default config;