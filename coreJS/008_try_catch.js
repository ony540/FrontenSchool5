//에러 없는 예시 1,2 만 실행
try {
    alert("try 블록 시작"); // (1)

    // ...에러가 없습니다.

    alert("try 블록 끝"); // (2)
} catch (err) {
    alert("에러가 없으므로, catch는 무시됩니다."); // (3)
}


//에러 있는 예시 1,3만 실행
try {
    alert("try 블록 시작"); // (1)

    lalala; // 에러, 변수가 정의되지 않음!

    alert("try 블록 끝(절대 도달하지 않음)"); // (2)
} catch (err) {
    alert(`에러가 발생했습니다!`); // (3)
}

// try..catch는 동기적으로 동작합니다.
//비동기 함수안에 에러가 있어도 잡아내지 못한다!
try {
    setTimeout(function () {
        noSuchVariable; // 스크립트는 여기서 죽습니다.
    }, 1000);
} catch (e) {
    alert("작동 멈춤");
}

//스케줄 된 함수 내부의 예외를 잡으려면, try..catch를 반드시 함수 내부에 구현해야 합니다.
setTimeout(function () {
    try {
        noSuchVariable; // 이제 try..catch에서 에러를 핸들링 할 수 있습니다!
    } catch {
        alert("에러를 잡았습니다!");
    }
}, 1000);

// 에러객체
try {
    lalala; // 에러, 변수가 정의되지 않음!
} catch (err) {
    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
    alert(err.stack); // ReferenceError: lalala is not defined at ... (호출 스택)

    // 에러 전체를 보여줄때 에러 객체는 "name: message" 형태의 문자열로 변환
    alert(err); // ReferenceError: lalala is not defined
}
/*
name
에러 이름. 정의되지 않은 변수 때문에 발생한 에러라면 "ReferenceError"가 이름이 됩니다.

message
에러 상세 내용을 담고 있는 문자 메시지

stack
현재 호출 스택. 에러를 유발한 중첩 호출들의 순서 정보를 가진 문자열로 디버깅 목적으로 사용됩니다.
 */

//실사용예제
let json = "{ bad json }";

try {
    let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
    alert(user.name); // 이 코드는 동작하지 않습니다.
} catch (e) {
    // 에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
    alert("데이터에 에러가 있어 재요청을 시도합니다.");
    alert(e); //SyntaxError : Expected property name or '}' in JSON at position 2
}

//직접 에러를 만들어서 던지기

//‘throw’ 연산자

/**
 * 에러 객체에 name과 message 프로퍼티를 넣어주는 것을 권장합니다.

자바스크립트는 Error, SyntaxError, ReferenceError, TypeError등의 표준 에러 객체 관련 생성자를 지원합니다. 이 생성자들을 이용해 에러 객체를 만들 수도 있습니다.
    신텍스 에러 - 언어 사양을 따르지 않는 코드 ex- { 빼먹기
    레퍼런스 에러 - 변수값 미정  ex- ~~ is undefined
    타입 에러 -  함수 또는 변수의 값이 예상치 못한 유형 ex- sharks.map is not a function
 */
let error = new Error(message);
// or
let error = new SyntaxError(message);
let error = new ReferenceError(message);

//--------
let json = '{ "age": 30 }'; // 불완전한 데이터 (name 프로퍼티가 없다)

try {
    let user = JSON.parse(json);
    //name 프로퍼티가 없으면 오류 만들어서 던지기
    if (!user.name) {
        throw new SyntaxError("불완전한 데이터: name 없음");
    }
    alert(user.name);
} catch (e) {
    alert("JSON Error: " + e.message); // JSON Error: 불완전한 데이터: name 없음
}

//에러 다시 던지기

/**
 * 에러 종류와 관계없이 동일한 방식으로 에러를 처리하는 것은 디버깅을 어렵게 만들기 때문에 좋지 않습니다.
 * catch는 알고 있는 에러만 처리하고 나머지는 ‘다시 던져야’ 합니다.
 * 
 * catch가 모든 에러를 받습니다.
catch(err) {...} 블록 안에서 에러 객체 err를 분석합니다.
에러 처리 방법을 알지 못하면 throw err를 합니다.
보통 에러 타입을 instanceof 명령어로 체크합니다.

구태여 이렇게.?
 */

let json = '{ "age": 30 }'; // 불완전한 데이터
function readData() {
    try {
        let user = JSON.parse(json);

        if (!user.name) {
            throw new SyntaxError("불완전한 데이터: 이름 없음");
        }

        blabla(); // 예상치 못한 에러

        alert(user.name);
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert("JSON Error: " + e.message);
        } else {
            throw e; // 에러 다시 던지기 (*)
        }
    }
}

try {
    readData();
} catch (e) {
    alert("External catch got: " + e); // 에러를 잡음
}

//트라이캐치파이널리
/*
finally안의 코드는 다음과 같은 상황에서 실행됩니다.

에러가 없는 경우: try 실행이 끝난 후
에러가 있는 경우: catch 실행이 끝난 후
*/

try {
    console.log("try 블록 시작");
    if (confirm("에러를 만드시겠습니까?")) 이상한_코드();
} catch (e) {
    console.log("catch");
} finally {
    console.log("finally");
}
/*
"에러를 만드시겠습니까?"에 'OK’로 답한 경우: try -> catch -> finally
'No’로 답한 경우: try -> finally

finally 절은 무언가를 실행하고, 실행 결과에 상관없이 실행을 완료하고 싶을 경우 사용됩니다.
 */



/*
finally 와 return
finally 절은 try..catch 절을 빠져나가는 어떤 경우에도 실행됩니다
return을 사용해 명시적으로 빠져나가려는 경우도 마찬가지!
*/
function func() {
    try {
        return 1;
    } catch (e) {
        /* ... */
    } finally {
        alert("finally");
    }
}

alert(func()); // finally 안의 alert가 실행되고 난 후, 실행됨

/**
 * finally 아니면 코드만?  차이점
 * 
 * 현재 상황은 에러의 유무와 상관없이, 작업 후 초기화를 해야합니다.

finally를 사용하면 이점이 있을까요? 

 * try..catch에 ‘빠져나오게 하는’ 코드가 있다면 함수의 행동이 달라집니다.
 *  return 이나 throw
 */

function f() {
    try {
        console.log("시작");
        return "결과";
    } catch (e) {
        /// ...
    } finally {
        console.log("초기화!");
    }
}

const result = f();
console.log(result);

//------
function f() {
    try {
        console.log("시작");
        return "결과";
    } catch (e) {
        /// ...
    }
    console.log("초기화!");
}

const result = f();
console.log(result);

//
//----- throw

function f() {
    try {
        console.log("시작");
        throw new Error("에러 발생!");
    } catch (e) {
        /// ...
        if ("에러를 핸들링 할 수 없다면") {
            throw e;
        }
    } finally {
        console.log("초기화!");
    }
}

f();

function f() {
    try {
        console.log("시작");
        throw new Error("에러 발생!");
    } catch (e) {
        /// ...
        if ("에러를 핸들링 할 수 없다면") {
            throw e;
        }
    } 
    console.log("초기화!");
}

f();
