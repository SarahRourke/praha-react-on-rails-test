import React, { useState, useEffect } from 'react';
import './Item.css';
import axios from 'axios';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//single item display page, buttons 'delete' deletes item-object by item_id from database, and 'edit' button redirects to the item update page. 

const Item = (props) => {
    //test to ensure props/arguments are accurate on render
    console.log(props.match.params.id)
    
    const [item, setItem] = useState({ ...props.match.params  });
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`/api/v1/items/${props.match.params.id}`)
        .then(resp => {
            setItem(resp.data);
            console.log(resp.data);
            setLoaded(true);
        })
        .catch(error => console.log(error));
        }, [props.match.params.id]);
    

    const deleteItem = (id) => {
        axios.delete(`/api/v1/items/${item.id}`)
        .then(resp => {
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
                                {/* delete button redirects to itemlist page */}
                                <Button type="submit" variant="outline-danger" onClick={() => deleteItem(item.id)}>Delete</Button>
                                {/* edit button, redirects to item update page */}
                                <Link to={`/items/${item.id}/update`}><Button variant="outline-info">Edit</Button></Link>
                        </Card> 
                    </>
            }
        </Container>
    )
}

export default Item;