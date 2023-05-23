describe('클릭이벤트가 일어나면 데이터를 가져와서 화면에 뿌려주는 클래스입니다.', () => {

    it('viewManager 에 textManager 객체가 잘 전달되는지 확인합니다.', () => {
        const textManager = null;
        const btnEl = document.createElement('button');
        const viewerEl = document.createElement('strong');
        const inpTxt = document.createElement('input');

        // 인자가 잘 전달되는지 확인하는 함수를 만들겠습니다.
        const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
        //actual 새 뷰매니저 인스턴스 텍스트매니저 null을 넣으면
        //toThrowError 에러를 던질것이다
        expect(actual).toThrowError();
    });

    it('viewManager에 요소들이 인자로 잘 전달되는지 확인해봅니다.', () => {
        const textManager = new TextManager();
        const btnEl = null;
        const viewerEl = null;
        const inpTxt = null;

        // 인자가 잘 전달되는지 확인하는 함수를 만들겠습니다.
        const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

        //옵션인자가 널이라서 에러를 던질 것이다
        expect(actual).toThrowError();
    });


    const textManager = new TextManager();
    const btnEl = document.createElement('button');
    const viewerEl = document.createElement('strong');
    const inpTxt = document.createElement('input');
    const viewManager = new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

    it('click 이벤트가 발생했을때 changeValue 함수가 실행되는지 확인합니다.', () => {
        // 특정 모듈의 함수를 감시합니다.
        // spyOn : 뷰매니저의 체인지벨류 메서드에 스파이를 붙임
        // 따라서  changeValue 함수를 호출 후에 호출 횟수와 어떤 인자가 넘어갔는지 감증할 수 있다 
        spyOn(viewManager, 'changeValue');

        //클릭하게 만든다
        btnEl.click();
        // toHaveBeenCalled : 함수가 호출된적이 있는지 판별합니다.
        expect(viewManager.changeValue).toHaveBeenCalled();
    });

    it('changeValue 함수가 실행되고나서 updateView 함수가 실행되는지 확인합니다.', () => {
        // 특정 모듈의 함수를 감시합니다.
        spyOn(viewManager, 'updateView');

        viewManager.changeValue();
        //체인지벨류 함수안에 업데이트뷰 함수가 있음 따라서 업데이트뷰가 호출이 되었어야함
        // toHaveBeenCalled : 함수가 호출된적이 있는지 판별합니다.
        expect(viewManager.updateView).toHaveBeenCalled();
    });
})