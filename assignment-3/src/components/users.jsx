import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Users extends Component {
    state = { 
        users:[]
     }

   async componentDidMount() {

    const promise= axios.get('https://jsonplaceholder.typicode.com/users');
    const responce = await promise;
    this.setState({users: responce.data})
    }

    render() { 
        const {length: count} = this.state.users;
        if(count === 0) return <p>There are no user in database</p>
        return (

            <React.Fragment>
                <table className="table table-bordered table-hover mt-4 " >
                    <thead className="bg-secondary">
                        <tr className="text-center">
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Company Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td><Link  to={`/users/${user.id}`}>{user.email}</Link></td>
                                    <td>{user.address.street}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.website}</td>
                                    <td>{user.company.name}</td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>


                {/* {
                            this.state.users.map(user =>
                                <ul key={user._id}>
                                    <li onClick={`/users/${user.id}`}>{user.name}</li>
                                </ul>
                                )
                            
                        } */}
                        {/* <ul>
                               { this.state.users.map(user => 
                                <li key={user.id}>
                                    <Link  to={`/users/${user.id}`}>{user.name}</Link>
                                </li>)}
                            </ul> */}
               
            </React.Fragment>

             );
    }
}
 
export default Users;