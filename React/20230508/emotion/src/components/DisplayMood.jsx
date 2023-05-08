import React from "react";

function DisplayMood({emo}) {
  return(
    <div className="container">
      기분이 : {emo ?? '정해지지 않았어요!'}
    </div>
  )
};

export default DisplayMood;
