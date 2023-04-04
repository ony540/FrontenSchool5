const x = 10;
const y = 20;

console.log('x값은 10이고 y값은 20이고 두개를 곱한 값은 200입니다.')
console.log('x값은 '+x+'이고 y값은 '+y+'이고 두개를 곱한 값은 '+x*+'입니다.')
console.log(`x값은 ${x}이고 y값은 ${y}이고 두개를 곱한 값은 ${x*y}입니다.`) 
//템플릿 리터럴 중괄호 안에 연산을 넣는 것은 권하지 않습니다.


const x2 = 10;
const y2 = 20;
const result = x2 * y2

console.log(`x값은 ${x}이고 y값은 ${y}이고 두개를 곱한 값은 ${result}입니다.`) 


// 템플릿 리터럴 - 줄바꿈 가능
console.log(`h
e
l
l
o
`) 

//단점을 '굳이' 뽑자면...
if (true){
    if(true){
        if(true){
            console.log(`h
e
l
l
o
`) //이렇게 해야 원하는대로 나오고 단을 맞추면 뒤로 밀려서 나온다
        }
    }
}