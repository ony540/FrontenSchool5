//let과 const는 블록레벨 스코프를 가지고있다.
//스코프 : 변수에 접근할 수 있는 유효범위 ! ! ! 
//전역 스코프 / 함수 스코프 / 블록 스코프(ES6)

{
    let x = 10
    const y = 20
}

console.log(x, y) //오류발생

//지역변수와 전역변수
let x = 100 //블록 밖에 선언하시면 전역에서 접근할 수 있는 변수가 됩니다. 이를 전역변수라고 한다
function 함수(){
    let y = 20; //블록 안에 변수를 선언하시면 밖에서 접근할 수 없습니다. 이를 지역변수라고 합니다.
    console.log(x) //스코프체이닝(스코프 체인을 따라 해당 영역에 변수가 없으면 계속해서 상위 스코프를 따라 올라갑니다. 전역까지 올라갔는데도 변수가 없다면 에러가 납니다.)
}
함수()

//-------------
// 1 - 실행안됨!
let x = 10
function 함수1() {
    let x = 20
    function 함수2() {
        function 함수3() {
            console.log(x)
        }
    }
}
함수1()


// 2
let x = 10
function 함수1() {
    let x = 20
    function 함수2() {
        function 함수3() {
            let x = 30
            console.log(x)
        }
        함수3()
    }
    함수2() //이렇게해야 실행됨!
}
함수1() // 30
console.log(x) //10 - 전역공간


// 3
let x = 10
function 함수1() {
    let x = 20
    function 함수2() {
        function 함수3() {
            // 여기에 30선언하지않음
            console.log(x)
        }
        함수3()
    }
    함수2()
}
함수1() // 20

let a = 10
let b = 10
function 함수1() {
    let a = 20
    let b = 20
    function 함수2() {
        let a = 30
        console.log(a, b) //30 20
    }
    함수2()
}
함수1()
//타고올라가는 스코프채이닝


//-----------
//함수의 호이스팅(함수나 변수를 끌어올려주는 것처럼 보임)
// 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미

// error 없이!!! 실행 됩니다. func
함수(10)

function 함수(x) {
    return x + 100
}

// error가 생깁니다.  let과 const등 변수에 할당하거나 선언한 다음부터 사용할 수 있기 때문에
함수(10)

let 함수 = x => x + 100

// error가 생깁니다.
함수(10)

const 함수 = function (x) {
    return x + 100
}