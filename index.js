import plugin from 'tailwindcss/plugin';
const tailwindcssExtra = plugin(function ({ addUtilities, matchUtilities }) {
  addUtilities({
    '.flex-center': {
      'justify-content': 'center',
      'align-items': 'center',
    },
    '.absolute-center': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '.absolute-center-x': {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
    },
    '.absolute-center-y': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    '.ellipsis': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    '.full': {
      width: '100%',
      height: '100%',
    },
    '.screen': {
      width: '100vw',
      height: '100vh',
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
