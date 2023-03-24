/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                "slvv60": "#030305",
                "slvv30": "#fffdfe",
                "slvv10": "#df486d",
            },
            backgroundImage: {
                "slvvBackground": "url('../public/background-blurred.png')"
            }
        },
    },
    plugins: [],
}