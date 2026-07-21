import { useLayoutEffect, useRef } from 'react'
import { ArrowDown, ArrowUpRight, Calendar, Users, MapPin, CheckCircle } from 'lucide-react'
import gsap from 'gsap'
import EdgeLink from './EdgeLink'

export default function HeroSection() {
  const root = useRef(null)
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
      timeline
        .fromTo('.hero-media', { scale: 1.08 }, { scale: 1, duration: 1.8 })
        .fromTo('.hero-line > span', { yPercent: 110 }, { yPercent: 0, duration: 1, stagger: 0.12 }, 0.15)
        .fromTo('.hero-reveal', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, 0.9)
        .fromTo('.edge-trace', { strokeDashoffset: 2000 }, { strokeDashoffset: 0, duration: 1.7 }, 0.4)
      gsap.to('.hero-media', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="hero" aria-labelledby="hero-heading">
      {/* Note: Ensure public/images/hero-wide.jpg is updated to the new background without text */}
      <img className="hero-media" src="/images/hero-wide.jpg" alt="Immersive event production and audience experience in the UAE" width="1920" height="1080" fetchpriority="high" />
      <div className="hero-shade" />
      <div className="hero-grain" />
      
      <nav className="hero-sidebar hero-reveal" aria-label="Page Sections">
        <a href="#home" className="active"><span>01</span> HOME</a>
        <a href="#services"><span>02</span> SERVICES</a>
        <a href="#showcase"><span>03</span> SHOWCASE</a>
        <a href="#clients"><span>04</span> CLIENTS</a>
      </nav>

      <div className="hero-content page-shell">
        <p className="eyebrow hero-reveal">THE EDGE EVENTS — UAE</p>
        <h1 id="hero-heading">
          <span className="hero-line"><span>Experience the</span></span>
          <span className="hero-line"><span className="hero-outline">Distinctive</span> <em>Edge</em></span>
          <span className="hero-line"><span>in Every Event</span></span>
        </h1>
        <div className="hero-bottom hero-reveal">
          <p>We design, produce and deliver meaningful event experiences across the UAE — combining creative ideas, seamless execution and an uncompromising attention to detail.</p>
          <div className="hero-actions">
            <button className="btn-primary">PLAN YOUR NEXT EVENT <ArrowUpRight size={16}/></button>
            <button className="btn-outline">EXPLORE OUR WORK <ArrowUpRight size={16}/></button>
          </div>
        </div>
      </div>
      
      <div className="hero-right-note hero-reveal" aria-hidden="true">
        <Users size={24} />
        <p>CORPORATE<br/>EXPERIENCES<br/>THAT LEAVE<br/>A LASTING<br/>IMPRESSION</p>
      </div>

      <div className="hero-stats hero-reveal">
        <div className="stat-item">
          <Calendar className="stat-icon" size={24} />
          <div className="stat-text"><strong>10+</strong><span>YEARS OF<br/>EXPERIENCE</span></div>
        </div>
        <div className="stat-item">
          <Users className="stat-icon" size={24} />
          <div className="stat-text"><strong>500+</strong><span>EVENTS<br/>DELIVERED</span></div>
        </div>
        <div className="stat-item">
          <MapPin className="stat-icon" size={24} />
          <div className="stat-text"><strong>UAE</strong><span>WIDE COVERAGE<br/>ACROSS EMIRATES</span></div>
        </div>
        <div className="stat-item">
          <CheckCircle className="stat-icon" size={24} />
          <div className="stat-text"><strong>ONE</strong><span>DEDICATED POINT<br/>OF CONTACT</span></div>
        </div>
      </div>

      <svg className="hero-edge" viewBox="0 0 1440 900" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path className="edge-trace" d="M 850 1100 L 1250 150 L 2200 150" stroke="#00b7d7" strokeWidth="2" strokeDasharray="2000" />
      </svg>
      
      <a href="#introduction" className="scroll-cue">
        <div className="scroll-icon-wrap"><ArrowDown size={18} /></div>
        SCROLL TO DISCOVER
      </a>
    </section>
  )
}
