import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "site-background":
                    "url('https://www.google.com/imgres?q=movie%20theater&imgurl=https%3A%2F%2Fwww.denverpost.com%2Fwp-content%2Fuploads%2F2019%2F07%2FFE21MOVIES_4.jpg%3Fw%3D978&imgrefurl=https%3A%2F%2Fwww.denverpost.com%2F2019%2F07%2F22%2Fdenver-movie-theaters-growing-industry%2F&docid=VbBkTElkCElx0M&tbnid=dHtTkAeFJbkE1M&vet=12ahUKEwiE24Wd3b-GAxX1VKQEHQyjAZwQM3oECBkQAA..i&w=978&h=652&hcb=2&ved=2ahUKEwiE24Wd3b-GAxX1VKQEHQyjAZwQM3oECBkQAA')",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "awesome-yellow": "#ffe55c",
                "beautiful-grey": "rgba(207,210,215,0.9)",
            },
        },
        fontFamily:{
            'MonografTextBold' : ["MonografTextBold", 'arial'],
            'MonografTextRegular' : ["MonografTextRegular", 'arial']
        }
    },
    plugins: [],
};
export default config;
