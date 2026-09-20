function Skills() {
  const skills = [
    { name: "Ruby", icon: "/images/skills/ruby.svg" },
    { name: "Ruby on Rails", icon: "/images/skills/rubyonrails.svg" },
    { name: "JavaScript", icon: "/images/skills/javascript.svg" },
    { name: "React", icon: "/images/skills/react.svg" },
    { name: "PostgreSQL", icon: "/images/skills/postgresql.svg" },
    { name: "Docker", icon: "/images/skills/docker.svg" },
    { name: "Git", icon: "/images/skills/git.svg" },
    { name: "GitHub", icon: "/images/skills/github.svg" }
  ];

  return(
    <section id="skills">
      <div className="section-inner">
        <div className="section-heading">
          <h2>Skills</h2>
          <p>技術スタック</p>
        </div>

        <ul>
          {skills.map((skill) => (
            <li key={skill.name}>
              <img src={skill.icon} alt="" />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )

}

export default Skills
