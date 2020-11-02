import React from 'react';

function ItemImage(props) {
    return (
        <img className="Item_image"
            src={props.item.imageURL}
            alt={props.item.name}
        />
    );
}

export default ItemImage;