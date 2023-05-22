//툴킷으로 하는 것

import {createSlice} from '@reduxjs/toolkit' 

// 액션 생성함수
// export const addNumber = () => {
//     return { type: "ADD" };
// };

// export const substractNumber = () => {
//     return { type: "SUBSTRACT" };
// };

// // 초기 값
// const initialState = {
//     stock: 10,
//     goods: 1
// };

// // 리듀서
// const goodsReducer = (state = initialState, action) => {
//     console.log(action)
//     console.log(action.type)
//     console.log(state)
//     switch (action.type) {
//         case "ADD":
//             return {
//                 ...state,
//                 stock : state.stock - 1,
//                 goods : state.goods + 1,
//             }
//         case "SUBSTRACT":
//             return {
//                 ...state,
//                 stock : state.stock + 1,
//                 goods : state.goods - 1,
//             }
//         default:
//             return state;
//     }
// };

// export default goodsReducer;

const initialState = {
    stock: 10,
    goods: 1
};

//creatSlice! ! ! 
//생성함수랑 리듀서 함수를 같이하게해줌 (생긴지 얼마안됨)
export const counterSlice = createSlice({
    name: 'counter', // 이 리듀서의 이름
    initialState,
    //리듀서 갑변환 함수가 여기
    reducers: { // 함수로 바뀐 것이 중요한 특징, 기존처럼 유니크한 이름이 아니어도 됩니다.
        increment: (state) => {
            state.stock -= 1 // ...state가 없어졌습니다.
            state.goods += 1
        },
        decrement: (state) => {
            state.stock += 1
            state.goods -= 1
        },
    },
})

console.log(counterSlice)

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

//combine 필요없음
export default counterSlice.reducer // reducers처럼 s붙지 않습니다. console.log로 찍어보면 알 수 있습니다.
