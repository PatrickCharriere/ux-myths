const gulp = require('gulp');
const child = require('child_process');
const ts = require('gulp-typescript');
const JSON_FILES = ['src/*.json', 'src/**/*.json'];

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('dist'));
});


gulp.task('server', function() {
    const server = child.spawn('nodemon', ['dist/index.js']);
    //const log = fs.createWriteStream('server.log', {flags: 'a'});
    //server.stdout.pipe(log);
    //server.stderr.pipe(log);
});

gulp.task('watch', ['scripts'], () => {
    gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('assets', function() {
    return gulp.src(JSON_FILES)
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['watch', 'assets']);
