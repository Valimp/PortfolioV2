import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar( props ) {
    const istrue = false
    return(
        <header className='navbar'>
            <h1>{ props.name }</h1>
            <nav>
                <ul className='links'>
                    <li className='link'>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className='link'>
                        <Link to={'/'}>Contact</Link>
                    </li>
                    <li className='link' style={istrue? {width:'300px'}: {width: '150px'}}>
                        <Link to={'/'}>Porfolio</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}