import React , {useEffect} from 'react';
import './App.css';
import { BrowserRouter  , Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about'
import Gymfit from './components/gymfit'
import Homefit from './components/homefit'
import Nav from './components/navbar';
import Intro from './components/intro';
import AOS from 'aos';
import "aos/dist/aos.css"

function App() {
  useEffect(()=>{
    AOS.init({
      duration:2000,
      once:false,
    })
  })
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>}>
            <Route index element={<Intro/>} />
            <Route path="home" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="gymfit" element={<Gymfit/>} />
            <Route path="homefit" element={<Homefit/>} />
          </Route>        
        </Routes>
      </BrowserRouter>
     
  );
}

export default App;
