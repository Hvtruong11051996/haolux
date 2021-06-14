import React, { useState } from 'react'
import './ScrollToTop.scss'
function ScrollToTop() {
  const [show, setShow] = useState(false)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 800) {
      setShow(true)
    }
    else {
      setShow(false)
    }
  })
  return (
    <div className={show ? "scroll active" : "scroll"}
      onClick={() => window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })}
    >
      <i className='bx bxs-chevron-left'></i>
    </div >
  )
}

export default ScrollToTop
