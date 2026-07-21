import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import SmoothScrollProvider from './components/SmoothScrollProvider'
import AppErrorBoundary from './components/AppErrorBoundary'
import HomePage from './pages/HomePage'
import PlaceholderPage from './pages/PlaceholderPage'

const pages = [
  ['/services', 'Services'], ['/portfolio', 'Portfolio'], ['/clients', 'Clients'],
  ['/about', 'About Us'], ['/talents-partners', 'Talents & Partners'], ['/contact', 'Contact'],
]

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  return <AppErrorBoundary><SmoothScrollProvider><ScrollReset /><Routes><Route path="/" element={<HomePage />} />{pages.map(([path, title]) => <Route key={path} path={path} element={<PlaceholderPage title={title} />} />)}<Route path="*" element={<PlaceholderPage title="Page Not Found" />} /></Routes></SmoothScrollProvider></AppErrorBoundary>
}
