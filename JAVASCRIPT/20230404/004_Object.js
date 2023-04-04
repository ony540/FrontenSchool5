const human1 = {
    name: "Hansol chwe",
    age: 26,
    from: "korea",
    askingHim: function () {
        console.log("hello world!");
    },
    0: '01019980218'
};

console.log(human1.name)
console.log(human1.age)
console.log(human1['name'])
console.log(human1['age'])



//human.0 error
human[0] //'01019980218'
human['0'] //'01019980218'

const arr = {
    0: 10,
    1: 20,
    2: 30,
    length: 3
}
//배열이 아니다!! 유사배열객체이다.
//똑같은 요소로 만들어도 arr가 쉰회할때 더 빠르다


const human = {
    name: "Hansol chwe",
    age: 26,
    from: "korea",
    askingHim: function () {
        console.log("hello world!");
    },
    0: '01019980218'
};

//이름 변경
human.name = 'SengKwan'
human.name
human.askingHim()
delete human.job;
human

//다른 언어와 동작방식이 달라 주의해주세요.
console.log('age' in human); //true
console.log(20 in [10,20,30,40,50]); //false - 인덱스(즉 키값)을 넣어야 true가 나옴
console.log(length in [10,20,30,40,50]); //true


const aespa = {
    members: ['카리나', '윈터', '지젤', '닝닝'],
    from: '광야',
    sing: function () {
        return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
    }
};

//별표** 
console.log(aespa.hasOwnProperty('itzy'));
console.log(aespa.hasOwnProperty('from'));

//별표***
//다른 언어는 aespa.keys() 와 같은 방식으로 사용한다!
console.log(Object.keys(aespa)); //불편한 코드
console.log(Object.values(aespa)); //불편한 코드

