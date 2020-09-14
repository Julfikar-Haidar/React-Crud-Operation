
import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this);
    this.onChangeProfileImage = this.onChangeProfileImage.bind(this);
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
  onChangePersonName(e) {
    this.setState({
      employee_name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      employee_salary: e.target.value
    })
  }
  onChangeGstNumber(e) {
    this.setState({
      employee_age: e.target.value
    })
  }

  onChangeProfileImage(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeDivision(e) {
    console.log(e.target.value);
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
    console.log('data test', obj);

    axios.post('http://localhost:3000/posts', obj)
      .then(res => {
        console.log(res.data)
        this.props.history.push('/')
      });

    this.setState({
      employee_name: '',
      employee_salary: '',
      employee_age: '',
      description: '',
      check1: '',
      radio1: '',
    })


  }

  render() {
    return (
      <div className="container" style={{ marginTop: 10 }}>
        <h3>Add New User</h3>
        <form onSubmit={e => this.onSubmit(e)}>
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
              onChange={this.onChangeBusinessName}
            />
          </div>
          <div className="form-group">

            <input type="text"
              className="form-control"
              placeholder="Person age"
              value={this.state.employee_age}
              onChange={this.onChangeGstNumber}
            />
          </div>
          <div className="form-group">

            <input type="text"
              className="form-control"
              placeholder="Person Details"
              value={this.state.description}
              onChange={this.onChangeProfileImage}
            />
          </div>
          <div className="form-group">

            <select className="form-control" onChange={this.onChangeDivision}>
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
            <input type="submit" value="Register" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(Create);