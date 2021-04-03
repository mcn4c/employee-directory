import React, { Component } from 'react';
import Table from './Table';
import API from '../utils/API';

class TableContainer extends Component {
	state = {
		results: []
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
	}

	render() {
		return (
			<div>
				<Table results={this.state.results} />
			</div>
		);
	}
}
export default TableContainer;
