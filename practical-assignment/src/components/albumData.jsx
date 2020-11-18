import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageForm from './imageForm';
import { Button } from 'react-bootstrap';

const AlbumData = ({ match }) => {

  const [show, setShow] = useState(false);
  const [photos, setPhotos] = useState([]);

  let param = match.params.id;

  useEffect(() => {
    axios.get(`/albums/${param}/photos`)
      .then(res => {
        console.log(res);
        setPhotos(res.data);
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
        Add Photo
      </Button>
      <ImageForm albumId={param} show={show} onHide={handleClose} onSubmit={handleSubmit}></ImageForm>
      {
        <div className="row mt-2 mb-2">
          {
            photos.map(photo =>
              <div className='col-3 ' key={photo._id}>
                <img src={photo.url} alt="no" style={{ width: 300 }} />
              </div>
            )
          }
        </div>
      }
    </React.Fragment>
  );
}

export default AlbumData;