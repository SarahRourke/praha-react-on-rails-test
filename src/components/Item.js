import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';





const Item = (props) => {
    
    console.log(props)
    const [item, setItem] = useState({ ...props.match.params  })
    const [loaded, setLoaded] = useState(false)
    

    useEffect(e => {
        
        
        axios.get(`/api/v1/items/${props.match.params.id}`)
        .then(resp => {
            setItem(resp.data)
            setLoaded(true)
        })
        .catch(resp => console.log(resp))
     }, [ ])
        console.log(item)
    return (
        <Container fluid='md' className="ItemContainer">
            { 
            
                loaded &&
                
                    <>
            
                    <Card>
                    <Card.Img src={item.image_url} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.price}</Card.Text>
                        <Link to="/edit" {...item}>Edit Item</Link>
                    </Card.Body>
                </Card>

                </>
            }
            
        </Container>
    )

    
}

export default Item;