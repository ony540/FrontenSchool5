//props로 넘길수 있는 다양한 데이터 
function HelloProps(props) {
    return (
        <div>
            <p>
                my name is {props.name} and age is {props.age}
            </p>
            <strong>you are {props.someFunc()}</strong>
            <p>this is someArr {[...props.someArr]}</p>
            <p>this is someObj {props.someObj.one}</p>
            {props.someJSX}
        </div>
    );
}

function App() {
    return (
        <div>
            {/* props로 넘길수 있는 다양한 데이터 */}
            <HelloProps
                name="jaehyun"
                age={25}
                someFunc={() => "awesome!!!"}
                someJSX={<img src="https://picsum.photos/id/237/200/300" alt="dog" />}
                someArr={[1, 2, 3]}
                someObj={{ one: 1 }}
            />
        </div>
    );
}

export default App;
