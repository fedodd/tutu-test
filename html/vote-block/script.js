// выбираем все элементы с классом .star
var stars = document.getElementsByClassName('star');

// конвертируем полученную коллекцию в массив, потому что на самом деле мы получили не массив
stars = Array.from(stars);

// идём по всем элементам
stars.forEach(function(star, i) {
  // на каждый элемент вешаем обработчик события click
  star.addEventListener('click', function() {
  // при клике меняем тогглим класс .is__active
    star.classList.toggle('star--voited');
  });
});
