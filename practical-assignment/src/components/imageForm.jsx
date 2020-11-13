import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const ImageForm = (props) => {



  const [state, setState] = useState({ albumId: props.albumId, title: '', url: '', thumbnailUrl: '' })

  const submitHandler = e => {
    e.preventDefault();
    console.log(state);
    axios.post('/photos', state)
      .then(response => {
        console.log(response);
        alert('New Photo Added');
      })
      .catch(error => {
        console.log(error);
      })
    setState({
      albumId: '',
      title: '',
      url: '',
      thumbnailUrl: ''
    })

  }

  return (
    <Modal {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Photo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <input className="form-controll" type='hidden' placeholder="Enter albumId" name='state[albumId]'
                value={state.albumId} onChange={e => setState({ ...state, albumId: e.target.value })} />
            </div>
            <div className="form-group">
              <input className="form-controll" type="text" placeholder="Enter title" name="state[title]"
                value={state.title} onChange={e => setState({ ...state, title: e.target.value })} />
            </div>
            <div className="form-group">
              <input className="form-controll" type="text" placeholder="Enter url" name="state[url]"
                value={state.url} onChange={e => setState({ ...state, url: e.target.value })} />
            </div>
            <div className="form-group">
              <input className="form-controll" type="text" placeholder="Enter thumbnailUrl" name="state[thumbnailUrl]"
                value={state.thumbnailUrl} onChange={e => setState({ ...state, thumbnailUrl: e.target.value })} />
            </div>
            <button type="submit">Add</button>
          </form>
        </div>
      </Modal.Body>
    </Modal>

  );
}

export default ImageForm;