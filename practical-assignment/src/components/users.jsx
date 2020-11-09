import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Users= () => {
    
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{
            console.log(res);
            setUsers(res.data);
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    

    
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
                            users.map(user =>
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

            </React.Fragment>

             );
    
}
 
export default Users;