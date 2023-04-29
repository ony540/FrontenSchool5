//배열 전체 순회
//for each 추가하기
//어진 함수를 배열 요소 각각에 대해 실행!!
//this 지정가능 

let some = ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
}); //Bilbo is at index 0 in Bilbo,Gandalf,Nazgul

console.log(some) // undifend 어떤 값을 반환하지않음 


//배열 변형
//map
let result = arr.map(function(item, index, array) {
    // 요소 대신 새로운 값을 반환합니다.
  });

// 배열 요소 전체를 대상으로 함수를 호출하고, 함수 호출 결과!!를 배열로 반환!!
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6


// 객체 매핑 - map 예제
let users = [
    { name: "John", surname: "Smith", id: 1 },
    { name: "Pete", surname: "Hunt", id: 2 },
    { name: "Mary", surname: "Key", id: 3 }
];

let usersMapped = users.map(item => ({
        fullName: item.name + item.surname,
        id: item.id
    }))

console.log(usersMapped)

alert(usersMapped[0].id) // 1
alert(usersMapped[0].fullName) // John Smith


/*
forEach, for, for..of를 사용하면 배열 내 요소를 대상으로 반복 작업을 할 수 있습니다.

각 요소를 돌면서 반복 작업을 수행하고, 작업 결과물을 새로운 배열 형태로 얻으려면 map을 사용하면 되죠.

arr.reduce와 arr.reduceRight도 이런 메서드들과 유사한 작업을 해줍니다. 그런데 사용법이 조금 복잡합니다. reduce와 reduceRight는 배열을 기반으로 값 하나를 도출할 때 사용됩니다.
 */

//reduce와 reduceRight (반대로 짧게)
//https://paperblock.tistory.com/70
// - accumulator 누적값 누산기 

let value = arr.reduce(function (accumulator, current, index, array) {
    // ...
}, [initial]);

//---
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);
let result = arr.reduce((sum, current) => sum + current); // 초기값 생략 가능  
alert(result); // 15

arr = [] // 빈배열일 경우 
let result = arr.reduce((sum, current) => sum + current); // 초기값 생략 시 
alert(result); // 오류 발생



//평균 나이 구하기 -  reduce
let arr = [ 
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 }
];

function getAverageAge(arr){
    return arr.reduce((acc,user) => {acc + user.age}) / arr.length
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


//-------
//sort 
//배열 자체가 변경됨 ! ! ! 정렬해줍

const avengers = ['아이언맨', '스파이더맨', '캡마', '헐크']
console.log(avengers.sort());
//가나다 순 정렬

const nums = [1, -2, 15, 2, 0, 8]
console.log(nums.sort()) // 15의 위치가 맞지 않음


nums.sort(function (a, b) {
    console.log(a + " <> " + b);
    return a - b;
}); //a - b  의 결과가 -1 이면 앞으로 정렬

//오름차순
console.log(nums.sort((a, b) => a - b))

//내림차순
console.log(nums.sort((a, b) => b - a))

// +a 
// 나이기준 객체 정렬 - sort
function sortByAge(arr){
    return arr.sort((a,b) => a.age - b.age);
 }
 
 let arr = [ 
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 }
];
 
 console.log(sortByAge(arr)) //[john, mary, pete]


//--------
//split과 join

// 구분자를 기준으로 문자열을 쪼개서 배엷로 반환 

let names = 'Bilbo, Gandalf, Nazgul';

let arr = names.split(', ');
for (let name of arr) {
    console.log(`${name}에게 보내는 메시지`); // Bilbo에게 보내는 메시지
}

//---
let str = arr.join(';'); // 배열 요소 모두를 ;를 사용해 하나의 문자열로 합칩니다.
console.log(str); // Bilbo;Gandalf;Nazgul




//과제1 border-left-width를 borderLeftWidth로 변경하기
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';

function camelize(string) {
    string.split('-')
        .map((word, index) => index == 0 ? word //0번째 단어는 그대로
            :
            word[0].toUppercase + word.slice(1)) //그뒤 단어는 word[0] 첫번째문자를 대문자 + 인덱스1번부터 끝까지 잘라서 붙이기 
}

//----------발표자료X---------

//reverse 정렬하는게 아니라 단순이 역순 정렬
console.log(nums.reverse())

//과제4 배열 복사본 정렬하기
function copySorted(arr) {
    // let sortedArr = arr;
    // arr.slice() - slice에 인자가 없으면 그대로 값을 복사해서 반환!!
    return arr.slice().sort()
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (no changes)

//--------
//과제5 내림차순으로 정렬하기
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a)
console.log(arr); // 8, 5, 2, 1, -10



//---------
// 확장 가능한 계산기 - reduce
function Calculator (){
    this.methods = {
        "-": (a,b) => a -b,
        "+": (a,b) => a +b,
    }

    this.calculate = function (string){
        const getData = string.split(" ")
        
        // a = parseInt(getData[0])
        a = +getData[0] //숫자로 만들기
        b = parseInt(getData[2]) // 숫자
        doing = getData[1]

        // 예외처리
        if (!this.methods[doing] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
        };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}



let calc = new Calculator;

alert( calc.calculate("3 + 7") );


let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8


