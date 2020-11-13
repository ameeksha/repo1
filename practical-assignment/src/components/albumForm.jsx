import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const AlbumForm = (props) => {



  const [state, setState] = useState({ userId: props.uId, title: '' });

  const submitHandler = e => {
    e.preventDefault();
    console.log(state);
    axios.post('/albums', state)
      .then(response => {
        console.log(response);
        alert('New Album Added');
      })
      .catch(error => {
        console.log(error);
      })
    setState({
      userId: '',
      title: ''
    })

  }

  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Album</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <form onSubmit={submitHandler}  >
            <div className="form-group">
              <input className="form-controll" type='hidden' placeholder="Enter userId" name='state[userId]' value={state.userId} onChange={e => setState({ ...state, userId: e.target.value })} />
            </div>
            <div className="form-group">
              <input className="form-controll" type="text" placeholder="Enter title" name="state[title]" value={state.title} onChange={e => setState({ ...state, title: e.target.value })} />
            </div>
            <button type="submit">Add</button>
          </form>
        </div>
      </Modal.Body>
    </Modal>

  );
}

export default AlbumForm;