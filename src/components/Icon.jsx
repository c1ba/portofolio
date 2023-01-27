import React from "react";

export const Icon = ({style, imageSource, link, altText}) => {
    return <img onClick={()=>window.open(link, "_blank")} src={imageSource} style={{ ...style, width: '40px', height: '40px'}} alt={`${altText}`}/>;
}