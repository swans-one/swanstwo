var gulp = require('gulp');
var pandoc = require('gulp-pandoc');

var config = {
    paths: {
        html: './src/html/*.html',
        css: './src/css/*.css',
        articles: './src/articles/*.md',
        images: './src/images/*',
        dist: './static',
    },
    templates: {
        article_template: './src/templates/article.html'
    },
};

var pandoc_articles_config = [
    '--smart',
    '--template=' + config.templates.article_template,
]

gulp.task('html', function () {
    gulp.src(config.paths.html, {base: './src'})
        .pipe(gulp.dest(config.paths.dist))
});

gulp.task('css', function () {
    gulp.src(config.paths.css, {base: './src'})
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
        .pipe(gulp.dest(config.paths.dist + '/html'))
});

gulp.task('default', ['html', 'css', 'articles']);
