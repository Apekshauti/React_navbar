import React from 'react';
import './App.css';
// import VerticalNavbar from './components/VerticalNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import EventPage from './pages/EventPage.jsx';
import EventOrganizing from './pages/EventOrganizing.jsx';
import EventParticipation from './pages/EventParticipation.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/eventpage" element={<EventPage />} />
          <Route path="/eventorganizing" element={<EventOrganizing />} />
          <Route path="/eventparticipation" element={<EventParticipation />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};
// function App(){
//   return(
//     <div>
//       <VerticalNavbar/>
//     </div>
//   );
// };
export default App;
