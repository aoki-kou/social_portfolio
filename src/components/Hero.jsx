function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h2>
          未経験から、
          <br />
          ITエンジニアを目指しています。
        </h2>
        <p className="hero-description">
          Ruby on Railsを中心にWeb開発を学習しています。
        </p>

        <div className="hero-actions">
          <a href="#works" className="primary-button">
            Worksを見る
          </a>

          <a href="#contact" className="secondary-button">
            Contact
          </a>
        </div>
     </div>
    </section>
  )
}

export default Hero
