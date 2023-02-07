import React from "react";

const FacilityRegistration=()=>{
    return(
        <div style={{width:'300px',marginLeft:'500px',marginTop:'50px'}}>
        <form>
  <div className="mb-3">
    <label htmlFor="facilityname" className="form-label">Facility Name</label>
    <input type="text" className="form-control" id="facilityname"  />
 
  </div>
  <div className="mb-3">
  <label htmlFor="facilitycity" className="form-label">Facility City</label>
    <input type="text" className="form-control" id="facilitycity"  />
  </div>
  <div className="mb-3">
    <label htmlFor="state" className="form-label">State</label>
    <input type="text" className="form-control" id="state"  />
  </div>
  <div class="mb-3">
  <label for="streetaddressline1" class="form-label">Street Address Line 1</label>
  <textarea class="form-control" id="streetaddressline1" rows="3"></textarea>
  </div>
  <div class="mb-3">
  <label for="streetaddressline2" class="form-label">Street Address Line 2</label>
  <textarea class="form-control" id="streetaddressline2" rows="3"></textarea>
  </div>
  <div className="mb-3">
    <label htmlFor="zipcode" className="form-label">Zip code</label>
    <input type="text" className="form-control" id="zipcode"  />
  </div>



 
 
  <button type="submit" className="btn btn-primary mb-5">Register</button>
</form>
</div>
    );
}

export default FacilityRegistration;