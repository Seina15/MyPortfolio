import './App.css'
import ResponsiveAppBar from "./components/ResponsiveAppBar"
import ScrollSection from "./components/ScrollSection/ScrollSection"


function App() {
  return (
    <>
      <ResponsiveAppBar/>
      <div className='first-content'>
        <h1 className="fade-in-welcome">Thank you for coming!</h1>
      </div>
      <div style={{ minHeight: '200vh' }}>
        <ScrollSection />
      </div>
    </>
  )
}


export default App
