import React from "react";

export default function ProductList() {
    const productList = {
        products: [
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
        ],
    };

    // 삭제안됨ㅜ useState 써라!!
    // let rList = [...ProductList.products]
    let rList =  Object.entries(productList.products)
   

    const delItem = (e) => {
        console.log(e.target.id);
        rList = rList.filter((item) => item[1].id.toString() !== e.target.id);
        console.log(rList)
    }
    console.log(rList)
    return (
        <>
            {/* {productList.products.map((item, index) =>  */}
            {rList.map((item, index) => 
                    <div key={item[1].id}>
                        <h2>{index+1} {item[1].title}</h2>
                        <span>{item[1].price}원</span>
                        <button onClick={delItem} id={item[1].id}>삭제</button>
                    </div>
            )}
        </>
    );
}
