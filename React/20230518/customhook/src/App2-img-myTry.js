import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
    /*


  const [datas, setDatas] = useState([]);
  const [url, setUrl] = useState("https://picsum.photos/v2/list?page=3&limit=5");

    // api 요청할때는 useEffect를 사용한다
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("네트워크 응답에 문제가 있습니다");
                }
                const json = await response.json();
                setDatas(json);
                console.log(datas)
            } catch (error) {
                console.error("데이터를 가져오는데 문제가 발생했습니다 : ", error);
            }
        };
        fetchData();
    }, [url]);
   */

    const datas = [
        {
            id: "10",
            author: "Paul Jarvis",
            width: 2500,
            height: 1667,
            url: "https://unsplash.com/photos/6J--NXulQCs",
            download_url: "https://picsum.photos/id/10/2500/1667",
        },
        {
            id: "11",
            author: "Paul Jarvis",
            width: 2500,
            height: 1667,
            url: "https://unsplash.com/photos/Cm7oKel-X2Q",
            download_url: "https://picsum.photos/id/11/2500/1667",
        },
        {
            id: "12",
            author: "Paul Jarvis",
            width: 2500,
            height: 1667,
            url: "https://unsplash.com/photos/I_9ILwtsl_k",
            download_url: "https://picsum.photos/id/12/2500/1667",
        },
        {
            id: "13",
            author: "Paul Jarvis",
            width: 2500,
            height: 1667,
            url: "https://unsplash.com/photos/3MtiSMdnoCo",
            download_url: "https://picsum.photos/id/13/2500/1667",
        },
        {
            id: "14",
            author: "Paul Jarvis",
            width: 2500,
            height: 1667,
            url: "https://unsplash.com/photos/IQ1kOQTJrOQ",
            download_url: "https://picsum.photos/id/14/2500/1667",
        },
    ];

    return (
        <div>
            {datas.map((data) => (
                <div key={data.id}>
                    <img src={data.download_url} alt={data.author} />
                </div>
            ))}
        </div>
    );
}
export default App;
