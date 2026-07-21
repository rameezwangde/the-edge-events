import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { projects } from '../data/siteData'
import EdgeLink from './EdgeLink'

export default function EventShowcase() {
  const [active, setActive] = useState(0)
  const imageRef = useRef(null)
  const root = useRef(null)
  const changeProject = (index) => {
    if (index === active) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setActive(index); return }
    gsap.to(imageRef.current, { clipPath: 'inset(0 0 100% 0)', duration: 0.35, ease: 'power2.in', onComplete: () => {
      setActive(index)
      gsap.fromTo(imageRef.current, { clipPath: 'inset(100% 0 0 0)', scale: 1.04 }, { clipPath: 'inset(0% 0 0 0)', scale: 1, duration: 0.7, ease: 'power3.out' })
    } })
  }
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.showcase-image-wrap', { clipPath: 'inset(12% 0)' }, { clipPath: 'inset(0% 0)', scrollTrigger: { trigger: root.current, start: 'top 70%', end: 'top 25%', scrub: true } })
    }, root)
    return () => ctx.revert()
  }, [])
  const project = projects[active]
  return (
    <section ref={root} className="showcase section-space" aria-labelledby="showcase-heading">
      <div className="page-shell">
        <header className="showcase-header"><div><p className="eyebrow">Ideas made tangible</p><h2 id="showcase-heading">Selected <em>Experiences</em></h2></div><p>Ideas transformed into moments people remember.</p></header>
        <div className="showcase-layout">
          <div className="showcase-image-col">
            <div className="showcase-image-wrap"><img ref={imageRef} src={project.image} alt={`${project.title}, ${project.category} by The Edge Events`} width="1200" height="900" loading="lazy" /></div>
            <div className="showcase-meta"><span>{project.location}</span><span>{project.year}</span><span>{project.category}</span></div>
          </div>
          <div className="project-list">
            {projects.map((item, index) => (
              <button key={item.title} className={active === index ? 'active' : ''} onMouseEnter={() => changeProject(index)} onFocus={() => changeProject(index)} onClick={() => changeProject(index)}>
                <span>{String(index + 1).padStart(2, '0')}</span><strong>{item.title}</strong><span>{item.category}</span>
              </button>
            ))}
            <EdgeLink to="/portfolio">View Portfolio</EdgeLink>
          </div>
        </div>
      </div>
    </section>
  )
}
