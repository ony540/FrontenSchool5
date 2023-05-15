import React, { useState, useEffect } from "react";

function Time(props) {
    const [today, setToday] = useState(new Date());
    const [hour, setHour] = useState(today.getHours());
    const [min, setMin] = useState(today.getMinutes());
    const [sec, setSec] = useState(today.getSeconds());
    console.log("렌더링이 됩니다..?"); //렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.

    // 성능이슈가 발생되는 공간

    useEffect(() => {
        let time = setInterval(() => {
            const t = new Date();
            setToday(t);
            setHour(t.getHours());
            setMin(t.getMinutes());
            setSec(t.getSeconds());
        }, 1000);
        return () => {
            //컴포넌트가 사라지기 전에 setinterval을 clearinterval해줍니다
            clearInterval(time);
        };
    }, [today]);

    //그냥 셋인터벌로 했을때 ) 맨처음 time실행됐을때 setInterval실행 -> setState 화면이 그려잠 -> 화면이 그려진다는것은 time()을 실행한다는 것 그럼 또 setInterval이 생김 (누적 2번)

    return (
        <div>
            <h1>
                시간 : {hour}시 {min}분 {sec}초
            </h1>
        </div>
    );
}

export default Time;
