import React, { useState, useRef } from "react";

const TryUseRefDom = () => {
    const [emailValue, setEmailValue] = useState(""); // email state 값
    const [pwValue, setPwValue] = useState(""); // pw state 값

    const emailInput = useRef(null); // email input에 대한 useRef
    const pwInput = useRef(null); // pw input에 대한 useRef

    const inputCheck = (e) => {
        e.preventDefault();

        console.log("로그인 버튼 누름");
        // current 붙어야 해당 태그!
        console.log(emailInput.current, pwInput.current);

        // 예외 처리
        if (emailInput.current.value === "") {
            alert("이메일을 입력해주세요");
            emailInput.current.focus();
            return; // if, else 문에 들어오게 되면 setState 실행없이 바로 return
        } else if (pwInput.current.value === "") {
            alert("비밀번호를 입력해주세요");
            pwInput.current.focus();
            return;
        }

        // 해당 인풋의 현재 벨류 넣기
        setEmailValue(emailInput.current.value);
        setPwValue(pwInput.current.value);
    };

    return (
        <form style={{ display: "flex", flexDirection: "column" }}>
            <label>
                {/*  컴포넌트의 태그(tag)에 직접 접근하고 싶을 때 */}
                {/* 인풋에 ref해서 위치 값? 들고오기 */}
                이메일 : <input type="email" ref={emailInput} />
            </label>
            <label>
                비밀번호 : <input type="password" ref={pwInput} />
            </label>

            <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
                로그인
            </button>
            <span>입력한 이메일 : {emailValue}</span>
            <span>입력한 비밀번호 : {pwValue}</span>
        </form>
    );
};

export default TryUseRefDom;
