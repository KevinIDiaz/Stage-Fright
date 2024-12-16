
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import {Home} from './Pages/Home'
import {About} from './Pages/About'
import {Merch} from './Pages/Merch'
import { Layout } from './Layout'
import { Tour } from './Pages/Tour'
import {Contact} from './Pages/Contact'

function App() {
  return(
    <Router>
        <Routes>
            <Route element={<Layout/>}>
              <Route path="/:id/" element={<Home/>} />
              <Route path="/:id/About" element={<About/>} />
              <Route path="/:id/Merch" element={<Merch/>} />
              <Route path="/:id/Tour" element={<Tour/>} />
              <Route path="/:id/Contact" element={<Contact/>} />
            </Route>
            
        </Routes>
    </Router>
  )
}

export default App
