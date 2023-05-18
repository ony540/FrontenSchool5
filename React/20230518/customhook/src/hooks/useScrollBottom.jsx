import { useState, useEffect } from "react";

export default function useScrollBottom() {
    const [isBottom, setIsBottom] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            // console.log(document.documentElement.scrollTop + window.innerHeight); //스크롤한 높이 + 뷰포트 높이
            // console.log(document.documentElement.offsetHeight); //문서가 가지는 전체 값
            //뷰포트높이 + 스크롤한 높이 = 문서가 가지는 전체 높이 -> 스크롤이 맨끝에 닿은 것

            setIsBottom(Math.ceil(document.documentElement.scrollTop + window.innerHeight + 50) >= document.documentElement.offsetHeight);
        });
    }, []);

    return isBottom;
}
