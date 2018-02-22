let mix = require('laravel-mix');

mix.js(
	[
		'resources/js/app.js'
	],
	'app/js/app.js'
)

.sass(
	'resources/scss/app.scss',
	'app/css/app.css'
)


mix.sourceMaps(); // Enable sourcemaps
mix.options({
  postCss: [
    require('autoprefixer')({
        browsers: ['last 2 versions', 'ie >= 10']
    })
  ] 
});
