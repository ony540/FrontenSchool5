const container = document.querySelector('#root');

// api 주소는 바뀌지 않을 것 - 대문자로 변수 지정
// 환경변수 - 숨겨야함
const NEWSLIST_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/news/$id.json';

//현재사용자가 보고있는 페이지의 정봐와 화면에 보여질 아이템의 개수를 저장하는 객체
const store = {
    currentPage: 1,
    datasPerPage: 10,
}

// api 데이터 받아오는 함수
// 이 함수도 async 함수이기때문에 이걸 실행하는 함수도 as- awai- 붙여서 비동기처리를 해야함 
async function getData(url) {
    try {
        // const response = fetch(url);
        // console.log(response) // async await을 안하면 지금은 pending상태의 Promise 객체 (동기로 처리하면 안됨 비동기로 처리하기!) 
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('네트워크에 문제가 있습니다.');
        }
        return response.json();
    } catch (error) {
        console.log(error);
    }
}


async function newsFeed() {
    const newsFeed = await getData(NEWSLIST_URL);
    const totoalPages = Math.ceil( newsFeed.length / store.datasPerPage) ; //올림
    console.log(newsFeed);
    const newsList = [];

    newsList.push('<ul>');

    for (let i = (store.currentPage-1) * store.datasPerPage; i < store.currentPage * store.datasPerPage; i++) {
        newsList.push(`
            <li>
                <a href="#/detail/${newsFeed[i].id}">${newsFeed[i].title}(${newsFeed[i].comments_count})</a>
            </li>
        `);
    }

    newsList.push('</ul>');

    let pageList =``;
    for(let i = 0; i < totoalPages; i++){
        pageList += `<li><a href='#/page/${i+1}'>${i + 1}</a></li>`
    }

    newsList.push(
        `<nav>
        <ul>
        ${pageList}
        </ul>
        </nav>`
    )
    container.innerHTML = newsList.join('');
}

// 뉴스 디테일 페이지 구성 함수
async function newsDetail() {
    const id = location.hash.substring(9); //id번호 뒤에 잘라서 가져오기
    const newsContent = await getData(CONTENT_URL.replace('$id', id)) //id를 주소에 넣기

    container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div><a href="#/page/${store.currentPage}">목록으로 돌어가기</a></div>
    `;
}

//라우터 : 화면을 중개하는 함수
function router() {
    const routePath = location.hash;

    if (routePath === '') {
        newsFeed(); //기본화면
    } else if(routePath.includes('#/page/')) { //이문자열이 있으면
        store.currentPage = parseInt(routePath.substring(7));
        console.log(store.currentPage)
        // 여기 뭐 있는 듯 확인
    }else {
        newsDetail(); //뭔가 있으면 바꿔라
    }
}

window.addEventListener('hashchage', router);

router();