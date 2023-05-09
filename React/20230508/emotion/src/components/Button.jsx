function Button({ emotion, getEmotion, isselected }) {
    // 버튼이 클릭되면 이게 getEmotion함수 즉 setEmotion(emotion)을 실행
    //안에 들어가는 emotion은 지금
    const realgetEmotion = () => {
        getEmotion(emotion);
    };

    return (
        <li>
            <button type="button" className={isselected ? "btn-item selected" : "btn-item"} onClick={realgetEmotion}>
                기분이: {emotion}
            </button>
        </li>
    );
}

export default Button;
