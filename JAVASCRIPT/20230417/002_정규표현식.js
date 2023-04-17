//https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC

'paullab CEO leehojun hello CEO'

//문자열 1개만 매칭되어 변경
'paullab CEO leehojun hello CEO'.replace('CEO', 'CTO')

//flag로 global을 주어서 전체변경(m-다중라인,i-대소문자구분X)
'paullab CEO leehojun hello CEO'.replace(/CEO/g, 'CTO')

//패턴을 찾아 Array로 반환
'paullab CEO leehojun hello CEO'.match(/CEO/g) // ['CEO', 'CEO']

// 패턴으로 split - /CEO/ 기준으로 나누기 ['paullab ', ' leehojun hello ', '']
'paullab CEO leehojun hello CEO'.split(/CEO/g)

// 패턴이 들어가 있으면 true 없으면 false
(/CEO/g).test('paullab CEO leehojun hello CEO')

//알고리즘 문제 풀이할때 주의사항
//split을 하면 내가 원하는 개수보다 1개가 더 추가되어 나온다
'!a!abc!abcd'.split('!')
'!a!a!a'.split('!') // 4개
'a!a!a!'.split('!') // 4개

'a!a!a!'.split('!').length - 1 //1을 빼야 !의 개수가 나옴

/*

// 3. 일반문자열
/hello/g

// 4. 처음과 끝
/^hello/g
/hello$/g
/^hello$/g

// 5. 모든문자 매핑(.)
/hello/g
/h.llo/g
/hello..world/g

// 6. 모든문자 매핑
/h[eao]llo/g

// 7. 범위
/h[a - zA - Z0 - 9]llo / g

// 8. 부정
/ h[^ ae]llo / g

// 9. 그루핑 규칙
/ (on | ues | rida) / gm //: 그룹 1로 3개 중 매칭되는 패턴 찾음
// /(?:on|ues)/gm
// /(on|ues)|(rida)/gm : 그룹1(on|ues)과 그룹2(rida)로 각각 매칭되는 패턴 찾음
/.(a | e | o)ll./ gm
// /hello (?!world)/gm : hello 뒤에 world가 오지 않는 것 (네거티브 매칭)
// /hello (?=world)/gm : hello 뒤에 world가 오는 것 (파지티브 매칭)

("hello hallo hello").match(/.(a|e|o)ll./g)
("hello hallo hello hello hi").match(/.(a|e|o)ll./g)
("hello hallo hello hello hi").match(/.[eao]ll./g)
 */

// 10. 수량자
/*
_* : 앞에 있는 문자가 0개 ~ N개
_+ : 앞에 있는 문자가 1개 ~ N개
_? : 앞에 있는 문자가 0개 ~ 1개

{3} : 3개
{3,} : 3개 이상
{1,3} : 1개 ~ 3개

_* : 앞에 있는 문자가 0개 ~ N개 ({0,})
_+ : 앞에 있는 문자가 1개 ~ N개({1,})
_? : 앞에 있는 문자가 0개 ~ 1개 ({0,1})

/[0-9]{3}[-.* ][0-9]{4}[-.* ][0-9]{4}/gm
/[0-9]{2,3}[-.* ]?[0-9]{3,5}[-.* ]?[0-9]{4}/gm
/[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/gm
*/


//-----------------

//1번 문제. 특정 문자 제거하기
//https://school.programmers.co.kr/learn/courses/30/lessons/120826


function solution(my_string, letter) {
    return my_string.split(letter).join('')
    //.join('') - 공백을 사이에 두고 배열 문자열로 결합하기
}

//오답 - 정규표현식 패턴은 문자열로 만드는 것이라 별도로 생성을 해주어야합니다
function solution(my_string, letter) {
    return my_string.replace(`/${letter}/g`, '');
}

function solution(my_string, letter) {
    //new RegExp (패턴으로 사용할 문자열, 플래그)
    //replace에서만 사용되는 것이 아니라 정규표현식이 들어가는 곳 모두에서 사용할 수 있다.
    let reg = new RegExp(letter, 'g')
    return my_string.replace(reg, '');
}

solution('Bdcf', 'B')

// new RegExp('B', 'g') 이렇게 사용하시거나 my_string.replace(/B/g, '')

