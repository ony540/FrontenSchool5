import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { signOut } from "firebase/auth";
import { appAuth } from "../firebase/config";

export const useLogout = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const {dispatch} = useAuthContext();

    //logout 훅
    const logout = () => {
        //로그아웃 파이어베이스 매서드
        signOut(appAuth).then(() => {
            dispatch({type: 'logout'})
            setError(null);
            setIsPending(false);
        }).catch((err)=> {
            setError(err.message);
            setIsPending(false)
            console.log(error)
        });

    }

    return { error, isPending, logout }

}