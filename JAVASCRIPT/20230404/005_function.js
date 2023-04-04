// 함수의 일반적인 형태
//파선아실 - 파라미터 선언할때 / 아규먼트 실무

function one(a, b) { // 합의 제곱
    let z = a + b //2
    return z ** 2 //3
}
one(7, 3) //100

//화살표 함수
const two = (a, b) => (a + b) ** 2
two(7, 3)

//이름 없이 선언하는 함수
const three = function (a, b) { //1
    let z = a + b //2
    return z ** 2 //3
}
three(7, 3)

//콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게~
function four(a, b, c) {
    let z = c(a, b) + c(a, b) //c는 함수
    return z ** 2
}

four(7, 3, one) //40000

//아래와 같이 했을 경우에는 함수의 순수성, 순수함수의 장점을 살릴 수 없다.
//외부에서 직접 값을 가져오는 것을 지양하기
function four(a, b, c) {
    let z = one(a, b) + one(a, b) //c는 함수
    return z ** 2
}

four(7, 3, one)


// 함수
// 읽어볼만한 문헌 : https://ko.javascript.info/function-basics
// return, console.log를 헷갈려한다.

function hello(para) {
    console.log(para);
    console.log('hello');
    return 100;
}

console.log(hello(10));

let x = console.log('hello');
x // undefined


//함수, 메서드(클래스 안에서 사용되는 함수)
// .을 찍어 접근할 수 있는 함수다 => 매서드
// 함수를 호출할 수 있는 이름은 결국 변수입니다.
let x2 = console.log
x2('hello')

// 아래 2개는 같은 것! retun이 없으면 undefined이 기본

function hello() {
    console.log('hello');
}

function hello() {
    console.log('hello');
    return undefined;
}

// return - 리턴 뒤로는 실행되지않는다 헬로 3번만 나옴 
function hello4() {
    console.log('hello')
    console.log('hello')
    console.log('hello')
    return
    console.log('hello')
    console.log('hello')
    console.log('hello')
}

hello4()


function hello5() {
    if (true) {
        if (false) { // 이 값을 바꿔보세요.
            if (true) {
                return
            }
        }
    }
    console.log('hello') // 실행됨
}


//return을 하더라도 1회 반복만 종료되는 것이지 전체 반복 종료되는 것이 아님
const x3 = [10, 20, 30, 40, 50]
x3.foreach(function (el) {
    console.log(el)
    return
    console.log('world')
})

//실행하면 10,20,30,40,50 순서대로 하나씩 출력됨! 10만 출력하고 끝나는 것이 아님

//----------------

function 함수1(a, b, c) {
    return a + b + c
}

함수1(10, 20, 30, 40) //에러가 발생하지 않는다.
함수1(20, 30) //에러가 발생하지 않는다.

function 함수2(a = 10, b = 20, c = 30) {
    return a + b + c
}

함수2(1, 1) //32
함수2(a = 1, c = 1) //32 a와 c로 들어갈거가로 생각했지만 a와 b에 들어갑니다.

// 아래와 같은 식별 이슈가 있을 경우 object로 넘깁니다. roro기법
function runPython(user, time, code, lv) {
}

runPython('leehojun', 100, 'function...', 3)

function runPython({ user, time, code, lv }) {
}

runPython({
    user: 'nayeong',
    time: 100,
    code: 'function...',
    lv: 3
})
//기본값 설정
function runPython({
    user = '',
    time = 0,
    code = '',
    lv = 0 }) {
}

//----------------
//화살표 함수에 다양한 예제
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics

function 함수1(x, y) {
    return x + y
}
// 위 함수를 화살표 함수로 작성하면 아래와 같습니다.
let 함수1 = (x, y) => x + y

// 만악 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있습니다.
let 함수2 = x => x + 10

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 됩니다.
let 함수3 = x => x + 10

let 결과 = 함수3(2);

console.log(결과);


//즉시실행함수 - 괄호로 감싸줌 
(function () {
    console.log('이 함수는 만들어지자마자 바로 실행됩니다!');
})();