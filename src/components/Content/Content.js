import './Content.css'

export default function Content( props ) {
    return (
        <div>
            <h2> { props.title } </h2>
            <p> { props.content } </p>
        </div>
    )
}