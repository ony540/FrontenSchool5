import React from "react";
// import "./Question.css";
//자식 컴포넌트에서 import한 CSS가 부모에서도 적용된 것을 볼 수 있다

import styles from "./Question.module.css";
// 이렇게 모듈로 적용하게 되면 자식과 부모를 같은 class명을 줘도 다르게 적용할 수 있다!!

const Question = () => {
    return (
        // <div className="box">
        //     <h2 className="text">Q&A</h2>
        <div className={styles.box}>
            <h2 className={styles.text}>Q&A</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima aliquid
                quisquam! Dignissimos natus laborum qui veritatis quaerat eaque! Nemo, ullam.
            </p>
        </div>
    );
};

export default Question;
