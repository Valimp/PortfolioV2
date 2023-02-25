import './Home.css'
import Navbar from '../../components/Navbar/Navbar.js'
import Section from '../../components/Section/Section'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'

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
                    sectionTitle='Je me présente...' 
                    content="Je m'appelle Valentin Chauvet et je suis un développeur web junior avec une grande passion pour le développement frontend. J'ai également de l'expérience en développement fullstack, ce qui me permet de disposer d'un ensemble de compétences polyvalentes. Je suis très curieux et j'aime apprendre de nouvelles choses. Je suis engagé dans la production d'un travail de haute qualité et je suis toujours à la recherche de nouveaux défis passionnants." 
                />
            </Section>
            <Section backgroundColor='#1d201f'>
                <Content 
                    textColor='#ffc857'
                    sectionTitle='Mes stacks...' 
                    content="Je suis un développeur fullstack spécialisé en front-end avec une expertise dans les technologies ReactJS, TailwindCSS, JavaScript, HTML5 et CSS. En back-end, je maîtrise Node.js, Express.js et MongoDB pour créer des applications web performantes et évolutives. Avec ces stacks, je suis capable de concevoir et développer des solutions innovantes qui répondent aux besoins de mes clients." 
                />
            </Section>
            <Section backgroundColor='#ffc857'>
                <Content 
                    textColor='#1d201f'
                    sectionTitle="Qu'est-ce qui me caractrérise ?" 
                    content="En tant que développeur fullstack expérimenté, j'ai eu la chance de travailler en équipe sur de nombreux projets passionnants. Avec mon expérience en tant que lead developer, j'ai développé des compétences solides en communication et en collaboration. Je suis un grand partisan de la communication ouverte et de la transparence, et j'aime aider les autres à atteindre leurs objectifs. Mon goût pour le travail bien fait et ma capacité à m'adapter rapidement me permettent de créer des solutions de qualité supérieure pour mes clients. Je suis également très curieux et j'aime apprendre, ce qui me permet de rester à jour sur les dernières tendances et technologies en matière de développement." 
                />
            </Section>
            <Footer />
        </>
    )
}