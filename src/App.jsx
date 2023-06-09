
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './header/Header'
import Home from './pages/home/Home'
import Donate from './pages/donate/Donate'
import TakeAction from './pages/takeaction/TakeAction'
import AboutUs from './pages/aboutus/AboutUs'
import ContactUs from './pages/contactus/ContactUs'
import WaysToHelp from './pages/waystohelp/WaysToHelp'
import Events from './pages/events/Events'
import Blog from './pages/blog/Blog'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/takeaction' element={<TakeAction />} />
          <Route path='/events' element={<Events />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/waystohelp' element={<WaysToHelp />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
