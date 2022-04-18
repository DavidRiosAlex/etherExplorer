// eslint-disable-next-line no-undef
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        fontFamily: {
            lato: ['Lato', 'sans-serif']
        },
        extend: {
            flex: {
                0.9: 0.9,
                0.8: 0.8,
                0.7: 0.7,
                0.6: 0.6,
                0.5: 0.5,
                0.4: 0.4,
                0.3: 0.3,
                0.2: 0.2,
                0.1: 0.1,
            },
            brightness: {
                25: '.25',
                175: '1.75',
            },
            boxShadow: {
                'primary-100': 'rgb(228, 238, 248, 1)',
                'primary-90': 'rgb(228, 238, 248, 0.9)',
                'primary-80': 'rgb(228, 238, 248, 0.8)',
                'primary-70': 'rgb(228, 238, 248, 0.7)',
                'primary-60': 'rgb(228, 238, 248, 0.6)',
                'primary-50': 'rgb(228, 238, 248, 0.5)',
                'primary-40': 'rgb(228, 238, 248, 0.4)',
                'primary-30': 'rgb(228, 238, 248, 0.3)',
                'primary-20': 'rgb(228, 238, 248, 0.2)',
                'primary-10': 'rgb(228, 238, 248, 0.1)',
                'primary-0': 'rgb(228, 238, 248, 0)',
            },
            colors: {
                third: '#4F2AAD',
                secondary: '#5533b2',
                primary: '#532CB4',
                'primary-dark': '#121212',
            },
            backgroundImage: {
                primary: 'url("https://i.imgur.com/mGsemxo.png")'
            }
        },
        minWidth: {
            100: '100px',
            200: '200px',
            300: '300px',
            400: '400px',
            500: '500px',
        },
        width: {
            'w-full': '100%',
            '1.5/6': '25%',
            '1/3': ((1/3) * 100).toString() + '%',
            '3/4': ((3/4) * 100).toString() + '%'
        }
    },
    plugins: [],
};