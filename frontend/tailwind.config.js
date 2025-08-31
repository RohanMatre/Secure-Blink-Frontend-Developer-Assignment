/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        blue: '#0E77FF',
        gray700: '#707070',
        blueTint10: '#0E77FF26',
        black: '#000000',
        cyanTint10: '#16B2FF17',
        green: '#4BFFA5',
        greenTint10: '#4BFFA526',
        sky: '#21B2FF',
        gray900: '#292929',
        gray300: '#C9C9C9',
        gray100: '#F3F4F6',
        gray200: '#E5E7EB',
        gray500: '#6B7280',
        gray600: '#4B5563',
        red: '#EF4444',
        orange: '#F97316',
        sidebarText: '#8990AD',
        dashboardText: '#495172',
      },
      width: {
        '1920': '1920px',
      },
      height: {
        '1080': '1080px',
      }
    },
  },
  plugins: [],
}
