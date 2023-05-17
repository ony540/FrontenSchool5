import React from "react";
import {UserInfo} from './AppConsumer' 


export default function HelloLicat () {
    return (
        <UserInfo.Consumer>
            {(value) => (
                <div>
                    <h2>Hello {value.name}</h2>
                    <strong>{value.id}</strong>
                </div>
            )}
        </UserInfo.Consumer>
    );
};



