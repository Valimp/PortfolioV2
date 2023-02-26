import './Home.css'
import Navbar from '../../components/Navbar/Navbar.js'
import Section from '../../components/Section/Section'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'

export default function Home() {
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
                    sectionTitle='A propos de moi . . .' 
                    content="Je m’appelle Valentin Chauvet, j’ai 24 ans, et je suis développeur fullstack avec une forte appétence pour le frontend." 
                />
                <Content 
                    textColor='#1d201f'
                    content="J’ai commencé ma formation de développeur web en 2021 en autoformation sur Open Classroom ou j’ai pu apprendre les bases du métier. J’ai enchaîné l’année suivante avec une licence professionnelle de développement web. J’ai pu y réaliser mes premiers projets et affiner mes compétences en frontend et backend."
                />
                <Content 
                    textColor='#1d201f'
                    content="Passionné par le web et par le monde de l’entreprenariat, j’apprécie tout particulièrement aider les entreprise a faire le premier pas dans le monde fabuleux du numérique afin d’accroître leur visibilité sur internet."
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