//json제너레이터  사이트에서 아래 주석내용을 넣으면 랜덤으로 여러개의 객체를 만들어줌
//https://json-generator.com/ 

/*
 [
  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    age: '{{integer(20, 40)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    company: '{{company().toUpperCase()}}'
  }
]
*/
let 회원정보 = [

    {
        "_id": "642a6238b248502ae9093c61",
        "index": 0,
        "age": 31,
        "eyeColor": "brown",
        "name": "Walters Mcintosh",
        "gender": "male",
        "company": "MEDALERT"
    },
    {
        "_id": "642a6238dcd63119a679705f",
        "index": 1,
        "age": 39,
        "eyeColor": "blue",
        "name": "Meredith Alexander",
        "gender": "female",
        "company": "GLASSTEP"
    },
    {
        "_id": "642a6238b5e95736ba6d1a0c",
        "index": 2,
        "age": 21,
        "eyeColor": "brown",
        "name": "Sondra Ford",
        "gender": "female",
        "company": "RECRISYS"
    },
    {
        "_id": "642a6238243c7927650907c1",
        "index": 3,
        "age": 31,
        "eyeColor": "green",
        "name": "Stokes Gibbs",
        "gender": "male",
        "company": "ANDRYX"
    },
    {
        "_id": "642a62384bca77ef81df5e13",
        "index": 4,
        "age": 30,
        "eyeColor": "blue",
        "name": "Gamble Bryant",
        "gender": "male",
        "company": "SENTIA"
    },
    {
        "_id": "642a6238f000ae1d1618ce1a",
        "index": 5,
        "age": 37,
        "eyeColor": "green",
        "name": "Faulkner Burton",
        "gender": "male",
        "company": "BRAINCLIP"
    }
]



회원정보[0]
회원정보[0]['company']

// 모르셔도 됩니다.
let 나이평균 = (회원정보[0]['age']+회원정보[1]['age']+회원정보[2]['age']+회원정보[3]['age']+회원정보[4]['age']+회원정보[5]['age'] ) / 6
나이평균
