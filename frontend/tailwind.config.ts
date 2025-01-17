/** @type {import('tailwindcss').Config} */
import form from "@tailwindcss/forms";
import typography from '@tailwindcss/typography'

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
	important: true,
	theme: {
		extend: {
			fontFamily: {
				NotoSans: ["Noto Sans", "sans-serif"],
			},
			screens: {
				xs: "475px",
				xsm: "520px",
				sm: "640px",
				md: "768px",
				md2: "920px",
				lg: "1024px",
				lg2: "1100px",
				xl: "1280px",
				"2xl": "1536px",
			},
		},
	},
	plugins: [
		form,
        typography,
		function ({ addUtilities }) {
			addUtilities({
				".scrollbar-hide": {
					/* IE and Edge */
					"-ms-overflow-style": "none",

					/* Firefox */
					"scrollbar-width": "none",

					/* Safari and Chrome */
					"&::-webkit-scrollbar": {
						display: "none",
					},
				},
			});
		},
	],
};
