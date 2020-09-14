
import React, { Component } from 'react';
import axios from 'axios';

import {
    Link
  } from "react-router-dom";

export default class Index extends Component {

    constructor(props) {
        super(props);
        // this.delete = this.delete.bind(this);
        this.state = { 

            userData: [] 
        };

    }
    componentDidMount() {
        this.loadUsers();

    }

        loadUsers = async () => {
        const result = await axios.get("http://localhost:3000/posts");
        this.setState({
            userData: result.data.reverse()
        });
      };
    
    
    //  delete(id) {
    //    alert('hi')
    //    axios.delete('http://localhost:3000/posts/'+id)
    //    .then(console.log('Deleted'))
    //    this.loadUsers()
    //    .catch(err => console.log(err))
    //  }

      deleteUser = async id => {
        await axios.delete(`http://localhost:3000/posts/${id}`);
        this.loadUsers();
      };

    render() {
        return (
            <div className="container">
               <div>
               <Link to="/create">
                <button type="button" className="btn btn-primary float-left">Add New</button>
                </Link> 
                <h3 align="center">User List</h3>
               </div>
                <table className="table border shadow" >
                    <thead className="table-dark">
                        <tr >
                            <th scope="col">id</th>
                            <th scope="col">Person name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Division</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.userData.map((data,index )=> 
                            <tr key={index}>
                            <th scope="row">{index +1}</th>
                            <td>{data.employee_name}</td>
                            <td>{data.employee_age}</td>
                            <td>{data.Division}</td>
                            <td>{data.radio1}</td>
                            <td>

                            <Link to={`/edit/${data.id}`} className="btn btn-info btn-sm">Edit</Link>

        
                            <button type="submit" onClick={() => this.deleteUser(data.id)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                            )
                        }
                     
                    </tbody>
                </table>
            </div>
        );
    }
}