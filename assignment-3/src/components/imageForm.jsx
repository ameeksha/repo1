import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';
import axios from 'axios';

export class ImageForm extends Component {
  constructor(props)
  {
    super(props);
    this.state ={
      albumId:this.props.albumid,
      title:'',
      url:'',
      thumbnailUrl:''
    }
  }

  changeHandler= (e) =>
  {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler= e =>
  {
    e.preventDefault();
    console.log(this.state);
    axios.post('https://jsonplaceholder.typicode.com/photos', this.state)
    .then(response =>
      {
        console.log(response);
      })
    .catch(error =>
      {
        console.log(error);
      })

      this.setState({
      albumId:'',
      title:'',
      url:'',
      thumbnailUrl:''

      })
  }

  render() { 
    const {albumId, title, url, thumbnailUrl}= this.state;
    return ( 
      <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Album
        </Modal.Title>
       </Modal.Header>
      <Modal.Body>
       <div>
         <form onSubmit={this.submitHandler}>
           <div>
           <input type='hidden' name='albumId' value={albumId} onChange={this.changeHandler}/>
           </div>
           <div>
             <input type="text" placeholder="Enter title" name="title" value={title} onChange={this.changeHandler}/>
           </div>
           <div>
           <input type='text' name='url' value={url} placeholder="Enter url" onChange={this.changeHandler}/>
           </div>
           <div>
           <input type='text' name='thumbnailUrl' value={thumbnailUrl} placeholder="Enter thumbnailurl" onChange={this.changeHandler}/>
           </div>
           <button type="submit">Add</button>
         </form>
       </div>
      </Modal.Body>
    </Modal>
     );
  }
}
 
