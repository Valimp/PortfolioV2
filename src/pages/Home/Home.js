import './Home.css'
import Navbar from '../../components/Navbar/Navbar.js'

export default function Home() {
    return(
        <Navbar 
            title="Valimp"
            links={[
                {
                    id: 1,
                    'name': 'Accueil',
                    'linkURL': '/'
                },
                {
                    id: 1,
                    'name': 'Experiences',
                    'linkURL': '/'
                },
                {
                    id: 1,
                    'name': 'Portfolio',
                    'linkURL': '/'
                },
                {
                    id: 1,
                    'name': 'Contact',
                    'linkURL': '/'
                },
            ]}
        />
    )
}