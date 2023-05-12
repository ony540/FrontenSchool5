import styled from "styled-components";

const ButtonOne = styled.button`
    width: 112px;
    height: 48px;
    background: #5180ff;
    border-radius: 50px;
    border: none;
    color: white;
    font-size: 18px;
    margin-right: 20px;
    cursor: pointer;
`;

// 상속받는 방법1. styled(상속받을컴포넌트)
const ButtonTwo = styled(ButtonOne)`
    background: #15C2B8;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    &:disabled{
        cursor: unset;
        background: #324577;
        color: #617199;
    }
`;


const ButtonThree = styled(ButtonTwo)`
    background: #FB7099;
    &:hover{
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
        transform: scale(1.1);
        transition: all 0.1s ease-out;
    }
`;

// export default ButtonOne
export {ButtonOne, ButtonTwo, ButtonThree}


// 버튼을 컴포넌트화 해서 들고오기!!