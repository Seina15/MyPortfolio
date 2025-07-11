import React from 'react'
import ScrollSection from "../ScrollSection/ScrollSection"
import "./Home.css"

export const Home = () => {
  return (
     <>
      <div className='first-content'>
        <h1 className="fade-in-welcome">Thank you for coming!</h1>
      </div>
      <div style={{ minHeight: '100vh' }}>
        <ScrollSection />
      </div>

    </>
  )
}

export default Home
