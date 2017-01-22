"use strict";

//функция dscount

var element = '1fc2_2FFF2CCC1fcd12fc';
var s1 = 'F';
var s2 = 'c';

function dscount(element, s1, s2 ) {
  var check = String(s1) + String(s2);
  check = check.toLowerCase();
  element = element.toLowerCase();
  var count = 0;
  var pos = -1;
  while ( (pos = element.indexOf(check, pos + 1)) != -1 ) {
      count +=1;
  }
  return count;
}

console.log(dscount(element, s1, s2));


// Для удобства можно использовать эти тесты:
try {
    test(dscount, ['ab___ab__', 'a', 'b'], 2);
    test(dscount, ['___cd____', 'c', 'd'], 1);
    test(dscount, ['de_______', 'd', 'e'], 1);
    test(dscount, ['12_12__12', '1', '2'], 3);
    test(dscount, ['_ba______', 'a', 'b'], 0);
    test(dscount, ['_a__b____', 'a', 'b'], 0);
    test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
    test(dscount, ['aAa', 'a', 'a'], 2);

    console.info("Congratulations! All tests success passed.");
} catch(e) {
    console.error(e);
}

// Простая функция тестирования
function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Finded items count: ${count}`);
    if (!r) throw "Test failed!";
}
