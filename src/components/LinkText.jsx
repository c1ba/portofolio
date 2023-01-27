import React from "react";

export const LinkText = ({style, textContent, link}) => {
    return <h2 onClick={()=>window.open(link, "_blank")} style={{...style, textAlign: 'center',
    fontSize: '2vw',
    textDecoration: 'none',
    cursor: 'pointer',}}>{textContent}</h2>;
}