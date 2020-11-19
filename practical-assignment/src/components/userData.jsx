import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap';
import AlbumForm from './albumForm';
import { Link } from 'react-router-dom';
import { fetchAlbums } from '../redux/userData/userDataActions';



const UserData = ({ albumData, fetchAlbums, match }) => {

  let param = match.params.id;

  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchAlbums()
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => setShow(false);

  return (

    <React.Fragment>
      <Button className="mt-4 mb-4" variant="primary" onClick={handleShow}>
        Add Album
       </Button>
      <AlbumForm userId={param} show={show} onHide={handleClose} onSubmit={handleSubmit}></AlbumForm>

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
            albumData.albums.map(album =>
              <tr key={album._id}>
                <td>{album._id}</td>
                <td>{album.userId}</td>
                <td><Link to={`/albums/${album._id}`}>{album.title}</Link></td>
              </tr>)
          }
        </tbody>
      </table>

    </React.Fragment>

  );
}


const mapStateToProps = (state, ownprops) => {
  return {
    albumData: state.album
  }
}

const mapDispatchToProps = (dispatch, { match }) => {
  let param = match.params.id;
  console.log('tus')
  console.log(param)
  return {
    fetchAlbums: () => dispatch(fetchAlbums(param))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserData)


