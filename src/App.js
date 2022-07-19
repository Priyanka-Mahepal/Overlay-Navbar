import "./styles.css";
import React , {useEffect} from 'react'
import Header from './components/Layout/Header/Header'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import webFont from 'webfontloader'
import Footer from './components/Layout/Footer/Footer'
import Home from "./components/Home/Home";

export default function App() {
  useEffect(() => {
    webFont.load({
      google:{
        families:["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  } , [])
  return (
    <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
    </Router>
  );
}
