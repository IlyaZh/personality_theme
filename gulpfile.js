const gulp = require('gulp');
const template = require('gulp-template').default;
const rename = require('gulp-rename');
const fs = require('fs');

function compileHome() {
    try {
        const dataPath = './data.json';
        if (!fs.existsSync(dataPath)) {
            console.error('Ошибка: Файл data.json не найден!');
            return Promise.resolve();
        }

        const personalData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

        const filesToProcess = [
            './index.template.hbs',
            './partials/footer.template.hbs'
        ];

        return gulp.src(filesToProcess, { 'base': './' })
            .pipe(template(personalData))
            .on('error', function (err) {
                console.error('--- Ошибка шаблонизатора! ---');
                console.error(err.message);
                this.emit('end');
            })
            .pipe(rename((path) => {
                path.basename = path.basename.replace('.template', '');
            }))
            .pipe(gulp.dest('./'))
            .on('end', () => console.log('--- Файлы успешно созданы ---'));
    } catch (err) {
        console.error('Ошибка парсинга JSON или чтения файла:', err.message);
        return Promise.resolve();
    }
}

function watchFiles() {
    gulp.watch([
        './index.template.hbs',
        './partials/**/*.template.hbs',
        './data.json'
    ], compileHome);
}

exports.build = compileHome;
exports.watch = gulp.series(compileHome, watchFiles);
exports.default = exports.build;
