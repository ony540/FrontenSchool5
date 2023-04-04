// 객체 타입

const arr = [10, 20, 30]
arr[0] = 100 // const는 값의 변화가 안된다고 하지않았나?
// arr = 100 - 이런거가 안되는 것
// arr =[10,20,30] - 전체 다시 선언하는 것들이 안됨

console.log(arr)
console.dir(arr) //프로퍼티와 매서드를 볼 수 있다.

//문자열(string)
const s = 'hello world'
console.log(s[0])
s[0] = 'i' // 불변, immutable

//arr.1 - error
//숫자로 들어간 값은 대고라호로 호출할 수 있고
//length는 문자입니다. 문자로 입력된 값은 .을 찍어서 호출할 수 있습니다.
arr[1]
arr.length
arr['length']
//두개가 같은 이야기 입니다.

// 아래 두개는 이렇게 set하는 명령어
arr.length = 10
arr[0] = 100

//프로퍼티를 추가하는 것도 가능합니다.
arr['nayeong'] = 100
arr.ny = 1000

//베열의 특징

// let arr = [];
// let arr = [1, 2, 3];
// let arr2 = new Array(4, 5, 6);
// let arr2 = new Array(3);
Array(100).fill(0) //0으로 100개의 데이터를 가진 arr

//1. 배열에는 순서가 있다. 배열의 순서를 index, 이 순서로 호출하는 것을 indexing이라고 한다. 배열안의 값을 원소(elements)라고 하ㄴ다.
const arr = [10, 20, 30]
arr[0] = 100

//2. 배열에 다른 원시 타입과, 객체타입을 포함할 수 있다. 
const arr2 = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(arr2[0]); //[1, 2]
console.log(arr2[2][1]); //6

//--------------------------
// 1차원, 2차원, 3차원, 다차원
const a = 10 //스칼라
const b = [1, 2, 3] //벡터(차원이 있다) 
const c = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
] //메트릭스
const d = [
    [
        [1, 2],
        [1, 2],
        [1, 2]
    ],
    [
        [1, 2],
        [1, 2],
        [1, 2]
    ],
    [
        [1, 2],
        [1, 2],
        [1, 2]
    ]
] //텐서(3차원 이상의 다차원)
//그렇기에 인공지능 중 가장 유명한 라이브러리 텐서플로우는 결국 다차원 행열의 연산입니다.

//--------------------------

// push 실무 예제
// let tableBodyData = []
//     for (const iterator of data) {
//         tableBodyData.push(`          
//             <tr>
//                 <td>${iterator['a']}</td>
//                 <td>${iterator['b']}</td>
//                 <td>${iterator['c']}</td>
//                 <td>${iterator['d']}</td>
//                 <td>${iterator['e']}</td>
//                 <td>${iterator['f']}</td>
//             </tr>
//         `)
//     }
//     document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('')

// push 
// 배열의 끝에 값을 추가한다
const arr7 = [1, 2, 3];
arr7.push(5);
console.log(arr7); // [ 1, 2, 3, 5 ]


// pop
//마지막에서 값을 꺼내고, 그 값을 반환한다.
const arr = [1, 2, 3, 4, 5]
let lastValue = arr.pop() //5
arr // [1,2,3,4]


// unshift
// 배열 앞에 값을 추가한다
let myArray1 = ['사과', '바나나', '수박']
myArray1.unshift('망고', '레몬');
myArray1

// shift
// 앞에서 값을 꺼내고, 꺼낸 값을 반환한다.
let myArray2 = ['사과', '바나나', '수박']
let firstValue = myArray2.shift();
firstValue // 사과
console.log(myArray2) // 바나나, 수박



// 문제 
// push -  배열의 맨 뒤에 값을 추가 
// pop - 배열의 마지막 값을 꺼내고 그값을 반환
// unshift -  배열의 맨앞 부분에 값을 추가 
// shift -  배열의 맨앞 값을 꺼내고 그 값을 반환 


//---------------------
//arr.splice(start, deleteCount, items)
const arr = [1, 2, 3]
arr.splice(1, 0, 4); //arr에 1번째에, 아무것도 삭제하지않고, 4를 넣겠다.

const arr = [1, 2, 3]
arr.splice(1, 0, [10, 20, 30]); //arr에 1번째에, 아무것도 삭제하지않고, [10,20,30] 배열을 넣겠다.

const arr = [1, 2, 3]
arr.splice(1, 0, ...[10, 20, 30]); //arr에 1번째에, 아무것도 삭제하지않고, 10,20,30을 넣겠다.


//문제1
const arr = [10, 20, 30, 40, 50]
const x = [1, 2, 3]
arr.splice(1, 0, ...x);
arr.splice(-1, 0, ...x); //마이너스 인덱스 가능!
// arr.splice(7,0,...x); 


const arr = [10, 20, 30, 40, 50]
arr.splice(2, 1, 5) ///arr에 2번째에, 1개를 삭제하고, 5를 넣는다
//[10,20,5,40,50]

// arr.splice().splice()
// 매서드 체이닝이 의도한 대로 안되는 이유는 splice는 arr이 아니라 삭제된 값을 반환

const arr = [10, 20, 30, 40, 50]
arr.splice(2, 2); // 2번째 인덱스에서 값 2개를 삭제한다. 삽입되는 값은 없다.
arr

const arr = [10, 20, 30, 40, 50]
arr.splice(1) //10만 남은 arr / 1번째부터 뒤로 다 삭제
arr

const arr = [10, 20, 30, 40, 50]
arr.splice(2) // 2번째(30)부터 뒤로 다 삭제
arr

