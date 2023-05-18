import { useEffect, useState } from 'react'

export default function useMouseLoc(iniVal) {
    // const [mouseLoc, setMouseLoc] = useState({ x: 0, y: 0 });
    // inival이 언디파인이면 0 0 값을 초기값으로 지정
    const [mouseLoc, setMouseLoc] = useState(iniVal || { x: 0, y: 0 });

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            // console.log(e)
            setMouseLoc({ x: e.x, y: e.y });
        });
    }, []);

    return mouseLoc
}
