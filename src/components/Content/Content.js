import './Content.css'

export default function Content( props ) {
    return (
        <div className='content'>
            <h2 className='section-title'> { props.sectionTitle } </h2>
            <p className='section-text'> { props.content } </p>
        </div>
    )
}