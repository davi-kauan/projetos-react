import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import Page from './components/layout/Page'
import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'
import Contato from './components/pages/Contato'

function App() {

  return (
    <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Page route={Home}/>} />
          <Route path='/projects' element={<Page route={Projects}/>} />
          <Route path='/company' element={<Page route={Empresa}/>} />
          <Route path='/newproject' element={<Page route={NewProject}/>} />
          <Route path='/contact' element={<Page route={Contato}/>} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App
