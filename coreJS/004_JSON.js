//JSON.stringify – 객체를 JSON으로 바꿔줍니다.

let student = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    wife: null,
};
let json = JSON.stringify(student);

console.log(json);
/* 
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
console.log(typeof json); // string


//------
// 숫자를 JSON으로 인코딩하면 숫자입니다.
alert(JSON.stringify(1)); // 1

// 문자열을 JSON으로 인코딩하면 문자열입니다(다만, 큰따옴표가 추가됩니다).
alert(JSON.stringify("test")); // "test"

alert(JSON.stringify(true)); // true

alert(JSON.stringify([1, 2, 3])); // [1,2,3]

//--------
let user = {
    sayHi() {
        // 무시
        alert("Hello");
    },
    [Symbol("id")]: 123, // 무시
    something: undefined, // 무시
};

alert(JSON.stringify(user)); // {} (빈 객체가 출력됨)

/**
   * 함수 프로퍼티 (메서드)
    심볼형 프로퍼티 (키가 심볼인 프로퍼티)
    값이 undefined인 프로퍼티
   */

//-----------
//중첩 객체도 알아서 문자열로 바꿔준다!!

let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"],
    },
    date: new Date(Date.UTC(2017, 0, 1)),
};

console.log(JSON.stringify(meetup));
/* 객체 전체가 문자열로 변환되었습니다.
{
  "title":"Conference",
  "room":{"number":23,"participants":["john","ann"]},
  "date":"2017-01-01T00:00:00.000Z", 
}
*/
  //date의 값이 문자열로 변환됨(Date 객체의 내장 메서드 toJSON이 호출)

//----------------
//순환참조 (서로 참조하는거)는 그냥 안된다. 따라서 그거 빼고 일부분만 stringfy 하려면

let room = {
    number: 23,
};

let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room, // meetup은 room을 참조합니다.
};

room.occupiedBy = meetup; // room references meetup

alert(JSON.stringify(meetup, ["title", "participants", "name"])); //원하는 것만 두번째 인자로 배열형식으로
// {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}]}

// 순환 참조를 발생시키는 프로퍼티 room.occupiedBy만 제외하고 모든 프로퍼티를 배열에 넣으면 출력됨!! ('place', 'number') 넣으면됨
alert(JSON.stringify(meetup, ["title", "participants", "name", "place", "number"]));
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/





//----
//  배열 대신 함수를 전달해 이 문제를 해결
/*
replacer에 전달되는 함수(replacer 함수)는 프로퍼티 (키, 값) 쌍 전체를 대상으로 호출되는데, 반드시 기존 프로퍼티 값을 대신하여 사용할 값을 반환해야 합니다. 특정 프로퍼티를 직렬화에서 누락시키려면 반환 값을 undefined로 만들면 됩니다    
 */

alert(
    JSON.stringify(meetup, function replacer(key, value) {
        alert(`${key}: ${value}`);
        return key == "occupiedBy" ? undefined : value;
    })
);
/**
 * {"title":"Conference",
 * "participants":[{"name":"John"},{"name":"Alice"}],
 * "place":{"number":23}}
 */
/* replacer 함수에서 처리하는 키:값 쌍 목록 (이것들이 인자로 들어간다는 뜻)
  :             [object Object] - 함수 최초 호출시  "래퍼 객체"가 만들어짐
  title:        Conference
  participants: [object Object],[object Object]
  0:            [object Object]
  name:         John
  1:            [object Object]
  name:         Alice
  place:        [object Object]
  number:       23
  */

//space 들여쓰기
let user = {
    name: "John",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true,
    },
};

alert(JSON.stringify(user));
alert(JSON.stringify(user, null, 2)); //줄바꿈, 들여쓰기됨
alert(JSON.stringify(user, null, 4));

//-------
//toJSON() - JSON으로 바뀔때는 여기안에 있는게 반환된다! (발표엔 필요X)
let room = {
    number: 23,
    toJSON() {
        return this.number;
    },
};

let meetup = {
    title: "Conference",
    room,
};

alert(JSON.stringify(room)); // 23

alert(JSON.stringify(meetup));
/*
    {
      "title":"Conference",
      "room": 23
    }
  */

/**----------------- */
//JSON.parse – JSON을 객체로 바꿔줍니다.
//기본 예제
let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

alert(user.friends[1]); // 1

// 흔히 저지르는 실수 - 큰따옴표, new안됨
//JSON은 주석을 지원하지 않는다
let json = `{
    name: "John",                     // 실수 1: 프로퍼티 이름을 큰따옴표로 감싸지 않았습니다.
    "surname": 'Smith',               // 실수 2: 프로퍼티 값은 큰따옴표로 감싸야 하는데, 작은따옴표로 감쌌습니다.
    'isAdmin': false                  // 실수 3: 프로퍼티 키는 큰따옴표로 감싸야 하는데, 작은따옴표로 감쌌습니다.
    "birthday": new Date(2000, 2, 3), // 실수 4: "new"를 사용할 수 없습니다. 순수한 값(bare value)만 사용할 수 있습니다.
    "friends": [0,1,2,3]              // 이 프로퍼티는 괜찮습니다.
  }`;

//reviver 사용하기
//아까 Date 객체 스트링 파이는 그ㅑㄴ됨 but parse는 그냥 안됨!!
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str);

alert(meetup.date.getDate()); // 에러!

// 해결책
let meetup = JSON.parse(str, function (key, value) {
    if (key == "date") return new Date(value);
    return value;
});

alert(meetup.date.getDate()); // 이제 제대로 동작!

//과제

let room = {
    number: 23,
};

let meetup = {
    title: "Conference",
    occupiedBy: [{ name: "John" }, { name: "Alice" }],
    place: room,
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(meetup); //마지막 요소로 self : 자기 참조

alert(
    JSON.stringify(meetup, function replacer(key, value) {
        console.log(`${key}: ${value}`);
        return key != "" && value == meetup ? undefined : value;
    })
);

//meetup을 참조하는 프로퍼티를 제외한 모든 프로퍼티를 직렬화
//마지막에있는 self : meetup(참조) 이거를 제외할라면 ->  키값이 비어있지않은 (첫번째로 참조할 레퍼객체는 빈문자열 있음) 그거를 undefined시키면 다 언디파인되는거임
