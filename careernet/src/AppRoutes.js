import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home/Home";
import About from "./components/Navbar-Menu/About";
import { Expertise } from "./components/Navbar-Menu/Expertise";
import { Contact } from "./components/Navbar-Menu/Contact";
import { Joinus } from "./components/Navbar-Menu/Joinus";
import JoinUsForm from "./components/Navbar-Menu/JoinUsForm";
import Solutins from "./components/pages/Solutions/Solutins";
import PermanentHiring from "./components/pages/Solutions/PermanentHiring";
import ProfessionalStaffing from "./components/pages/Solutions/ProfessionalStaffing";
import LeadershipHiring from "./components/pages/Solutions/LeadershipHiring";
import Diversity from "./components/pages/Solutions/Diversity";
import DigitalHiring from "./components/pages/Solutions/DigitalHiring";
import TalentBrandin from "./components/pages/Solutions/TalentBrandin";
import Research from "./components/pages/Solutions/Research";
import CareerTransition from "./components/pages/Solutions/CareerTransition";
import Resources from "./components/pages/ThoughtCenter/Resourcesfile/Resources";
import NewsDetail from './components/pages/ThoughtCenter/NewsInside/NewsDetail';
import News from './components/pages/ThoughtCenter/NewsInside/News';
import Reports from './components/pages/ThoughtCenter/Reportsfile/Reports';
import ReportsCardDetailes from './components/pages/ThoughtCenter/Reportsfile/ReportsCardDetailes';

const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Home/>}></Route>
          <Route path="/aboutus" element={<About/>}></Route>
          <Route path="/expertise" element={<Expertise/>}></Route>
          <Route path="/contactus" element={<Contact/>}></Route>
          <Route path="/joinus" element={<Joinus/>}></Route>
          <Route path="/joinusform" element={<JoinUsForm/>}></Route>
          <Route path="/solution" element={<Solutins/>}></Route>
          <Route path="/permanenetHiring" element={<PermanentHiring/>}/>
          <Route path="/professionalStaffing" element={<ProfessionalStaffing/>}/>
          <Route path="/leadershipHiring" element={<LeadershipHiring/>}/>
          <Route path="/diversity" element={<Diversity/>}/>
          <Route path="/digitalHiring" element={<DigitalHiring/>}/>
          <Route path="/talentBrandin" element={<TalentBrandin/>}/>
          <Route path="/research" element={<Research/>}></Route>
          <Route path="/careerTransition" element={<CareerTransition/>}/>
          <Route path="/news/page/:pageNumber" element={<News />} />
          <Route path="/news" element={<News/>} />
          <Route path="/news/card/:id" element={<NewsDetail/>} />
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/reports" element={<Reports/>}/>
          <Route path="/reports/card/:id" element={<ReportsCardDetailes/>} />
         
    </Routes>
  );
};

export default AppRoutes;