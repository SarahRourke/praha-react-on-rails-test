import React from 'react';
import ItemImage from './Item_image';

function ItemInfo(props) {
    return (
        <div className="ItemInfo">
            <ItemImage item={props.item} />
            <div className="ItemInfo-name">
                {props.item.name}
            </div>
            <div className="ItemInfo-price">
                {props.item.price}
            </div>
        </div>
    );
}

export default ItemInfo;