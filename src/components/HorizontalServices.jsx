import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '../data/siteData'
import EdgeLink from './EdgeLink'

gsap.registerPlugin(ScrollTrigger)

export default function HorizontalServices() {
  const root = useRef(null)
  const track = useRef(null)
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    const ctx = gsap.context(() => {
      mm.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
        const distance = () => track.current.scrollWidth - window.innerWidth
        const tween = gsap.to(track.current, { x: () => -distance(), ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: () => `+=${distance()}`, scrub: 0.8, pin: true, invalidateOnRefresh: true } })
        gsap.utils.toArray('.service-panel__image').forEach((image) => gsap.to(image, { xPercent: 9, ease: 'none', scrollTrigger: { trigger: image, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } }))
      })
    }, root)
    return () => { mm.revert(); ctx.revert() }
  }, [])
  return (
    <section ref={root} className="services-journey" aria-labelledby="services-heading">
      <div ref={track} className="services-track">
        <header className="services-intro">
          <p className="eyebrow">Our service worlds</p>
          <h2 id="services-heading">What We <em>Create</em></h2>
          <p>Three distinct disciplines. One seamless point of contact.</p>
        </header>
        {services.map((service) => (
          <article className="service-panel" key={service.number}>
            <div className="service-panel__media"><img className="service-panel__image" src={service.image} alt={`${service.title} — ${service.descriptor}`} width="1200" height="900" loading="lazy" /></div>
            <div className="service-panel__body">
              <span className="service-number">{service.number}</span>
              <p>{service.descriptor}</p>
              <h3>{service.title}</h3>
              <div className="service-panel__footer"><p>{service.copy}</p><span className="service-line" /></div>
            </div>
          </article>
        ))}
        <div className="services-end"><EdgeLink to="/services" light>Discover Services</EdgeLink></div>
      </div>
    </section>
  )
}
