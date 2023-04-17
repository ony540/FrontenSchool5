let i = 3;
while (i) { // i가 0이 되면 조건이 falsy해져 반복을 멈춥니다.
    alert(i);
    i--;
}

let i = 3;
do {
    alert(i);
    i--;
} while (i);

//사용자가 유효한 값을 입력할 때까지 프롬프트 창 띄우기

let num;

do {
    num = prompt("100을 초과하는 숫자를 입력해주세요.", 0); //0이 기본값
} while (num <= 100 && num);
//&& num 을 함으로서 취소하면 prompt가 없어짐

//for
for (let i = 0; i < 3; i++) { // 0, 1, 2가 출력됩니다.
    alert(i);
}

alert(i); // Error: i is not defined

//소수 출력하기
//소수(prime number)는 자신보다 작은 두 개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수

/*
범위 내 모든 숫자 i에 대해서 {
  1과 i 사이에 제수가 있는지를 확인
  있으면 => 소수가 아님
  없으면 => 소수이므로 출력해줌
}
 */

nextPrime:
    for (let i = 2; i <= n; i++) { // 각 i에 대하여 반복문을 돌림

        for (let j = 2; j < i; j++) { // 제수(나눗수)를 찾음
            if (i % j == 0) continue nextPrime; // 소수가 아니므로 다음 i로 넘어감
        }

        alert(i); // 소수
    }


//break 
let sum = 0;

while (true) {
    let value = +prompt("숫자를 입력하세요.", '');
    if (!value) break; // (*)
    sum += value;
}
alert('합계: ' + sum);

for (let i = 0; i < 10; i++) {

    // 조건이 참이라면 남아있는 본문은 실행되지 않습니다.
    if (i % 2 == 0) continue;
  
    alert(i); // 1, 3, 5, 7, 9가 차례대로 출력됨
  }

// continue;
if (i > 5) {
    alert(i);
} else {
    continue;
}

(i > 5) ? alert(i): continue; // 여기에 continue를 사용하면 안 됩니다.

outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`(${i},${j})의 값`, '');
  
      // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나옵니다.
      if (!input) break outer; // (*)
  
      // 입력받은 값을 가지고 무언가를 함
    }
  }
  alert('완료!');
  

//switch문 -자료형의 중요성
let arg = prompt("값을 입력해주세요.");
switch (arg) {
    case '0':
    case '1':
        alert('0이나 1을 입력하셨습니다.');
        break;

    case '2':
        alert('2를 입력하셨습니다.');
        break;

    case 3:
        alert('이 코드는 절대 실행되지 않습니다!');
        break;
    default:
        alert('알 수 없는 값을 입력하셨습니다.');
}

