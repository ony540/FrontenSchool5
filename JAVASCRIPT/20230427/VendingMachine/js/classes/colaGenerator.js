class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.section1 .cola-list');
    }

    async setup() {
        const response = await this.loadData();
        this.colaFactory(response);
    }

    //데이터 가져오기
    async loadData() {
        try {
            const response = await fetch('./items.json');

            if (response.ok) { // 서버의 응답 코드가 200 ~ 299 일 경우
                return response.json();
            } else {
                throw new Error(response.status);
            }
        } catch (error) {
            console.log(error);
        }
    }

    //자판기 내 콜라 넣기
    colaFactory(data) {
        const docFrag = document.createDocumentFragment(); //단편적인 부분을 정의할 수 있는 노드, HTML의 DOM 트리에는 영향을 주지 않으며, 메모리에서만 정의 "미니돔"
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `
            <button class="btn-cola" type="button" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img class="cola-img" src="./img/${el.img}" alt="">
                <span class="cola-name">${el.name}</span>
                <strong class="cola-price">${el.cost}원</strong>
            </button>
            `;

            item.innerHTML = itemTemplate;
            docFrag.append(item);
            //body에 추가하면 DocumentFragment에는 남아있는 내용이 없다
            //DocumentFragment에 변경이 일어나도 Reflow나 Repaint가 일어나지 않는다 (DOM에 반영하기 전까지는 메모리상에서만 존재)
        })
        this.itemList.append(docFrag);
    }
}

export default ColaGenerator;