import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Users = () => {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('/photos')
      .then(res => {
        console.log(res);
        setPhotos(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])



  return (
    <React.Fragment>
      {
        <div className="row mt-2 mb-2">
          {
            photos.map(photo =>
              <div className='col-3 ' key={photo.id}>
                <img src={photo.url} alt="no" style={{ width: 300 }} />
              </div>
            )
          }
        </div>
      }
    </React.Fragment>

  );

}

export default Users;