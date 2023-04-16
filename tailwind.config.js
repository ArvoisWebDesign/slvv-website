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
                "slvv10": "#df486d"
            },
            backgroundImage: {
                "slvvBackground": "url('../public/background-blurred.webp')"
            },
            animation: {
                fadeInLeft: "fadeInLeft 0.5s ease-in-out",
                fadeInTop: "fadeInTop 0.5s ease-in-out",
                fadeInBottom: "fadeInBottom 0.5s ease-in-out",
                opacity: "opacity 0.5s ease-in-out"
            },
            keyframes: {
                fadeInLeft: {
                    "0%": { 
                        "opacity": 0,
                        "margin-left": "-100px",
                        "margin-right": "100px"
                    },
                    "100%": { 
                        "opacity": 1,
                        "margin-left": "0px",
                        "margin-right": "0px"
                    }
                },
                fadeInTop: {
                    "0%": { 
                        "opacity": 0,
                        "margin-top": "-100px",
                        "margin-bottom": "100px"
                    },
                    "100%": { 
                        "opacity": 1,
                        "margin-top": "0px",
                        "margin-bottom": "0px"
                    }
                },
                fadeInBottom: {
                    "0%": { 
                        "opacity": 0,
                        "margin-bottom": "-100px",
                        "margin-top": "100px"
                    },
                    "100%": { 
                        "opacity": 1,
                        "margin-bottom": "0px",
                        "margin-top": "0px"
                    }
                },
                opacity: {
                    "0%": { 
                        "opacity": 0
                    },
                    "100%": { 
                        "opacity": 1
                    }
                }
            }
        }
    },
    plugins: [],
}