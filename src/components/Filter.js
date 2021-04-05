import React from "react";


function Filter(props){

return(

    
  <form>
  <div className="form-group">
    <input
      onChange={props.handleInputChange}
      value={props.value}
      name="filter"
      type="text"
      className="form-control"
      placeholder="Filter by city name"
      id="filter"
    />    
    <button onClick={props.handleFormSubmit} className="btn btn-primary">
      Filter Table
    </button>
  </div>
</form> 
)
  
  }

export default Filter;