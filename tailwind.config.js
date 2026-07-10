/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html', './src/js/**/*.js'],
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
            colors: {
                primary: '#FEB237',
                secondary: '#64748B',
                dark: '#0F172A',
                tomato: '#F93800'
            },
            screens: {
                '2xl': '1320px',
            },
        },
    },
    plugins: [],
};
