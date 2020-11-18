import React, { useEffect } from 'react';
import { connect } from 'react-redux'
// import { fetchAlbums } from '../redux'
import { Link } from 'react-router-dom';
import { fetchAlbums } from '../redux/album/albumActions';



const Albums = ({ albumData, fetchAlbums }) => {

  // const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums()
  }, [])



  return (

    <React.Fragment>
      <table className="table table-bordered table-hover mt-4 " >
        <thead className="bg-secondary">
          <tr className="text-center">
            <th>Id</th>
            <th>User Id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {
            albumData.albums.map(album =>
              <tr key={album._id}>
                <td>{album._id}</td>
                <td>{album.userId}</td>
                <td><Link to={`/albums/${album._id}`}>{album.title}</Link></td>
              </tr>)
          }
        </tbody>
      </table>

    </React.Fragment>

  );
}


const mapStateToProps = state => {
  return {
    albumData: state.album
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums)