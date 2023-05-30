const uglify = require('gulp-uglify-es').default
const { src, dest } = require('gulp')

const minifyAndOfuscaste = () => src('./cache/src/**/*.js').pipe(uglify()).pipe(dest('./dist'))

exports.minify = minifyAndOfuscaste
