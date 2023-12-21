# tailwindcss-extra

tailwindcss plugin for extra styles

## Install

```bash
npm install tailwindcss-extra --save-dev
```

## Usage

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },

  plugins: [require('tailwindcss-extra')],
};
```

complete table of provided classes:

| name              | kind   | description                                              |
| ----------------- | ------ | -------------------------------------------------------- |
| flex-center       | static | both horizontal and vertical center in flex display      |
| absolute-center   | static | both horizontal and vertical center in absolute position |
| absolute-center-x | static | horizontal center in absolute position                   |
| absolute-center-y | static | vertical center in absolute position                     |
| ellipsis          | static | ellipsis text in a single line                           |
| full              | static | set width and height as `100%` to its parent             |
| screen            | static | set width as `100vw` and height as `100vh`               |
| circle            | match  | use `clip-path` to make a circle                         |
| square            | match  | make a square box via setting both width and height      |
