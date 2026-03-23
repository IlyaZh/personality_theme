const gulp = require('gulp');
const template = require('gulp-template').default;
const rename = require('gulp-rename');
const fs = require('fs');

async function compileHome() {
    try {
        const dataPath = './data.json';
        if (!fs.existsSync(dataPath)) {
            console.error('Ошибка: Файл data.json не найден!');
            return;
        }

        const personalData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

        return gulp.src('./index.template.hbs')
            .pipe(template(personalData))
            .pipe(rename('index.hbs'))
            .pipe(gulp.dest('./'));
    } catch (err) {
        console.error('Ошибка парсинга JSON или чтения файла:', err.message);
    }
}

function watchFiles() {
    gulp.watch(['./index.template.hbs', './data.json'], compileHome);
}

exports.build = compileHome;
exports.watch = gulp.series(compileHome, watchFiles);
exports.default = exports.build;
