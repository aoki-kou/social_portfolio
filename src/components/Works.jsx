import WorkCard  from "./WorkCard";
function Works() {
  const works = [
    {
      title: "GrowLog",
      image: "/images/works/growlog.png",
      description: "努力を木の成長で可視化するWebアプリです。",
      technologies: ["Ruby", "Ruby on Rails", "React"],
      serviceUrl: "https://growlog-jp.com",
      githubUrl: "https://github.com/aoki-kou/growlog"
    },
    {
      title: "イマイコ",
      image: "/images/works/imaiko.png",
      description: "行きたい場所をストックしておくWebアプリです。",
      technologies: ["Ruby", "Ruby on Rails", "React"] ,
      serviceUrl: "null",
      githubUrl: "https://github.com/aoki-kou/imaiko"
    }
  ];

  return (
    <section id="works">
      <div className="section-inner">
        <div className="section-heading">
          <h2>Works</h2>
          <p>制作したサービス</p>
        </div>


        <div className="works-grid">
          {works.map((work) => (
            <WorkCard
              key={work.title}
              title={work.title}
              image={work.image}
              description={work.description}
              technologies={work.technologies}
              serviceUrl={work.serviceUrl}
              githubUrl={work.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
