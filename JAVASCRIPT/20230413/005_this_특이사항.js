//이름이 있는 함수 안에서 정의된 함수의 겨웅 this는 전역을 바라보게 됩니다.
const person = {
    name: 'hojun',
    age: 25,
    a(){
        console.log(this);
        console.log(this.name);
        function b() {
            console.log(this);
            console.log(this.name);
            function c() {
                console.log(this);
                console.log(this.name);
            }
            c()
        }
        b()
    }
}
person.a()

// //출력
// a는 메서드로서 person을 반환 {name: 'hojun', age: 25, a: ƒ}
// hojun

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// ''

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// ''


/////////
let a = () => {
    console.log(this);
    console.log(this.name);
    let b = () => {
        console.log(this);
        console.log(this.name);
        let c = () => {
            console.log(this);
            console.log(this.name);
        }
        c()
    }
    b()
}
a()

//a는 화살표 함수이므로 this 바인딩이 일어나지않음! 상위스코프를 반환함 따라서 셋다 window를 반환

/////
// 메서드 콜백함수에서 this로 사용할 값을 제공할 수도 있다.
[1, 2, 3].forEach(function () { console.log(this) }) // window
[1, 2, 3].forEach(function () { console.log(this) }, [10, 20, 30]) //[10, 20, 30]로 this값을 지정

/////
let 인세규정 = {
    책: 10,
    영상콘텐츠: 50
}

function 인세계산함수책(e) {
    return e * (this.책 / 100)
}

function 인세계산함수영상(e) {
    return e * (this.영상콘텐츠 / 100)
}

[100, 200, 300].map(인세계산함수책, 인세규정)
[100, 200, 300].map(인세계산함수영상, 인세규정)

// [100, 200, 300].forEach(function (v) {
//     console.log(v)
//     console.log(this)
// })


///
// 1. 전역공간의 this는 window(node는 global) → 실제로는 window.globalThis, window.this 아닙니다. [자바스크립트에서 `globalThis`의 소름끼치는 폴리필](https://ui.toast.com/weekly-pick/ko_20190503)
// 2. 메서드로 호출한 경우 this는 멤버접근연산자 앞에 객체
// 3. 함수로 호출할 경우 this는 window(node는 global)
// 4. 화살표 함수의 경우 this는 상위 스코프
// 5. 생성자 함수의 경우 this는 인스턴스
// 6. 콜백함수의 경우 this가 다르게 동작 할 수 있음

