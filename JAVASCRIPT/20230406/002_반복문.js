//for 반복문

const cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
let text = "";

// text += cars[0] + "<br>";
// text += cars[1] + "<br>";
// text += cars[2] + "<br>";
// text += cars[3] + "<br>";
// text += cars[4] + "<br>";
// text += cars[5] + "<br>";

//위와 같은 기능
for(let i = 0; i < cars.length; i++) {
	text += cars[i] + "<br>";
} 
console.log(text)


for(let i = 0; i < 10; i += 2){ //let을 생략하면 안된다. 전역으로 선언되어버림
    console.log(i)
}