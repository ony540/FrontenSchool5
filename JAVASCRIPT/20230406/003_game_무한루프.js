//홀짝게임
let answer = Math.floor(Math.random() * 100);
//~~(Math.random()*100)
//random은 seed라는 값을 주면 동일한 랜덤값이 나오는 수식입니다.
let count = 0

for (;;) {
    let userInput = parseInt(window.prompt('값을 입력해주세요'))
    if (answer > userInput) {
        window.alert('UP')
    } else if (answer < userInput) {
        window.alert('DOWN')
    } else if (Number.isNaN(userInput)) {
        window.alert('다시 입력하세요!')
    } else {
        window.alert('Correct!')
        break
    }
    count += 1;
}

console.log(`${count}번째에 맞추셨습니다`);