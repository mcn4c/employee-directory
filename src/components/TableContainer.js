import React, { Component } from 'react';
import Table from './Table';
import Filter from './Filter'
import Sort from './Sort'
import API from '../utils/API';
 

class TableContainer extends Component {
	state = {
		results: [],
        filter: ""
       
	};

	componentDidMount() {
		this.getEmployeeData();
	}

	getEmployeeData() {
		API.getEmployees()
			.then((resp) => {
				this.setState({ results: resp.data.results });
				console.log(resp.data.results);
			})
			.catch((err) => console.log(err));
	};

	// handleInputChange = event => {
	// 	const name = event.target.name;
	// 	const value = event.target.value;
	// 	this.setState({
	// 	  [name]: value
	// 	});
	//   };

	// handleFormSubmit = event => {
	// 	event.preventDefault();
	// 	this.filterCity(this.state.filter);
	//   };

//***************************************************************** */


	  // need to filter by user input for city name... i don't think this does it
	// filterCity = city => {
    //     // Filter cities by user input
    //     this.state.results.filter(results => results.location.city !== city);


	// 	//********************************************************** */


    //     // new results arrray not defined
    //     this.setState({ results });
    //   };  
	//   // sort results not defined
	//   handleButtonSubmit = event => {
    //     event.preventDefault();
    //     this.state.results.sort( results => results.dob.age);

	//******************************************************** */	

	// 	//new results array, not defined
	// 	this.setState({results})
    //   };

	


//render separate page for filtered data??? or just separate by divs?
	render() {
		return (
		
		<container>
			<div className="filter-sort">

		    <div className="filter">
				
      			<Filter
      				handleFormSubmit={this.handleFormSubmit}
      				handleInputChange={this.handleInputChange}
      				filter={this.state.filter}
   				 />
				</div>
				<div className="sort">
				<Sort 
				handleButtonSubmit={this.handleButtonSubmit}
				/>
			
			</div>
			</div>	
      		
					

            <div> 
				<h1>Employee Data</h1>
				<Table results={this.state.results} />
			</div>	
					
		</container>			  
              
		
		);
	};
}

export default TableContainer;
