import logo from './logo.svg';
import './App.css';
import Products from './Products';
import Productt from './Productt';
import Hero from './Hero';
import About from './About';
import Navbar from './Navbar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import SignUp from './SignUp';
import Services from './Services';
import TourGuide from './TourGuide';
import Login from './Login';
import  Form from './Form';




function App() {
  return (
    <div>
      <Router>
        
        <Navbar />
        <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/sign-up" element={<SignUp/>} />
                  <Route path="/services" element={<Services/>} />
                  <Route path="/tourguide" element={<TourGuide/>} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/Login" element={<Login/>} />
                  <Route path="/form" element={<Form/>} />
                  
                 
        </Routes>

      </Router>
           
    </div>
  );
}

export default App;
