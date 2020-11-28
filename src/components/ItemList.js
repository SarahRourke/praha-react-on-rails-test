import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import './ItemList.css';





const Items = (props) => {
    const [items, setItems] = useState([]);
    
    
    // const [addNewItem] = useState
    useEffect(() => {
        axios.get('/api/v1/items.json')
        .then(resp => {
            setItems(resp.data);
            console.log(resp.data);
        })
        .catch(error => console.log(error))
    }, [items.length])


    return (
        <Container fluid='md' className="ItemListContainer">
            {items.map(item => (
                <Card key={item.id} item={item}>
                    <Link to={`/items/${item.id}`}><Card.Img src={item.image_url} alt={item.name} /></Link>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <div className="itemLink">
                        <Link to={`/items/${item.id}`}>View Item</Link>
                        </div>
                        <Card.Text>{item.price}</Card.Text>
                        <Card.Text>{item.category}</Card.Text>
                    </Card.Body>
                </Card>
        ))}
        </Container>
    )
}

export default Items;