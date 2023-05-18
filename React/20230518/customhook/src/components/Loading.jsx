import React from "react";
import loading from "../images/loading.gif";
import styles from "./Loading.module.css"

export default function Loading() {
    return <img src={loading} alt="loading" className={styles.imgLoading}/>;
}
