var gulp = require('gulp'), // Подключаем Gulp
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    del = require('del'), // Подключаем библиотеку для удаления файлов и папок
    postcss = require('gulp-postcss'),//подключаем postcss
    concat = require('gulp-concat'),//подключаем сборщик
    sourcemaps = require('gulp-sourcemaps'),

    autoprefixer = require('autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов
    //cssnano = require('gulp-cssnano');


//подключаем postcss
gulp.task('css', function () {
  var processors = [
    autoprefixer( ['last 2 versions'] )
  ];

  return gulp.src('./html/task-page/app/styles/**/*.css')
    .pipe(postcss(processors))
    .pipe(sourcemaps.init()) // запоминаем в каком файле что находится
    .pipe(concat('style.css'))
    .pipe( sourcemaps.write('.') )
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
  return gulp.src('./html/task-page/app/**/*.html')
    .pipe(gulp.dest('./html/task-page/dist'));
})

// для контроля за изменениями в указанных файлах, и в случае изменений - запускает task
gulp.task('watch', ['browser-sync'], function() {
  gulp.task('html:watch', ['html'], browserSync.reload);
  gulp.watch(['./html/task-page/app/**/*.html'], ['html:watch']);

  gulp.task('css:watch', ['css'], browserSync.reload);
  gulp.watch(['./html/task-page/app/styles/**/*.css'], ['css:watch']);
  //воткнуть наблюдение за другими файлами css
});

// Очищаем папку dist перед сборкой
gulp.task('clean', function() {
  return del.sync('dist')
    cache.clearAll();
})


//сборка
gulp.task('build', [ 'clean', 'html', 'css']);

// Для автозапуска при команде gulp
gulp.task('default', ['build' , 'watch']);

