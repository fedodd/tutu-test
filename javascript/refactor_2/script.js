//я бы переписал задачу с одним условием, завернув в цикл повторяющиеся операции
var vote = 77;

function drawRating(vote) {
  var star = Math.ceil(vote / 20);
  var emptyStar = '☆';
  var earnStar = '★';
  var rate = '★';
// Ставим закрашенные звезды согласно голосам, 
//затем выставляем пустые, пока не будет 5 штук.
  for (i=2; i <=5; i++) {
    if ( star >= i) {
    rate +=earnStar;
    } else {
    rate +=emptyStar;
    }
  }
  return rate
}
