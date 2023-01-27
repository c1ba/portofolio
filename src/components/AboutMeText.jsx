/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

export const AboutMeText = ({style, text}) => {
    const [showingText, setShowingText] = useState("");
    const typingTextTimeout = () => {
        setTimeout(() =>{
            setShowingText((textS) => `${textS}${text[textS.length]}`);
            if (showingText !== text) {
                return typingTextTimeout;
            }
                return;
        } , 50);
    }

    useEffect(() => {
        if (showingText !== text) {
            typingTextTimeout();
        }
    }, [showingText]);

    return <h3 style={{
        ...style,
        color: '#e9e9e9',
        marginLeft: '20px',
        marginRight: '20px'
    }}>{showingText}</h3>;
}