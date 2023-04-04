//filter


//짝수만 출력
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.filter(function (el) {
    return el % 2 == 0
}) 

function solution(n) {
    return Array(n)
        .fill()
        .map((_, i) => i + 1) // n개의 1부터 n까지의 값을 가진 어레이
        .filter((v) => v % 2 === 0) // 그중에 짝수만 골라서
        .reduce((a, c) => a + c, 0); // 지금은 X
}
solution(50)

// 그냥 사회적 규약
//map((_, i) => i + 1) //item이 의미없다고 생각하면 _로 파라미터 선언한다


//홀수만 출력
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr2.filter(function (el) {
    return el % 2 !== 0
}) 

// 모음 제거
Array.from('hello world').filter(v => !["a", "e", "i", "o", "u"].includes(v))

//-------------
// reduce

const arr3 = [1, 2, 3, 4, 5]
arr3.reduce((a,c) => a + c,0)  //0 초기값 꼭 써라


// includes
const arr4 = ['hello','world','hojun']
arr4.includes('world') //tru
arr4.includes('hojunlee') //fal
arr4.includes('ho') //fal

//-----------
//join
const arr5 = ['hello','world','hojun']
arr5.join('!')  //hello!world!hojun

const arr6 = ['010', '5044', '2903']
arr6.join('-')

const arr7 = [010, 5044, 2903]
arr7.join('-') // 이렇게 하시면 안됨 - 이상한 숫자 결과가 나옴

// 0b100 // b는 바이너리의 첫글자입니다.
// 0o100 // o는 옥타의 첫글자입니다.
// 0x100 // x는 헥사를 표현합니다.
