// -JSON.parse() :  JSON문자열을 자바스크립트 객체로 변환합니다.
//- JSON.stringify() : 자바스크립트 객체를 JSON문자열로 변환합니다.


//JSON문자열을 자바스크립트 객체로 변환
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj)


const json = '[1,2,3]';
const obj = JSON.parse(json);
console.log(obj)


//자바스크립트 객체를 JSON문자열로 반환
const json = {"result":true, "count":42};
const obj = JSON.stringify(json);
console.log(obj)


//깊은 복사
let l = [10, 20, 30];
let a = JSON.parse(JSON.stringify(l));
a[0] = 1000;

console.log(l) //10, 20, 30 
console.log(a) //1000, 20, 30 

// error - 왜?? 물어보기
let l = [10, 20, 30];
let a = JSON.parse(`${l}`);
a[0] = 1000;

console.log(l);