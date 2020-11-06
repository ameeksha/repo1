import React, { Component } from 'react';
import axios from 'axios';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { ImageForm } from './imageForm';




class AlbumData extends Component {
    state = { 
        photos:[],
        addModalShow:false
     }

   async componentDidMount() {

    const param=this.props.match.params.id;

    // const promise= axios.get('https://jsonplaceholder.typicode.com/photos');
    // const responce = await promise;
    // const result=responce.data;
    

    // for(let i=0;i<result.length;i++)
    // {
    //     if(param == result[i].albumId)
    //     {
    //         this.state.photos.push(result[i]);
    //     }
        
    // }

    // this.setState({photos: this.state.photos})

    const promise= axios.get(`https://jsonplaceholder.typicode.com/albums/${param}/photos`);
    const responce = await promise;
    this.setState({photos: responce.data});

     
    }


    render() { 
        const {length: count} = this.state.photos;
        if(count === 0) return <p>There are no photos in database</p>

        let addModalClose= () => this.setState({addModalShow:false});

        let ModalSubmit= () => {
            this.setState({addModalShow:false})
            alert('New Image added')
        }
        return (
                 <React.Fragment>

                  <ButtonToolbar>
                    <Button className="mt-4 mb-4" variant="primary" onClick={() => this.setState({addModalShow:true})}>Add Album</Button>
               
                     <ImageForm albumid={this.props.match.params.id}  show={this.state.addModalShow} onHide={addModalClose} onSubmit={ModalSubmit}></ImageForm>
                  </ButtonToolbar>

                  {
                         <div className="row mt-2 mb-2">
                           {
                             this.state.photos.map(photo =>
                              <div className='col-3 ' key={photo.id}>
                                <img src={photo.url} alt="no" style={{ width: 300 }}/>
                              </div>
                                )
                           }
                         </div>
                       }
                 </React.Fragment>
                );
    }
}
 
export default AlbumData;