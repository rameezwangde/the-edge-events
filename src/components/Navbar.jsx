import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../data/siteData'
import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ forceSolid = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const solid = forceSolid || scrolled
  return (
    <>
      <header className={`site-header ${solid ? 'site-header--solid' : ''}`}>
        <Link to="/" className="site-logo" aria-label="The Edge Events home">
          <img src="/images/edge-logo.png" alt="The Edge Events" width="144" height="64" className={solid ? '' : 'brightness-0 invert'} />
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.slice(0, 6).map((item) => (
            <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/contact" className="nav-cta"><span>Plan Your Event</span><span aria-hidden="true">↗</span></Link>
          <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
