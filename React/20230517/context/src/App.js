import React, { useContext, createContext } from "react";

//createContext
const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
    return <HelloLicat />;
};

const HelloLicat = () => {
    //useContext(UserInfo)
    const { name, id } = useContext(UserInfo);
    return (
        <div>
            <h2>{name}</h2>
            <strong>{id}</strong>
            <HelloLicatTwo />
        </div>
    );
};

const HelloLicatTwo = () => {
    const { name, id } = useContext(UserInfo);
    return (
        <div>
            <h2> 두번째 : {name}</h2>
            <strong>{id}</strong>
        </div>
    );
};

export default App;
