export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                chunix: {
                    DEFAULT: '#00cc00', // Adjustable based on exact logo Green
                    dark: '#009900',
                    light: '#33ff33',
                },
                dark: {
                    bg: '#0a0a0a',
                    surface: '#121212',
                    border: '#2a2a2a'
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
