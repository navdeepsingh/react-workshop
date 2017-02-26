import React from 'react';
import _ from 'lodash';

const Listing = (props) => {
    return (<ul>{
                _.map(props.list, function(item, index){
                    return <li onClick={props.clickHandler} key={index}>{item}</li>
                })
            }</ul>);
}

export default Listing;