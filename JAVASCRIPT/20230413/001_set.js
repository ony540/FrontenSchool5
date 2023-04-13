//집합, 합집합, 교집합, 차집합, 여집합
//실무에서는 많이 사용되지않지만
//알고리즘 문제에서는 거의 필수로 사용되는 자료형입니다.

let s = new Set('aabbcccdd') //중복을 제거하는 구나
s.size //4

회사게시판 = ['이호준','이호준','이호준','이호준','이호준','김연하','김연하','최동석','이나영']

//문제1. 몇명이 게시판에 게시물을 썼나요? (각각의 인원이 유일해야합니다.)
let 게시자 = new Set(회사게시판)
게시자.size

//문제2. 각각 몇 개의 게시물을 작성하였나요
for(const i of 게시자){
    console.log(i,회사게시판.filter(e => e === i))
}

for(const i of 게시자){
    console.log(i,회사게시판.filter(e => e === i).length)
}

//이 풀이는 매우 어렵습니다 초급자 권장하지 않습니다.
let map = new Map()
for( const i of 회사게시판){
    map.set(i, (map.get(i) || 0 ) + 1)
}

//설명 - 1번째 순회 i에 '이호준'
map.set('이호준', (map.get('이호준') || 0 ) + 1)
//키 -  이호준
//value - 기존에 '이호준'키의 값이 있으면 그만큼들고오고 없으면 0, 거기에 1더하기!!


//// set 연습 ////
let s = new Set('aaabbbccdd')
s.size
s.has('a') //t
s.has('f') //f
s.has('z') //f

for (const i of s){
    console.log(i)
}

//아래 3개 같은 결과 
//통문자열 or 문자 하나하나 담은 배열!
let s = new Set('aabbcccdd')
let s = new Set('aaabbbccdd'.split(''))
let s = new Set(['a','b','c','a','c','a','a','a','d'])


// s.forEach((value, value, set) => { })
// array와 다르게 value가 2번 반복입니다.!! (같은 값이 나옴)
// IE10은 미지원

s.forEach((a, b, set) => {
    console.log(a, b, set)
})

//교집합 
let a = new Set('abc')
let b = new Set('cde')
//a의 것들 중에 b가 가지고 있는 것만 필터링
let cro =[...a].filter(e => b.has(e)) 

//합집합
// 같은기능 / .concat - 앞에 거에다가 아규먼트 이어붙이기
let union = new Set([...a].concat(...b))
let union = new Set([...a,...b])

//차집합
let dif = [...a].filter(e => !b.has(e))



// set, map, object, arrary, string이 이터러블 객체인지 
//이터러블한 객체란? 순회가 가능한 객체이다.
//set, map, arrary, string

// 순서를 보장하나요? (object는 순서를 보장하지 않습니다.)
// set, map, array, string
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set
// https://myung-ho.tistory.com/90

//https://school.programmers.co.kr/learn/courses/30/lessons/120903#
//1. 교집합의 개수 구하는 문제

//이거 안되는데 틀렸다고 했나여?? 제가 놓쳐서
function solition (s1,s2){
    return s1.length + s2.length - new Set([...s1, ...s2]).size;
}

//이거 답
function solution(s1, s2) {
    s1 = new Set(s1)
    s2 = new Set(s2)
    let cro = [...s1].filter(e => s2.has(e))
    return cro.length;
}

//못봄
//https://school.programmers.co.kr/learn/courses/30/lessons/120891
//3,6,9게임

function solution(order) {
    const mySet = new Set([3, 6, 9]);
    return String(order) // '29423' 
        .split("") // ['2', '9', '4', '2', '3']
        .filter((num) => mySet.has(parseInt(num))).length;
}
