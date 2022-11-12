const { gulp, src, dest, parallel, series, watch } = require('gulp');

const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const webpackConfig = require('./webpack.config.js')
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean')
const fileInclude = require("gulp-file-include")
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create()
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename")

const paths = {
    html: {
        src: "./src/*.html",
        dest: "./app/"
    },
    htmlInclude: {
        src: "./src/Components/**/*.html"
    },
    styles: {
        src: "./src/styles/bundle.scss",
        dest: "./app/styles/",
        summary: "./src/**/*.scss"
    },
    scripts: {
        src: "./src/scripts/**/*.js",
        dest: "./app/scripts"
    },
    fonts: {
        src: "./src/assets/fonts/**",
        dest: "./app/fonts/"
    },
    images: {
        src: "./src/assets/images/**",
        dest: "./app/images/"
    },
    clean: {
        src: "./app/"
    }
}

function browserReload() {
    return browserSync.init({
        server: {
            baseDir: "./app"
        },
        notify: false,
        port: 3000
    })
}

function styles() {
    return src([paths.styles.src])
        .pipe(sass().on('error', sass.logError))
        .pipe(gcmq())
        .pipe(autoprefixer("last 4 versions"))
        .pipe(dest(paths.styles.dest))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename("bundle.min.css"))
        .pipe(dest(paths.styles.dest))
        .pipe(browserSync.stream())
}

function scripts() {
    return src(paths.scripts.src)
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(dest([paths.scripts.dest]))
        .pipe(browserSync.stream())
}

function images() {
    return src(paths.images.src)
        .pipe(dest(paths.images.dest))
        .pipe(browserSync.stream())
}

function fonts() {
    return src(paths.fonts.src)
        .pipe(dest(paths.fonts.dest))
        .pipe(browserSync.stream())
}

function appClean() {
    return src(paths.clean.src, { allowEmpty: true })
        .pipe(clean())
}

function include() {
    return src(paths.html.src)
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest(paths.html.dest))
        .pipe(browserSync.stream())
}

function gulpWatch() {
    watch(paths.html.src, include);
    watch(paths.htmlInclude.src, include)
    watch(paths.styles.summary, styles);
    watch(paths.scripts.src, scripts)
    watch(paths.fonts.src, fonts);
    watch(paths.images.src, images)
}

exports.default = series(appClean, parallel(include, styles, scripts, fonts, images), parallel(gulpWatch, browserReload));