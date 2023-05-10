import React from "react";
import { useState } from "react";

export default function ProductList() {
    const [datas, setDatas ]= useState([
        {
            title: "개발자 무릎 담요",
            price: 17500,
            id: 101,
        },
        {
            title: "Hack Your Life 개발자 노트북 파우치",
            price: 29000,
            id: 102,
        },
        {
            title: "우당탕탕 라이켓의 실험실 스티커북",
            price: 29000,
            id: 103,
        },
        {
            title: "버그를 Java라 버그잡는 개리씨 키링",
            price: 29000,
            id: 104,
        },
    ])

    // React는 state함수(seDatas)의 호출의 일관성을 유지하기 위해서, 내부적으로 동일한 내용의 state함수 호출이 여러번 반복되면 하나의 업데이트로 취급하여 처리한다
    //-> 이거를 이전값과 지금값을 다르게 인식하도록하기위해서 -> 함수형 업데이트
    const delItem = (id) => {
        // setDatas(datas.filter((item) => id !== item.id))

        //함수형 업데이트 / 함수의 인자로 전달되는 state값을 React가 이전 state의 값으로 보장한다. 따라서 상태 업데이트가 비동기적으로 처리된다고 해도 안정적으로 이전값과 이후값(버츄얼 돔)을 비교하여 처리할 수 있습니다. 
        setDatas((prevDatas)=>{
            prevDatas.filter((item) => id !== item.id)
        })
    }
    return (
        <>
            {datas.map((item, index) => 
                    <li key={item.id}>
                        <h2>{index+1} {item.title}</h2>
                        <span>{item.price}원</span>
                        {/* <button onClick={delItem(item.id)}>삭제</button> -> 이렇게 하면 다 안보임 왜지??*/}
                        <button onClick={() => {delItem(item.id)}}>삭제</button>
                    </li>
            )}
        </>
    );
}
