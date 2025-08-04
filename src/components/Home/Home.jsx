import React from 'react'
import ScrollSection from "../ScrollSection/ScrollSection"
import "./Home.css"
import ThankYou from '../Thankyou/Thankyou'

export const Home = () => {
  return (
     <>
      <div id = 'top'></div>
      <div className='log'>
        {/* <h1 className="fade-in-welcome">Thank you for coming!</h1> */}
        <ThankYou />
      </div>
      <div style={{ minHeight: '100vh' }}>
        <ScrollSection />
      </div>

    </>
  )
}

export default Home
