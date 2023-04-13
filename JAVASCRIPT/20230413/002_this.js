// this(***)
// 자신을 호출한 객체 / 자신이 생성할 객체
//this가 뭔지 확인하기 위해서는 그 앞을 확인하라 

function a() {
    console.log(this) //이때의 this는 window
}
a();
window.a()

//---------
//이때의 this는 myobj
let myObj = {
    val1: 100,
    func1: function () {
        console.log(this); 
    }
}

myObj.func1(); //myobj!! func1이 아니다!!
//. 앞에 있는 것을 출력한다

//---------
//여기 놓침

//this가 어려운 이유는 this를 포함하고 있는 객체가 있는 위치에 따라 this의 의미가 달라지기 때문입니다.

function sayName() {
    console.log(this)
}

var c = {
    'hello': 'world',
    'say': sayName
}

var b = { // var b ={c}
    'c': c
}
var a = { // var a ={b}
    'b': b
}


//3개 전부 - hello가 있는 c가 출력됨 console.log(this)로 (직전에 있는 것)
c.say() 
b.c.say() 
a.b.c.say()

/////////
let myObj = {
    val1: 100,
    func1: function () {
        console.log(this); 
    }
}

let test = myObj.func1;
test() //여기서 this는 window!!!

//https://school.programmers.co.kr/learn/courses/30/lessons/120852
//소인수분해

function solution(n) {
    let answer = [];

    let i = 2;
    while (i <= n) {
        if (n % i === 0) {
            answer.push(i);
            n = n / i;
        } else {
            i++;
        }
    }

    return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
}

// 추가 예제 //

var name = 'hojun'
function sayName(){
    console.log(this.name)
}

sayName() //hojun

let peter = {
    name: 'Peter Parker',
    say: sayName
}
let bruce = {
    name: 'Bruce Wayne',
    say: sayName
}

peter.say()  //Peter Parker
bruce.say() //Bruce Wayne

//////

function attackBeam(){ //레이저공격
    this.hp -= 20;
}

let jombi = {
    name: 'busan jombi',
    damaged: attackBeam,
    hp: 100,
    power: 2
}

let thanos = {
    name: 'thanos',
    damaged: attackBeam,
    hp: 10000,
    power: 100
}

jombi.damaged()
jombi.hp //20 깎겨있음
thanos.hp //안깎겨있음 (다른 this)


function attackKnife(){ //칼공격
    this.hp -= 5;
}

///////

let 호텔 = [{
    '이름': '하나호텔',
    '위치': '제주도 제주시 001',
    '가격': { 'A': 50000, 'B': 30000, 'C': 15000 },
    '방의개수': 50,
    '예약자수': 25,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '둘호텔',
    '위치': '제주도 제주시 002',
    '가격': { 'A': 100000, 'B': 60000, 'C': 30000 },
    '방의개수': 100,
    '예약자수': 30,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '셋호텔',
    '위치': '제주도 제주시 003',
    '가격': { 'A': 80000, 'B': 50000, 'C': 30000 },
    '방의개수': 120,
    '예약자수': 80,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());

function a(){
    console.log(this)
    function b(){
        console.log(this)
        function c(){
            console.log(this)
        }
        c()
    }
    b()
}
a()

//a,b,c 모두 window
//위 함수는 a.b.c() 이런 식으로 호출한 객체를 타고 올라가는 형태가 아닙니다