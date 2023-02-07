import React from "react";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <>
        <div style={{marginLeft:'500px',marginTop:'200px'}}>
           <Link to="/facilityRegistration">Register a facility</Link>
        </div>
        <div  style={{marginLeft:'500px',marginTop:'20px'}}>
           <Link to="/clinicRegistration">Register a clinic under a facility</Link>

        </div>
        </>
    );
}

export default Home;