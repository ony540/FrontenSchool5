let value1; // undefined

//존재하지만 값이나 자료형에 존제하지않는 foo
var value2 = null;
console.log(value2); //null

// 참고삼아서만 알아주세요.
// let 반점수 = [10, 20, 30, null, 40, 50]
// let 반점수합 = 0
// for (const i of 반점수) {
//     console.log(i)
//     반점수합 += i
// }
// console.log(반점수합)

// 점수합 - 계산 가능(150)


let 반점수 = [10, 20, 30, undefined, 40, 50]
let 반점수합 = 0
for (const i of 반점수) {
    console.log(i)
    반점수합 += i
}
console.log(반점수합)

// 반평균 undefined가 하나라도 있으면 합의 결과값이 NaN!
