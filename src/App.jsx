import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import  LandingPage from './components/LandingPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          
          {/* <Route exact path="/" element={<LandingPage/>}></Route> */}
          <Route exact path="/" element={<Home key="root" league="PL"/>}></Route>
          <Route exact path="/home" element={<Home key="home" league="PL"/>}></Route>
          <Route exact path="/championsleague" element={<Home key="CL" league="CL"/>}></Route>
          <Route exact path="/premierleague" element={<Home key="PL" league="PL"/>}></Route>
          <Route exact path="/bundesliga" element={<Home key="BL1" league="BL1"/>}></Route>
          <Route exact path="/eredivisie" element={<Home key="DED" league="DED "/>}></Route>
          <Route exact path="/primeriadivision" element={<Home key="PD" league="PD"/>}></Route>
          <Route exact path="/ligue1" element={<Home key="FL1" league="FL1"/>}></Route>
          <Route exact path="/primeiraliga" element={<Home key="PPL" league="PPL"/>}></Route>
          <Route exact path="/seirea" element={<Home key="SA" league="SA"/>}></Route>
          <Route exact path="/copalibertadores" element={<Home key="CLI" league="CLI"/>}></Route>
          {/* SET PATH TO /home */}
          <Route exact path="/about" element={<About/>}></Route>
        </Routes>

      </Router>
    </>
  )
}

export default App
