// 자식의 자식의 자식을 넣을 경우, console 창에서 확인하기

const Card = (props) => {
    console.log(props);
    return null;
};

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

const SettingCard = () => {
    return (
        <>
            <button>초기화</button>
            <button>저장하기</button>
        </>
    );
};

const Test = () => {
    return <p>hello world</p>;
};

const TestTwo = () => {
    return <p>hello world2</p>;
};

function App() {
    return (
        <>
            <Card cardClassName="setting" title="챌린지 설정">
                <SettingCard />
                <Test>
                    <TestTwo />
                    <TestTwo />
                </Test>
            </Card>
            <Card cardClassName="share" title="서비스 공유하기">
                <ShareCard />
            </Card>
        </>
    );
}

export default App;
