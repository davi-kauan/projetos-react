import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'
import Home from './components/pages/Home'
import Empresa from './components/pages/Empresa'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'
import Contato from './components/pages/Contato'

function App() {

  return (
    <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Main route={Home}/>} />
          <Route path='/projects' element={<Main route={Projects}/>} />
          <Route path='/company' element={<Main route={Empresa}/>} />
          <Route path='/newproject' element={<Main route={NewProject}/>} />
          <Route path='/contact' element={<Main route={Contato}/>} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App
