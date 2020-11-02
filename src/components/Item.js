import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';




const Item = (props) => {
    
    console.log()
    const [item, setItem] = useState({ })
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const id = props.match.params.id
        
        axios.get(`/api/v1/items/${id}`)
        .then(resp => {
            setItem(resp.data)
            setLoaded(true)
        })
        .catch(resp => console.log(resp))
     }, [])
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
                    </Card.Body>
                </Card>

                </>
            }
            
        </Container>
    )

    
}

export default Item;