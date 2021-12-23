module.exports = {
  content: ["./*.{html,js}"],
  theme: {

    extend: {
      backgroundImage: {
        'hero-image': "url('/images/hero-bg.svg')",
        'cta-image': "url('/images/cta-bg.svg')"
      },
      colors: {
        primary : '#01216e',
        gray : {
          light: 'rgba(255, 255, 255, 0.7)',
          hover: 'rgba(255, 255, 255, 0.8)',
          dark: '#eef2f5',
          text: "#6f737c"
        },
        black: '#1e2432',
        'hover-black': '#4b505b'
      },
    }
  },
  plugins: [],
}