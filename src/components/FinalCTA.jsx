import EdgeLink from './EdgeLink'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <img src="/images/cta-bg.png" alt="A premium UAE event produced by The Edge Events" width="1920" height="1080" loading="lazy" />
      <div className="final-cta__shade" />
      <svg viewBox="0 0 800 500" fill="none" aria-hidden="true"><path d="M1 499V130H520V1H799" /></svg>
      <div className="page-shell final-cta__content"><p className="eyebrow">Your next chapter</p><h2>Let’s Create the Moment<br /><em>Everyone Talks About.</em></h2><p>From the first idea to the final applause, The Edge Events is ready to bring your next UAE event to life.</p><div><EdgeLink to="/contact" light>Start Planning Your Event</EdgeLink><a href="tel:+971505035848">+971 50 503 5848</a></div></div>
    </section>
  )
}
