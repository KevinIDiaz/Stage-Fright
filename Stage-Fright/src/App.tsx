
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import {Home} from './Pages/Home'
import {About} from './Pages/About'
import {Merch} from './Pages/Merch'
import { Layout } from './Layout'
import { Tour } from './Pages/Tour'

function App() {
  return(
    <Router>
        <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Merch" element={<Merch/>} />
              <Route path="/Tour" element={<Tour/>} />
            </Route>
            
        </Routes>
    </Router>
  )
}

export default App
