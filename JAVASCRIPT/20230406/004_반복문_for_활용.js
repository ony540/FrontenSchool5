for (let i = 0; i < 10; i++) {
    console.log(10);
}

let arr = [10, 20, 30, 40, 50]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//----------------- for in
//에어비엔비 컨밴션에 권장 /  IE에서도 사용가능
let arr1 = [10, 20, 30, 40, 50]
let obj1 = {
    'one': 10,
    'two': 20
}

//특이하네.. 외워
for (const i in arr1) {
    console.log(arr1[i]) //index를 가져온다!?
}
for (const i in obj1) {
    console.log(obj1[i]) //key를 가져온다!?
}

let s = 0;
for (const i in '.'.repeat(101)) { //0부터 100까지의 index를 가져옴!!
    s += parseInt(i) // 0부터 100까지 더한다
}
console.log(s) // 5050 결과값


//--------- for of
//에어비엔비 컨밴션에 권장 /  IE에서 사용불가
//개발자의 행복을 위해 익스플로러를 버리자 -> 이렇게 해야만 사용할 수 있다
let arr2 = [10, 20, 30, 40, 50]
let obj2 = {
    'one': 10,
    'two': 20
}

for (const item of arr2) {
    console.log(item) //item(value)을 가져온다!
}

let s2 = 0
for (const item of arr2) {
    s2 += item
}
s2 //150

// 오류발생 !!
for (const item of obj2) { //of뒤에 iterable한 것이 나와야한다. 
    console.log(item)
}

for (const item of 'hello world') {
    console.log(item)
}

//-----------------
//why for of와 in문애서는 const가 가능한가요?
//너무 많은 에너지를 쏟지마세요
// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst

//문제
// https://codingdojang.com/scode/408?answer_mode=hide
s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < arr.length; i++) {
    console.log(s[i], s[i + 1]) //마지막 값을 확인하세요 - s[i+1]가 언디파인으로 나온다.
    console.log(s[i + 1] - s[i])
}

//비슷한 상황 
for (let i = 0; i < arr.length - 1; i++) {
    console.log(s[i], s[i + 1]) //마지막 값을 확인하세요
    console.log(s[i + 1] - s[i])
}
for (let i = 1; i < arr.length; i++) {
    console.log(s[i], s[i + 1]) //마지막 값을 확인하세요
    console.log(s[i + 1] - s[i])
}

//위보다 깔끔한 코드가 나오진 않습니다.
for (let i in s) {
    console.log(parseInt(i));
    console.log(s[i], s[parseInt(i) + 1])
}

//------------------
//문제2 - 다음 수학 점수의 평균을 구하세요
let 수학점수 = [10, 99, 89, 70]

//step1
(수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3]) / 수학점수.length
//step2

s = 0
for (let i = 0; i < 수학점수.length; i++) {
    s += 수학점수[i];
}
console.log(s / 수학점수.length)


//-----------------
//문제3 - 다음 유저의 나이 평균을 구하세요.
let user = [{
        "_id": "642e3071c61a23c70ae6076b",
        "index": 0,
        "age": 31,
        "name": "Hicks Garza",
        "gender": "male",
    },
    {
        "_id": "642e3071ecd6f90a87d64731",
        "index": 1,
        "age": 32,
        "name": "Ayers Harrington",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        "age": 39,
        "name": "Lamb Adams",
        "gender": "male",
    }
]

// 견고한 코드란?
// 1. age가 문자였다면?
// 2. age가 입력되지 않았다면?
// 3. age 필드가 없다면?(MongoDB의 경우)


let sum = 0; //0이라는 초기값을 정해줘야함!! undefined에 수를 더하면 NaN결과값이 나온다
for (let i = 0; i < user.length; i++) {
    sum += user[i]['age'];
    // console.log(sum)
}
// console.log( `user들의 평균 나이는 ${Math.floor(sum / user.length)}세입니다.`);
console.log(`user들의 평균 나이는 ${(sum / user.length).toFixed(2)}세입니다.`);

/////

s = 0
for (const i of user) {
    s += i.age
}
console.log((s / user.length).toFixed(2));

/////

s = 0
for (const i in user) {
    s += user[i].age
}
console.log((s / user.length).toFixed(2));

///// 심화문제
let user2 = [{
        "_id": "642e3071c61a23c70ae6076b",
        "index": 0,
        "age": 31,
        "name": "Hicks Garza",
        "gender": "male",
    },
    {
        "_id": "642e3071ecd6f90a87d64731",
        "index": 1,
        "age": 32,
        "name": "Ayers Harrington",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        "age": 39,
        "name": "Lamb Adams",
        "gender": "male",
    },
    {
        "_id": "642e3071cef9ddc131f047fb",
        "index": 2,
        // age가 없음
        "name": "Lamb Adams",
        "gender": "male",
    }
]

s2 = 0
for (const i of user2) {
    console.log(i.age)
    console.log(s2)
    console.log('----------')
    s2 += (i.age ?? 0) //널값이면 0을 넣어라
}
console.log((s2 / user2.length).toFixed(2))
//-null값이 있으면 그만큼 랭스를뺴줘야하는디

/////

s2 = 0
for (const i of user.map((v, i) => v.age)) { //age자체를 돌림
    if (!!i) { //i에 값이 있으면 더해라
        s2 += i
    }
}
console.log((s2 / user2.length).toFixed(2))

/////
!true //false
!false //true

!!10 // true
!!1 // true
!!-1 // true
!!0 // false
!!'hello' // true

!! NaN // false
!! undefined // false
!! null // falses

/////외우세요////

user.map(v => v.age).filter(v => !!v)