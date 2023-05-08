import Hello from "./Components/Hello";
import Time from "./Components/Time";
import Resume from "./Components/Resume";
import ColorText from "./Components/ColorText";

function App() {
    return (
        <div>
            <Hello name="Gary" />
            <Time />
            <Resume hello="안녕하세요" name="개리" hobby="게임" food="고기" color="blue"/>

            <ColorText color="blue" />
            <ColorText color="yellow" />
            <ColorText color="green" />
        </div>
    );
}

export default App;
