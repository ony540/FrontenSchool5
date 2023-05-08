import Button from "./Button";

function ButtonList({ emo, getEmotion }) {
    const moodList = ["좋아요! 😀", "정말 좋아요! 😊", "최고에요! 😝", "미쳤어요! 😜"];

    return <ul className="container-list"> 
        {moodList.map((moodEl,index) => 
        //emotion : 기분의 text / isselected : 이거랑 선택된거랑 같은지에 대한 불린값 / getEmotion : 클릭됐을떄 실행되는 함수
        <Button emotion={moodEl} key={index} getEmotion={getEmotion} isselected={emo === moodEl}/>)}
    </ul>;
}

export default ButtonList;
