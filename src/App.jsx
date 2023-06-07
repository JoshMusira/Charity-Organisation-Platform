
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './header/Header'
import Home from './pages/home/Home'
import Donate from './pages/donate/Donate'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/donate' element={<Donate />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
