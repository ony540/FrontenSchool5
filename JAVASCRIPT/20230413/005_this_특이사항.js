//이름이 있는 함수 안에서 정의된 함수의 겨웅 this는 전역을 바라보게 됩니다.
const person = {
    name: 'hojun',
    age: 25,
    a(){
        console.log(this);
        console.log(this.name);
        function b() {
            console.log(this);
            console.log(this.name);
            function c() {
                console.log(this);
                console.log(this.name);
            }
            c()
        }
        b()
    }
}
person.a()

// //출력
// {name: 'hojun', age: 25, a: ƒ}
// hojun

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// ''

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// ''


/////////
let a = () => {
    console.log(this);
    console.log(this.name);
    function b() {
        console.log(this);
        console.log(this.name);
        function c() {
            console.log(this);
            console.log(this.name);
        }
        c()
    }
    b()
}
a()

