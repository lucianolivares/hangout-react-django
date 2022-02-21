// ScrollToTop.jsx
import { useEffect } from 'react'
import { useLocation } from 'wouter'

function ScrollToTop ({ children }) {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <div>{children}</div>
}

export default ScrollToTop
