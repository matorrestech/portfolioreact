/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                // [0-640px] - DEFAULT
                default: "url('/src/assets/background.webp')",

                // [641-768px] - SM
                sm: "url('/src/assets/background-sm.webp')",

                // [769-1024px] - MD
                md: "url('/src/assets/background-md.webp')",

                // [1025-1280px] - LG
                lg: "url('/src/assets/background-lg.webp')",

                // [1281-1536px] - XL
                xl: "url('/src/assets/background-xl.webp')",

                // [1537px-∞] - 2XL
                "2xl": "url('/src/assets/background-2xl.webp')",
            }),
            colors: {
                beige: "#DFDAD8",
                navyBlue: "#292B41",
            },
        },
    },
    variants: {},
    plugins: [],
}
