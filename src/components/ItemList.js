import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './ItemList.css';
import Item from './Item';



const Items = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('/api/v1/items.json')
        .then(resp => {
            setItems(resp.data)
        })
        .catch(resp => console.log(resp))
    }, [items.length])


    return (
        <Container fluid='md' className="ItemListContainer">
            {items.map(item => (
        
            
            
                <Card key={item.id} item={item}>
                    <Card.Img src={item.image_url} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <div className="itemLink">
            <Link to={`/items/${item.id}`}>View Item</Link>
                        </div>
                        <Card.Text>{item.price}</Card.Text>
                    </Card.Body>
                </Card>
    
            
            
        ))}
        </Container>
    )
}

export default Items;