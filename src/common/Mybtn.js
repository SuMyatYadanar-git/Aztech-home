import React, { useState } from 'react';

const Mybtn = props => {
    const { text, size, type,
        height,
        width,
        onClick,
        style,
        notHover,

    } = props
    const [isHover, setIsHover] = useState(false);
    const _handleHover = () => {
        setIsHover(!isHover);
    };
    const defaultStyle = {
        background: isHover ? '#A4CA62' : '#fff',
        height: `${height === undefined ? "100%" : height}`,
        width: `${width === undefined ? "100%" : width}`,
        color: isHover ? '#fff' : '#249ED3',
        boxShadow: "none",
        outline: 'none',
        type: `${type === undefined ? "submit" : `${type}`}`,
        border: isHover ? `3px solid #A4CA62` : `3px solid #87A9BA`,
        borderRadius: 5
    };
    const userStyle = style === undefined ? {} : style;

    return (
        <div>

            <button
                className={`uk-button uk-button-default uk-button-${size} uk-text-center uk-text-bold `}
                style={{ ...defaultStyle, ...userStyle }}
                onClick={onClick}
                onMouseOver={notHover ? null : _handleHover}
                onMouseLeave={notHover ? null : _handleHover}
            >
                {text}
            </button>
        </div>
    )
}
export default Mybtn;

