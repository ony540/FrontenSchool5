import TestBox from "./components/TestBox";
import useMouseLoc from "./hooks/useMouseLoc";

function App() {
  const {x,y} = useMouseLoc();

    return (
        <div>
            x좌표 : {x}
            <br />
            y좌표 : {y}
            <TestBox />
        </div>
    );
}
export default App;
