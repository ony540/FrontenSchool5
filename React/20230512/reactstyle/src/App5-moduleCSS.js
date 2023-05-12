import React from "react";
import "./App.css";
// import styles from "./App.module.css";
import Question from "./Components/Question";


const App = () => {
    return (
        <>
        {/* 평소쓰듯이 했을때 className이 같으면 여기까지 그스타일 속성이 올라옴!! */}
        {/*  .css를 module.css로 바꿔주면  -> 이런일 없이 각자 적용된다 */}
            <nav className="box">
                <ul>
                    <li id="detail" className="text">
                        상세정보
                    </li>
                    <li id="qa" className="text">
                        Q&A
                    </li>
                    <li id="review" className="text">
                        Review
                    </li>
                </ul>
            </nav>
            {/* <nav className={styles.box}>
                <ul>
                    <li id="detail" className={styles.text}>
                        상세정보
                    </li>
                    <li id="qa" className={styles.text}>
                        Q&A
                    </li>
                    <li id="review" className={styles.text}>
                        Review
                    </li>
                </ul>
            </nav> */}
            <Question />
        </>
    );
};

export default App;
