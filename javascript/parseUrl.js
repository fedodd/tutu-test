//практическая задача№1 - парсинг URL

function parseUrl(string) {
  var a = document.createElement('a'); //создаем гиперссылку
  a.href = string; // записываем в гиперссылку нужный адрес
  return a; 
}

//Проверка
var string ='http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo';

parseUrl(string);

console.log( parseUrl(string).href )
console.log( parseUrl(string).href )
console.log( parseUrl(string).hash  )
console.log( parseUrl(string).port )
console.log( parseUrl(string).host  )
console.log( parseUrl(string).protocol )
console.log( parseUrl(string).hostname )
console.log( parseUrl(string).pathname  )
console.log( parseUrl(string).origin )
