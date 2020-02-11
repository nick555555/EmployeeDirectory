import React, {Component} from "react";
import "./style.css";
import API from "../../utils/API";
import Wrapper from "../Wrapper";
import EmployeeCard from "../Card";
import SearchForm from "../SearchForm";

class Body extends Component {

  state={
    peoples: [],
    search: ""
  };

  componentDidMount (){
    API.getRandomEmployees().then(res=>this.setState({peoples:res.data.results})).catch(err=>console.log(err));
  };

  handleInputChange = event=>{
    event.preventDefault();
    this.setState({filter:event.target.value.toLowerCase()})
    // this.setState({search: event.target.value})
  }

  render(){
    return (
      <Wrapper>
        <SearchForm value={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
      {this.state.peoples.map(peoples => (
        <EmployeeCard
          key={peoples.id.value}
          name={`${peoples.name.title} ${peoples.name.first} ${peoples.name.last}`}
          location={peoples.location.state}
          image={peoples.picture.medium}
          email={peoples.email}
          phone={peoples.cell}
        />
      ))}
      </Wrapper>
    )
  }
}
  
export default Body;