
import './App.css'
import {Header} from './components/navigations/header.jsx'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './Pages/Home.jsx'
import { Footer } from './components/navigations/footer.jsx'
import { AboutMe } from './Pages/About.jsx'
import { ServicePage } from './Pages/Services.jsx'
import { Projects } from './Pages/Projects.jsx'
import { Blog } from './Pages/Blog/blog.jsx'
import { Contact } from './Pages/Contact.jsx'
function App() {
 

  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/about' element={<AboutMe/>}/>
    <Route path='/services' element={<ServicePage/>}/>
     <Route path='/projects' element={<Projects/>}/>
     <Route path='/blog' element={<Blog/>}/>
     <Route path='/contact' element={<Contact/>}/>

    
   </Routes>
     <Footer/>
   </>
  )
}

export default App
