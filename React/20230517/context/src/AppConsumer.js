import React, { createContext } from "react";
import HelloLicat from "./HelloLicat";

const UserInfo = createContext();

const AppConsumer = () => {
    return (
        <UserInfo.Provider value={{ name: "gary", id: "garyIsFree" }}>
            <HelloLicat />
        </UserInfo.Provider>
    );
};

export {AppConsumer, UserInfo};
