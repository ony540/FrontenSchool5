import React from "react";
import "./Modal.css";

function Modal({children, makeClose}) {
    return (
        <div className="modal-backdrop">
            <article className="modal">
                {/* <h2>홈페이지에 오신 것을 환영합니다!</h2>
                <p>어서오세요</p> */}
                {children}
                <button type="button" onClick={makeClose}> 모달닫기</button>
            </article>
        </div>
    );
}

export default Modal;
