var gulp = require('gulp');
var pandoc = require('gulp-pandoc');

var config = {
    paths: {
        html: './src/html/*.html',
        articles: './src/articles/*.md',
        images: './src/images/*',
        dist: './static',
    }
};

var pandoc_articles_config = [
    '--smart',
    '-s',
]

gulp.task('html', function () {
    gulp.src(config.paths.html, {base: './src'})
        .pipe(gulp.dest(config.paths.dist))
});

gulp.task('articles', function () {
    gulp.src(config.paths.articles, {base: './src'})
        .pipe(pandoc({
            from: 'markdown',
            to: 'html5',
            ext: '.html',
            args: pandoc_articles_config,
        }))
        .pipe(gulp.dest(config.paths.dist))
});

gulp.task('default', ['html', 'articles']);
