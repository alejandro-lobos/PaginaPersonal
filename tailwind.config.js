/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1100px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      katakuri: ["Kantumruy Pro", 'sans-serif']
    },
    letterSpacing: {
      widest : '.5em',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'gradient-to-t': 'linear-gradient(to top, #007bff, #ffffff 100%)', 
       
      },
      colors: {
        'blue-bg': '#007bff', // Un azul que puedes ajustar según tus necesidades
        'gray-bg': '#ffffff',  // Gris
        'blue-word':'#103772', // titlo inicio sesion
        'blue-bor' : '#0C4E88',
        'blue-facebook' : '#3B579D', // Azul facebook
        'blue-continuar' : '#6E9DB3',  // azul boton continuar del inicio de sesion
      }
    }
  },
  plugins: [] // Debe estar fuera de theme
};
