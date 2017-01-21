var gulp = require('gulp'), // Подключаем Gulp
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    del = require('del'), // Подключаем библиотеку для удаления файлов и папок
    postcss = require('gulp-postcss'),//подключаем postcss
    concat = require('gulp-concat'),//подключаем сборщик
    sourcemaps = require('gulp-sourcemaps'),
    cssnano = require('gulp-cssnano');
    autoprefixer = require('autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов


//подключаем postcss
gulp.task('css', function () {
  var processors = [
    autoprefixer( ['last 2 versions'] )
  ];

  return gulp.src('./html/task-page/app/styles/**/*.css')
    .pipe(postcss(processors))
    .pipe(sourcemaps.init()) // запоминаем в каком файле что находится
    .pipe(concat('style.css')) //сливаем в один
   // .pipe(cssnano('style.css')) //нанонизируем файл)
    .pipe( sourcemaps.write('.') ) //ставим метки
    .pipe(gulp.dest('./html/task-page/dist/styles'));
});

//автообновление браузера при сохранении изменений в коде
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './html/task-page/dist' // директория с сервером
    },
    notify: false //отключаем уведомления
  });
});

//перекинуть html в dist
gulp.task('html', function() {
  return gulp.src('./html/task-page/app/*.html')
    .pipe(gulp.dest('./html/task-page/dist'));
})

gulp.task('js', function() {
  return gulp.src('./html/task-page/app/*.js')
    .pipe(gulp.dest('./html/task-page/dist'));
})

// для контроля за изменениями в указанных файлах, и в случае изменений - запускает task
gulp.task('watch', ['browser-sync'], function() {
  gulp.task('html:watch', ['html'], browserSync.reload);
  gulp.watch(['./html/task-page/app/*.html'], ['html:watch']);
  gulp.task('css:watch', ['css'], browserSync.reload);
  gulp.watch(['./html/task-page/app/styles/**/*.css'], ['css:watch']);
  gulp.task('js:watch', ['js'], browserSync.reload);
  gulp.watch(['./html/task-page/app/*.js'], ['js:watch']);
  //воткнуть наблюдение за другими файлами css
});

// Очищаем папку dist перед сборкой
gulp.task('clean', function() {
  return del.sync('./html/task-page/dist')
    cache.clearAll();
})


//сборка
gulp.task('build', [ 'html', 'js', 'css']);

// Для автозапуска при команде gulp
gulp.task('default', ['build' , 'watch']);

