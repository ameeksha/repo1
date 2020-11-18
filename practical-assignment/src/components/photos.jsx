import React, { useEffect } from 'react';
import { connect } from 'react-redux'
// import { fetchAlbums } from '../redux'
import { Link } from 'react-router-dom';
import { fetchPhotos } from '../redux/photo/photoActions';




const Photos = ({ photoData, fetchPhotos }) => {

  useEffect(() => {
    fetchPhotos()
  }, [])



  return (
    <React.Fragment>
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

const mapDispatchToProps = dispatch => {
  return {
    fetchPhotos: () => dispatch(fetchPhotos())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos)