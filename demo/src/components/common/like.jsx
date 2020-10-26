import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


class Like extends Component {
   
    render() { 
        return ( 
            <div>
              <FontAwesomeIcon icon={faHeart}  /> 
            </div>

         );
    }
}
 
export default Like;