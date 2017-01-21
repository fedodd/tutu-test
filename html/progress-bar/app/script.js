
//вызываем прогресс-бар и полосу заполнения
var progressLine = document.getElementById('progress-value');
var progress = document.getElementById('progress-bar');

// вытаскиваем значание из прогрессбара и меняем стили нашей полосы
function setValueWidth(progressLine) {

  var progressValue = +progress.getAttribute('value');
  var valueWidth = ('width:' + progressValue + "%;" );
  progressLine.style = "width:" + progressValue + "%"
}

setValueWidth(progressLine);
