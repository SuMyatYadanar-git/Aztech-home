import React, { useState } from 'react'
import { Link } from "react-router-dom";

const MyLink = props => {
    const { text, to, style,onClick ,notHover} = props
    const [isHover, setIsHover] = useState(false);
    const _handleHover = () => {
        setIsHover(!isHover);
    };
    const defaultStyle = {
        display: 'inline-block',
        cursor: 'pointer',
        whiteSpace: 'noWrap',
        color: `${isHover && '#0e0e'}`

    }
    const userStyle = style === undefined ? "" : style

    return (
        <Link
            to={to === undefined ? '#' : to}
            onClick={onClick}
            style={{ ...defaultStyle, ...userStyle }}
            className={`uk-text-center uk-text-medium  ${!isHover && 'uk-text-muted'}`}
            onMouseOver={notHover ? null : _handleHover}
            onMouseLeave={notHover ? null : _handleHover}
        >
            {text}
        </Link>
    )
}
export default MyLink;