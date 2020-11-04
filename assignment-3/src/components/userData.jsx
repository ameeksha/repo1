import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AlbumForm } from './albumForm';


class UserData extends Component {
    state = { 
        albums:[],
       addModalShow:false
     }

    
   async componentDidMount() {

    const promise= axios.get('https://jsonplaceholder.typicode.com/albums');
    const responce = await promise;
    const result=responce.data;
    const param=this.props.match.params.id;

    for(let i=0;i<result.length;i++)
    {
        if(param == result[i].userId)
        {
            this.state.albums.push(result[i]);
        }
        
    }

    this.setState({albums: this.state.albums}) 
     
    }

    
    // addAlbum= async () =>
    // {
    //     const obj= {title:'a', body:'b'};
    //     const {data: post} = await axios.post('https://jsonplaceholder.typicode.com/albums',obj);
    //     console.log(post);
    // }

    // addAlbum (){
    //     console.log('fgfvcgvcgfcgfc')
    // }

    render() { 

        const {length: count} = this.state.albums;
        if(count === 0) return <p>There are no album in database</p>
        let addModalClose= () => this.setState({addModalShow:false})
        return (
            
            <React.Fragment>
                
                <ButtonToolbar>
                    <Button className="mt-4 mb-4" variant="primary" onClick={() => this.setState({addModalShow:true})}>Add Album</Button>
               
                     <AlbumForm uId={this.props.match.params.id}  show={this.state.addModalShow} onHide={addModalClose}></AlbumForm>
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