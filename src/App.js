import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Herosection from './Pages/Herosection/herosection';
import About from './Pages/About/about';
import Resume from './Pages/Resume/resume';
import Testimonial from './Pages/Testimonial/testimonial';
import Contact from './Pages/Contact/contact';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <>

      <Router>
        <Herosection />

        <Routes>
          <Route path='/about' element={<About />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='/testimonial' element={<Testimonial />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>

        <Footer />
      </Router>
    </>

  )
}

export default App;
