import React, { Component } from "react";
import API from "../utils/API";
// import Display Table

class StartPage extends Component {
  state = {
   
    results: [],
    
  };

  // When the component mounts
  componentDidMount() {
    API.getEmployees()
      .then(res => this.setState({ results: res.results }))
      .catch(err => console.log(err));
      console.log(res.results)
  }


  render() {
    return (
      <div>
        <Container >
          <h1 className="text-center">Employee Directory</h1>
       
          <DisplayTable

          //pass in prop values for DisplayTable
            // handleFormSubmit={this.handleFormSubmit}
            // handleInputChange={this.handleInputChange}
            // breeds={this.state.breeds}
          />
        </Container>
      </div>
    );
  }
}

export default StartPage;
