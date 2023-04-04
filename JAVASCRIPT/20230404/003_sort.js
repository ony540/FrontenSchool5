const avengers = ['아이언맨','스파이더맨','캡마','헐크']
console.log(avengers.sort());
//가나다 순 정렬

//사전식 정렬. 시간이 지나도 못바뀌는 내용
const nums = [3,1,8,6]
console.log(nums.sort())

const nums2 = [3,1,8,11,6]
console.log(nums2.sort()) // 11의 위치가 맞지 않음

//오름차순
console.log(nums2.sort((a,b) => a - b)) 

//내림차순
console.log(nums2.sort((a,b) => b - a)) 

// 실무사용코드
// https://www.notion.so/paullabworkspace/JavaScript-sort-compare-function-ff38f176e79e4c5d9ade9c4734620ffd
function sort(key){
    if (click){
        click = false
        var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
    }
    else{
        click = true
        var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
    }
}


//딥하게 sort를 탐색해보겠다?
const nums4 = [3, 1, 11, 8, 6];
console.log(nums4.sort((a , b) => {
    console.log(a, b)
    console.log(a - b)
})); // a - b의 결과가 음수면 a가 앞으로