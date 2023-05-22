import { createStore } from "redux";
//최근에는 createsotre말고 리덕스툴킷의 확장된기능 사용

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;

//dipatch 함수 선언
// Action
const addNumber = () => {
    store.dispatch({ type: "ADD" });
};

//Action
const substractNumber = () => {
    store.dispatch({ type: "SUBSTRACT" });
};

// Reducer
const countReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return state + 1;
        case "SUBSTRACT":
            return state - 1;
        default:
            return state;
    }
};
const store = createStore(countReducer);

let count = 0;

/*
// UI Update - text
const updateResult = (c) => {
    number.innerText = count;
    quantity.innerHTML = c;
    totalPrice.innerHTML = c * PRICE;
};

// State Change
const addNumber = () => {
    count += 1;
    minus.disabled = false;
    updateResult(count);
};

// State Change
const substractNumber = () => {
    count -= 1;
    plus.disabled = false;
    updateResult(count);
};

// Init
number.innerHTML = count;
updateResult(count);
*/

const handleWrite = () => {
    number.innerText = store.getState();
    quantity.innerText = store.getState();
    totalPrice.innerText = store.getState() * PRICE;
    console.log(store.getState());
};

// Update UI
store.subscribe(handleWrite);

// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);
