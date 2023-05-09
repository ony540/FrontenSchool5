import React, { useState } from "react";

function Resume({ hello, name, hobby, food, color }) {
    // const [like, setLike] = useState(0);
    const [like, setLike] = useState(false);

    function clickLike() {
        // +1 은 기존의 like 값과 1을 더해 새로운 값을 반환하는것이고
        // ++ 변수의 값 자체를 직접적으로 변경하려는 시도입니다.
        // setLike(like + 1);
        setLike(!like);
    }

    return (
        <div style={{ border: "solid 1px", width: "500px" }}>
            <h2>{name} 자기소개서</h2>
            <strong>{hello}</strong>
            <dl>
                <dt>취미</dt>
                <dd>{hobby}</dd>
                <dt>좋아하는 음식</dt>
                <dd>{food}</dd>
                <dt>좋아하는 색</dt>
                <dd>
                    <span style={{ color }}>{color}</span>
                </dd>
                {/* <button onClick={clickLike}>like</button> <span>{like}</span> */}
                <button onClick={clickLike}>like</button> <span>{like ? 'like' : null}</span>
            </dl>
        </div>
    );
}

export default Resume;
