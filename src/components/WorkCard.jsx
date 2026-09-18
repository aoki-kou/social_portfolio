function WorkCard({ title, image, description, serviceUrl, githubUrl, technologies }) {
    return (
        <article className="work-card">
            <img className="work-image" src={image} alt={`${title}の画面`} />
            <div className="work-content">
                <h3>{title}</h3>
                <p className="work-description">
                    {description}
                </p>
                <div className="technologies">
                {technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                ))}
                </div>
                <div className="work-links">
                    <a href={serviceUrl} className="service-link">アプリを見る</a>
                    <a 
                      href={githubUrl} 
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                        <img src="/images/skills/github.svg" alt="" />
                        GitHub
                    </a>
                </div>

            </div>
        </article>
    )
}

export default WorkCard
