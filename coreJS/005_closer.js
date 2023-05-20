//코드 블록
//코드 블록 {...} 안에서 선언한 변수는 블록 안에서만 사용

// 지역 변수를 선언하고 몇 가지 조작을 했지만 그 결과를 밖에서 볼 수 없습니다.
// 블록 내에서만 변숫값을 얻을 수 있습니다.
{
    let message = "안녕하세요.";  
    alert(message); // 안녕하세요.
  }
  
  alert(message); // ReferenceError: message is not defined

  //if, for, while 등에서도 마찬가지로 {...} 안에서 선언한 변수는 오직 블록 안에서만 접근 가능합니다.

  //중첩 함수
// 함수 내부에서 선언한 함수는 ‘중첩(nested)’ 함수라고 부릅니다.
function sayHiBye(firstName, lastName) {

    // 헬퍼(helper) 중첩 함수
    function getFullName() {
      return firstName + " " + lastName;
    }
  
    alert( "Hello, " + getFullName() );
    alert( "Bye, " + getFullName() );
  
  }
/**
 *makeCounter는 호출될 때마다 다음 숫자를 반환해주는 ‘카운터’ 함수

 그런데 makeCounter를 살펴보다 보면 “counter를 여러 개 만들었을 때, 이 함수들은 서로 독립적일까? 함수와 중첩 함수 내 count 변수엔 어떤 값이 할당될까?” 같은 의문이 들기 마련입니다.
 */


function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  alert( counter() ); // 2

  // Lexical Environment 
  /**
   * 실행 중인 함수, 코드 블록 {...}, 스크립트 전체는 렉시컬 환경(Lexical Environment) 이라 불리는 내부 숨김 연관 객체(internal hidden associated object)를 갖습니다.
   */

  let phrase = "Hello";

  if (true) {
    let user = "John";
  
    function sayHi() {
      alert(`${phrase}, ${user}`);
    }
  }
  
  sayHi(); //에러발생

  /**
  에러가 발생합니다.

sayHi는 if문 안에서 정의했기 때문에, 오직 if문 안에서만 접근할 수 있습니다. if문 밖엔 sayHi가 없습니다.
  */

//뉴펑션

let func = new Function ([arg1, arg2, ...argN], functionBody);

//
let sum = new Function('a', 'b', 'return a + b');

alert( sum(1, 2) ); // 3

// 동ㅇ일한 방식
new Function('a', 'b', 'return a + b'); // 기본 문법
new Function('a,b', 'return a + b'); // 쉼표로 구분
new Function('a , b', 'return a + b'); // 쉼표와 공백으로 구분


// 기존에 사용하던 방법과 new Function을 사용해 함수를 만드는 방법의 가장 큰 차이는 런타임에 받은 문자열을 사용해 함수를 만들 수 있다는 점입니다.
//서버에서 전달받은 문자열을 이용해 새로운 함수를 만들고 이를 실행하는 것도 가능합니다.

let str = ... 서버에서 동적으로 전달받은 문자열(코드 형태) ...

let func = new Function(str);
func();

//서버에서 코드를 받거나 템플릿을 사용해 함수를 동적으로 컴파일해야 하는 경우, 복잡한 웹 애플리케이션을 구현할 때와 같이 아주 특별한 경우에 new Function을 사용할 수 있습니다.


//클로저
//new Function을 이용해 함수를 만들면 함수의 [[Environment]] 프로퍼티가 현재 렉시컬 환경이 아닌 전역 렉시컬 환경을 참조하게 됩니다. ! !  따라서 new Function을 이용해 만든 함수는 외부 변수에 접근할 수 없고, 오직 전역 변수에만 접근할 수 있습니다.

function getFunc() {
    let value = "test";
  
    let func = new Function('alert(value)');
  
    return func;
  }
  
  getFunc()(); // ReferenceError: value is not defined



function getFunc() {
    let value = "test";
  
    let func = function() { alert(value); };
  
    return func;
  }
  
  getFunc()(); // getFunc의 렉시컬 환경에 있는 값 "test"가 출력됩니다.




//new Function을 이용해 만든 함수의 [[Environment]]는 외부 렉시컬 환경이 아닌 전역 렉시컬 환경을 참조하므로 외부 변수를 사용할 수 없습니다.구조상으로 매개변수를 사용해 값을 받는 게 더 낫습니다. 
