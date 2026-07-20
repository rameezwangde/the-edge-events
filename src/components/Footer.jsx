import { Link } from 'react-router-dom'
import { navigation, services, socialLinks } from '../data/siteData'
import EdgeLink from './EdgeLink'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="page-shell">
        <div className="footer-lead"><img src="/images/edge-logo.png" alt="The Edge Events" width="160" height="72" className="brightness-0 invert" /><p>Beyond events,<br /><em>crafting unique experiences.</em></p></div>
        <div className="footer-body">
          <div><span>Navigate</span>{navigation.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div>
          <div><span>Services</span>{services.map((item) => <Link key={item.title} to="/services">{item.title}</Link>)}</div>
          <div className="footer-contact"><span>Start a conversation</span><a href="tel:+971505035848">+971 50 503 5848</a><p>Dubai, United Arab Emirates</p><EdgeLink to="/contact" light>Plan Your Next Event in the UAE</EdgeLink></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} The Edge Events</span><div>{socialLinks.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</div><div><a href="#privacy">Privacy Policy</a><a href="#terms">Terms of Use</a></div></div>
      </div>
    </footer>
  )
}
