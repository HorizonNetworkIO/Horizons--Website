/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      's2sm' : '0.25rem',
      's1sm' : '0.5rem',
      'ssm' : '.75rem',
      'smd' : '1rem',
      'slg' : '1.25rem',
      's2lg' : '1.5rem',
      's3lg' : '2rem',
      's4lg' : '3rem',
      's5lg' : '4rem'
    }
  },
  plugins: [],
  darkMode: 'media',
}
