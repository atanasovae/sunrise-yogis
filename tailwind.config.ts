import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        moss: '#5B623A', // Corrected quotation marks
        valleymoss: '#897E45',
        fadedgreen: '#eef6ec',
        yosemiteivory: '#EDD9B7',
        meadow: '#C46D52',
        sunshine: '#f1ba42',
        cream: '#FBF1E5',
        yellow: '#ffbd59',


      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      }
      
    },
  },
  plugins: [],
};

export default config;

