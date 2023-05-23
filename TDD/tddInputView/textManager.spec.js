
describe('텍스트 관리자 테스트입니다.', () => {

    const textManager = new TextManager();

    it('텍스트 값을 가져옵니다.', () => {
        //처음 값을 들고왔으면 
        const initValue = textManager.getValue();
        ///두개 같기를 기대함
        expect(textManager.getValue()).toBe(initValue);
    })

    it('텍스트 값을 수정합니다.', () => {
        //새로운 벨류가 이거고 이걸로 set해서
        const newValue = { data: 'hello zebras' };
        textManager.setValue(newValue);

        //벨류가져왔더니 이게 뉴벨류의 데이터
        expect(textManager.getValue()).toBe(newValue.data);
    })

});