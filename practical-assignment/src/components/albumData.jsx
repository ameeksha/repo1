import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchPhotos } from '../redux/albumData/albumDataActions';
import ImageForm from './imageForm';
import { Button } from 'react-bootstrap';


const AlbumData = ({ photoData, fetchPhotos, match }) => {

  let param = match.params.id;

  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchPhotos()
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
            photoData.photos.map(photo =>
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

const mapStateToProps = state => {
  return {
    photoData: state.photo
  }
}

const mapDispatchToProps = (dispatch, { match }) => {
  let param = match.params.id;
  return {
    fetchPhotos: () => dispatch(fetchPhotos(param))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumData)