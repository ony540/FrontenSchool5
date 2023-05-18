import React, { useEffect, useLayoutEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const onClick = () => {
    setNum(num + 1);
  };
  
  // 클린업함수가 일어나는 경우 -> 1. 업데이트될때 useLayoutEffect  useEffect로 실행되는거 이전에 일어남 
  // 2. 언마운트 될떄 (그 컴포넌트가 없어질때 안보여질때) 
  // 클린업 ->   useLayoutEffect  useEffect 가 return하는 것들 !!!!

  useLayoutEffect(() => { 
    console.log("⏱마운트 될때 브라우저에 그려주기 전에 딱 한번실행!"); //1
    return ()=>{
      console.log("⏱🧹언마운트될때 단 한번 실행됩니다!") //언마운트1
    }
  }, []); 

	useLayoutEffect(() => {
    console.log("⏱마운트/업데이트 될때마다 브라우저에 그려주기 전에 실행!"); //2 //업데이트3
    return ()=>{
      console.log("⏱🧹업데이트가 될때, 언마운트될때 실행됩니다!") //업데이트1 //언마운트2
    }
  }); 

  useLayoutEffect(() => {
    console.log("⏱마운트 될때, num state변경으로 인해 업데이트 될때 브라우저에 그려주기 전에 실행!"); //3 //업데이트4
    return ()=>{
      console.log("⏱🧹업데이트가 될때, 언마운트될때 실행됩니다!") //업데이트2 //언마운트3
    }
  }, [num]);

  //useLayoutEffect가 모두 끝난 후에야 브라우저에 그려주기 시작합니다.

  useEffect(() => {
    console.log("🎈마운트 될때 브라우저에 그려진 후 딱 한번실행!"); //4
    return ()=>{
      console.log("🎈🧹언마운트될때 단 한번 실행됩니다!") //언마운트4
    }
  }, []); 

	useEffect(() => {
    console.log("🎈마운트/업데이트 될때마다 브라우저에 그려진 후 실행!"); //5 //업데이트7
    return ()=>{
      console.log("🎈🧹업데이트가 될때, 언마운트될때 실행됩니다!") //업데이트5 //언마운트5
    }
  }); 

  useEffect(() => {
    console.log("🎈마운트 될 때, num state변경으로 인해 업데이트 될때 브라우저에 그려진 후 실행!"); //6 //업데이트8
    return ()=>{
      console.log("🎈🧹업데이트가 될때, 언마운트될때 실행됩니다!") //업데이트6 //언마운트6
    }
  }, [num]);

  return (
      <button onClick={onClick}>{num}</button>
  );
}
const Wrap = ()=>{
  const [isVisible,setIsVisible] = useState(true)
  const handleClick = ()=> setIsVisible(!isVisible)
  return (
    <>
      <button onClick={handleClick}>{isVisible? "언마운트시키기" : "마운트시키기"}</button>
      <br></br>
      {isVisible&& <App />}
    </>
  )
}

export default Wrap