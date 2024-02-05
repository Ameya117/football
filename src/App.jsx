import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import LandingPage from './components/LandingPage';
import climg from '/cl.avif';
import bundesliga from '/bundesliga.avif';
import PL from '/premierleague.avif';
import ligue1 from '/ligue1.avif';
import primeradivision from '/primeradivision.avif';
import seriea from '/seriea.avif';
import eredivise from '/eredivise.avif';
import ligaportugal from '/ligaportugal.avif';
import conbemol from '/conbemol.avif';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TeamMatches from './components/TeamMatches';
// individual match info??
// team matches
// modify loader

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          
          <Route exact path="/" element={<LandingPage/>}></Route>
          <Route exact path="/home" element={<Home key="home" league="PL" leaguelogo={PL}/>}></Route>
          <Route exact path="/CL/matches" element={<Home key="CL" league="CL" leaguelogo={climg}/>}></Route>
          <Route exact path="/PL/matches" element={<Home key="PL" league="PL" leaguelogo={PL}/>}></Route>
          <Route exact path="/BL1/matches" element={<Home key="BL1" league="BL1" leaguelogo={bundesliga}/>}></Route>
          <Route exact path="/DED/matches" element={<Home key="DED" league="DED " leaguelogo={eredivise}/>}></Route>
          <Route exact path="/PD/matches" element={<Home key="PD" league="PD"leaguelogo={primeradivision}/>}></Route>
          <Route exact path="/FL1/matches" element={<Home key="FL1" league="FL1" leaguelogo={ligue1}/> }></Route>
          <Route exact path="/PPL/matches" element={<Home key="PPL" league="PPL" leaguelogo={ligaportugal}/>}></Route>
          <Route exact path="/SA/matches" element={<Home key="SA" league="SA" leaguelogo={seriea}/>}></Route>
          <Route exact path="/CLI/matches" element={<Home key="CLI" league="CLI" leaguelogo={conbemol}/>}></Route>

          <Route exact path="/about" element={<About/>}></Route>
           
          <Route exact path="/CL/table/:id" element={<Home key="CL" league="CL" leaguelogo={climg}/>}></Route>
          <Route exact path="/PL/table/:id" element={<Home key="PL" league="PL" leaguelogo={PL}/>}></Route>
          <Route exact path="/BL1/table/:id" element={<Home key="BL1" league="BL1" leaguelogo={bundesliga}/>}></Route>
          <Route exact path="/DED/table/:id" element={<Home key="DED" league="DED " leaguelogo={eredivise}/>}></Route>
          <Route exact path="/PD/table/:id" element={<Home key="PD" league="PD" leaguelogo={primeradivision}/>}></Route>
          <Route exact path="/FL1/table/:id" element={<Home key="FL1" league="FL1" leaguelogo={ligue1}/> }></Route>
          <Route exact path="/PPL/table/:id" element={<Home key="PPL" league="PPL" leaguelogo={ligaportugal}/>}></Route>
          <Route exact path="/SA/table/:id" element={<Home key="SA" league="SA" leaguelogo={seriea}/>}></Route>
          <Route exact path="/CLI/table/:id" element={<Home key="CLI" league="CLI" leaguelogo={conbemol}/>}></Route>

          <Route exact path="/team/matches/:id" element={<TeamMatches/>}></Route>
          <Route exact path="/team/fixtures/:id" element={<TeamMatches/>}></Route>
        </Routes>

      </Router>
    </>
  )
}

export default App
