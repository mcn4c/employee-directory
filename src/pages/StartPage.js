import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table"

class StartPage extends Component {
  state = {
   
    employees: [],
    
  };

  // When the component mounts
  componentDidMount() {
    API.getEmployees()
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
      console.log(res.data.results)
      console.log(employees[1].name)
  }


  render() {
    return (
      <div>
        <Container >
          <h1 className="text-center">Employee Directory</h1>
       
          <Table 

          image={this.state.employees.picture.thumbnail}
          name={this.state.employees.name}
          contact={this.state.employees.email}
          location={this.state.employees.location.city}
         
          />
        </Container>
      </div>
    );
  }
}

export default StartPage;
