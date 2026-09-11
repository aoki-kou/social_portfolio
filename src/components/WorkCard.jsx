function WorkCard({ title, description, url }) {
    return (
        <article>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url}>詳しく見る</a>
        </article>
    )
}

export default WorkCard
