module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Gothic: ["Bank Gothic", "serif"],
                sans: ["Lucia Grande", "Verdana", "Arial", "sans-serif"],
                serif: ["Georgia", "Times", "serif"],
            },
            colors: {
                transOrange: "hsl(30.8, 87.7%, 58.6%, 0.8)",
                orange: "hsl(30.8, 87.7%, 58.6%)",
                beige: "hsl(53.2, 72.6%, 85.7%)",
            },

            screens: {
                xs: "500px",
            },
            gridTemplateColumns: {
                // Complex site-specific column configuration
                mainAside: "270px auto",
                speisekarte:
                    "minmax(max-content,2fr) minmax(max-content, 1fr) minmax(max-content, 1fr)",
            },

            gridTemplateRows: {
                // Complex site-specific column configuration
                unevenheight: "575px max-content",
            },
        },
    },
    plugins: [],
};
