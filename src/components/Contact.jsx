function Contact() {
    return (
        <section id="contact">
          <div className="section-inner">
            <div className="contact-content">
              <div className="contact-left">
                <div className="section-heading">

                  <h2>Contact</h2>
                  <p>お気軽にご連絡ください。</p>
                </div>

                <p className="contact-text">
                  一緒に何か面白ことができたらうれしいです。<br />
                  GitHubやXでのフォローも励みになります。
                </p>

                
                <div className="contact-links">
                  <a href="https://github.com/aoki-kou">
                    <img src="/images/skills/github.svg" alt="" />
                    <span>GitHub</span>
                  </a>
                  <a href="https://x.com/koUtarutaru">
                    <img src="/images/x.svg" alt="" />
                    <span>(旧Twitter)</span>
                  </a>
                </div>
              </div>


              <p className="contact-thanks">
                ご覧いただき<br />
                ありがとうございます。
              </p>
              
            </div>
          </div>
        </section>
    )
}

export default Contact
