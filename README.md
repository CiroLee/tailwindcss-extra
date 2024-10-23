# tailwindcss-extra

tailwindcss plugin for extra styles

## Install

```bash
npm install tailwindcss-extra --save-dev
```

## Usage

```diff
# commonjs
// tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },

+ plugins: [require('tailwindcss-extra')],
};
```

```diff
# es module
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
+ import tailwindcssExtra from 'tailwindcss-extra';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },

+ plugins: [tailwindcssExtra],
};
```

complete table of provided classes:

| name              | kind   | description                                              |
| ----------------- | ------ | -------------------------------------------------------- |
| flex-center       | static | both horizontal and vertical center in flex display      |
| absolute-center   | static | both horizontal and vertical center in absolute position |
| absolute-center-x | static | horizontal center in absolute position                   |
| absolute-center-y | static | vertical center in absolute position                     |
| full              | static | set width and height as `100%` to its parent             |
| screen            | static | set width as `100vw` and height as `100vh`               |
| circle            | match  | use `clip-path` to make a circle                         |
| square            | match  | make a square box via setting both width and height      |
| translate-1/2     | static | translate x and y axis by 1/2                            |
| -translate-1/2    | static | translate x and y axis by -1/2                           |
