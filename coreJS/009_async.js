//async/await를 함께 사용하면 읽고, 쓰기 쉬운 비동기 코드를 작성할 수 있습니다.

//function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환합니다. 프라미스가 아닌 값을 반환하더라도 이행 상태의 프라미스(resolved promise)로 값을 감싸 이행된 프라미스가 반환
//esult가 1인 이행 프라미스가 반환됩니다. 직접 확인해

async function f() {
    return 1;
}

f().then(alert); // 1

//async가 붙은 함수는 반드시 프라미스를 반환하고, 프라미스가 아닌 것은 프라미스로 감싸 반환합니다.

//-----
//await 키워드를 만나면 프라미스가 처리될 때까지 기다립니다(await). 결과는 그 이후 반환됩니다.
async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000);
    });
  
    let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

    console.log(result); // "완료!"
}

f();
//따라서 위 예시를 실행하면 1초 뒤에 '완료!'가 출력됩니다.
//프라미스가 처리되길 기다리는 동안엔 엔진이 다른 일(다른 스크립트를 실행, 이벤트 처리 등)을 할 수 있기 때문에, CPU 리소스가 낭비되지 않습니다.c
//async 함수가 아닌데 await을 사용하면 문법 에러가 발생합니다.

//----
//then 대신에 사용하기
//먼저 .then 호출을 await로 바꿔야 합니다.
// function 앞에 async를 붙여 await를 사용할 수 있도록 해야 합니다.

async function showAvatar() {
    // JSON 읽기 (response 객체를 json화)
    let response = await fetch("/article/promise-chaining/user.json");
    let user = await response.json();

    // github 사용자 정보 읽기
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();

    // 아바타 보여주기
    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // 3초 대기
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    //후에 사라짐
    img.remove();

    return githubUser;
}
showAvatar();

//----
//async 클래스 메서드
//메서드 이름 앞에 async를 추가하면 async 클래스 메서드를 선언할 수 있습니다.

class Waiter {
    async wait() {
        return await Promise.resolve(1);
    }
}

new Waiter().wait().then(alert); // 1

//-------
//에러핸들링

//await가 던진 에러는 throw가 던진 에러를 잡을 때처럼 try..catch를 사용해 잡을 수 있습니다.
//에러가 발생하면 제어 흐름이 catch 블록으로 넘어갑니다. 여러 줄의 코드를 try로 감싸는 것도 가능합니다.
async function f() {
    try {
        let response = await fetch("http://유효하지-않은-주소");
        let user = await response.json();
    } catch (err) {
        // fetch와 response.json에서 발행한 에러 모두를 여기서 잡습니다.
        alert(err);
    }
} 

f();


/**
 * try..catch가 없으면 아래 예시의 async 함수 f()를 호출해 만든 프라미스가 거부 상태가 됩니다. f()에 .catch를 추가하면 거부된 프라미스를 처리할 수 있습니다.
 */
async function f() {
    let response = await fetch("http://유효하지-않은-주소") ;
}

// f()는 거부 상태의 프라미스가 됩니다.
f().catch(alert); // TypeError: failed to fetch // (*)


/**
 * async/await와 promise.then/catch
async/await을 사용하면 await가 대기를 처리해주기 때문에 .then이 거의 필요하지 않습니다. 여기에 더하여 .catch 대신 일반 try..catch를 사용할 수 있다는 장점도 생깁니다. 항상 그러한 것은 아니지만, promise.then을 사용하는 것보다 async/await를 사용하는 것이 대개는 더 편리합니다.
 */