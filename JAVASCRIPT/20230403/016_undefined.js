// undefined은 트루인지 폴스인지 모르기때문에 조건문이 실행되지않는다.
if(undefined){
    console.log('hello')
}//언디파인 - 실행되지않음 

let aa;
if (aa){
    console.log('hello')
} //언디파인  - 실행되지않음 

// 답할 수 있어야 견고한 코드를 짤 수 있습니다.
// 견고한 코드 : 어떤 상황에서도 기능이 무너지지 않는 코드
let aaa;
if (aaa > 100){
    console.log('hello')
} //undefined - 실행되지않음 


let a;
console.log(a);

if (a) {
    // 실행안됨
    console.log('a에 아무것도 할당되지 않았습니다.')
  }

if (typeof a === "undefined") {
    // a가 정의되지 않은 경우에 실행
    console.log('a에 아무것도 할당되지 않았습니다.')
  }

  //위의 코드를 이렇게 줄일 수 있다!
if (!a) {
    // 실행된다 
    console.log('a에 아무것도 할당되지 않았습니다.')
  }
