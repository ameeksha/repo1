import React, { Component } from 'react';
import axios from 'axios';

class Photos extends Component {
    state = { 
        photos:[]
     }

   async componentDidMount() {

    const promise= axios.get('https://jsonplaceholder.typicode.com/photos');
    const responce = await promise;
    this.setState({photos: responce.data})
    }


    render() { 
               const {length: count} = this.state.photos;
               if(count === 0) return <p>There are no photo in database</p>
               return (
                        <React.Fragment>
                         {/* {
                           this.state.photos.map(photo =>
                            <div className="row" key={photo.id}>
                              <div className="col-3 ">
                                  <img src={photo.url} alt="no" style={{ width: 300 }}/>
                              </div> 
                            </div>
                       )} */}
                       
                       {
                         <div className="row mt-2 mb-2">
                           {
                             this.state.photos.map(photo =>
                              <div className='col-3 m-1 ml-3'>
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
 
export default Photos;