import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
`;

const Item = styled.div`
    margin: 60px auto;

    ul {
        padding: 10px;
    }
    li{
        margin: 20px 0;
        border: 1px solid black;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 4px 4px 6px rgba(0,0,0,0.2);
    }
`;

export default function NationList() {
    // useEffect(() => {
    //     //promise 객체는 크게  then 과 catch  두 가지 상황을 가정한 메소드를 가짐
    //     fetch("http://localhost:3000/nations") //fulfilled 상태의 프라미스를 반환하기 때문에 then을 통해 데이터를 잘 가져올 수
    //         .then((response) => { //Response 라는 객체 (요청에 대한 종합적인 응답 정보가 저장되어 있는 객체)
    //             //http 상태코드가 200번대가 아닐 경우
    //             if(!response.ok){
    //                 throw new Error("네트워크 응답에 문제가 있습니다")
    //             }
    //             return response.json()}) //Response 라는 객체를 .json() 하면 promise를 반환 따라서 then하면
    //         .then((json) => setNations(json)) //이제 json이 data가 된다
    //         //reject될때 실행된다
    //         .catch((error)=>{
    //             console.error('데이터를 가져오는데 문제가 발생했습니다 : ', error);
    //         })
    // }, []);

    const [nations, setNations] = useState([]);
    const [url, setUrl] = useState("http://localhost:3000/nations");

    // api 요청할때는 useEffect를 사용한다
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("네트워크 응답에 문제가 있습니다");
                }
                const json = await response.json();

                setNations(json);
            } catch (error) {
                console.error("데이터를 가져오는데 문제가 발생했습니다 : ", error);
            }
        };
        fetchData();
    }, [url]);
    // console.log(nations);

    return (
        <Item>
            <GlobalStyle />
            <h2>나라목록</h2>
            <ul>
                {nations.map((nation) => (
                    <li key={nation.id}>
                        <h3>나라이름 : {nation.title}</h3>
                        <p>인구수 : {nation.population}</p>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={()=>{setUrl("http://localhost:3000/nations?loc=europe")}}>유럽 목록</button>
                <button onClick={()=>{setUrl("http://localhost:3000/nations")}}>전체 목록</button>
            </div>
        </Item>
    );
}
