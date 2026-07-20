import { clientLogos } from '../data/siteData'

export default function ClientsMarquee() {
  const logos = [...clientLogos, ...clientLogos]
  return (
    <section className="clients section-space" aria-labelledby="clients-heading">
      <div className="page-shell clients-heading"><h2 id="clients-heading">Trusted to Deliver Experiences <em>That Matter</em></h2><p>Working with leading organisations, brands and communities across the UAE.</p></div>
      <div className="logo-marquee"><div className="logo-track">{logos.map((logo, index) => <img key={`${logo.src}-${index}`} src={logo.src} alt={index < clientLogos.length ? logo.alt : ''} aria-hidden={index >= clientLogos.length} width="150" height="80" loading="lazy" />)}</div></div>
    </section>
  )
}
