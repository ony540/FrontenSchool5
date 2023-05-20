//클래스 애니멀

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        alert(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
    }
    stop() {
        this.speed = 0;
        alert(`${this.name} 이/가 멈췄습니다.`);
    }
}

let animal = new Animal("동물");

//클래스 레빗 (상속받기)
class Rabbit extends Animal {
    hide() {
        alert(`${this.name} 이/가 숨었습니다!`);
    }
}

let rabbit = new Rabbit("흰 토끼");

rabbit.run(5); // 흰 토끼 은/는 속도 5로 달립니다.
rabbit.hide(); // 흰 토끼 이/가 숨었습니다!

// extends는 Rabbit.prototype.[[Prototype]]을 Animal.prototype으로 설정합니다. 그렇기 때문에 Rabbit.prototype에서 메서드를 찾지 못하면 Animal.prototype에서 메서드를 가져옵니다.
//엔진은 다음 절차를 따라 메서드 rabbit.run의 존재를 확인합니다(그림을 아래부터 보세요).
/*
객체 rabbit에 run이 있나 확인합니다. run이 없네요.
rabbit의 프로토타입인 Rabbit.prototype에 메서드가 있나 확인합니다. hide는 있는데 run은 없습니다.
extends를 통해 관계가 만들어진 Rabbit.prototype의 프로토타입, Animal.prototype에 메서드가 있나 확인합니다. 드디어 메서드 run을 찾았습니다.
*/

//------------------
//메서드 오버라이딩 super
//Rabbit에서 stop() 등의 메서드를 자체적으로 정의하면, 상속받은 메서드가 아닌 자체 메서드가 사용됩니다.
// 개발을 하다 보면 부모 메서드 전체를 교체하지 않고, 부모 메서드를 토대로 일부 기능만 변경

/**
 * super.method(...)는 부모 클래스에 정의된 메서드, method를 호출합니다.
super(...)는 부모 생성자를 호출하는데, 자식 생성자 내부에서만 사용 할 수 있습니다.
 */

//다른거는 그대로 받고 / hide 메서드 추가하고 / super.stop())으로 stop메서드에서 부모 stop 가져와서 기능 더 추가
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        alert(`${this.name}가 속도 ${this.speed}로 달립니다.`);
    }

    stop() {
        this.speed = 0;
        alert(`${this.name}가 멈췄습니다.`);
    }
}

class Rabbit extends Animal {

    //생성자 오버라이딩 
    constructor(name, earLength) {
        //super안해도 speed값 사용가능
        //Animal에도 있는 name을 Rabbit에서도 인자로 받아서 쓰려면 super(name)으로 상속을 받아야만 사용가능!!
        super(name);
        //새로운 생성자 추가
        this.earLength = earLength;
    }

    hide() {
        alert(`${this.name}가 숨었습니다!`);
    }

    stop() {
        super.stop(); // 부모 클래스의 stop을 호출해 멈추고,
        this.hide(); // 숨습니다.
    }
}

let rabbit = new Rabbit("흰 토끼");

rabbit.run(5); // 흰 토끼가 속도 5로 달립니다.
rabbit.stop(); // 흰 토끼가 멈췄습니다. 흰 토끼가 숨었습니다!

//setTimeout안에서는 super를 그냥함수로는 사용할 수 없다 -> 화살표함수
class Rabbit extends Animal {
    stop() {
        //화살표함수로 super 쓰기
        setTimeout(() => super.stop(), 1000); // 1초 후에 부모 stop을 호출합니다.

        //오류발생 Unexpected super
        setTimeout(function () {
            super.stop();
        }, 1000);
    }
}

//생성자 오버라이딩 - 위에 올라가서 확인하세용
let rabbit = new Rabbit("흰 토끼",10);

console.log(rabbit.speed) //speed도 출력가능
alert(rabbit.name); // 흰 토끼
alert(rabbit.earLength); // 10