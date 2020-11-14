import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';

const LinkToItem = (props) => {
    
    return (
        <Link to={`/items/${props.id}`}/>

    )
}

export default LinkToItem;