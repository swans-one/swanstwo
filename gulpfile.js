'use-strict';

var gulp = require('gulp');
var pandoc = require('gulp-pandoc');
var sass = require('gulp-sass');

var config = {
    paths: {
        html: './src/html/**/*.html',
        css: './src/css/**/*.css',
        sass: './src/css/**/*.scss',
        articles: './src/articles/**/*.md',
        media: './src/media/**/*',
        favicon: './src/html/favicon.ico',
        fonts: './src/fonts/**/*',
        dist: './static',
    },
    templates: {
        article_template: './src/templates/article.html'
    },
};

var default_tasks = [
    'html',
    'css',
    'sass',
    'articles',
    'media',
    'favicon',
    'fonts',
]

var pandoc_articles_config = [
    '--smart',
    '--template=' + config.templates.article_template,
];

gulp.task('html', function () {
    gulp.src(config.paths.html, {base: './src'})
        .pipe(gulp.dest(config.paths.dist))
});

gulp.task('css', function () {
    gulp.src(config.paths.css, {base: './src'})
        .pipe(gulp.dest(config.paths.dist))
});

gulp.task('sass', function () {
    gulp.src(config.paths.sass, {base: './src'})
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.paths.dist))
});

gulp.task('media', function () {
    gulp.src(config.paths.media, {base: './src'})
        .pipe(gulp.dest(config.paths.dist))
});

gulp.task('favicon', function () {
    gulp.src(config.paths.favicon)
        .pipe(gulp.dest(config.paths.dist + '/html'))
});

gulp.task('fonts', function () {
    gulp.src(config.paths.fonts, {base: './src'})
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

gulp.task('watch', function () {
    gulp.watch('./src/**/*', default_tasks)
});

gulp.task(
    'default', default_tasks
);
