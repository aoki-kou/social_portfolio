import WorkCard  from "./WorkCard";
function Works() {
  return (
    <section id="works">
      <h2>Works</h2>

      <div className="works-grid">
        <WorkCard
          title="GrowLog"
          description="努力を機の成長で可視化するWebアプリです。"
          url="https://growlog-jp.com"
        />

        <WorkCard
          title="イマイコ"
          description="行きたい場所をストックしておくWebアプリです。"
          url="#"
        />
      </div>
    </section>
  )
}

export default Works
