let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('src/js/app.js', 'assets/app.js')
   .sass('src/scss/app.scss', 'assets/app.css')
   .options({
      processCssUrls: false,
      postCss: [ tailwindcss('./tailwind.config.js') ]
    })