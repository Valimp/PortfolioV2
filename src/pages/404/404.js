import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Section from '../../components/Section/Section'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'

export default function NotFound() {
  return (
    <>
        <Navbar 
                title="Valentin Chauvet"
                links={[
                    {
                        'name': 'Accueil',
                        'linkURL': '/'
                    },
                    {
                        'name': 'Experiences',
                        'linkURL': '/experiences'
                    },
                    {
                        'name': 'Portfolio',
                        'linkURL': '/portfolio'
                    },
                    {
                        'name': 'Contact',
                        'linkURL': '/contact'
                    },
                ]}
            />
            <Section backgroundColor='#ffc857'>
                <Content 
                    textColor='#1d201f'
                    sectionTitle="Erreur 404"
                    content="La page que vous cherchez n'existe pas." 
                />
            </Section>
            <Footer />
    </>
  )
}