//----------------------
// arr.slice(start,end)
const myArray = ['사과', '바나나', '토마토', '귤', '오렌지', '체리']
myArray.slice(1, 4) //인덱스 1부터 4 앞까지 (바나나 토마토 귤)
myArray // 기존 배열에는 영향 없음

myArray.slice(1) // 인덱스 1부터 끝까지 (바나나 ~ 체리)
myArray.slice(0, 100) // 전부다 들어가 있음

//-------------------
// arr.forEach(함수)

// arr 각각의 값을 순회하먄서 함수를 각각 마다 실행
//함수 (callbackfn): (value: number, index: number, array: number[]

const arr = [1, 2, 3, 4, 5]
arr.forEach(function (item, index) {
    console.log(index, item);
})

arr.forEach(function (item, index, arr) {
    console.log(index, item, arr);
    console.log('hello');
    console.log('world');
})


// 실무에 사용하지는 않는 방법 - 1부터 100의 요소를 가진 어레이 arr3생성
const arr = Array(100).fill(0)
const arr3 = []

arr.forEach(function (item, index) {
    arr3.push(index + 1);
})

// 같은 코드1
arr.forEach(function (item, index) {
    arr3.push(index + 1);
})
// 같은 코드2
arr.forEach((item, index) => {
    arr3.push(index + 1);
})
// 같은 코드3 (주로 이렇게 실무에서 사용)
arr.forEach((item, index) => arr3.push(index + 1))

//이전에 진행했던 코드
fetch('http://test.api.weniv.co.kr/mall')
    .then(data => data.json())
    .then(data => {
        data.forEach(item => {
            console.log('http://test.api.weniv.co.kr/' + item.thumbnailImg)
            console.log(item.productName)
            console.log(item.price)
        })
    })

//https://caniuse.com/?search=forEach
//nodeList에서 forEach와 Array에서 forEach는 다르다
//nodeList에서 forEach는 익스플로러에 지원하지 않는다.

const avengers = ['spiderman', 'ironman', 'hulk', 'thor'];

const newAvengers = [];
avengers.forEach(function (item) {
    newAvengers.push('💖' + item + '💖');
});


//------------------
//map() 
//면접 질문 많이 나온다. 데이터를 뽑으려고 많이 사용합니다.
// map은 forEach와 다르게 새로운 배열을 생성!!

const arr = [1, 2, 3];

arr.map(function (item, index) {
    return item ** 2;
});

arr.map(function (x) {
    return x ** 2;
});

//주로 사용하는 방식
arr.map((x) => x ** 2);


// 1부터 100까지의 값을 담은 배열을 만드는 방법 - map을 사용해서
const arr = Array(100).fill(0)

//같은코드1
arr.map((v, i) => i)
//같은코드2
arr.map(function (v, i) {
    return i
})



//------------------
//실무팁*****

let tip1 = [1, 2, 3, 4, 5]
// console.log(tip1[tip1.length-1])
//원본 수정없이 [1,2,3,4] 값과 5라는 값을 얻어내고 싶을 떄
console.log([...tip1].pop())
let tip2 = [...tip1]
console.log(tip2.pop())
console.log(tip2) // 1,2,3,4]


//배열 연결하기
let tip3 = [1, 2, 3, 4, 5]
let tip4 = [10, 20, 30, 40, 50]
console.log([...tip3, 1000, ...tip4])

//다차원 배열에서 최솟값,최댓값 찾기 ! ! 
const tip5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
Math.max(...tip5.flat())
Math.min(...tip5.flat())

const tip6 = [
    [
        [1, 2],
        [1, 2],
        [1, 2]
    ],
    [
        [1, 2],
        [1, 2],
        [1, 2]
    ],
    [
        [1, 2],
        [1, 2],
        [1, 2]
    ]
]
tip6.flat(1)
tip6.flat(2) //2차원까지 까기
tip6.flat(Infinity) //몇겹이든 상관없이 끝까지 까기 (다 펼쳐지면 stop)


const tip7 = new Array(10).fill(0) // Array(10).fill(0)도 된다.


// 문자열 잘라서 배열 만들기
const tip8 = Array.from('hello world')
tip8 // ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

// '.'.repeat(100).split('.') // 권하진 않습니다.


//3가지가 같은 기능
//1
let tip9 = [1, 2, 3, 4, 5]
console.log([tip9.slice(0, 2), 1000, tip9.slice(2, 5)])
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)])
//전개구문을 통해서 풀어서 넣어주기

//2 
let tip10 = [1, 2, 3, 4, 5]
tip10.splice(2, 0, 1000)
tip10 //같지만 tip10 자체가 바뀜!

//3 map으로 만드는 방법 
const tip11 = Array(100).fill(0).map((v, i) => i + 1)


//나이 구하기
const tip12 = [{
            "_id": "642ba487c6ccab188ad271e9",
            "index": 0,
            "age": 39,
            "eyeColor": "brown",
            "name": "Jeannie Hall",
            "gender": "female",
            "company": "NETERIA"
        },
        {
            "_id": "642ba4875c6755bbf48aea2f",
            "index": 1,
            "age": 31,
            "eyeColor": "blue",
            "name": "Daisy Cox",
            "gender": "female",
            "company": "ARCTIQ"
        },
        {
            "_id": "642ba4871ba701260ba5fc41",
            "index": 2,
            "age": 30,
            "eyeColor": "blue",
            "name": "Hill Diaz",
            "gender": "male",
            "company": "ORONOKO"
        },
    ]


//askup - 카톡으로 챗gpt

const ages1 = tip12.map((item) => item.age);
const ages2 = tip12.map((item) => {
    return item.age
});
console.log(ages1, ages2);