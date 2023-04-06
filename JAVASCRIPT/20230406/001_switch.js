//객채타입 - 값을 변수에 저장할 때 값 자체가 아닌 값의 위치가 저장된다는 점
//JavaScript는 call by value만 존재하기 때문입니다.
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr2); // 1,2,3

arr1[0] = 10;
console.log(arr2); // 10,2,3 - 바뀐값이 들어옴(배열은 값이아니라 포인터이므로)

// 비교해보세요.
let value1 = 10 //얘도 자리값을 저장하는 것은 똑같다. (다음애 이해하기..)
let value2 = value1
console.log(value2) // 10

value1 = 20
console.log(value2) //10 - 그대로(그 값 그대로를 복붙)


//----------------
//switch

const value = 'two'

switch (value) {
    case 'one':
        console.log('hello one')
        break;
    case 'two':
        console.log('hello two') //결과
        break;
    case 'three':
        console.log('hello three')
        break;
    default:
        console.log('hello default')
        break;
}

///

const value3 = 'four'

switch (value3) {
    case 'one':
        console.log('hello one')
        break;
    case 'two':
        console.log('hello two')
        break;
    case 'three':
        console.log('hello three')
        break;
    default:
        console.log('hello default') //결과
        break;
}

///

//요일 확인하기
switch (new Date().getDay()) {
    case 0:
        console.log('일요일')
        break;
    case 1:
        console.log('월요일')
        break;
    case 2:
        console.log('화요일')
        break;
    case 3:
        console.log('수요일')
        break;
    case 4:
        console.log('목요일')
        break;
    case 5:
        console.log('금요일')
        break;
    case 6:
        console.log('토요일')
        break;
    // 디폴트는 견고한 코드를 위해 써주시는 편이 좋습니다. (디폴트 밑에 있는 break는 빼도 된다)
}

//여러줄 복사하고 싶을 떄에 Alt + shift + 위아래

//다른 언어 switch문 어떻게 사용 python은 없음

const 요일 = new Date().getDay()

//단일객체 사용
const 요일객체 = {
    0:'일요일',
    1:'월요일',
    2:'화요일',
    3:'수요일',
    4:'목요일',
    5:'금요일',
    6:'토요일'
}
console.log(요일객체[요일]); //목요일(오늘 목요일이라서)


//default는 어떻게 처리?
const 요일2 = 10 //10이 디폴트
const 요일객체2 = {
    0:'일요일',
    1:'월요일',
    2:'화요일',
    3:'수요일',
    4:'목요일',
    5:'금요일',
    6:'토요일'
}

//널리쉬 연산자 사용
console.log(요일객체2[요일2] ?? 'hello'); //undefinedeh sjffltnlfktj 이라 뒤에 hello가 결과값

//단락평가 사용
console.log(요일객체2[요일2] || 'hello'); //undefined이라 뒤에 hello가 결과값