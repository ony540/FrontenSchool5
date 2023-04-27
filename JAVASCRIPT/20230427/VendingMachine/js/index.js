import ColaGenerator from "./classes/colaGenerator.js";
import VendingMachineEvents from "./classes/vendingMachineEvents.js";

const colaGenerator = new ColaGenerator;
const vendingMachineEvents = new VendingMachineEvents; 
//인스턴스를 만들면 constructor함수가 실행된다 (콜라머신이)

// top level await - async 없이 최상위 모둘에서 실행되는 것 - 21년에 나온 문법

await colaGenerator.setup();
vendingMachineEvents.bindEvent();