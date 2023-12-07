/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            backgroundColor: {
                "turtle-green": "#8D9B6A",
            },
            textColor: {
                "turtle-green": "#8D9B6A",
            },
        },
    },
    plugins: [],
};
