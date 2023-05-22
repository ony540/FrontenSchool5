import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, substractNumber } from "../modules/goodsCounter";

export default function GoodsCounter() {
    //useSelector - store의 상태 조회 hook
    const { stock, goods } = useSelector((state) => ({
        stock: state.goodsReducer.stock,
        goods: state.goodsReducer.goods,
    }));

    //dispatch 실행시키는 트리거 리액트에서는 useDispatch로
    //dispatch가 되면 리듀서가 실행된다!!
    const dispatch = useDispatch();

    const onAddNumber = () => dispatch(addNumber);
    const onSubstractNumber = () => dispatch(substractNumber);

    return (
        <div>
            <h2>딥러닝 개발자 무릎담요</h2>
            <span>
                <strong>17,500</strong>원
            </span>
            <div>
                <button type="button" onClick={onSubstractNumber}>
                    MINUS
                </button>
                <span>{goods}</span>
                <button onClick={onAddNumber}>PLUS</button>
            </div>
            <div>
                총 수량 <strong>{goods}</strong>
            </div>
            <div>
                <strong>{goods * 17500}</strong>원
            </div>
            <div>
                재고 <strong>{stock}</strong>
            </div>
        </div>
    );
}
