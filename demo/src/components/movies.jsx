import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Like from './common/like';
import Pagination from './common/pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import _ from 'lodash';
// import { getGenres } from '../services/fakeGenreService';

class Movies extends Component {
    state = { 
        movies: [],
        genres:[],
        currentPage:1,
        pageSize: 4,
        sortColumn:{path:'title', order:'asc'}
     }

    //  componentDidMount()
    //  {
    //      this.setState({movies: getMovies(), genres: getGenres()})
    //  }

    componentDidMount()
    {
        const genres= [{_id:"",name: 'All genres'}, ...getGenres()]
        this.setState({movies:getMovies(), genres})
    }
     delet= movie =>
     {
         const movies= this.state.movies.filter(m => m._id !== movie._id)
        //  const movies = this.state.movies.filter(m => m.id !== movie.id);
        //  console.log(movie)
         this.setState({movies})
     }
     
     handleLike=()=>
     {
         console.log("Liked")
     }
     handlePageChange=page =>
     {
        // console.log(page)
         this.setState({currentPage: page})
     }

     handleGenreSelect=genre=>
     {
         this.setState({selectedGenre: genre, currentPage:1})
     }

     handleSort= sortColumn =>
     {
        this.setState({sortColumn})
     }
     
     getPageData= () =>
     {
        const {
            pageSize, 
            currentPage,
            sortColumn,
            selectedGenre, 
            movies: allMovies
          }=this.state;
        
          
        const filtered= selectedGenre && selectedGenre._id ? allMovies.filter(m=> m.genre._id === selectedGenre._id): allMovies;
        
        const sorted= _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        const movies= paginate(sorted, currentPage, pageSize);

        return {totalCount: filtered.length, data: movies}
     }

    render() {
        const {
                pageSize, 
                currentPage,
                sortColumn,
            
              }=this.state;
       
        if(this.state.movies.length === 0) return <p>No movies in the database</p>
        
        const {totalCount, data:movies}= this.getPageData();

        return ( 
       <div className="row">
           <div className="col-3">
               <ListGroup
                items={this.state.genres} 
                selectedItem={this.state.selectedGenre}
                // textProperty="name"
                // valueProperty="_id"
                onItemSelect={this.handleGenreSelect} 
                />
               {/* <ListGroup items={this.state.genres} onItemSelect={this.handleGenreSelect} /> */}
           </div>
           <div className="col">
               <p>Showing {totalCount} in the database</p>
              <MoviesTable 
                 movies={movies}
                 sortColumn={sortColumn}
                 onLike={this.handleLike} 
                 onDelete={this.delet}
                 onSort={this.handleSort}
                 />
       <Pagination
         iteamsCount={totalCount}
          pageSize={pageSize} 
          currentPage={currentPage}
           onPageChange={this.handlePageChange}></Pagination>
        </div>

        </div>
        );
    }
}
 
export default Movies;