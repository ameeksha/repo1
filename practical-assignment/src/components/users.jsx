import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/users')
            .then(res => {
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

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td><Link to={`/users/${user._id}`}>{user.email}</Link></td>
                                <td>{user.address}</td>
                                <td>{user.city}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>

                            </tr>
                        )
                    }
                </tbody>
            </table>

        </React.Fragment>

    );

}

export default Users;