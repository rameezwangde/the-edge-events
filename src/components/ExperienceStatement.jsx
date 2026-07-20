const principles = ['Thoughtful Creativity', 'Seamless Coordination', 'Meaningful Experiences']

export default function ExperienceStatement() {
  return (
    <section className="people section-space">
      <div className="people-visual"><img src="/images/showcase-1.jpg" alt="Guests sharing a memorable Edge Events experience" width="1600" height="900" loading="lazy" /></div>
      <div className="page-shell people-content">
        <div className="people-title"><p className="eyebrow">Built around people</p><h2>Great events are not measured only by scale.<br /><em>They are remembered by how they make people feel.</em></h2></div>
        <div className="principles">
          {principles.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
        </div>
      </div>
    </section>
  )
}
