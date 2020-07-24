var S = prompt('Введите значение площади основы');
var R = prompt('Введите значение радиуса');
var H = prompt('Введите значение высоты');

console.log('********************');

console.log('Объем цилиндра с площадью основы *S* = ' + (S) +', радиусом *R* = ' + (R) + ', высотой *H* = ' + (H) + ', будет равняться:'); 

console.log('--------------------');

var S = Math.PI * Math.pow(R, 2);
var V = S * H;

console.log('V = ' + (V) . toFixed(2));

console.log('--------------------');

console.log('end');


