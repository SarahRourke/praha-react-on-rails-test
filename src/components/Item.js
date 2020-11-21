import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';





const Item = (props) => {
    
    console.log(props.match.params.id)
    const [item, setItem] = useState({ ...props.match.params  })
    const [loaded, setLoaded] = useState(false)
    const [state, dispatch] = useReducer(reducer, Item)
    

    useEffect(() => {
        
        
        axios.get(`/api/v1/items/${props.match.params.id}`)
        .then(resp => {
            setItem(resp.data)
            setLoaded(true)
        })
        .catch(resp => console.log(resp))
        
        }, [props.match.params]);
            
        console.log(item)
    
    function reducer(state, action) {
        switch (action.type) {
            case 'edit':
                return { item: axios.put(`api/v1/items/${this.props.match.params.id}`, state.item) };
            case 'delete':
                return { item: axios.delete(`api/v1/items/${this.props.match.params.id}`, state.item) };
            default: 
                throw new Error();    

        }
    }
     

    return (
        <Container fluid='md' className="ItemContainer">
            { 
            
                loaded &&
                
                    <>
                    Item: {state.item}
                    <Card>
                    <Card.Img src={item.image_url} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>{item.price}</Card.Text>
                        <Link to="/edit" item={item}>Edit Item</Link>
                    </Card.Body>
                    <button onClick={() => dispatch({type: 'edit' })}>Edit Item</button>
                </Card>

                </>
            }
            
        </Container>
    )

    
}

export default Item;