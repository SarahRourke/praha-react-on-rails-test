import React, { useState, useEffect } from 'react';
import './Item.css';
import axios from 'axios';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EditItemForm from './EditItemForm';
import { Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import { exact } from 'prop-types';





const Item = (props) => {
    
    console.log(props.match.params.id)
    
    const [item, setItem] = useState({ ...props.match.params  });

    const [loaded, setLoaded] = useState(false)
    const [editing, setEditing] = useState(false)
    

    useEffect(() => {
        axios.get(`/api/v1/items/${props.match.params.id}`)
        .then(resp => {
            setItem(resp.data);
            console.log(resp.data);
            setLoaded(true);
        })
        .catch(error => console.log(error));
        }, [props.match.params.id]);
    

    const deleteItem = () => {
        axios.delete(item.id)
        .then(resp => {
            console.log(resp.data);
            props.history.push('/items');
        })
        .catch(error => {
            console.log(error);
        });
    };
    
    

    return (
        <Container fluid='md' className="ItemContainer">
        {
            loaded &&
                <>
                <Card>
                    <h5>Item Details</h5>
                    <Card.Img src={item.image_url} alt="add image"/>
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.price}</Card.Text>
                    </Card.Body>
                    <Link to={`/items/${item.id}/update`}><Button variant="outline-info">Edit</Button></Link>
                </Card>
               
                    
                    
                    <Button variant="outline-info"
                    >
                        Edit
                    </Button>
                    
                
                    
                </>
      
        }
        </Container>
    )

    
}

export default Item;