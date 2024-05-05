import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import About from "./components/Navbar-Menu/About";
import { Expertise } from "./components/Navbar-Menu/Expertise";
import { Contact } from "./components/Navbar-Menu/Contact";
import { Joinus } from "./components/Navbar-Menu/Joinus";
import JoinUsForm from "./components/Navbar-Menu/JoinUsForm";
import Solutins from "./components/Solutions/Solutins";
import PermanentHiring from "./components/Solutions/PermanentHiring";
import ProfessionalStaffing from "./components/Solutions/ProfessionalStaffing";
import LeadershipHiring from "./components/Solutions/LeadershipHiring";
import Diversity from "./components/Solutions/Diversity";
import DigitalHiring from "./components/Solutions/DigitalHiring";
import TalentBrandin from "./components/Solutions/TalentBrandin";
import Research from "./components/Solutions/Research";
import CareerTransition from "./components/Solutions/CareerTransition";
import News from "./components/ThoughtCenter/News";




const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/aboutus" element={<About/>}></Route>
          <Route path="/expertise" element={<Expertise/>}></Route>
          <Route path="/contactus" element={<Contact/>}></Route>
          <Route path="/joinus" element={<Joinus/>}></Route>
          <Route path="/joinusform" element={<JoinUsForm/>}></Route>
          <Route path="/solution" element={<Solutins/>}></Route>
          <Route path="/permanenetHiring" element={<PermanentHiring/>}></Route>
          <Route path="/professionalStaffing" element={<ProfessionalStaffing/>}></Route>
          <Route path="/leadershipHiring" element={<LeadershipHiring/>}></Route>
          <Route path="/diversity" element={<Diversity/>}></Route>
          <Route path="/digitalHiring" element={<DigitalHiring/>}></Route>
          <Route path="/talentBrandin" element={<TalentBrandin/>}></Route>
          <Route path="/research" element={<Research/>}></Route>
          <Route path="/careerTransition" element={<CareerTransition/>}></Route>
          <Route path="/news" element={<News/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
