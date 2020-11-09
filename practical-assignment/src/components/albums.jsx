import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Users = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(res => {
                console.log(res);
                setAlbums(res.data);
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
                        <th>User Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        albums.map(album =>
                            <tr key={album.id}>
                                <td>{album.id}</td>
                                <td>{album.userId}</td>
                                <td><Link to={`/albums/${album.id}`}>{album.title}</Link></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </React.Fragment>

    );
}

export default Users;