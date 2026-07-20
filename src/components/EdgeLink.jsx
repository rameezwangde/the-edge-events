import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function EdgeLink({ to, children, light = false, className = '' }) {
  const classes = `edge-link ${light ? 'edge-link--light' : ''} ${className}`
  if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')) {
    return <a className={classes} href={to}>{children}<ArrowUpRight size={17} /></a>
  }
  return <Link className={classes} to={to}>{children}<ArrowUpRight size={17} /></Link>
}
