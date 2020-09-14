import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeSalary = this.onChangeSalary.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDivision = this.onChangeDivision.bind(this);
    this.onCheckChange = this.onCheckChange.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      employee_name: '',
      employee_salary: '',
      employee_age: '',
      description: '',
      Division: '',
      check1: false,
      radio1:''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/posts/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          employee_name: response.data.employee_name,
          employee_salary: response.data.employee_salary,
          employee_age: response.data.employee_age,
          description: response.data.description,
          Division: response.data.Division,
          check1: response.data.check1,
          radio1: response.data.radio1
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangePersonName(e) {
    this.setState({
      employee_name: e.target.value
    });
  }
  onChangeSalary(e) {
    this.setState({
      employee_salary: e.target.value
    })
  }
  onChangeAge(e) {
    this.setState({
      employee_age: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeDivision(e) {
    this.setState({
      Division: e.target.value
    })
    
  }
  onCheckChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.checked
    })

  }

  onRadioChange(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })

  }


  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      employee_name: this.state.employee_name,
      employee_salary: this.state.employee_salary,
      employee_age: this.state.employee_age,
      description: this.state.description,
      Division: this.state.Division,
      check1: this.state.check1,
      radio1: this.state.radio1,
    };
    axios.put('http://localhost:3000/posts/' + this.props.match.params.id, obj)
      .then(res => {
        console.log(res.data);
        this.props.history.push('/')
      }

      );


  }

  render() {
    return (
      <div style={{ marginTop: 10 }} className="container">
        <h3 align="center">Update Profile</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">

            <input
              type="text"
              className="form-control"
              placeholder="Person name"
              value={this.state.employee_name}
              onChange={this.onChangePersonName}
            />
          </div>
          <div className="form-group">

            <input type="text"
              className="form-control"
              placeholder="Person salary"
              value={this.state.employee_salary}
              onChange={this.onChangeSalary}
            />
          </div>
          <div className="form-group">

            <input type="text"
              className="form-control"
              placeholder="Person age"
              value={this.state.employee_age}
              onChange={this.onChangeAge}
            />
          </div>
          <div className="form-group">

            <input type="text"
              className="form-control"
              placeholder="Person Details"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">

            <select className="form-control" onChange={this.onChangeDivision} value={this.state.Division}>
            <option>Select Option</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Barisal">Barisal</option>
            </select>
          </div>
          
          
          <div className="form-group">


            <div className="form-check-inline">
              <label className="form-check-label" htmlFor="radio1">
                <input type="checkbox" className="form-check-input" 
                name="check1" value="Apple"
                checked={this.state.check1}
                onChange={this.onCheckChange} />Apple
              </label>
            </div>
          </div>

          <div className="form-group">


            <div className="form-check-inline">
              <label className="form-check-label" htmlFor="radio1">
                <input type="radio" className="form-check-input" id="radio1" 
                name="radio1" value="Publish"
                checked={this.state.radio1 === "Publish"} 
                onChange={this.onRadioChange}/>Publish
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label" htmlFor="radio1">
                <input type="radio" className="form-check-input" id="radio1" 
                name="radio1" value="Pending"
                checked={this.state.radio1 === "Pending"} 
                onChange={this.onRadioChange}/>Pending
          </label>
            </div>
          </div>
          <div className="form-group">
            <input type="submit"
              value="Update"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}