import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'
import { Link } from 'react-router-dom';



const Users = ({ userData, fetchUsers }) => {

  useEffect(() => {
    fetchUsers()
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
            <th>Address</th>
            <th>City</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {
            userData.users.map(user => <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td><Link to={`/users/${user._id}`}>{user.email}</Link></td>
              <td>{user.address}</td>
              <td>{user.city}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>)
          }
        </tbody>
      </table>

    </React.Fragment>


  )
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)