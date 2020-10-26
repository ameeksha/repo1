import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {

    renderCell= (item, colmn) =>
    {
        if(colmn.content) return colmn.content(item);

        return _.get(item, colmn.path);
    }

    creteKey = (item, colmn) =>
    {
        return item._id + (colmn.path || colmn.key)
    }
    render() { 
        const {data, columns}= this.props;
        return ( 
            <tbody>
                {
                    data.map(item => <tr key={item._id}>{columns.map(colmn => <td key={this.creteKey(item, colmn)}>{this.renderCell(item,colmn)}</td>)}</tr>)
                }
            </tbody>
         );
    }
}
 
export default TableBody;