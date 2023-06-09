/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'hsl(4, 100%, 67%)',
        dark_slate_grey: 'hsl(234, 29%, 20%)',
        charcoal_grey: 'hsl(235, 18%, 26%)',
        grey: 'hsl(231, 7%, 60%)',
        white: 'hsl(0, 0%, 100%)'
      },
      backgroundImage: {
        'mobileImage': "url('../public/images/illustration-sign-up-mobile.svg')",
        'desktopImage': "url('../public/images/illustration-sign-up-desktop.svg')",
        'iconList': "url('../public/images/icon-list.svg')",
        'iconSuccess': "url('../public/images/icon-success.svg')"
      },
      ringColor: {
        'primary': 'hsl(234, 29%, 20%)',
        'tomato': 'hsl(4, 100%, 67%)'
      }
    },

  },
  plugins: [],
}
