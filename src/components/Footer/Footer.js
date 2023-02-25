import IconButton from '../IconButton/IconButton'
import './Footer.css'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className='footer-container'>
            <p>	 Valentin Chauvet | &copy; Valimp | 2023 </p>
            <div className='network-buttons'>
                <IconButton buttonURL={ 'https://github.com/Valimp' } icon={ FaGithub } size={ 30 } color={ '#ffc857' } hoverColor={ '#D33F49' } />
                <IconButton buttonURL={ 'https://www.linkedin.com/in/valentin-chauvet-702788232/' } icon={ FaLinkedinIn } size={ 30 } color={ '#ffc857' } hoverColor={ '#D33F49' } />
                <IconButton buttonURL={ 'https://www.instagram.com/valimpmotodev/' } icon={ FaInstagram } size={ 30 } color={ '#ffc857' } hoverColor={ '#D33F49' } />
            </div>
        </footer>
    )
}