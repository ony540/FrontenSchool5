import React from "react";
import ImgList from "./components/ImgList";
import { useEffect } from "react";
import { useState } from "react";
import useScrollBottom from "./hooks/useScrollBottom";
import Loading from "./components/Loading";

// 무한 스크롤 구현
//스크롤이 일정 위치 닿으면 다음 이미지 더 불러오기?? fetch 링크
function App() {
    const [imgList,setImgList] = useState([]);
    const [fetchPage,setFetchPage] = useState(1);
    const [isLoading,setIsLoading] = useState(false);
    const isBottom = useScrollBottom();

    useEffect(()=>{
      fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[fetchPage]);

    //isBottom 바뀔때 실행
    useEffect(()=>{
      if(isBottom){
        setFetchPage((preVal) => preVal + 1);
      }
    },[isBottom]);

    async function fetchImages() {
      //로딩 시작할때 true
      setIsLoading(true);
        try {
            const response = await fetch(`https://picsum.photos/v2/list?page=${fetchPage}&limit=5`);
            if (!response.ok) {
                throw new Error("네트워크에 문제가 있습니다");
            }
            const data = await response.json();
            // 이전데이터에 기존 데이터 추가하기
            setImgList((preData) => [...preData,...data]);

            //이미지 로드끝나고 로딩끝
            setIsLoading(false);
        } catch (error) {
          console.error("데이터 가져오는데 문제가 생김", error);
          setIsLoading(false);
        }
    }

    return (
        <div>
            hello world
            <ImgList imgList={imgList} />
            {isLoading &&  <Loading/>}
        </div>
    );
}
export default App;
