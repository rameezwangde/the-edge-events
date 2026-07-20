import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BrandIntroduction() {
  const root = useRef(null)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.intro-word', { opacity: 0.12 }, { opacity: 1, stagger: 0.08, scrollTrigger: { trigger: '.intro-statement', start: 'top 76%', end: 'bottom 48%', scrub: true } })
      gsap.fromTo('.intro-rule span', { scaleX: 0 }, { scaleX: 1, scrollTrigger: { trigger: '.intro-rule', start: 'top 85%', end: 'top 45%', scrub: true } })
    }, root)
    return () => ctx.revert()
  }, [])
  const words = 'Every event begins as an idea. We give it an unforgettable edge.'.split(' ')
  return (
    <section id="introduction" ref={root} className="intro section-space">
      <div className="page-shell">
        <div className="intro-top"><span>Built on discovery</span><span>Dubai · United Arab Emirates</span></div>
        <h2 className="intro-statement">{words.map((word, i) => <span className="intro-word" key={`${word}-${i}`}>{word}{' '}</span>)}</h2>
        <div className="intro-rule"><span /></div>
        <div className="intro-copy">
          <div><strong>10+</strong><span>Years of event expertise</span></div>
          <p>At The Edge Events, every event is a unique and personal experience — built on discovery, thoughtful ideas, seamless coordination and flawless execution. Our relationships are founded on trust, integrity, transparency and quality.</p>
        </div>
      </div>
    </section>
  )
}
