import styled from "styled-components";
// 합성 컴포넌트 - 재사용할부분 재사용하기!!
//너무 좋다..

// 셋팅모달(다른 부분)
const SettingCard = () => {
    return (
        <>
            <button>초기화</button>
            <button>저장하기</button>
        </>
    );
};

// 공유모달(다른부분)
const ShareCard = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut eveniet, laudantium, deleniti autem sequi molestias magni quia, aliquam et
                praesentium nostrum dolores culpa cupiditate unde doloremque labore beatae accusamus.
            </p>
            <div>
                <button>이미지 저장</button>
                <button>트위터</button>
                <button>페이스북</button>
            </div>
        </>
    );
};

// 두모달의 공통부분
const CardDiv = styled.div`
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    margin-bottom: 20px;
    // class에 따라서 width값(다른 속성만) 다르게 하기
    width: ${(props) => (props.className === "setting" ? "200px" : "400px")};
`;

const Card = (props) => {
    return (
        <CardDiv className={props.className}>
            <h3>{props.value}</h3>
            <hr />
            <>{props.children}</>
        </CardDiv>
    );
};

function App() {
    return (
        <>
            <Card className="setting" value="챌린지 설정"></Card>
            <Card className="share" value="서비스 공유하기"></Card>
            <Card className="setting" value="챌린지 설정">
                <SettingCard />
            </Card>
            <Card className="share" value="서비스 공유하기">
                <ShareCard />
            </Card>
        </>
    );
}

export default App;
