import EdgeLink from './EdgeLink'

export default function TalentsPartners() {
  return (
    <section className="talents section-space">
      <div className="page-shell talents-grid">
        <div className="talents-visual"><span>Hosts · Artists · Speakers · Production</span><img src="/images/showcase-5.jpg" alt="Live performers and event collaborators" width="1000" height="1200" loading="lazy" /></div>
        <div className="talents-copy"><p className="eyebrow">Talents & partners</p><h2>The Right People <em>Change Everything</em></h2><p>Our trusted network brings together performers, speakers, hosts, entertainers and production collaborators chosen around the character of each event — never from a one-size-fits-all roster.</p><div className="connector"><span /></div><EdgeLink to="/talents-partners">Explore Talents & Partners</EdgeLink></div>
      </div>
    </section>
  )
}
