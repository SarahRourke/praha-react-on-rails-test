import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import EditItemForm from './EditItemForm';
import { Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import { exact } from 'prop-types';





const Item = (props) => {
    
    console.log(props.match.params.id)
    const [item, setItem] = useState({ ...props.match.params  })
    const [loaded, setLoaded] = useState(false)
    

    useEffect(() => {
        
        
        axios.get(`/api/v1/items/${props.match.params.id}`)
        .then(resp => {
            setItem(resp.data)
            setLoaded(true)
        })
        .catch(resp => console.log(resp))
        
        }, [props.match.params]);
            
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
            <Card.Link><EditItemForm currentItem={props}/>Edit Item</Card.Link>
                    </Card.Body>
                   
                </Card>

                </>
            }
            
        </Container>
    )

    
}

export default Item;