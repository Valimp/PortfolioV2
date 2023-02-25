import './Home.css'
import Navbar from '../../components/Navbar/Navbar.js'
import Section from '../../components/Section/Section'
import Content from '../../components/Content/Content'

export default function Home() {
    return(
        <>
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
            <Section backgroundColor='#ffc857'>
                <Content 
                    title='Accueil' 
                    content='Bonjour à tous !' 
                />
            </Section>
            <Section backgroundColor='#303634'>
            </Section>
            <Section backgroundColor='#ffc857'>
            </Section>
        </>
    )
}