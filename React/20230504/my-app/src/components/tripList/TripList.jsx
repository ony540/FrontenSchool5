import './TripList.css'

function TripList() {
    let list = [
        { no: 1, area: "대전", visited: false },
        { no: 2, area: "부산", visited: true },
        { no: 3, area: "목포", visited: false },
        { no: 4, area: "제주도", visited: false },
    ];
    // li는 구별가능한 값 식볇자를 key에 넘겨줘야한다 무조건

    let areas = list.map((item) => <li className={item.visited ? 'list-area-item active' : 'list-area-item'} key={item.no} >{item.area}</li>);

    return <ul className='list-area'>{areas}</ul>

    //     <ul style={{ border: "1px solid black" }}>
    //     <li style={list[0].visited ? visitSt : defSt}>{list[0].area}</li>
    //     <li style={list[1].visited ? visitSt : defSt}>{list[1].area}</li>
    //     <li style={list[2].visited ? visitSt : defSt}>{list[2].area}</li>
    //     <li style={list[3].visited ? visitSt : {}}>{list[3].area}</li>
    // </ul>


};

export default TripList;
