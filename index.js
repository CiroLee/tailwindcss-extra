import plugin from 'tailwindcss/plugin';
const tailwindcssExtra = plugin(function ({ addUtilities, matchUtilities }) {
  addUtilities({
    '.flex-center': {
      ['@apply items-center justify-center']: {},
    },
    '.absolute-center': {
      ['@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2']: {},
    },
    '.absolute-center-x': {
      ['@apply absolute left-1/2 -translate-x-1/2']: {},
    },
    '.absolute-center-y': {
      ['@apply absolute top-1/2 -translate-y-1/2']: {},
    },
    '.full': {
      ['@apply w-full h-full']: {},
    },
    '.screen': {
      ['@apply w-screen h-screen']: {},
    },
    '.translate-1\\/2': {
      ['@apply translate-x-1/2 translate-y-1/2']: {},
    },
    '.-translate-1\\/2': {
      ['@apply -translate-x-1/2 -translate-y-1/2']: {},
    },
  });
  matchUtilities({
    circle: (value) => ({
      width: value,
      height: value,
      'clip-path': 'circle(closest-side)',
    }),
    square: (value) => ({
      width: value,
      height: value,
    }),
  });
});

module.exports = tailwindcssExtra;
export default tailwindcssExtra;
