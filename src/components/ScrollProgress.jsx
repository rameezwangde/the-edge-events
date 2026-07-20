import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollProgress() {
  const progressBar = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(progressBar.current, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={progressBar}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        backgroundColor: '#00b7d7',
        transformOrigin: '0% 50%',
        transform: 'scaleX(0)',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  )
}