//-------
//2번 문제. 숨어있는 숫자의 덧셈
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(my_string) {
    return my_string.match(/[0-9]/g)
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

'12njsdjiow32'
    .match(/[0-9]/g) // 숫자를 찾아서 각 숫자(문자열)을 담은 배열생성
    .map(x => parseInt(x)) //숫자로 변환
    .reduce((a, b) => a + b, 0) // 합구하기

'12njsdjiow32'
    .match(/[0-9]/g) //숫자찾는다
    .reduce((a, b) => parseInt(a) + parseInt(b), 0) // 숫자로 변환해서 더하기


//--------
//3번 문제. 369게임
//https://school.programmers.co.kr/learn/courses/30/lessons/120891


//match의 경우 값이 없을때 - null 고려하기!!!!
function solution(order) {
    const result = String(order).match(/[369]/g) ?? [];
    return result.length;
}
String(125).match(/[369]/g);

//--------
// 4번 문제
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120913
// 아래와 같이 풀 수 있지만 정규표현식을 사용하면 더 간단해집니다.
function solution(my_str, n) {
    let result = []
    for (let i = 0; i < my_str.length; i += n) result.push(my_str.slice(i, i+n))
    return result
}

[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]
[0-9]{1,n}

"abc1Addfggg4556b".match(/[a-zA-Z0-9]{4}/g)
"abc1Addfggg4556b".match(/[a-zA-Z0-9]{3}/g)
"abc1Addfggg4556b".match(/\w{3}/g) // 문자
"abc1Addfggg4556b".match(/\d{3}/g) // 숫자
"abc1Addfggg4556b".match(/.{3}/g) // 모든문자
"".match(/.{3}/g) // 주의 : null

//오답
function solution(my_str, n) {
    let reg = new RegExp(`.{${n}}`,'g') // 마지막 남은 것도 반환해야함
    return my_str.match(reg)
}

//정답
function solution(my_str, n) {
    let reg = new RegExp(`.{${1,n}}`,'g') 
    return my_str.match(reg)
}

function solution(my_str, n) {
    let reg = new RegExp(`\\w{${1,n}}`,'g')  // '\'를 표현하기 위해서 '\\'를 사용
    return my_str.match(reg)
}

//--------
// 5번 문제 - 2번문제 업그레이드
//https://school.programmers.co.kr/learn/courses/30/lessons/120864
//숫자가 붙어있으면 한 숫자로 계산

function solution(my_string) {
    return (my_string.match(/\d+/g) ?? [] )
    .reduce((a, b) => parseInt(a) + parseInt(b), 0)
}

'sifkeo12dso03j4k'.match(/\d+/g)


/////////////그룹 연습문제///////////////
'gogaooogogooo'.match(/(go)/g); // ['go', 'go', 'go']
'gogaooogogooo'.match(/[go]/g); // ['g', 'o', 'g', 'o', 'o', 'o', 'g', 'o', 'g', 'o', 'o', 'o']

// 숫자 2자리와 알파벳 하나씩이 매칭되도록 다음의 패턴에서 문자열을 추출하시오. 숫자는 항상 2개만 있고, 알파벳은 1개 이상 있을 수 있습니다.

// '87a99b00fww89e' => ['87a','99b','00f','89e']
'87a99b00fww89e'.match(/[0-9][0-9][a-zA-Z]/g)
'87a99b00fww89e'.match(/([0-9][0-9])([a-zA-Z])/g) // 숫자 그룹과 문자 그룹으로 나눕니다.
'87a99b00fww89e'.match(/([0-9]{2})([a-zA-Z])/g)
'87a99b00fww89e'.match(/(\d{2})([a-zA-Z])/g)

//--------
//6번 문제
//https://jsalgo.co.kr/ 

//숫자10이 있을 경우 오답
'a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g)

//0~10까지 뽑기 가능
'a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev](10|[0-9])/g)

'a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev](10|[0-9])/g)
.reduce((a,b) =>  parseInt(a) + parseInt(b),0)

//정답
function solution(data) {
    let result = data.match(/[rev](10|[0-9])/g)
        .reduce((a,c) =>  a + parseInt(c.slice(1)), 0)
        .toString()
    return `${result[0]}월 ${result[1]}일`
}


///
// reduce 보강설명
// reduce의 형태
array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

[10, 20, 30].reduce(
    (accumulator, currentValue) => {
        console.log(currentValue)
        return accumulator + currentValue
    },
    0
);

['a10', 'a20', 'a30'].reduce(
    (accumulator, currentValue) => {
        console.log(currentValue)
        console.log(currentValue.slice(1)) //1번째문자열부터끝까지 10,20,30
        return accumulator + currentValue
    },
    0
);

['a10', 'a20', 'a30'].reduce(
    (accumulator, currentValue) => {
        console.log(currentValue)
        console.log(currentValue.slice(1))
        console.log(parseInt(currentValue.slice(1)))
        return accumulator + parseInt(currentValue.slice(1)) //숫자형으로 누적합
    },
    0
);

['a10', 'a20', 'a30'].reduce(
    (accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.slice(1))
    },
    0
);

['a10', 'a20', 'a30'].reduce((a, c) => a + parseInt(c.slice(1)), 0);



// replace 매우 고급 문법 보강 설명 - 검색해도 잘나오지않음. 많이 사용하지않음//
const string = `hojun, lee
gildong, hong
hojung, choi
junho, lee`


let result1 = string.replace(/(\w+), (\w+)/gm, "$2 $1"); //,으로 나눠서 lee hojun $2 $1으로 순서 바꿔서 출력
console.log(result1);
let result2 = string.replace(/(\w+), (\w+)/gm, "$2_$1");
console.log(result2);
let result3 = string.replace(/(\w+), (\w+)/gm, "$1님 안녕하세요.");
console.log(result3);
let result4 = string.replace(/(\w+), (\w+)/gm, "$2 $1!!$1!!$1");
console.log(result4);