import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';


const EditItemForm = (props) => {
   
    const initialFormState = {
        name: "",
        price: "",
        image: {}
    }
    //initialFormState is an empty form, calls a get method
    const [item, setItem] = useState(initialFormState);
    
    // onChange, tracks the key stroke change for input
    const onChange = (e) => {
    
        setItem(() => {
        if (e.target.name === "image")
            return ({...item, image : e.target.files[0]})
        else
            return ({ ...item,
                
                 [e.target.name] : e.target.value 
            });
    })};
    //onSubmit -> eit item name and price, not image    
    const onSubmit = (e) => {
        e.preventDefault();

        axios.put(`/api/v1/items/${props.match.params.id}`, item)
        .then(resp => setItem(resp.data))
        .catch(error => console.log(error, error),
        //redirects the page to the items 'show' page after successful update
        props.history.push(`/items/${props.match.params.id}`))

    }


    return (
         
            <Container fluid className="main">
                
                <form onSubmit={onSubmit}>
                    <Form.Group controlId="editItemForm">
                        <Form.Label>Edit This Item</Form.Label>
                            <h3>{console.log(item)} </h3>
                            {/* Form element from react-bootstrap */}
                            <p>New Name:</p>
                            <Form.Control 
                                as="input" 
                                type="text" 
                                value={item.name}
                                placeholder="Update Item Name?" 
                                name="name" 
                                onChange={onChange} 
                            />

                            <p>New Price:</p>
                            <Form.Control 
                                as="input" 
                                type="text"
                                value={item.price}
                                placeholder="Update Item Price?" 
                                name="price" 
                                onChange={onChange} 
                            />
                            {/* file input from react-bootstrap */}

                            <p>New Item Image:</p>
                            <Form.File
                                id="itemImage"
                                //type must be file
                                // do not name value for files (as far as I know up to this point)
                                type="file"
                                label="Item Photo" 
                                name="image" 
                                onChange={onChange} 
                            />

                        <Button type="submit" variant="outline-info">Edit</Button>
                    </Form.Group>
                </form>
            </Container>
        )
        
}




export default EditItemForm;