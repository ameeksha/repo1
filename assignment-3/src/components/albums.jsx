import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Albums extends Component {
    state = { 
        albums:[]
     }

   async componentDidMount() {

    const promise= axios.get('https://jsonplaceholder.typicode.com/albums');
    const responce = await promise;
    this.setState({albums: responce.data});

    }


    render() { 
        const {length: count} = this.state.albums;
        if(count === 0) return <p>There are no album in database</p>
        return (
                  <React.Fragment>
                    {/* <ul>
                     { this.state.albums.map(album => 
                        <li key={album.id}>
                          <Link to={`/albums/${album.id}`}>{album.title}</Link>
                        </li>)
                      }
                    </ul> */}

                <table className="table table-bordered table-hover mt-4 " >
                    <thead className="bg-secondary">
                        <tr className="text-center">
                            <th>Id</th>
                            <th>User Id</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.albums.map(album =>
                                <tr key={album.id}>
                                    <td>{album.id}</td>
                                    <td>{album.userId}</td>
                                    <td><Link  to={`/albums/${album.id}`}>{album.title}</Link></td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
               
                   </React.Fragment>

             );
    }
}
 
export default Albums;