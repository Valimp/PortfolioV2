import './Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


/* 
props => { title, links }

links = { [
    {
        'name': '[your link name]',
        'linkURL' : '[you link URL]'
    }, ...
] }
*/

export default function Navbar( props ) {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <header className='bannier'>
            <h1> 
                <Link to={'/'}> <span className='bannier-text'>{ props.title }</span> </Link>
            </h1>

            <nav className={ `bannier-nav ${ showLinks ? "show-nav" : "hide-nav" }` }>
                <ul className='nav-links'>
                    { props.links.map( ( link, index ) => (

                        <li key={ index } className='nav-link'>
                            <Link to={ link.linkURL }> <p className='link-text'>{ link.name }</p> </Link>
                        </li>

                    ) ) }
                </ul>
                <button className='nav-burger' onClick={handleShowLinks}>
                    <span className='burger-bar'></span>
                </button>
            </nav>
        </header>
    )
}