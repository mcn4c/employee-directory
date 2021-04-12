import React, { Component } from 'react';
import Table from './Table';
import Filter from './Filter';
import Sort from './Sort';
import API from '../utils/API';

class TableContainer extends Component {
	state = {
		results: [],
		filter: '',
		sort: false
	};

	componentDidMount() {
		this.getEmployeeData();
	}

	getEmployeeData() {
		API.getEmployees()
			.then((resp) => {
				this.setState({ results: resp.data.results });
			})
			.catch((err) => console.log(err));
	}

	handleInputChange = (event) => {
		event.preventDefault();
		const name = event.target.name;
		const value = event.target.value;

		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
	};

	//***************************************************************** */

	// need to filter by user input for city name... i don't think this does it
	handleButtonSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);

		this.setState({
			sort: !this.state.sort
		});
	};
	sortByAge = (arr) => {
		let sortedResult = arr.sort((a, b) => {
			const ageA = a.dob.age;
			const ageB = b.dob.age;

			let comparison = 0;
			if (ageA > ageB) {
				comparison = 1;
			} else if (ageA < ageB) {
				comparison = -1;
			}
			return sortedResult;
		});
	};

	//******************************************************** */

	//render separate page for filtered data??? or just separate by divs?
	render() {
		console.log(this.state);
		return (
			<container>
				<h4>Filter employees by country and sort them by age</h4>
				<div className="filter-sort">
					<div className="filter">
						<Filter
							handleFormSubmit={this.handleFormSubmit}
							handleInputChange={this.handleInputChange}
							filter={this.state.filter}
						/>
					</div>
					<div className="sort">
						<Sort handleButtonSubmit={this.handleButtonSubmit} />
					</div>
				</div>

				<div>
					<h1>Employee Data</h1>

					{this.state.filter ? (
						<Table
							results={this.state.results.filter(
								(result) => result.location.country === this.state.filter
							)}
						/>
					) : (
						<Table results={this.state.results} />
					)}
				</div>
			</container>
		);
	}
}

export default TableContainer;

//********************************************************************* */

//possible structure for nested if/else

{
	/* <h1>Data Loader!</h1>
        { () => {
            if (this.state.loading) { 
                return (<h2>It is Loading.</h2>)
            } else {
                if (this.state.data) { 
                    return (<h2>{this.state.data}</h2>)
                } else {
                    return <h2>There was no result!</h2> 
                }
            } */
}

//Nested ternary statements
// const drink = dislikeCoke
//     ? 'fanta'
//     : likesCherry
//         ? 'cherryCoke'
//         : 'dietCoke';
