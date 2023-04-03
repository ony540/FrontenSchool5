//https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안된 문법입니다. 구식 브라우저는 폴리필이(최신 문법을 구식 브라우저에서도 사용할 수 있도록) 필요합니다.

let firstName = null;
let lastName = null;
let nickName = 'licat';

console.log(firstName ?? nickName); //licat
console.log(firstName ?? lastName ?? nickName ?? '익명사용자');
//앞에 것이 널이면 뒤의 것을 싱행


let a  = null;
let b  = 10;
let c  = null;
console.log(a ?? b ?? c); //10


// 단락회로평가와 nullish 연산자 차이점
let height = 0;
console.log(height || 100); // 100출력 0을 false로 인식!
console.log(height ?? 100); // 0출력 0은 null이 아니다

let height2;
console.log(height2 || 100) //둘다 100출력
console.log(height2 ?? 100)

let height3 = '';
console.log(height3 || 'hello') //hello 출력
console.log(height3 ?? 'world') // '' 비어있는 height3의 값 출력

// 제가 지금 주석으로 다는 내용은 지금 여기서는 모르셔도 괜찮습니다.
// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined