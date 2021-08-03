const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./index.html', '../src/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				nord8: '#88c0d0',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
