//UI에 보이는 벨류
class ViewManager {
    //txt가 있는 클래스, 옵션
    constructor(textManager, options) {
        if (textManager.constructor !== TextManager) {
            throw Error("올바른 textManager 객체가 전달되지 않았습니다.");
        }

        if (!options.btnEl || !options.viewerEl || !options.inpTxt) {
            throw Error("전달받지 못한 요소가 존재합니다!");
        }

        this.textManager = textManager;
        this.inpTxt = options.inpTxt;
        this.viewerEl = options.viewerEl;

        //옵션으로 받은 버튼요소를 클릭하면 벨류를 바꾸는 함수 실행
        options.btnEl.addEventListener("click", () => {
            this.changeValue();
        })
    }

    //텍스트메니저클래스의 벨류를 인풋으로 받은 벨류로 지정
    changeValue() {
        this.textManager.setValue({ data: this.inpTxt.value });
        this.updateView();
    }

    //뷰 업데이트하기
    updateView() {
        //텍스트메니저의 벨류를 보여지는 곳의 텍스트컨텐츠로 넣기
        this.viewerEl.textContent = this.textManager.getValue();
    }
}