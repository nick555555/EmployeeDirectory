import React, { Component } from "react";
import "./style.css";
import Wrapper from "../Wrapper";
import EmployeeCard from "../Card";
import SearchForm from "../SearchForm";
import employees from "../../tabledata.json";

class Body extends Component {
  // employees.sort((a,b) =>{

  // })

  state = {
    employees
  }

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ filter: event.target.value.toLowerCase() })
  }

  render() {
    return (
      <Wrapper>
        <SearchForm value={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
        {this.state.employees.map(employee => (
          <EmployeeCard
            key={employee.id.value}
            name={`${employee.name.title} ${employee.name.first} ${employee.name.last}`}
            location={employee.location.state}
            image={employee.picture.medium}
            email={employee.email}
            phone={employee.cell}
          />
        ))}
      </Wrapper>
    )
  }
}

export default Body;