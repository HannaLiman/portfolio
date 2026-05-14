/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	 theme: {
		extend: {
			fontFamily: {
				playfair: ['"Playfair Display"', 'serif'],
			},
			colors: {
					bg: "var(--bg)",
					text: "var(--text)",
					secondary: "var(--secondary)",
					accent: "var(--accent)",
					bgfooter: "var(--bgfooter)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
