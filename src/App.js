import Navbar from "./components/Navbar";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import FacilityRegistration from "./components/FacilityRegistration";


function App() {
  return (
      <Router>
        
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/facilityRegistration" element={<FacilityRegistration />} />
      </Routes>
      </Router>
  );
}

export default App;
