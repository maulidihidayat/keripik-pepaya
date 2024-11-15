/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#f35f15', // Warna utama
        secondary: '#1d2c2a', // Warna sekunder
        success: '#52525B', // Warna sukses
        background: '#f8f9fa', // Warna latar belakang
        text: '#fff', // Warna teks
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Menambahkan font Inter
      },
    },
  },
  plugins: [],
}