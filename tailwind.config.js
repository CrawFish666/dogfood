/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		// colors: {
		// 	"main-yellow": "#ffe44d"
		// },
		container: {
			center: true,
		},

		extend: {
			colors: {
				"main-yellow": "#ffe44d"
			},
			screens: {
				"1000": "1000px",
				"1030": "1030px"
			},
		},
	},
	plugins: [],
}

