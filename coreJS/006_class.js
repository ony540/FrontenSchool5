//클래스 기본문법

// class MyClass {
//     // 여러 메서드를 정의할 수 있음
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...
//   }

//객체 지향 프로그래밍에서 특정 객체를 생성하기 위해 변수와 메소드를 정의하는 일종의 틀.
// 객체를 정의하기 위한 상태(멤버 변수)와 메서드(함수)로 구성된다
class User {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        alert(this.name);
    }
}

// 사용법:
let user = new User("John");
user.sayHi();

/*
new User("John")를 호출하면 다음과 같은 일이 일어납니다
새로운 객체(인스턴스)가 생성됩니다.
넘겨받은 인수와 함께 constructor가 자동으로 실행됩니다. 이때 인수 "John"이 this.name에 할당됩니다.
 */

// User가 함수라는 증거
alert(typeof User); // function

/*
class User {...} 문법 구조가 진짜 하는 일은 다음과 같습니다.


constructor의 코드를 본문으로 갖는 User라는 함수를 생성한다
sayHi같은 클래스 내에서 정의한 메서드를 User.prototype에 저장합니다.
 */

//단순 생성자 함수와 차이

/*
3. 클래스는 항상 엄격 모드로 실행됩니다(use strict). 클래스 생성자 안 코드 전체엔 자동으로 엄격 모드가 적용됩니다.
 */

//클래스 표현식 (함수 표현식처럼)

let User = class {
    sayHi() {
        alert("안녕하세요.");
    }
};

//----
//리터럴을 사용해 만든 객체처럼 클래스도 getter나 setter, 계산된 프로퍼티(computed property)를 지원
//getter와 setter는 User.prototype에 정의됩니다.

class User {
    //생성자 메서드
    constructor(name) {
        // setter를 활성화합니다.
        this.name = name;
    }

    //getter 메서드 - 획득
    get name() {
        return this._name;
    }

    //setter 메서드 - 지정
    set name(value) {
        if (value.length < 4) {
            alert("이름이 너무 짧습니다.");
            return;
        }
        this._name = value;
    }
}

let user = new User("보라");
alert(user.name); // 보라

user = new User(""); // 이름이 너무 짧습니다.

//대괄호를 이용하여 계산된 메서드 이름 […]

class User {
    //이런식으로 해도 가능!!
    ["say" + "Hi"]() {
        alert("Hello");
    }
}

new User().sayHi();

//---------
//클래스 필드(class field)'라는 문법을 사용하면 어떤 종류의 프로퍼티도 클래스에 추가할 수 있다 (구식에서는 안될 수도)
class User {
    // constructor 안이 아닌 그냥 밖에 '<프로퍼티 이름> = <값>'
    name = "보라";

    //아울러 클래스 필드엔 복잡한 표현식이나 함수 호출 결과를 사용할 수 있습니다.
    prColor = prompt("좋아하는 색상을 알려주세요.", "연두");
}

let user = new User(); //이떄 promt 나옴
alert(user.name); // 보라
alert(User.prototype.name); // undefined
alert(user.prColor); // 연두

//클래스 필드로 바인딩 된 메서드 만들기 (동적인 this 문제 해결 -  메서드를 이벤트 리스너로 설정해야 할 때 특히 유용합니다.)
class Button {
    constructor(value) {
        this.value = value;
    }
    // click() {
    //     alert(this.value);
    //   }

    click = () => {
        alert(this.value);
    };
}

let button = new Button("안녕하세요.");

// setTimeout(button.click, 1000); // undefined
// setTimeout(button.click, 1000); // 안녕하세요.

//각 Button 객체마다 독립적인 함수를 만들어주고 이 함수의 this를 해당 객체에 바인딩시켜줍니다. 따라서 개발자는 button.click을 아무 곳에나 전달할 수 있고, this엔 항상 의도한 값이 들어가게 됩니다.
