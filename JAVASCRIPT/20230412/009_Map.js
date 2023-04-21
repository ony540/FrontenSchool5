//Map 객체는 키-값 쌍을 가지는 객체 자료형의 한 종류입니다.

let m = new Map();

//Map에 값을 넣기 - .set 매서드 사용하기
//문자열, 숫자, 불린값 모두 키가 될 수 있음 (배열이나 객체는 키가 될수는 있지만 변수에 넣어서 설정해야함!! 그 자체로는 X)
m.set('하나', 1) //키와 벨류
m.set(1,'하나')
m.set(true,1)
m.set(false,0)

//Map의 키로 값에 접근하기 - get()
m.get('하나') // 1
m.get(1) // '하나'

//---------
//{[1,2,3]: 100, {'하나':1}: 10} //error

[1,2,3] == [1,2,3] //false래 새로운 배열이다! 메모리주소값이 다름
m.set([1,2,3],'리얼리?')
m.get([1,2,3]) //undefined 여기서 [1,2,3]은 각각 다른 것을 의미함

let x = [1,2,3]
m.set(x,'리얼리?')
m.get(x) //실행됨 x는 같은 것!!
//----------

// Map의 값이 있는지 확인하기 - .has() true
console.log(m.has('하나'));


// Map의 값을 제거하기 - .delete()
console.log(m.delete('하나'));
console.log(m.has('하나'));
console.log(m);

// Map의 크기를 확인하기 .size
console.log(m.size);


/////////////

const data = new Map()
    .set('name', 'hojun')
    .set('age', 10)
    .set('height', 180)

////////////

//iterable한 객체로 쌍으로 이루어져있어야한다. -> map으로 변형가능

let data = new Map([['one', 1], ['two',2]]) // O

//Object.entries ->  key, value 형태의 배열로 변환되어 출력됩니다.
let data = new Map(Object.entries({'one':1, 'two':2})) // O

//객체, 문자열, 배열은 map으로 바로 변환 불가 
//-> 객체는 iterable한 객체가 아니다! ! !

let data = new Map({'one':1, 'two':2}) // X
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X



// 직접 순회가 가능하지 않은 Object!
let data = {'one':1, 'two':2}
for (const i of data) { // X 작동되지 않습니다!
    console.log(i)
}

let data = {'one':1, 'two':2}
for (const i of Object.entries(data)) { 
    console.log(i)
}


// 직접 순회가 가능한 Map! for of 사용 가능
let m = new Map();

m.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)

for (const i of m) {
    console.log(i) //['하나',1] 키와 값을 배열형식으로 반환
}

for (const [key,value] of m) {
    console.log(key,value)
}


// Map의 값에 접근 - MapIterator로 반환
console.log(m.keys()); //MapIterator{'하나', '둘', '셋', '넷'}
console.log(m.values());
console.log(m.entries()); //MapIterator {'하나' => 1, '둘' => 2, '셋' => 3, '넷' => 4}



//object의 단점
let test = {'one':1,'two':2}
Object.keys(test)

//map은 메서드로 모두 호출 가능!
m.keys() // 하나 둘 셋 넷
m.values() // 1 2 3 4
m.entries() //하나 =>1 둘 =>2 셋=>3 넷=>4

// Map -> Object 간의 형변환
let 맵 = new Map(Object.entries({ 'one': 1, 'two': 2 }))
let 오브젝트 = Object.fromEntries(맵)

let map = new Map(); // 키 값의 중복이 안됩니다.
map.set('이호준', 1)
map.set('이호준', 2)
map.set('이호준', 3)

