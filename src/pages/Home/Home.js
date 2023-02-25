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
                    sectionTitle='Je me présente...' 
                    content="Je m'appelle Valentin Chauvet et je suis un développeur web junior avec une grande passion pour le développement frontend. J'ai également de l'expérience en développement fullstack, ce qui me permet de disposer d'un ensemble de compétences polyvalentes. Je suis très curieux et j'aime apprendre de nouvelles choses. Je suis engagé dans la production d'un travail de haute qualité et je suis toujours à la recherche de nouveaux défis passionnants." 
                />
            </Section>
            <Section backgroundColor='#1d201f'>
            </Section>
            <Section backgroundColor='#ffc857'>
            </Section>
        </>
    )
}