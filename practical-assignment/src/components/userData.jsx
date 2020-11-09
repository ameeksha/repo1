import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import AlbumForm from './albumForm';



const UserData = ({ match }) => {

    const [show, setShow] = useState(false);
    const [albums, setAlbums] = useState([]);
    let param = match.params.id;

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${param}/albums`)
            .then(res => {
                console.log(res);
                setAlbums(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => setShow(false);


    return (

        <React.Fragment>

            <Button className="mt-4 mb-4" variant="primary" onClick={handleShow}>
                Add Album
          </Button>
            <AlbumForm uId={param} show={show} onHide={handleClose} onSubmit={handleSubmit}></AlbumForm>

            <table className="table table-bordered table-hover" >
                <thead className='bg-secondary'>
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

export default UserData;