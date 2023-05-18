import React from "react";

export default function imgItem({ img }) {
    return (
        <>
            <img src={img.download_url} alt={img.author} style={{width: 400, height: 320}}/>
        </>
    );
}
