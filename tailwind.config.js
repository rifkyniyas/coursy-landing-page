module.exports = {
  content: ["./*.{html,js}"],
  theme: {

    extend: {
      backgroundImage: {
        'hero-image': "url('/images/hero-bg.svg')",
      },
      colors: {
        'light-gray': 'rgba(255, 255, 255, 0.7)',
        'black': '#1e2432',
        'hover-gray': 'rgba(255, 255, 255, 0.8)',
        'hover-black': '#4b505b'
      },
    }
  },
  plugins: [],
}