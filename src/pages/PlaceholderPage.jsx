import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PlaceholderPage({ title }) {
  return <><Helmet><title>{title} | The Edge Events</title></Helmet><Navbar forceSolid /><main className="placeholder"><p className="eyebrow">The Edge Events</p><h1>{title}</h1><p>Page coming soon.</p></main><Footer /></>
}
