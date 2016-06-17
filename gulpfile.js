var gulp = require('gulp');

var config = {
    paths: {
        html: './src/html/*.html',
        images: './src/images/*',
        dist: './static',
    }
}

gulp.task('html', function () {
    gulp.src(config.paths.html, {base: './src'})
        .pipe(gulp.dest(config.paths.dist))
})

gulp.task('default', ['html']);
