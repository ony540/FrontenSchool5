import React, { createContext } from "react";

const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
    return <HelloLicat />;
};

const HelloLicat = () => {
    return (
        <UserInfo.Consumer>
            {/* .Consumer 하위에는 하나의 함수로 감싸주세요. */}
            {(value) => (
                <div>
                    <h2>{value.name}</h2>
                    <strong>{value.id}</strong>
                    {/* <HelloLicatTwo value={{ name: props.value.name, id: props.value.id }} /> */}
                    <HelloLicatTwo />
                </div>
            )}
        </UserInfo.Consumer>
    );
};

const HelloLicatTwo = () => {
    return (
      // `UserInfoContext.Provider`로 감싸서 값을 전달하면 consumer로 전달되는 `value` 값이 바뀝니다.
        <UserInfo.Provider value={{ name: "Licat", id: "ImLion" }}>
            <UserInfo.Consumer>
                {(value) => (
                    <div>
                        <h2> 두번째 : {value.name}</h2>
                        <strong>{value.id}</strong>
                    </div>
                )}
            </UserInfo.Consumer>
        </UserInfo.Provider>
    );
};

export default App;
