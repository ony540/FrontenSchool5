// 별표****

let x = 5;
let y = 10;

console.log(x > y); //false

let a = true;
let b = false;

console.log(a && b); //false

//true, false가 아닌 값을 and, or연산했을 경우 단락회로평가를 하게 됩니다. 
let a2 = 'hello'
let b2 = ''

console.log(a2 && b2); // ''에 해당하는 b2의 값이 출력됨

console.log(Boolean('hello')); // f
console.log(Boolean('')); // f
console.log(Boolean([1,2,3])); // t
console.log(Boolean([])); //말도 안되게 t
console.log(Boolean({'one':10,'two':20})); //t
console.log(Boolean({})); //말도 안되게 t
console.log(Boolean(0)); //f
console.log(Boolean(-1)); //t
console.log(Boolean(undefined)); //f
console.log(Boolean(null)); //f
console.log(Boolean(NaN)); //f


