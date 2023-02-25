import './IconButton.css'

import { useState } from 'react'
import { Link } from 'react-router-dom'

/* props: buttonURL, size, color, hoverColor, Icon */

export default function IconButton( props ) {

    const [ isHover, setIsHover ] = useState(false)
    const Icon = props.icon
    const linkContainerStyle = {
        margin: '1rem',
        transition: 'transform 150ms ease-in-out, color 75ms ease-in-out',
        transitionDelay: '0, 75ms'
    }
    const linkContainerStyleHover = {
        margin: '1rem',
        transform: 'scale(1.2)',
        transition: 'transform 150ms ease-in-out, color 75ms ease-in-out',
        transitionDelay: '0, 150ms'
    }

    function handleMouseEnter() {
        setIsHover(true)
    }
    function handleMouseLeave() {
        setIsHover(false)
    }

    return (
        <Link style={ isHover ? linkContainerStyleHover : linkContainerStyle } className='link-container' to={ props.buttonURL } onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave } >
            <Icon size={ props.size } color={ isHover ? `${ props.hoverColor }` : `${ props.color }` } />
        </Link>
    )
}