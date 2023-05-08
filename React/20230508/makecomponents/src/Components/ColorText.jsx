import React from "react";

function ColorText({color}) {
  return(
    <p style={{color, textAlign:'center', marginTop:'10px'}}>
      색이 바뀌어요!
    </p>
  )
};

export default ColorText;
