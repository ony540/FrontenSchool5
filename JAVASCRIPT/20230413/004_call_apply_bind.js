// this 값을 사용자의 의도대로 조작하기
//apply call bind

//call
//매서드의 인수에 this로 사용할 값을 전달할 수 있다.

// call
var peter = {
    name: 'Peter Parker',
    sayName: function () {
        console.log(this.name);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce); //bruce를 this로 인식

//

var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사) {
        console.log(this.name + 감탄사);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce, '!'); //두번째 아규먼트를 해당 함수의 아규먼트로 인식!!
peter.sayName('!') //Peter Parker!
peter.sayName() //Peter Parkerundefined

/////

//apply
var peter = {
    name: 'Peter Parker',
    sayName: function (is, is2) {
        console.log(this.name + ' is ' + is + ' or ' + is2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}

peter.sayName.apply(bruce, ['batman', 'richman']);  //배열로 전달
//배열형식으로 두번째 인자를 받아서 해당함수의 아규면트로 인식!!

// call과 apply 비교
// 비교1
var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사1, 감탄사2) {
        console.log(this.name + 감탄사1 + 감탄사2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce, '!', '!!'); //Bruce Wayne!!!

// 비교2
var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사1, 감탄사2) {
        console.log(this.name + 감탄사1 + 감탄사2);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
peter.sayName.call(bruce, ['!', '!!']);//Bruce Wayne!,!!undefined 배열을 걍 문자열통째로 하고 undefined
peter.sayName.apply(bruce, ['!', '!!']);//Bruce Wayne!!!


//////////
//bind
function sayName() {
    console.log(this.name);
}

var bruce = {
    name: 'bruce',
    sayName: sayName
}

var peter = {
    name: 'peter',
    sayName: sayName.bind(bruce)  //전역객체에 this가 bruce라고 바인딩됨 - this가 고정된 새로운 함수를 반환합니다.
}

peter.sayName();
bruce.sayName();
//둘다  bruce라는 결과 도출