import { fireEvent, render, screen } from "@testing-library/react";
//testing-library 테스트할때 도움을 주는 라이브러리
//테스트는 제스트가 한다!!
import App from "./App";

test("버튼이 제대로 잘 작동하고 있습니까?", () => {
    render(<App />);

    //getByRole  - 코드 요소 찾을때
    const button = screen.getByRole("button", { name: "change to blue" });

    //toHaveStyle 함수 : 요소가 특정한 CSS 스타일을 가지고 있는지 체크
    expect(button).toHaveStyle({ backgroundColor: "red" });

    //fireEvent - 가상돔과의 상호작용이 가능하도록 하는 객체
    //.click - 바닐라 js 문법 클릭하게 만듦
    fireEvent.click(button);
    expect(button).toHaveStyle({ backgroundColor: "blue" });
    //텍스트컨텐트가 toBe안에 있는 값인가
    expect(button.textContent).toBe("change to red");
});
