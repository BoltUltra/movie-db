const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			sm: '320px',
			// => @media (min-width: 320px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			fontFamily: {
				overpass: ['Overpass', 'sans-serif']
			},
			colors: {
				root: '#060606',
				primary: '#8367E9',
				card: '#26262B',
				underline: '#99C2FF',
				border: '#032343'
			}
		}
	},

	plugins: []
};

module.exports = config;
