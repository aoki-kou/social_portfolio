function About() {
    return(
        <section id="about">
          <div className="section-inner">
            <div className="about-content">
              <div className="about-left">
                <div className="section-heading">
                  <h2>About</h2>
                  <p>私について</p>
                </div>


                <div className="about-text">
                  <p>
                    現在、臨床工学技士として働きながら、
                    ITエンジニアを目指してプログラミングを学習しています。
                  </p>
                  <p>
                    医療現場で紙や手作業による業務を経験し、
                    「ITを活用して業務の負担を減らしたい」と感じたことが、
                    エンジニアを目指したきっかけです。
                  </p>
                  <p>
                    RUNTEQでRuby / Ruby on Railsを中心にWeb開発を学び、
                    現在はバックエンドを中心にフロントエンドやインフラに
                    ついても学習しています。
                    将来は、利用する人の課題を理解し、技術や仕組みを通して
                    解決できるエンジニアを目指しています。
                  </p>  
                </div>
              </div>


              <div className="about-image">
                <img 
                  src="/images/profile.jpeg"
                  alt="プロフィール"
                />
              </div>
            </div>
          </div>
        </section>
    )
}

export default About
