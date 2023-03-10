
import Navbar from '../../components/Navbar/Navbar.js'
import Section from '../../components/Section/Section'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'

export default function Contact() {
    return(
        <>
            <Navbar 
                title="Valentin Chauvet"
                links={[
                    {
                        id: 1,
                        'name': 'Accueil',
                        'linkURL': '/'
                    },
                    {
                        id: 1,
                        'name': 'Experiences',
                        'linkURL': '/experiences'
                    },
                    {
                        id: 1,
                        'name': 'Portfolio',
                        'linkURL': '/portfolio'
                    },
                    {
                        id: 1,
                        'name': 'Contact',
                        'linkURL': '/contact'
                    },
                ]}
            />
            <Section backgroundColor='#ffc857'>
                <Content 
                    textColor='#1d201f'
                    sectionTitle='Contact' 
                    content="[ En cours de developpement . . . ]" 
                />
            </Section>
            <Footer />
        </>
    )
}