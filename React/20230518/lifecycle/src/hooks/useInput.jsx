import { useState } from 'react';

function useInput(initState) {
    const [value, setValue] = useState(initState);
    function onChange(e) {
        setValue(e.target.value);
    }
    // 컴포넌트를 그리는게 아니라 사용할 변수와 함수를 반환
    return [value, onChange];
}

export default useInput;