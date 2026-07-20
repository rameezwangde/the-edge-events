import { Component } from 'react'

export default class AppErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('The Edge Events page could not render.', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="app-error" role="alert">
          <img src="/images/edge-logo.png" alt="The Edge Events" width="144" height="64" />
          <h1>We hit an unexpected edge.</h1>
          <p>Please refresh the page. If the issue continues, contact The Edge Events.</p>
          <button type="button" onClick={() => window.location.reload()}>Refresh page</button>
        </main>
      )
    }

    return this.props.children
  }
}