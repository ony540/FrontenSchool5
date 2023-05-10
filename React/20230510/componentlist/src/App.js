import React, { useState } from "react";
import Detail from "./components/Detail";
import Question from "./components/Question";
import Review from "./components/Review";

// 이게 가독성이 더 좋다
const ContentsContainer = ({ listName }) => {
  // if문이 가독성이 더 좋다 삼항연산자보다
  if (listName === "detail") {
    return <Detail />;
  } else if (listName === "qa") {
    return <Question />;
  } else if (listName === "review") {
    return <Review />;
  }
};

function App() {
  const [listName, setListName] = useState("detail"); //기본값
  const checkId = (e) => {
    setListName(e.target.id);
  };

  return (
    <>
      <nav>
        <ul>
          <li
            id="detail"
            onClick={checkId}
            style={listName === "detail" ? { color: "red" } : { color: "black" }}
          >
            상세정보
          </li>
          <li
            id="qa"
            onClick={checkId}
            style={listName === "qa" ? { color: "red" } : { color: "black" }}
          >
            Q&A
          </li>
          <li
            id="review"
            onClick={checkId}
            style={listName === "review" ? { color: "red" } : { color: "black" }}
          >
            Review
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName} />
    </>
  );
}

export default App;