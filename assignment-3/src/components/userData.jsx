import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AlbumForm } from './albumForm';
import queryString from 'query-string';


class UserData extends Component {
    state = { 
        albums:[],
       addModalShow:false
     }

    
   async componentDidMount() {

    const param=this.props.match.params.id;

    // const promise= axios.get('https://jsonplaceholder.typicode.com/albums');
    // const responce = await promise;
    // const result=responce.data;
    
    // for(let i=0;i<result.length;i++)
    // {
    //     if(param == result[i].userId)
    //     {
    //         this.state.albums.push(result[i]);
    //     }
        
    // }

    // this.setState({albums: this.state.albums}) 


    const promise= axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${param}`);
    const responce = await promise;
    this.setState({albums: responce.data});


    }


    render() { 

        const {length: count} = this.state.albums;
        if(count === 0) return <p>There are no album in database</p>
        let addModalClose= () => this.setState({addModalShow:false})

        let modalSubmit= () => {
            this.setState({addModalShow:false})
            alert("New album is created")
        }
        return (
            
            <React.Fragment>
                
                <ButtonToolbar>
                    <Button className="mt-4 mb-4" variant="primary" onClick={() => this.setState({addModalShow:true})}>Add Album</Button>
               
                     <AlbumForm uId={this.props.match.params.id}  show={this.state.addModalShow} onHide={addModalClose} onSubmit={modalSubmit}></AlbumForm>
                </ButtonToolbar>
                
                <table className="table table-bordered table-hover" >
                    <thead className='bg-secondary'>
                        <tr className="text-center">
                            <th>Id</th>
                            <th>User Id</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.albums.map(album =>
                                <tr key={album.id}>
                                    <td>{album.id}</td>
                                    <td>{album.userId}</td>
                                    <td><Link  to={`/albums/${album.id}`}>{album.title}</Link></td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
               

            </React.Fragment>

             );
    }
}


 
export default UserData;