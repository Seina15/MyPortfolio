import './App.css'
import Home from './components/Home/Home';
import MySkill from "./components/MySkill/MySkill"
import ResponsiveAppBar from "./components/ResponsiveAppBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename="/React_app">
      <Routes>
        <Route path='/' element={<ResponsiveAppBar />}>
          <Route index element={<Home />} />
          <Route path='skills' element={<MySkill />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
