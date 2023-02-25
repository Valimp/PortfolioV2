import Content from '../Content/Content'
import './Section.css'

export default function Section( props ) {
    return (
        <section className='section-container' style={ { backgroundColor: `${ props.backgroundColor }` } }>
            {props.children}
        </section>
    )
}