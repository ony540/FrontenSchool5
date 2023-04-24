//this가 뭔지 확인하기 위해서는 그 앞을 확인하라 

//전역공간에서 - 브라우저 환경 / 엄격모드 / Node.js
// "use strict"
console.log(this)


// 함수에서 (그 함수가 메서드 내부에함수여도 window임! 일단 기억만하고 넘어갈게요)

function a() {
    console.log(this) //이때의 this는 window
}
a();
window.a();


//메서드에서

//1--------
let myObj = {
    val1: 100,
    func1: function () {
        console.log(this);
    }
}

myObj.func1(); //myobj!! func1도 아니다!!
//this는 멤버접근연산자 앞에 객체
// . 앞에나 [] 앞에 / 자신을 호출한 객체!!

//2-----------
function sayName() {
    console.log(this)
}

var c = {
    'hello': 'world',
    'say': sayName
}

// hello가 있는 c가 출력됨 console.log(this)로 (직전에 있는 것)
c.say()
c['say']()


//한번 더 꼬우자면
var b = { // var b ={c}
    'c': c
}

b.c.say() //b.c는 c / c.say는 function sayName / 이것의 this는 c (메서드 호출 주체- 메서드 명 앞의 객체)
// . 앞에 있는 것!!


//함수상황과 메서드 비교
//0---------------

var name = 'hojun'

function sayName() {
    console.log(this.name)
}

sayName() //hojun - 여기서 this는 window (함수에서)

let peter = {
    name: 'Peter Parker',
    say: sayName
}
let bruce = {
    name: 'Bruce Wayne',
    say: sayName
}

//(메서드에서)
peter.say() //Peter Parker - 메서드에서의 this는  메서드를 호출하는 주체
bruce.say() //Bruce Wayne


//함수에서 - 헷갈리는 경우
//1 -----------

function a() {
    console.log(this)

    function b() {
        console.log(this)

        function c() {
            console.log(this)
        }
        c()
    }
    b()
}
a()

//a,b,c 모두 window !!!
//위 함수는 a.b.c() 이런 식으로 호출한 객체를 타고 올라가는 형태가 아닙니다

//2--------------
//메서드 내부함수에서 도 똑같음 - 무조건 윈도우
let user = {
    firstName: "보라",
    sayHello(){
        console.log(this);
    }, // 메서드
    sayHi() {
        let arrow = function () { // 메서드의 내부 함수
            console.log(this);
            console.log(this.firstName);
        }
        arrow();
    }
};

user.sayHello(); 
user.sayHi(); 


//위에 같은 경우가 이상하죠? 따라서
//화살표 함수에서
// this 바인딩이 일어나지않음 
//일반 함수와는 달리 ‘고유한’ this를 가지지 않는다. 따라서 ‘평범한’ 상위 함수에서 this 값을 가져옵니다.

let user = {
    firstName: "보라",
    sayHi() {
        let arrow = () => { // 메서드의 내부 함수 지만 화살표 함수
            console.log(this);
            console.log(this.firstName);
        }
        arrow();
    }
};

user.sayHi(); 


// 콜백함수에서 
//그떄그때 달라요 무조건 이거다 ㅌ

//forEach
//this로 사용할 값을 제공할 수도 있다.
[1, 2, 3].forEach(function () {console.log(this)}) // window

[1, 2, 3].forEach(function () {console.log(this)}, [10, 20, 30]) //[10, 20, 30]로 this값을 지정

// addEventListener - 버튼 클릭하면서 앞서 지정한 엘리먼트가 출력 (제어권을 받은 함수에서는)
//btnFirst를 기준 본인을 호출한 객체
//이벤트 리스너 함수 내부에서의 this 값은 이벤트가 연결된 노드를 참조

{/* <button class="btn-first" type="button">버튼1</button> */}

btnFirst.addEventListener('click', function () { 
    console.log(this); 
})




// 재현강사님 예제 - addEventListener + 화살표함수
//마지막 예제------------

const btnFirst = document.querySelector('.btn-first');

const myObj = {
    nameObj: 'testObj',
    test() {
        btnFirst.addEventListener('click', () => { //화살표함수
            console.log(this); //이 함수의 상위 스코프를 바라본다 (myObj)
        })
    },
    test2() {
        btnFirst.addEventListener('click', function () { //함수표현식을 넣으면 이벤트가 add된 것기준
            console.log(this); //이벤트 리스너 함수 내부에서의 this 값은 이벤트가 연결된 노드를 참조
        })
    }
}
myObj.test(); //this - myObj자체
myObj.test2(); //this - btn-first
//화살표함수의 this는 조심스럽게 사용해야한다