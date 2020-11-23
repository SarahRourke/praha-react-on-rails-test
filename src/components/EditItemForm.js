import React, { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data'
import { Container, Form, Button } from 'react-bootstrap';
import FormFileInput from 'react-bootstrap/esm/FormFileInput';



const EditItemForm = (props) => {
    
    const [item, setItem] = useState({ ...props.item});
    

    const handleItemEdit = e => {
        const {name, value} = e.target;
        if (e.target.name === "image")
            return setItem({ item, image : e.target.files[0]});
        else
            return setItem({
                item, [name] : value 
            });
    }
        
    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData();
        
        //sets the FormData as new item data
        axios.put(`/api/v1/items/${props.currentItem.match.params.id}`)
        .then((resp) => {
            console.log(resp);
            
            //redirects to created item Item page
            props.curentItem.history.push(`/items/${props.currentItem.match.params.id}`);
            })
            .catch(error => console.log('error', error));
        
    }
    console.log(props.currentItem)


    return(

            <Container fluid className="main">
                
                <form onSubmit={handleSubmit}>
                    <Form.Group controlId="addItemForm">
                        <Form.Label>Edit This Item</Form.Label>
                            <h3>{console.log()} </h3>
                            {/* Form element from react-bootstrap */}
                            <p>New Name:</p>
                            <Form.Control 
                                as="input" 
                                type="text" 
                                value={item.name}
                                placeholder="Update Item Name?" 
                                name="name" 
                                onChange={handleItemEdit} 
                            />

                            <p>New Price:</p>
                            <Form.Control 
                                as="input" 
                                type="text"
                                value={item.price}
                                placeholder="Update Item Price?" 
                                name="price" 
                                onChange={handleItemEdit} 
                            />
                            {/* file input from react-bootstrap */}

                            <p>New Item Image:</p>
                            <FormFileInput 
                                id="itemImage"
                                //type must be file
                                type="file"
                                
                                name="image" 
                                onChange={handleItemEdit} 
                            />

                        <Button type="submit" value="Edit this item!" />
                    </Form.Group>
                </form>
            </Container>
        )
    
        
    }
 



export default EditItemForm;