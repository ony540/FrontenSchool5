/*
첫 번째 종류는 데이터 프로퍼티(data property) 입니다. 지금까지 사용한 모든 프로퍼티는 데이터 프로퍼티입니다. 데이터 프로퍼티 조작 방법에 대해선 모두 알고 계실 것이라 생각합니다.

두 번째는 접근자 프로퍼티(accessor property) 라 불리는 새로운 종류의 프로퍼티입니다. 
접근자 프로퍼티의 본질은 함수인데, 
이 함수는 값을 획득(get)하고 설정(set)하는 역할을 담당합니다. 
그런데 외부 코드에서는 함수가 아닌 일반적인 프로퍼티처럼 보입니다.
 */

let user = {
    name: "John",
    surname: "Smith",

    //getter (값을 얻다) - user.fullName을 실행할 때 실행되는 코드
    get fullName() {
        return `${this.name} ${this.surname}`;
    },

    //setter (값을 설정하다) - user.fullName = value를 실행할 때 실행되는 코드
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
};

alert(user.fullName); // John Smith

// 주어진 값을 사용해 set fullName이 실행됩니다.
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper

//----- getter와 setter 똑똑하게 활용하기
let user = {
    get name() {
        return this._name;
    },

    set name(value) {
        if (value.length < 4) {
            alert("입력하신 값이 너무 짧습니다. 네 글자 이상으로 구성된 이름을 입력하세요.");
            return;
        }
        this._name = value;
    },
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // 너무 짧은 이름을 할당하려 함

/*
user의 이름은 _name에 저장되고, 프로퍼티에 접근하는 것은 getter와 setter를 통해 이뤄집니다.

기술적으론 외부 코드에서 user._name을 사용해 이름에 바로 접근할 수 있습니다. 그러나 밑줄 "_" 로 시작하는 프로퍼티는 객체 내부에서만 활용하고, 외부에서는 건드리지 않는 것이 관습입니다.
그냥 name으로 외부에서 사용하자 
*/

//-------
//age를 위한 getter를 추가해서 문제를 해결해 봅시다.
function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // age는 현재 날짜와 생일을 기준으로 계산됩니다.
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        },
    });
}

let john = new User("John", new Date(1992, 6, 1));

// 생성자 함수를 수정하면 기존 코드 중 프로퍼티 age를 사용하고 있는 코드도 수정해 줘야 합니다.
alert(john.birthday); // birthday를 사용할 수 있습니다.
alert(john.age); // age 역시 사용할 수 있습니다.
