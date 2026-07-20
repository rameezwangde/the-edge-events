import { useLayoutEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { navigation, socialLinks } from '../data/siteData'

export default function MobileMenu({ open, onClose }) {
  const menuRef = useRef(null)

  useLayoutEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open || !menuRef.current) return undefined
    const ctx = gsap.context(() => {
      gsap.fromTo('.mobile-menu__link', { yPercent: 115 }, { yPercent: 0, duration: 0.8, stagger: 0.07, ease: 'power3.out' })
      gsap.fromTo('.mobile-menu__meta', { opacity: 0 }, { opacity: 1, duration: 0.6, delay: 0.4 })
    }, menuRef)
    return () => {
      document.body.style.overflow = ''
      ctx.revert()
    }
  }, [open])

  if (!open) return null
  return (
    <div ref={menuRef} className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
      <div className="mobile-menu__top">
        <Link to="/" onClick={onClose}><img src="/images/edge-logo.png" alt="The Edge Events" className="h-12 brightness-0 invert" /></Link>
        <button onClick={onClose} className="mobile-menu__close" aria-label="Close menu"><X /></button>
      </div>
      <nav className="mobile-menu__nav">
        {navigation.map((item, index) => (
          <div className="overflow-hidden" key={item.to}>
            <Link className="mobile-menu__link" to={item.to} onClick={onClose}>
              <span>{String(index + 1).padStart(2, '0')}</span>{item.label}
            </Link>
          </div>
        ))}
      </nav>
      <div className="mobile-menu__meta">
        <a href="tel:+971505035848">+971 50 503 5848</a>
        <div>{socialLinks.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</div>
      </div>
    </div>
  )
}
